import { Box, Flex, Image, SimpleGrid, Skeleton, Stack, Tag, Text, useDisclosure } from '@chakra-ui/react';
import { Icon } from '@iconify/react';

import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import arrowLeft from '@icons/Property_2_Arrow-left_kafkjg.svg';
import { DataWidgetCard } from '../../DataWidgetCard';
import { ProductCustomerTable } from '../../tables/ProductCustomerTable';
import toastimg from '@icons/star-notice.png';
import errorImg from '@icons/error.svg';
import { PaywallUnpublishWarning, SharedButton, SpinnerComponentSmall, ToastFeedback, useToastAction } from '@productize/ui';
import {
    selectCurrentUser,
    selectSingleProduct,
    useDeleteProductSoftlyMutation,
    useGetSingleProductDetailsMutation,
    useUpdateProductStatusMutation,
} from '@productize/redux';
import { useCurrency, useDate } from '@productize/hooks';

export const ProductDetails = () => {
    const { onOpen, onClose, isOpen } = useDisclosure();
    const { productID } = useParams();
    const navigate = useNavigate();
    const { toast, toastIdRef, close } = useToastAction();
    const [getSingleProduct, singleProductStatus] = useGetSingleProductDetailsMutation();
    const [deleteProductSoftly, deleteStatus] = useDeleteProductSoftlyMutation();
    const [updateProductStatus, updateProductStatusStatus] = useUpdateProductStatusMutation();
    const product = useSelector(selectSingleProduct);
    const formatDate = useDate();
    const formatCurrency = useCurrency();
    const user = useSelector(selectCurrentUser);

    // copy test to clipboard
    const copyTextToClipBoard = () => {
        const textToCopy = product?.link;
        navigator.clipboard
            .writeText(textToCopy)
            .then(() => {
                toastIdRef.current = toast({
                    position: 'top',
                    render: () => (
                        <ToastFeedback
                            btnColor={`purple.200`}
                            message={` You have successfully copied your product link`}
                            title="Product link Copied!"
                            icon={toastimg}
                            bgColor={undefined}
                            color={undefined}
                            handleClose={close}
                        />
                    ),
                });
            })
            .catch((error) => {
                toastIdRef.current = toast({
                    position: 'top',
                    render: () => (
                        <ToastFeedback
                            message={`Failed to copy.`}
                            title="Error!"
                            icon={errorImg}
                            color={`red.600`}
                            btnColor={`red.600`}
                            bgColor={undefined}
                            handleClose={close}
                        />
                    ),
                });
            });
    };

    const showSingleProduct = useCallback(async () => {
        try {
            await getSingleProduct({ productID }).unwrap();
        } catch (error) {
            return error;
        }
    }, [getSingleProduct, productID]);

    useEffect(() => {
        showSingleProduct();
    }, [product?.slug, showSingleProduct]);

    const handleDeleteProductSoftly = async () => {
        try {
            const res = await deleteProductSoftly({
                productID,
            }).unwrap();

            if (res) {
                navigate(`/dashboard/products#deleted`);
                toastIdRef.current = toast({
                    position: 'top',
                    render: () => (
                        <ToastFeedback
                            btnColor={`purple.200`}
                            message={`Check the deleted tab to recover product`}
                            title="Product Deleted Temporarily"
                            icon={toastimg}
                            bgColor={undefined}
                            color={undefined}
                            handleClose={close}
                        />
                    ),
                });
            }
        } catch (err) {
            toastIdRef.current = toast({
                position: 'top',
                render: () => (
                    <ToastFeedback
                        message={`something went wrong`}
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
    };

    const unpublishProductToDraft = async () => {
        try {
            if (user?.account_type === `free`) {
                onOpen();
            } else {
                const res = await updateProductStatus({
                    productID: product?.id,
                }).unwrap();

                if (res) {
                    toastIdRef.current = toast({
                        position: 'top',
                        render: () => (
                            <ToastFeedback
                                btnColor={`purple.200`}
                                message={`Check draft to view product`}
                                title="Product Unpublished successfully!"
                                icon={undefined}
                                bgColor={undefined}
                                color={undefined}
                                handleClose={close}
                            />
                        ),
                    });
                }
            }
        } catch (error) {
            toastIdRef.current = toast({
                position: 'top',
                render: () => (
                    <ToastFeedback
                        message={`Something went wrong, please try again later.`}
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
        // try {
        //     const res = await updateProductStatus({
        //         productID,
        //     }).unwrap();

        //     if (res) {
        //         navigate(`/dashboard/products#draft`);
        //         toastIdRef.current = toast({
        //             position: 'top',
        //             render: () => (
        //                 <ToastFeedback
        //                     btnColor={`purple.200`}
        //                     message={`Check draft to view product`}
        //                     title="Product Unpublished successfully!"
        //                     icon={toastimg}
        //                     bgColor={undefined}
        //                     color={undefined}
        //                     handleClose={close}
        //                 />
        //             ),
        //         });
        //     }
        // } catch (error) {
        //     toastIdRef.current = toast({
        //         position: 'top',
        //         render: () => (
        //             <ToastFeedback
        //                 message={`something went wrong`}
        //                 title="Error!"
        //                 icon={errorImg}
        //                 color={`red.600`}
        //                 btnColor={`red.600`}
        //                 bgColor={undefined}
        //                 handleClose={close}
        //             />
        //         ),
        //     });
        // }
    };

    return (
        <Box my={8}>
            {/* row 1 */}
            <Flex flexDir={{ base: `column`, md: `row` }} justifyContent={`space-between`} alignItems={{ base: `flex-start`, md: `center` }} gap={4}>
                <Flex w={`100%`} gap={8} alignItems={`center`}>
                    <Box cursor={`pointer`} onClick={() => navigate(-1)}>
                        <Image src={arrowLeft} />
                    </Box>
                    <Text as={`h6`}>Product Details</Text>
                </Flex>
                <Flex w={`100%`} gap={4} justifyContent={`flex-end`}>
                    <SharedButton
                        text={'Delete'}
                        width={'fit-content'}
                        height={'40px'}
                        bgColor={'transparent'}
                        textColor={'red.200'}
                        borderRadius={'4px'}
                        fontSize={{ base: `sm`, md: `md` }}
                        btnExtras={{
                            border: `1px solid red`,
                            onClick: handleDeleteProductSoftly,
                            isLoading: deleteStatus.isLoading,
                            loadingText: `deleting...`,
                        }}
                    />
                    <Box>
                        <PaywallUnpublishWarning onClose={onClose} isOpen={isOpen} productID={productID} />
                        <SharedButton
                            text={'Unpublish to draft'}
                            width={'fit-content'}
                            height={'40px'}
                            bgColor={'purple.200'}
                            textColor={'grey.100'}
                            borderRadius={'4px'}
                            fontSize={{ base: `sm`, md: `md` }}
                            btnExtras={{
                                onClick: unpublishProductToDraft,
                                disabled: product?.status === `draft`,
                                isLoading: updateProductStatusStatus.isLoading,
                                loadingText: `processing...`,
                            }}
                        />
                    </Box>
                </Flex>
            </Flex>
            {/* row 2 */}
            <Box mt={8} mb={4} color={`purple.300`}>
                <Text as={`h6`}>{product?.title}</Text>
                <Flex
                    flexDir={{ base: `column`, sm: `row` }}
                    borderBlock={`1px solid #EFEFEF`}
                    gap={{ base: 8, lg: 32 }}
                    py={8}
                    justifyContent={{ md: `space-between`, lg: `initial` }}
                    alignItems={{ base: `flex-start`, sm: `center` }}
                    my={2}
                >
                    <Stack gap={2}>
                        <Text fontWeight={600}>Publish Date</Text>
                        {singleProductStatus.isLoading ? <SpinnerComponentSmall size="sm" /> : <Text>{formatDate(product?.created_at)}</Text>}
                    </Stack>
                    <Stack gap={2}>
                        <Text fontWeight={600}>Price</Text>
                        {singleProductStatus.isLoading ? <SpinnerComponentSmall size="sm" /> : <Text>{formatCurrency(product?.price)}</Text>}
                    </Stack>
                    <Stack gap={2}>
                        <Text fontWeight={600}>Product link</Text>
                        {singleProductStatus.isLoading ? (
                            <SpinnerComponentSmall size="sm" />
                        ) : (
                            <Flex gap={2} alignItems={`center`}>
                                <Link target="_blank" to={product?.link}>
                                    <Text>{product?.link?.slice(0, 20)}...</Text>
                                </Link>
                                <Box _hover={{ color: `purple.200` }}>
                                    <Icon cursor={`pointer`} onClick={copyTextToClipBoard} color="grey" icon={`ph:copy-simple-light`} />
                                </Box>
                            </Flex>
                        )}
                    </Stack>
                    <Stack gap={2}>
                        <Text fontWeight={600}>Status</Text>
                        {singleProductStatus.isLoading ? (
                            <SpinnerComponentSmall size="sm" />
                        ) : (
                            <Tag colorScheme={product?.status === `published` ? `green` : `yellow`} size={`lg`}>
                                {product?.status}
                            </Tag>
                        )}
                    </Stack>
                </Flex>
            </Box>
            {/* row3 */}
            {/* grid cards */}
            <Box>
                <SimpleGrid gap={4} columns={{ base: 1, sm: 2, md: 3 }}>
                    <Skeleton borderRadius={8} isLoaded={!singleProductStatus.isLoading}>
                        <Box>
                            <DataWidgetCard showIcon={false} title={'Viewed'} value={0} />
                        </Box>
                    </Skeleton>
                    <Skeleton borderRadius={8} isLoaded={!singleProductStatus.isLoading}>
                        <Box>
                            <DataWidgetCard showIcon={false} title={'Total Order'} value={product?.total_order} />
                        </Box>
                    </Skeleton>
                    <Skeleton borderRadius={8} isLoaded={!singleProductStatus.isLoading}>
                        <Box>
                            <DataWidgetCard showIcon={false} title={'Total Sales'} value={product.total_sales} />
                        </Box>
                    </Skeleton>
                </SimpleGrid>
                <Box mt={8}>
                    {/* <DashboardTable /> */}
                    <ProductCustomerTable />
                </Box>
            </Box>
        </Box>
    );
};
