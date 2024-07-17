/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Flex, Text, Stack, Box, Avatar } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectOrdersMetaData, useGetAllAdminOrdersMutation } from '@productize/redux';
import { useCurrency, useDate, useTime } from '@productize/hooks';
import { SharedButton } from '@productize/ui';

interface tableProps {
    tableData: [];
}

export const OrderTable = ({ tableData }: tableProps) => {
    const [getAllAdminOrders] = useGetAllAdminOrdersMutation();

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
    const tableOrder = tableData?.map((order: any) => {
        return (
            <Tr _hover={{ bgColor: `purple.100`, cursor: `pointer` }} key={order.id}>
                <Td>
                    <Flex gap={2} alignItems={`center`}>
                        <Avatar bgColor={`yellow.100`} src={order?.product?.thumbnail} borderRadius={`8px`} w={`100px`} h={`64px`} />
                        <Stack>
                            <Text>{order?.product?.title}</Text>
                            <Flex alignItems={`center`} color={`grey.400`}>
                                <Text className="tiny-text">{}</Text>
                            </Flex>
                        </Stack>
                    </Flex>
                </Td>
                <Td>
                    <Flex>{formatCurrency(order.product?.price)}</Flex>
                </Td>
                <Td>
                    {/* if show sale count is true */}
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
    });

    const handlePrevButton = () => {
        getAllAdminOrders({ link: paginate?.links?.prev }).unwrap();
    };
    const handleNextButton = () => {
        getAllAdminOrders({ link: paginate?.links?.next }).unwrap();
    };

    return (
        <>
            <TableContainer display={`flex`} flexDir={`column`} height={`40rem`} justifyContent={`space-between`} overflowY={`auto`}>
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
            </TableContainer>
            {/* TABLE PAGINATION */}
            <Flex
                display={paginate?.meta?.total > 2 ? `flex` : `none`}
                mt={4}
                gap={5}
                color={`grey.400`}
                alignItems={`center`}
                justifyContent={`space-between`}
                flexDir={{ base: `column-reverse`, lg: `row` }}
            >
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
