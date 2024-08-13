/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Flex, Text, Stack, Box, Tag, Skeleton } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { ProductsTableControl } from './AdminProductTableControl';
import { useCurrency } from '@productize/hooks';
import { selectAllRevenue, selectRevenueMetaData, useGetAllRevenueMutation } from '@productize/redux';
import { OnBoardingLoader, SharedButton } from '@productize/ui';
import { DashboardEmptyState } from '../../empty-states/AdminDashboardEmptyState';

interface tableProps {
    draft?: boolean;
    live?: boolean;
    deleted?: boolean;
}

export const ProductTable = ({ deleted }: tableProps) => {
    const [getAllRevenue, getAllRevenueStatus] = useGetAllRevenueMutation();
    const allProducts = useSelector(selectAllRevenue);
    const formatCurrency = useCurrency();
    const paginate = useSelector(selectRevenueMetaData);

    const tableHeader = [`Activity`, `User ID`, `Product`, `Amount`, `Status`].map((title) => {
        if (deleted && title === `Status`) {
            title = `...`;
        }
        if (title === `Product`) {
            return (
                <Th alignItems={`center`} py={3} key={title}>
                    <Flex gap={4} alignItems={`center`}>
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

    const getStatusStyles = (status: string) => {
        switch (status) {
            case 'COMPLETED':
                return { backgroundColor: '#C9E7D3', color: '#11923D' };
            case 'PENDING':
                return { backgroundColor: '#FBE69A', color: '#39341F' };
            case 'FAILED':
                return { backgroundColor: '#FDBDBD', color: '#660909' };
            default:
                return { backgroundColor: 'gray.200', color: 'gray.800' };
        }
    };

    const tableProduct = Array.isArray(allProducts)
        ? allProducts.map((product: any) => {
              const statusStyles = getStatusStyles(product?.status);

              return (
                  <Tr _hover={{ bgColor: `purple.100`, cursor: `pointer` }} key={product.id}>
                      <Td>
                          <Flex gap={2} alignItems={`center`}>
                              <Stack padding={3}>
                                  <Text>{product?.activity}</Text>
                              </Stack>
                          </Flex>
                      </Td>
                      <Td>
                          <Flex>{product?.email}</Flex>
                      </Td>
                      <Td>
                          <Flex>{product?.product}</Flex>
                      </Td>
                      <Td>
                          <Flex>{formatCurrency(product?.amount)}</Flex>
                      </Td>
                      <Td>
                          <Flex hidden={deleted}>
                              {statusStyles ? (
                                  <Tag size={`lg`} bgColor={statusStyles.backgroundColor} color={statusStyles.color}>
                                      {product?.status}
                                  </Tag>
                              ) : (
                                  <Tag size={`lg`}>{product?.status}</Tag>
                              )}
                          </Flex>
                      </Td>
                  </Tr>
              );
          })
        : [];

    const handlePrevButton = async () => {
        try {
            await getAllRevenue({ link: paginate?.links?.prev }).unwrap();
        } catch (error) {
            console.log(error);
        }
    };

    const handleNextButton = async () => {
        try {
            await getAllRevenue({ link: paginate?.links?.next }).unwrap();
        } catch (error) {
            console.log(error);
        }
    };

    const showAllProducts = useCallback(async () => {
        try {
            await getAllRevenue(null).unwrap();
        } catch (error) {
            return error;
        }
    }, [getAllRevenue]);

    useEffect(() => {
        showAllProducts();
    }, [showAllProducts]);

    return (
        <>
            <Skeleton isLoaded={!getAllRevenueStatus.isLoading}>
                <ProductsTableControl />
            </Skeleton>
            <TableContainer
                display={`flex`}
                flexDir={`column`}
                height={allProducts?.length ? `40rem` : `fit-Content`}
                justifyContent={`space-between`}
                overflowY={`auto`}
            >
                {getAllRevenueStatus.isLoading ? (
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
                {!allProducts?.length && !getAllRevenueStatus.isLoading && (
                    <Box my={10}>
                        <DashboardEmptyState
                            content={{
                                title: '',
                                desc: 'Homepage Table is Empty.',
                                img: `https://res.cloudinary.com/kingsleysolomon/image/upload/v1700317427/productize/Illustration_4_pujumv.png`,
                            }}
                            textAlign={{ base: `center` }}
                            showImage
                        />
                    </Box>
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
