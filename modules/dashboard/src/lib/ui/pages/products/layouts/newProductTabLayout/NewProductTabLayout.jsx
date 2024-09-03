import { useState, useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLocation, useNavigate } from 'react-router-dom';
import { Tabs, TabList, Tab, TabPanels, TabPanel, Flex, Box } from '@chakra-ui/react';
import { DPFormSchema, ProductForm, SSFormSchema } from '@productize/dashboard';
import { PreviewProductSummary, SharedButton, ToastFeedback, useToastAction } from '@productize/ui';
import ShareLayout from '../ShareLayout';
import { useUpdateProductStatusMutation } from '@productize/redux';
import errorImg from '@icons/error.svg';
import { useProductActions } from './service';

const activeStateStyle = {
    borderBottom: `2px solid #6D5DD3`,
    fontWeight: 600,
    color: `#6D5DD3`,
};

const disabledStateStyle = {
    color: `grey.800`,
};

// const tabNames = ['product-details', 'content-delivery', 'preview', 'share'];
const tabNames = ['product-details', 'preview', 'share'];

export const NewProductTabLayout = () => {
    const { toast, toastIdRef, close } = useToastAction();
    // const user = useSelector(selectCurrentUser);
    const { state, hash } = useLocation();
    const navigate = useNavigate();
    const [tabIndex, setTabIndex] = useState(tabNames.findIndex((tab) => hash === `#${tab}`));
    const [schema, setSchema] = useState(DPFormSchema);

    const methods = useForm({
        criteriaMode: 'all',
        mode: 'onChange',
        resolver: yupResolver(schema),
    });

    const { updateProduct, createProduct, getSkillSellingData, isLoading } = useProductActions();
    const [updateProductStatus, updateProductStatusStatus] = useUpdateProductStatusMutation();
    const { isValid } = methods.formState;

    const changeSchema = (value) => {
        value === `digital_product` ? setSchema(DPFormSchema) : setSchema(SSFormSchema);
    };

    useEffect(() => {
        const currentTabIndex = tabNames.findIndex((tab) => hash === `#${tab}`);
        setTabIndex(currentTabIndex);
    }, [hash]);

    useEffect(() => {
        if (state && hash === '#product-details') {
            changeSchema(state?.product?.product_type);
            getSkillSellingData(state?.product?.id);

            methods.setValue('title', state?.product?.title);
            methods.setValue('price', state?.product?.price);
            methods.setValue('product_type', state?.product?.product_type);
            methods.setValue('description', state?.product?.description);
            methods.setValue('tags', state?.product?.tags);
            methods.setValue('data', state?.product?.resources);
            methods.setValue('thumbnail', state?.product?.thumbnail);
            methods.setValue('cover_photos', state?.product?.cover_photos);
            // methods.setValue('level', state?.product?.level);
            // methods.setValue('availability', state?.product?.availability);
            // methods.setValue('portfolio_link', state?.product?.link);
        }
    }, [getSkillSellingData, hash, methods, schema, state]);

    const onSubmit = async (data) => {
        // console.log(data);
        const action = state && hash ? updateProduct : createProduct;
        await action(data);
    };

    const handlePublishAction = async () => {
        const productID = state?.product?.id || state?.product?.data?.id;
        // if (user?.account_type === 'free_trial' && state?.product?.status !== 'draft') {
        //     onOpen();
        // } else {
        try {
            const res = await updateProductStatus({ productID }).unwrap();
            const publishMessage = res.data?.status === 'published' ? 'Product published Successfully!' : 'Product sent to draft Successfully!';

            navigate(`/dashboard/products/new#${res.data?.status === 'published' ? 'share' : 'preview'}`, { state: { product: res.data } });
            toastIdRef.current = toast({
                position: 'top',
                render: () => <ToastFeedback btnColor="purple.200" message={publishMessage} handleClose={close} />,
            });
        } catch (error) {
            const errorMessage = error.status !== 403 ? error?.message || 'Something went wrong' : 'Paystack Setup';

            toastIdRef.current = toast({
                position: 'top',
                render: () => (
                    <ToastFeedback message={errorMessage} title={errorMessage} icon={errorImg} color="red.600" btnColor="red.600" handleClose={close} />
                ),
            });
        }
        // }
    };

    return (
        <FormProvider {...methods}>
            <Tabs index={tabIndex} onChange={(index) => setTabIndex(index)} size={`sm`}>
                <Flex bgColor={`#ffffff`} pos={`sticky`} top={`75px`} display={{ lg: `none` }} my={5}>
                    {(state?.product?.data?.status || state?.product?.status) === `draft` || hash === `#product-details` ? (
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
                                        disabled: !isValid,
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
                    )}
                </Flex>

                <TabList
                    pos={{ lg: `sticky` }}
                    top={{ lg: `75px` }}
                    overflowX="scroll"
                    overflowY="hidden"
                    className="hide_scrollbar"
                    justifyContent="space-between"
                    color="grey.400"
                    zIndex={999}
                    bgColor={`#ffffff`}
                >
                    <Flex>
                        <Tab
                            id="product-details"
                            py={6}
                            mb={0}
                            w={{ base: '10rem', sm: 'initial' }}
                            isDisabled
                            _disabled={disabledStateStyle}
                            _selected={activeStateStyle}
                        >
                            Product Details
                        </Tab>
                        <Tab
                            id="preview"
                            py={6}
                            mb={0}
                            w={{ base: '10rem', sm: 'initial' }}
                            isDisabled
                            _disabled={disabledStateStyle}
                            _selected={activeStateStyle}
                        >
                            Preview
                        </Tab>
                        {/* <Tab
                            id="preview"
                            py={6}
                            mb={0}
                            w={{ base: '10rem', sm: 'initial' }}
                            isDisabled
                            _disabled={disabledStateStyle}
                            _selected={activeStateStyle}
                        >
                            Content Delivery
                        </Tab> */}
                        <Tab
                            id="share"
                            py={6}
                            mb={0}
                            w={{ base: '10rem', sm: 'initial' }}
                            isDisabled
                            _disabled={disabledStateStyle}
                            _selected={activeStateStyle}
                        >
                            Share
                        </Tab>
                    </Flex>
                    <Flex display={{ base: `none`, lg: `initial` }}>
                        {/* <PaywallUnpublishWarning onClose={onClose} isOpen={isOpen} productID={state?.product?.data?.id} /> */}
                        {(state?.product?.data?.status || state?.product?.status) === `draft` || hash === `#product-details` ? (
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
                                            disabled: !isValid,
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
                        )}
                    </Flex>
                </TabList>

                <TabPanels>
                    <TabPanel px={0}>
                        <ProductForm listenForSchemaChange={changeSchema} />
                    </TabPanel>
                    {/* <TabPanel px={0}>
                        <ContentDeliveryForm />
                    </TabPanel> */}
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

export default NewProductTabLayout;
