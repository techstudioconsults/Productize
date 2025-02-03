/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Flex, Text, Avatar, Stack, Checkbox, Box, Tag, Skeleton } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { DashboardEmptyState } from '../../empty-states/AdminDashboardEmptyState';
import { useCurrency, useDate, useTime } from '@productize/hooks';
import { selectAllOrders, useGetAllOrdersMutation, selectOrdersMetaData, useGetAllAdminOrdersMutation, selectAllAdminOrders } from '@productize/redux';
import { OnBoardingLoader, SharedButton } from '@productize/ui';

interface tableProps {
    draft?: boolean;
    live?: boolean;
    deleted?: boolean;
}

export const OrderTable = ({ deleted }: tableProps) => {
    const [getAllOrders, getAllOrdersStatus] = useGetAllAdminOrdersMutation();
    const tableData = useSelector(selectAllAdminOrders);
    // const navigate = useNavigate();
    const formatCurrency = useCurrency();
    const formatDate = useDate();
    const formatTime = useTime();
    const paginate = useSelector(selectOrdersMetaData);

    const tableHeader = [`Product`, `Price`, `Customer's Email`, `Date`].map((title) => {
        return (
            <Th py={3} key={title}>
                {title}
            </Th>
        );
    });
    const tableOrder = Array.isArray(tableData)
        ? tableData.map((order: any) => {
              return (
                  <Tr _hover={{ bgColor: `purple.100`, cursor: `pointer` }} key={order.id}>
                      <Td>
                          <Flex gap={2} alignItems={`center`}>
                              <Avatar bgColor={`yellow.100`} src={order?.product?.thumbnail} borderRadius={`8px`} w={`100px`} h={`64px`} />
                              <Stack>
                                  <Text>{order?.product?.title}</Text>
                              </Stack>
                          </Flex>
                      </Td>
                      <Td>
                          <Flex>{formatCurrency(order.product?.price)}</Flex>
                      </Td>
                      <Td>
                          <Flex flexDir={`column`} gap={2} py={2}>
                              <Text>{order?.customer?.email}</Text>
                          </Flex>
                      </Td>
                      <Td>
                          <Flex>{`
                        ${formatDate(order?.created_at)}
                        ${formatTime(order?.created_at)}
                    `}</Flex>
                      </Td>
                  </Tr>
              );
          })
        : [];

    const handlePrevButton = async () => {
        try {
            await getAllOrders({ link: paginate?.links?.prev }).unwrap();
        } catch (error) {
            console.log(error);
        }
    };
    const handleNextButton = async () => {
        try {
            await getAllOrders({ link: paginate?.links?.next }).unwrap();
        } catch (error) {
            console.log(error);
        }
    };

    const showAllProducts = useCallback(async () => {
        try {
            await getAllOrders(null).unwrap();
        } catch (error) {
            return error;
        }
    }, [getAllOrders]);

    useEffect(() => {
        showAllProducts();
    }, [showAllProducts]);

    return (
        <>
            {/* <Skeleton isLoaded={!getProductsStatus.isLoading}>
                <CustomersTableControl />
            </Skeleton> */}
            <TableContainer
                display={`flex`}
                flexDir={`column`}
                height={tableData?.length ? `40rem` : `fit-Content`}
                justifyContent={`space-between`}
                overflowY={`auto`}
            >
                {getAllOrdersStatus.isLoading ? (
                    <OnBoardingLoader />
                ) : (
                    <Table size={`sm`} variant="simple">
                        {/* head */}
                        <Thead zIndex={1} pos={`sticky`} top={0}>
                            <Tr bgColor={`purple.100`} color={`grey.300`}>
                                {tableHeader}
                            </Tr>
                        </Thead>
                        {/* body */}
                        <Tbody color={`purple.300`}>{tableOrder}</Tbody>
                    </Table>
                )}
                {!tableData?.length && !getAllOrdersStatus.isLoading && (
                    <Box my={10}>
                        <DashboardEmptyState
                            content={{
                                title: '',
                                desc: 'Order Table is Empty.',
                                img: `https://res.cloudinary.com/kingsleysolomon/image/upload/v1700317427/productize/Illustration_4_pujumv.png`,
                            }}
                            textAlign={{ base: `center` }}
                            showImage
                        />
                    </Box>
                )}
            </TableContainer>
            {/* TABLE PAGINATION */}
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
