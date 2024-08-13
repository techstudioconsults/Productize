/* eslint-disable @nx/enforce-module-boundaries */
import { Box, Flex, Image, SimpleGrid, Skeleton, Stack, Tag, Text, useDisclosure, HStack, VStack } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { useNavigate, Link } from 'react-router-dom';
import arrowLeft from '@icons/Property_2_Arrow-left_kafkjg.svg';
import toastimg from '@icons/star-notice.png';
import errorImg from '@icons/error.svg';
import { PaywallUnpublishWarning, SharedButton, ToastFeedback, useToastAction } from '@productize/ui';
import { useCurrency, useDate } from '@productize/hooks';
import { useProductDetails } from './service';
import { DataWidgetCard } from '../../../../ui/AdminDataWidget';
import { ProductCustomerTable } from '../../../../ui/tables/AdminProductCustomerTable';

export const AdminProductDetails = () => {
    const { onOpen, onClose, isOpen } = useDisclosure();
    const navigate = useNavigate();
    const { toast, toastIdRef, close } = useToastAction();
    const { product, user, isLoading, deleteProductSoftly, deleteStatus, updateProductStatus, updateProductStatusStatus, productID } = useProductDetails();
    const formatDate = useDate();
    const formatCurrency = useCurrency();

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

    const handleDeleteProductSoftly = async () => {
        try {
            const res = await deleteProductSoftly({ productID }).unwrap();
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
            return;
        }
    };

    const unpublishProductToDraft = async () => {
        try {
            if (user?.account_type === `free`) {
                onOpen();
            } else {
                const res = await updateProductStatus({ productID: product?.id }).unwrap();
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
            return;
        }
    };

    if (isLoading) {
        return <ProductDetailsSkeleton />;
    }

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

                        <Text>{formatDate(product?.created_at)}</Text>
                    </Stack>
                    <Stack gap={2}>
                        <Text fontWeight={600}>Price</Text>
                        <Text>{formatCurrency(product?.price)}</Text>
                    </Stack>
                    <Stack gap={2}>
                        <Text fontWeight={600}>Product link</Text>
                        <Flex gap={2} alignItems={`center`}>
                            <Link target="_blank" to={product?.link}>
                                <Text>{product?.link?.slice(0, 20)}...</Text>
                            </Link>
                            <Box _hover={{ color: `purple.200` }}>
                                <Icon cursor={`pointer`} onClick={copyTextToClipBoard} color="grey" icon={`ph:copy-simple-light`} />
                            </Box>
                        </Flex>
                    </Stack>
                    <Stack gap={2}>
                        <Text fontWeight={600}>Status</Text>
                        <Tag colorScheme={product?.status === `published` ? `green` : `yellow`} size={`lg`}>
                            {product?.status}
                        </Tag>
                    </Stack>
                </Flex>
            </Box>
            {/* row3 */}
            {/* grid cards */}
            <Box>
                <SimpleGrid gap={4} columns={{ base: 1, sm: 2, md: 3 }}>
                    <Box>
                        <DataWidgetCard showIcon={false} title={'Viewed'} value={0} />
                    </Box>
                    <Box>
                        <DataWidgetCard showIcon={false} title={'Total Order'} value={product?.total_order} />
                    </Box>
                    <Box>
                        <DataWidgetCard showIcon={false} title={'Total Quantity'} value={product?.total_sales} />
                    </Box>
                </SimpleGrid>
                <Box mt={8}>
                    <ProductCustomerTable status={isLoading} />
                </Box>
            </Box>
        </Box>
    );
};

const ProductDetailsSkeleton = () => {
    return (
        <Box>
            <Flex display={{ base: `none`, sm: `flex` }} justify="space-between" mb={6}>
                <HStack spacing={4}>
                    <Skeleton borderRadius={8} height="40px" width="240px" />
                </HStack>
                <HStack spacing={4}>
                    <Skeleton borderRadius={8} height="40px" width="100px" />
                    <Skeleton borderRadius={8} height="40px" width="160px" />
                </HStack>
            </Flex>
            <Skeleton borderRadius={8} height="8rem" width="100%" />
            <SimpleGrid my={5} gap={4} columns={{ base: 1, sm: 2, md: 3 }}>
                <Skeleton borderRadius={8} height="7rem" width="100%" />
                <Skeleton borderRadius={8} height="7rem" width="100%" />
                <Skeleton borderRadius={8} height="7rem" width="100%" />
            </SimpleGrid>
            <VStack>
                <Skeleton borderRadius={8} height="40px" width="100%" />
                <Skeleton borderRadius={8} height="40px" width="100%" />
                <Skeleton borderRadius={8} height="40px" width="100%" />
                <Skeleton borderRadius={8} height="40px" width="100%" />
            </VStack>
        </Box>
    );
};
