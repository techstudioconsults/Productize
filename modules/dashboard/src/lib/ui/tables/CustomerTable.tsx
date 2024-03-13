import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Flex, Text, Stack, Box } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useCurrency, useDate, useTime } from '@productize/hooks';
import { selectCustomersMetaData, useGetAllCustomersMutation } from '@productize/redux';
import { SharedButton } from '@productize/ui';

interface tableProps {
    draft?: boolean;
    live?: boolean;
    deleted?: boolean;
    tableData: [];
}

export const CustomerTable = ({ draft, live, deleted, tableData }: tableProps) => {
    const [getAllCustomers, getAllCustomersStatus] = useGetAllCustomersMutation();
    const navigate = useNavigate();
    const formatCurrency = useCurrency();
    const formatDate = useDate();
    const formatTime = useTime();
    const paginate = useSelector(selectCustomersMetaData);

    const tableHeader = [`Customer Name`, `Customer Email`, `Latest Purchase`, `Price`, `Date`].map((title) => {
        return (
            <Th py={3} key={title}>
                {title}
            </Th>
        );
    });
    const tableCustomer = tableData?.map((customer: any) => {
        return (
            <Tr _hover={{ bgColor: `purple.100`, cursor: `pointer` }} onClick={() => navigate(`/dashboard/customers/${customer.id}`)} key={customer.id}>
                <Td>
                    <Flex alignItems={`center`} color={`grey.400`}>
                        <Text>{customer?.name}</Text>
                    </Flex>
                </Td>
                <Td>
                    <Flex>{customer?.email}</Flex>
                </Td>
                <Td>
                    {/* if show sale count is true */}
                    <Flex flexDir={`column`} gap={2} py={2}>
                        <Text>{customer?.id}</Text>
                        <Text fontWeight={`light`} letterSpacing={1} fontSize={`xs`} color={`grey.300`}>
                            {customer?.id}
                        </Text>
                    </Flex>
                </Td>
                <Td>
                    <Flex>{formatCurrency(customer.total_transactions)}</Flex>
                </Td>
                <Td>
                    <Flex>{`
                    ${formatDate(customer?.latest_purchase_date)}
                    ${formatTime(customer?.latest_purchase_date)}
                    `}</Flex>
                </Td>
            </Tr>
        );
    });

    const handlePrevButton = async () => {
        try {
            await getAllCustomers({ link: paginate?.links?.prev }).unwrap();
        } catch (error) {
            console.log(error);
        }
    };
    const handleNextButton = async () => {
        try {
            await getAllCustomers({ link: paginate?.links?.next }).unwrap();
        } catch (error) {
            console.log(error);
        }
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
                    <Tbody color={`purple.300`}>{tableCustomer}</Tbody>
                </Table>
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
