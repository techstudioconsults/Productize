import { Tabs, TabList, TabPanels, Tab, TabPanel, Flex, Box, useDisclosure } from '@chakra-ui/react';
import ShareLayout from './ShareLayout';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import errorImg from '@icons/error.svg';
import { useAxiosInstance } from '@productize/hooks';
import { selectCurrentUser, useUpdateProductStatusMutation } from '@productize/redux';
import { PaywallUnpublishWarning, PreviewProductSummary, SharedButton, ToastFeedback, useToastAction } from '@productize/ui';
import { productFormSchema } from '@productize/dashboard';
import { ProductForm } from '@productize/dashboard';
import { ContentDeliveryForm } from '@productize/dashboard';
import { useSelector } from 'react-redux';

const activeStateStyle = {
    borderBottom: `2px solid #6D5DD3`,
    fontWeight: 600,
    color: `grey.800`,
};
const disabledStateStyle = {
    color: `grey.800`,
};
const tabNames = ['product-details', 'content-delivery', 'preview', 'share'];

export const NewProductTab = () => {
    const { onClose, isOpen, onOpen } = useDisclosure();
    const user = useSelector(selectCurrentUser);
    const { query, isLoading } = useAxiosInstance({ MIME_TYPE: 'multipart/form-data' });
    const [updateProductStatus, updateProductStatusStatus] = useUpdateProductStatusMutation();
    const { toast, toastIdRef, close } = useToastAction();
    const { state, hash } = useLocation();
    const navigate = useNavigate();
    const getHashIndex = tabNames.findIndex((tab) => hash === `#${tab}`);
    const [tabIndex, setTabIndex] = useState(getHashIndex);
    const methods = useForm({
        criteriaMode: 'all',
        mode: 'onChange',
        resolver: yupResolver(productFormSchema),
    });

    useEffect(() => {
        setTabIndex(getHashIndex);
        if (state && hash === '#product-details') {
            methods.setValue('title', state?.product?.title);
            methods.setValue('price', state?.product?.price);
            methods.setValue('product_type', state?.product?.product_type);
            methods.setValue('description', state?.product?.description);
            methods.setValue('tags', state?.product?.tags);
        }
    }, [getHashIndex, hash, methods, state]);

    const onSubmit = async (data) => {
        console.log(data);
        if (state && hash) {
            const formData = {
                title: data.title,
                price: data.price,
                description: data.description,
                data: data.data,
                cover_photos: data.cover_photos,
                thumbnail: data.thumbnail[0],
                highlights: data.highlights,
                tags: data.tags,
            };

            try {
                const res = await query(`post`, `/products/${state?.product?.id}?_method=PUT`, formData);
                if (res.status === 200) {
                    toastIdRef.current = toast({
                        position: 'top',
                        render: () => (
                            <ToastFeedback
                                btnColor={`purple.200`}
                                message={`Product updated Successfully!`}
                                icon={undefined}
                                bgColor={undefined}
                                color={undefined}
                                handleClose={close}
                            />
                        ),
                    });
                    navigate(`/dashboard/products/new#preview`, {
                        state: { product: res.data },
                    });
                }
            } catch (err) {
                toastIdRef.current = toast({
                    position: 'top',
                    render: () => (
                        <ToastFeedback
                            message={err.response.data.message || `something went wrong`}
                            title="Error!"
                            icon={errorImg}
                            color={`red.600`}
                            btnColor={`red.600`}
                            bgColor={undefined}
                            handleClose={close}
                        />
                    ),
                });
            }
        } else {
            const formData = {
                ...data,
                thumbnail: data.thumbnail[0],
            };

            try {
                const res = await query(`post`, `/products`, formData);
                if (res.status === 201) {
                    toastIdRef.current = toast({
                        position: 'top',
                        render: () => <ToastFeedback btnColor={`purple.200`} message={`Product Created Successfully!`} handleClose={close} />,
                    });

                    navigate(`/dashboard/products/new#preview`, {
                        state: { product: res.data },
                    });
                }
            } catch (err) {
                toastIdRef.current = toast({
                    position: 'top',
                    render: () => (
                        <ToastFeedback
                            message={err?.response?.data?.message || `something went wrong`}
                            title="Error!"
                            icon={errorImg}
                            color={`red.600`}
                            btnColor={`red.600`}
                            bgColor={undefined}
                            handleClose={close}
                        />
                    ),
                });
            }
        }
    };

    const handlePublishAction = async () => {
        const productID = hash === `#share` ? state?.product?.data?.id : state?.product?.id;
        if (user?.account_type === `free` && state?.product?.status !== `draft`) {
            onOpen();
        } else {
            try {
                const res = await updateProductStatus({
                    productID: productID,
                }).unwrap();

                if (res?.data?.status === `published`) {
                    toastIdRef.current = toast({
                        position: 'top',
                        render: () => <ToastFeedback btnColor={`purple.200`} message={`Product	published Successfully!`} handleClose={close} />,
                    });
                    navigate(`/dashboard/products/new#share`, {
                        state: { product: res },
                    });
                } else {
                    toastIdRef.current = toast({
                        position: 'top',
                        render: () => <ToastFeedback btnColor={`purple.200`} message={`Product	sent to draft Successfully!`} handleClose={close} />,
                    });
                    navigate(`/dashboard/products/new#preview`, {
                        state: { product: res?.data },
                    });
                }
            } catch (error) {
                console.log(error);
                if (error.status !== 403) {
                    toastIdRef.current = toast({
                        position: 'top',
                        render: () => (
                            <ToastFeedback
                                message={error?.message || `Something went wrong`}
                                title={`Paystack Setup`}
                                icon={errorImg}
                                color={`red.600`}
                                btnColor={`red.600`}
                                bgColor={undefined}
                                handleClose={close}
                            />
                        ),
                    });
                }
            }
        }
    };

    const productCallsToAction =
        state?.product?.status === `draft` || hash === `#product-details` ? (
            <Flex w={`100%`} display={hash !== `#share` ? `flex` : `none`} gap={4}>
                <SharedButton
                    btnExtras={{
                        border: `1px solid red`,
                        onClick: () => navigate(`/dashboard/products#all-products`),
                    }}
                    text={'Cancel'}
                    width={{ base: `100%`, lg: `fit-content` }}
                    height={'40px'}
                    bgColor={'transparent'}
                    textColor={'red'}
                    borderRadius={'4px'}
                    fontSize={{ base: `sm`, md: `sm` }}
                />
                <Box width={{ base: `100%`, lg: `fit-content` }} display={hash !== `#preview` ? `block` : `none`}>
                    <SharedButton
                        text={'Save & Continue'}
                        height={'40px'}
                        width={{ base: `100%`, lg: `fit-content` }}
                        bgColor={'purple.200'}
                        textColor={'white'}
                        borderRadius={'4px'}
                        fontSize={{ base: `sm`, md: `sm` }}
                        btnExtras={{
                            onClickAsync: methods.handleSubmit(onSubmit),
                            isLoading: isLoading,
                            loadingText: `Creating product...`,
                        }}
                    />
                </Box>
                <Box width={{ base: `100%`, lg: `fit-content` }} display={hash === `#preview` ? `block` : `none`}>
                    <SharedButton
                        text={'Publish & Continue'}
                        width={{ base: `100%`, lg: `fit-content` }}
                        height={'40px'}
                        bgColor={'purple.200'}
                        textColor={'white'}
                        borderRadius={'4px'}
                        fontSize={{ base: `sm`, md: `sm` }}
                        btnExtras={{
                            onClick: handlePublishAction,
                            isLoading: updateProductStatusStatus.isLoading,
                            loadingText: `Publishing product...`,
                            disabled: state?.product?.deleted_at,
                        }}
                    />
                </Box>
            </Flex>
        ) : (
            <Flex gap={4}>
                <SharedButton
                    btnExtras={{
                        border: `1px solid #6D5DD3`,
                        onClick: handlePublishAction,
                    }}
                    text={'Unpublished'}
                    width={{ base: `100%`, lg: `fit-content` }}
                    height={'40px'}
                    bgColor={'transparent'}
                    textColor={'purple.200'}
                    borderRadius={'4px'}
                    fontSize={{ base: `sm`, md: `sm` }}
                />
                <Box width={{ base: `100%`, lg: `fit-content` }}>
                    <SharedButton
                        text={'Close'}
                        width={{ base: `100%`, lg: `fit-content` }}
                        height={'40px'}
                        bgColor={'purple.200'}
                        textColor={'white'}
                        borderRadius={'4px'}
                        fontSize={{ base: `sm`, md: `sm` }}
                        btnExtras={{
                            onClick: () => navigate(`/dashboard/products#all-products`),
                        }}
                    />
                </Box>
            </Flex>
        );

    return (
        <FormProvider {...methods}>
            <Tabs index={tabIndex} onChange={(index) => setTabIndex(index)} size={`sm`}>
                <Flex display={{ lg: `none` }} my={5}>
                    {productCallsToAction}
                </Flex>
                <TabList overflowX={`scroll`} overflowY={`hidden`} className={`hide_scrollbar`} justifyContent={`space-between`} color={`grey.400`}>
                    <Flex>
                        <Tab
                            // onClick={() => handleTabClick('#product-details')}
                            isDisabled
                            id="product-details"
                            _disabled={disabledStateStyle}
                            _selected={activeStateStyle}
                            py={6}
                            w={{ base: `10rem`, sm: `initial` }}
                        >
                            Product Details
                        </Tab>
                        <Tab
                            // onClick={() => handleTabClick('#content-delivery')}
                            isDisabled
                            id="content-delivery"
                            _disabled={disabledStateStyle}
                            _selected={activeStateStyle}
                            py={6}
                            w={{ base: `10rem`, sm: `initial` }}
                        >
                            Content Delivery
                        </Tab>
                        <Tab
                            // onClick={() => handleTabClick('#preview')}
                            isDisabled
                            id="preview"
                            _disabled={disabledStateStyle}
                            _selected={activeStateStyle}
                            py={6}
                            w={{ base: `10rem`, sm: `initial` }}
                        >
                            Preview
                        </Tab>
                        <Tab
                            // onClick={() => handleTabClick('#share')}
                            isDisabled
                            id="share"
                            _disabled={disabledStateStyle}
                            _selected={activeStateStyle}
                            py={6}
                            w={{ base: `10rem`, sm: `initial` }}
                        >
                            Share
                        </Tab>
                    </Flex>
                    <Flex display={{ base: `none`, lg: `initial` }}>
                        <PaywallUnpublishWarning onClose={onClose} isOpen={isOpen} productID={state?.product?.data?.id} />
                        {productCallsToAction}
                    </Flex>
                </TabList>

                <TabPanels>
                    <TabPanel px={0}>
                        {/* <SetNewProductForm /> */}
                        <ProductForm />
                    </TabPanel>
                    <TabPanel px={0}>
                        <ContentDeliveryForm />
                    </TabPanel>
                    <TabPanel px={0}>
                        <PreviewProductSummary />
                    </TabPanel>
                    <TabPanel px={0}>
                        <ShareLayout />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </FormProvider>
    );
};
