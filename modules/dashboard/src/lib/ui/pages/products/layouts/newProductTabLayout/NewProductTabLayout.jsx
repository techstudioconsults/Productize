import { Tabs, TabList, TabPanels, Tab, TabPanel, Flex, useDisclosure, Box } from '@chakra-ui/react';
import { FormProvider, useForm } from 'react-hook-form';

import { ProductForm, ContentDeliveryForm, productFormSchema } from '@productize/dashboard';
import { PaywallUnpublishWarning, PreviewProductSummary, SharedButton, ToastFeedback, useToastAction } from '@productize/ui';
import ShareLayout from '../ShareLayout';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSelector } from 'react-redux';
import { selectCurrentUser, useUpdateProductStatusMutation } from '@productize/redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import errorImg from '@icons/error.svg';
import { useProductActions } from './service';

const activeStateStyle = {
    borderBottom: `2px solid #6D5DD3`,
    fontWeight: 600,
    color: `grey.800`,
};
const disabledStateStyle = {
    color: `grey.800`,
};
const tabNames = ['product-details', 'content-delivery', 'preview', 'share'];

export const NewProductTabLayout = () => {
    const { toast, toastIdRef, close } = useToastAction();
    const { onClose, isOpen, onOpen } = useDisclosure();
    const user = useSelector(selectCurrentUser);
    const { state, hash } = useLocation();
    const navigate = useNavigate();
    const getHashIndex = tabNames.findIndex((tab) => hash === `#${tab}`);
    const [tabIndex, setTabIndex] = useState(getHashIndex);
    const methods = useForm({
        criteriaMode: 'all',
        mode: 'onChange',
        resolver: yupResolver(productFormSchema),
    });

    const { updateProduct, createProduct, isLoading } = useProductActions();
    const [updateProductStatus, updateProductStatusStatus] = useUpdateProductStatusMutation();

    useEffect(() => {
        setTabIndex(getHashIndex);
        if (state && hash === '#product-details') {
            methods.setValue('title', state?.product?.title);
            methods.setValue('price', state?.product?.price);
            methods.setValue('product_type', state?.product?.product_type);
            methods.setValue('description', state?.product?.description);
            methods.setValue('tags', state?.product?.tags);
            methods.setValue('category', state?.product?.category);
        }
    }, [getHashIndex, hash, methods, state]);

    const onSubmit = async (data) => {
        if (state && hash) {
            await updateProduct(data);
        } else {
            await createProduct(data);
        }
    };

    const handlePublishAction = async () => {
        const productID = state?.product?.id;
        if (user?.account_type === `free` && state?.product?.status !== `draft`) {
            onOpen();
        } else {
            try {
                const res = await updateProductStatus({
                    productID: productID,
                }).unwrap();

                if (res.data?.status === `published`) {
                    navigate(`/dashboard/products/new#share`, {
                        state: { product: res.data },
                    });
                    toastIdRef.current = toast({
                        position: 'top',
                        render: () => <ToastFeedback btnColor={`purple.200`} message={`Product published Successfully!`} handleClose={close} />,
                    });
                } else {
                    navigate(`/dashboard/products/new#preview`, {
                        state: { product: res.data },
                    });
                    toastIdRef.current = toast({
                        position: 'top',
                        render: () => <ToastFeedback btnColor={`purple.200`} message={`Product sent to draft Successfully!`} handleClose={close} />,
                    });
                }
            } catch (error) {
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
                        isLoading: updateProductStatusStatus.isLoading,
                        loadingText: `Unpublishing product...`,
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
                <TabList overflowX="scroll" overflowY="hidden" className="hide_scrollbar" justifyContent="space-between" color="grey.400">
                    <Flex>
                        <Tab id="product-details" py={6} w={{ base: '10rem', sm: 'initial' }}>
                            Product Details
                        </Tab>
                        <Tab id="content-delivery" py={6} w={{ base: '10rem', sm: 'initial' }}>
                            Content Delivery
                        </Tab>
                        <Tab id="preview" py={6} w={{ base: '10rem', sm: 'initial' }}>
                            Preview
                        </Tab>
                        <Tab id="share" py={6} w={{ base: '10rem', sm: 'initial' }}>
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
