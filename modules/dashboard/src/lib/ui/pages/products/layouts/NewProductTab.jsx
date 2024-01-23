import { Tabs, TabList, TabPanels, Tab, TabPanel, Flex, useToast, Box } from "@chakra-ui/react";
import ShareLayout from "./ShareLayout";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
// eslint-disable-next-line @nx/enforce-module-boundaries
import { useAxiosInstance } from "@productize-v1.0.0/modules/shared/hooks";
import { useUpdateProductStatusMutation } from "@productize-v1.0.0/modules/shared/redux";
import { ToastFeedback, SharedButton, PreviewProductSummary, useToastAction } from "@productize-v1.0.0/modules/shared/ui";
import { yupResolver } from "@hookform/resolvers/yup";
import { productFormSchema } from "@productize-v1.0.0/dashboard";
import { SetNewProductForm } from "@productize-v1.0.0/dashboard";
import { ContentDeliveryForm } from "@productize-v1.0.0/dashboard";
import errorImg from "@icons/error.svg";

const activeStateStyle = {
    borderBottom: `2px solid #6D5DD3`,
    fontWeight: 600,
    color: `grey.800`,
};
const disabledStateStyle = {
    color: `grey.800`,
};
const tabNames = ["product-details", "content-delivery", "preview", "share"];

export const NewProductTab = () => {
    const { query, isLoading } = useAxiosInstance({ MIME_TYPE: "multipart/form-data" });
    // const { query, isLoading } = useAxiosInstance({ MIME_TYPE: "application/json" });
    const [updateProductStatus, updateProductStatusStatus] = useUpdateProductStatusMutation();

    const { toast, toastIdRef, close } = useToastAction();
    const methods = useForm({
        criteriaMode: "all",
        mode: "onChange",
        resolver: yupResolver(productFormSchema),
    });

    const { state, hash } = useLocation();
    const navigate = useNavigate();

    const getHashIndex = tabNames.findIndex((tab) => hash === `#${tab}`);
    const [tabIndex, setTabIndex] = useState(getHashIndex);
    // const handleTabClick = (tabId) => {
    // 	navigate(tabId);
    // };

    useEffect(() => {
        setTabIndex(getHashIndex);
    }, [getHashIndex, state]);

    const onSubmit = async (data) => {
        console.log(data);
        if (state) {
            // const formData = {
            //     title: data.title,
            //     price: data.price,
            //     // product_type: data.productType,
            //     description: data.description,
            //     data: [...data.data],
            //     cover_photos: [...data.cover_photos],
            //     thumbnail: data.thumbnail,
            //     highlights: [data?.highlight_1, data?.highlight_2, data?.highlight_3],
            //     tags: data.tags,
            //     stock_count: data.stock_count,
            //     choose_quantity: data.choose_quantity,
            //     show_sales_count: data.show_sales_count,
            // };
            const formData = new FormData();

            formData.append("title", data.title);
            formData.append("price", data.price);
            formData.append("description", data.description);
            formData.append("thumbnail", data.thumbnail);
            formData.append("tags", data.tags);
            formData.append("stock_count", data.stock_count);
            formData.append("choose_quantity", data.choose_quantity);
            formData.append("show_sales_count", data.show_sales_count);
            formData.append("data", JSON.stringify([...data.data]));
            formData.append("cover_photos", JSON.stringify([...data.cover_photos]));
            formData.append("highlights", JSON.stringify([data?.highlight_1, data?.highlight_2, data?.highlight_3]));
            try {
                const res = await query(`post`, `/products/${state?.product?.id}?_method=PUT`, formData);

                if (res.status === 200) {
                    toastIdRef.current = toast({
                        position: "top",
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
                    position: "top",
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
            // const formData = {
            //     title: data.title,
            //     price: data.price,
            //     product_type: data.productType,
            //     description: data.description,
            //     data: [...data.data],
            //     cover_photos: [...data.cover_photos],
            //     thumbnail: data.thumbnail,
            //     highlights: [data?.highlight_1, data?.highlight_2, data?.highlight_3],
            //     tags: data.tags,
            //     stock_count: data.stock_count,
            //     choose_quantity: data.choose_quantity,
            //     show_sales_count: data.show_sales_count,
            // };
            const formData = new FormData();

            formData.append("title", data.title);
            formData.append("price", data.price);
            formData.append("description", data.description);
            formData.append("thumbnail", data.thumbnail);
            formData.append("tags", data.tags);
            formData.append("stock_count", data.stock_count);
            formData.append("choose_quantity", data.choose_quantity);
            formData.append("show_sales_count", data.show_sales_count);
            formData.append("data", JSON.stringify([...data.data]));
            formData.append("cover_photos", JSON.stringify([...data.cover_photos]));
            formData.append("highlights", JSON.stringify([data?.highlight_1, data?.highlight_2, data?.highlight_3]));
            try {
                const res = await query(`post`, `/products`, formData);
                if (res.status === 201) {
                    toastIdRef.current = toast({
                        position: "top",
                        render: () => <ToastFeedback btnColor={`purple.200`} message={`Product Created Successfully!`} handleClose={close} />,
                    });

                    navigate(`/dashboard/products/new#preview`, {
                        state: { product: res.data },
                    });
                }
            } catch (err) {
                toastIdRef.current = toast({
                    position: "top",
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
        try {
            const res = await updateProductStatus({
                productID: productID,
            }).unwrap();
            console.log(res);
            if (res?.data?.status === `published`) {
                toastIdRef.current = toast({
                    position: "top",
                    render: () => <ToastFeedback btnColor={`purple.200`} message={`Product	published Successfully!`} handleClose={close} />,
                });
                navigate(`/dashboard/products/new#share`, {
                    state: { product: res },
                });
            } else {
                toastIdRef.current = toast({
                    position: "top",
                    render: () => <ToastFeedback btnColor={`purple.200`} message={`Product	sent to draft Successfully!`} handleClose={close} />,
                });
                navigate(`/dashboard/products/new#preview`, {
                    state: { product: res?.data },
                });
            }
        } catch (error) {
            toastIdRef.current = toast({
                position: "top",
                render: () => (
                    <ToastFeedback
                        message={err?.response?.data?.message || `Setup your Paystack account before you can publish a product`}
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
    };

    const productCallsToAction =
        state?.product?.status === `draft` || hash === `#product-details` ? (
            <Flex display={hash !== `#share` ? `flex` : `none`} gap={4}>
                <SharedButton
                    btnExtras={{
                        border: `1px solid red`,
                        onClick: () => navigate(`/dashboard/products#all-products`),
                    }}
                    text={"Cancel"}
                    width={"fit-content"}
                    height={"40px"}
                    bgColor={"transparent"}
                    textColor={"red"}
                    borderRadius={"4px"}
                    fontSize={{ base: `sm`, md: `sm` }}
                />
                <Box display={hash !== `#preview` ? `block` : `none`}>
                    <SharedButton
                        text={"Save & Continue"}
                        width={"fit-content"}
                        height={"40px"}
                        bgColor={"purple.200"}
                        textColor={"white"}
                        borderRadius={"4px"}
                        fontSize={{ base: `sm`, md: `sm` }}
                        btnExtras={{
                            onClickAsync: methods.handleSubmit(onSubmit),
                            isLoading: isLoading,
                            loadingText: `Creating product...`,
                        }}
                    />
                </Box>
                <Box display={hash === `#preview` ? `block` : `none`}>
                    <SharedButton
                        text={"Publish & Continue"}
                        width={"fit-content"}
                        height={"40px"}
                        bgColor={"purple.200"}
                        textColor={"white"}
                        borderRadius={"4px"}
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
                    text={"Unpublished"}
                    width={"fit-content"}
                    height={"40px"}
                    bgColor={"transparent"}
                    textColor={"purple.200"}
                    borderRadius={"4px"}
                    fontSize={{ base: `sm`, md: `sm` }}
                />
                <Box>
                    <SharedButton
                        text={"Close"}
                        width={"fit-content"}
                        height={"40px"}
                        bgColor={"purple.200"}
                        textColor={"white"}
                        borderRadius={"4px"}
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
                <Flex gap={4} display={{ base: `flex`, md: `none` }} justifyContent={`flex-end`}>
                    <SharedButton
                        btnExtras={{
                            border: `1px solid red`,
                        }}
                        text={"Cancel"}
                        width={"100%"}
                        height={"40px"}
                        bgColor={"transparent"}
                        textColor={"red"}
                        borderRadius={"4px"}
                        fontSize={{ base: `sm`, md: `sm` }}
                    />

                    <SharedButton
                        text={"Save & Continue"}
                        width={"100%"}
                        height={"40px"}
                        bgColor={"purple.200"}
                        textColor={"white"}
                        borderRadius={"4px"}
                        fontSize={{ base: `sm`, md: `sm` }}
                    />
                </Flex>
                <TabList justifyContent={`space-between`} color={`grey.400`}>
                    <Flex>
                        <Tab
                            // onClick={() => handleTabClick('#product-details')}
                            isDisabled
                            id="product-details"
                            _disabled={disabledStateStyle}
                            _selected={activeStateStyle}
                            py={6}
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
                        >
                            Share
                        </Tab>
                    </Flex>
                    {productCallsToAction}
                </TabList>

                <TabPanels>
                    <TabPanel px={0}>
                        <SetNewProductForm />
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
