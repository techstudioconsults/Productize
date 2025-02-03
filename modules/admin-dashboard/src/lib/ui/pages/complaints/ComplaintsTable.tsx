import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Flex, Text, Stack, Checkbox, Box, Skeleton } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import { DashboardEmptyState } from '../../empty-states/AdminDashboardEmptyState';
import { useCurrency, useDate, useTime } from '@productize/hooks';
import { useGetAllComplaintsMutation, selectAllComplaints, selectComplaintsMetaData } from '@productize/redux';
import { OnBoardingLoader, SharedButton } from '@productize/ui';
import { useNavigate } from 'react-router-dom';

interface TableProps {
    draft?: boolean;
    live?: boolean;
    deleted?: boolean;
}

const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
};

export const ComplaintTable = ({ deleted }: TableProps) => {
    const [getAllComplaints, getAllComplaintsStatus] = useGetAllComplaintsMutation();
    const allProducts = useSelector(selectAllComplaints);
    // const formatCurrency = useCurrency();
    const navigate = useNavigate()
    const formatDate = useDate();
    const formatTime = useTime();
    const paginate = useSelector(selectComplaintsMetaData);

    const [recentLoading, setRecentLoading] = useState(true);

    const tableHeader = [`Email`, `Subject`, `Date`].map((title) => {
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

    const tableProduct = Array.isArray(allProducts)
        ? allProducts.map((product: any) => {
              return (
                  <Tr _hover={{ bgColor: `purple.100`, cursor: `pointer` }} onClick={() => navigate(`/Admin/complaints/${product.id}`)} key={product.id}>
                      <Td>
                          <Flex gap={6} alignItems={`center`}>
                              <Box onClick={(e) => e.stopPropagation()}>
                                  <Checkbox size={`lg`} colorScheme="purple" />
                              </Box>
                              <Stack padding={5}>
                                  <Text>{product?.email}</Text>
                              </Stack>
                          </Flex>
                      </Td>
                      <Td>
                          <Flex>{truncateText(product?.subject, 40)}</Flex>
                      </Td>
                      <Td>
                          <Flex>{`${formatDate(product?.created_at)} ${formatTime(product?.created_at)}`}</Flex>
                      </Td>
                  </Tr>
              );
          })
        : [];

    const firstFourProducts = tableProduct.slice(0, 5);

    const handlePrevButton = async () => {
        try {
            await getAllComplaints({ link: paginate?.links?.prev }).unwrap();
        } catch (error) {
            console.log(error);
        }
    };

    const handleNextButton = async () => {
        try {
            await getAllComplaints({ link: paginate?.links?.next }).unwrap();
        } catch (error) {
            console.log(error);
        }
    };

    const showAllProducts = useCallback(async () => {
        setRecentLoading(true);
        try {
            await getAllComplaints(null).unwrap();
        } catch (error) {
            return error;
        } finally {
            setRecentLoading(false);
        }
    }, [getAllComplaints]);

    useEffect(() => {
        showAllProducts();
    }, [showAllProducts]);

    return (
        <>
            <Box mb={4}>
                <Text fontSize="lg" fontWeight="bold">
                    Recent
                </Text>
            </Box>
            <Table size={`sm`} variant="simple">
                <Thead zIndex={1} pos={`sticky`} top={0}>
                    <Tr bgColor={`purple.100`} color={`grey.300`}>
                        {tableHeader}
                    </Tr>
                </Thead>
                <Tbody color={`purple.300`}>
                    {recentLoading
                        ? Array(4)
                              .fill('')
                              .map((_, index) => (
                                  <Tr key={index}>
                                      <Td>
                                          <Skeleton height="20px" />
                                      </Td>
                                      <Td>
                                          <Skeleton height="20px" />
                                      </Td>
                                      <Td>
                                          <Skeleton height="20px" />
                                      </Td>
                                  </Tr>
                              ))
                        : firstFourProducts}
                </Tbody>
            </Table>

            <Box mb={2} mt={9}>
                <Text fontSize="lg" fontWeight="bold">
                    Older
                </Text>
            </Box>
            <TableContainer
                display={`flex`}
                flexDir={`column`}
                height={Array.isArray(allProducts) && allProducts.length ? `40rem` : `fit-Content`}
                justifyContent={`space-between`}
                overflowY={`auto`}
            >
                {getAllComplaintsStatus.isLoading ? (
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
                {(!Array.isArray(allProducts) || !allProducts.length) && !getAllComplaintsStatus.isLoading && (
                    <Box my={10}>
                        <DashboardEmptyState
                            content={{
                                title: '',
                                desc: 'Product Table is Empty.',
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
