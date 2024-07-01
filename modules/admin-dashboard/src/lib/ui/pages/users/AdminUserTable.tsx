/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Flex, Avatar, Text, Stack, Checkbox, Box, Tag, Skeleton } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { ProductsTableControl } from './AdminUserTableControl';
import { useCurrency, useDate, useTime } from '@productize/hooks';
import { useGetAllProductsMutation, selectAllProducts, selectPaginationMetaData } from '@productize/redux';
import { OnBoardingLoader, SharedButton } from '@productize/ui';

interface tableProps {
    draft?: boolean;
    live?: boolean;
    deleted?: boolean;
}

export const ProductTable = ({ deleted }: tableProps) => {
    const [getAllProducts, getAllProductsStatus] = useGetAllProductsMutation();
    const allProducts = useSelector(selectAllProducts);
    const navigate = useNavigate();
    const formatCurrency = useCurrency();
    const formatDate = useDate();
    const formatTime = useTime();
    const paginate = useSelector(selectPaginationMetaData);

    const tableHeader = [`User Name`, `User Email`, `Subscription Status`, `Last Activity Date`].map((title) => {
        if (deleted && title === `Status`) {
            title = `...`;
        }
        if (title === `Product`) {
            return (
                <Th alignItems={`center`} py={3} key={title}>
                    <Flex gap={4} alignItems={`center`}>
                        <Checkbox size={`lg`} colorScheme="purple" defaultChecked />
                        {title}
                    </Flex>
                </Th>
            );
        } else {
            return (
                <Th py={3} key={title}>
                    {title}
                </Th>
            );
        }
    });

    const tableProduct = allProducts?.map((product: any) => {
        return (
            <Tr _hover={{ bgColor: `purple.100`, cursor: `pointer` }} onClick={() => navigate(`/dashboard/products/${product.id}`)} key={product.id}>
                <Td>
                    <Flex gap={2} alignItems={`center`}>
                        <Box onClick={(e) => e.stopPropagation()}>
                            <Checkbox size={`lg`} colorScheme="purple" />
                        </Box>
                        <Avatar bgColor={`yellow.100`} src={product?.thumbnail} borderRadius={`8px`} w={`100px`} h={`64px`} />
                        <Stack>
                            <Text>{product?.title}</Text>
                            <Flex alignItems={`center`} color={`grey.400`}>
                                <Text className="tiny-text">{formatDate(product.created_at)}</Text>
                                <Icon className="large-text" icon={`mdi:dot`} />
                                <Text className="tiny-text">{formatTime(product?.created_at)}</Text>
                            </Flex>
                        </Stack>
                    </Flex>
                </Td>
                <Td>
                    <Flex>{formatCurrency(product?.price)}</Flex>
                </Td>
                <Td>
                    <Flex>{product?.total_order}</Flex>
                </Td>
                <Td>
                    <Flex>{product?.product_type}</Flex>
                </Td>
                {/* <Td>
                    <Flex hidden={deleted}>
                        <Tag size={`lg`} colorScheme={product?.status === `draft` ? `yellow` : `green`}>
                            {product?.status}
                        </Tag>
                    </Flex>
                </Td> */}
            </Tr>
        );
    });

    const handlePrevButton = async () => {
        try {
            await getAllProducts({ link: paginate?.links?.prev }).unwrap();
        } catch (error) {
            console.log(error);
        }
    };

    const handleNextButton = async () => {
        try {
            await getAllProducts({ link: paginate?.links?.next }).unwrap();
        } catch (error) {
            console.log(error);
        }
    };

    const showAllProducts = useCallback(async () => {
        try {
            await getAllProducts(null).unwrap();
        } catch (error) {
            return error;
        }
    }, [getAllProducts]);

    useEffect(() => {
        showAllProducts();
    }, [showAllProducts]);

    return (
        <>
            <Skeleton isLoaded={!getAllProductsStatus.isLoading}>
                <ProductsTableControl />
            </Skeleton>
            <TableContainer
                display={`flex`}
                flexDir={`column`}
                height={allProducts?.length ? `40rem` : `fit-Content`}
                justifyContent={`space-between`}
                overflowY={`auto`}
            >
                {getAllProductsStatus.isLoading ? (
                    <OnBoardingLoader />
                ) : (
                    <Table size={`sm`} variant="simple">
                        <Thead zIndex={1} pos={`sticky`} top={0}>
                            <Tr bgColor={`purple.100`} color={`grey.300`}>
                                {tableHeader}
                            </Tr>
                        </Thead>
                        <Tbody color={`purple.300`}>{tableProduct}</Tbody>
                    </Table>
                )}
            </TableContainer>
            <Flex mt={4} gap={5} color={`grey.400`} alignItems={`center`} justifyContent={`space-between`} flexDir={{ base: `column-reverse`, lg: `row` }}>
                <Flex alignItems={`center`} justifyContent={`space-between`} flexDir={{ base: `column`, lg: `row` }} gap={{ lg: 60 }}>
                    <Box>
                        <Text>10 Entries per page </Text>
                    </Box>
                    <Box>
                        <Text>
                            Page {paginate?.meta?.current_page} of {paginate?.meta?.last_page}
                        </Text>
                    </Box>
                </Flex>
                <Stack w={{ base: `100%`, lg: `initial` }} justifyContent={`space-between`} direction={`row`}>
                    <SharedButton
                        btnExtras={{
                            leftIcon: `material-symbols:chevron-left`,
                            border: `1px solid #CFCFD0`,
                            onClick: handlePrevButton,
                            disabled: !paginate?.links?.prev,
                        }}
                        text={'Previous'}
                        width={'137px'}
                        height={'40px'}
                        bgColor={'transparent'}
                        textColor={'grey.400'}
                        borderRadius={'4px'}
                        fontSize={{ base: `sm`, md: `md` }}
                    />
                    <SharedButton
                        btnExtras={{
                            leftIcon: `material-symbols:chevron-right`,
                            border: `1px solid #CFCFD0`,
                            onClick: handleNextButton,
                            disabled: !paginate?.links?.next,
                        }}
                        text={'Next'}
                        width={'137px'}
                        height={'40px'}
                        bgColor={'transparent'}
                        textColor={'grey.400'}
                        borderRadius={'4px'}
                        fontSize={{ base: `sm`, md: `md` }}
                    />
                </Stack>
            </Flex>
        </>
    );
};
