/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Flex, Avatar, Text, Stack } from '@chakra-ui/react';
import { useCurrency, useDate, useTime } from '@productize/hooks';

interface tableProps {
    draft?: boolean;
    live?: boolean;
    deleted?: boolean;
    tableData: [];
}

export const CustomerDetailsTable = ({ tableData }: tableProps) => {
    const formatCurrency = useCurrency();
    const formatDate = useDate();
    const formatTime = useTime();

    const tableHeader = [`Latest Purchase`, `Price`, `Date`].map((title) => {
        return (
            <Th py={3} key={title}>
                {title}
            </Th>
        );
    });
    const tableCustomer = tableData?.map((customer: any) => {
        return (
            <Tr _hover={{ bgColor: `purple.100`, cursor: `pointer` }} key={customer.id}>
                <Td>
                    {/* use navigate to tap into all row */}
                    <Flex gap={2} alignItems={`center`}>
                        <Avatar bgColor={`yellow.100`} src={customer.product_thumbnail} borderRadius={`8px`} w={`100px`} h={`64px`} />
                        <Stack>
                            <Text>{customer.product_title}</Text>
                            <Flex alignItems={`center`} color={`grey.400`}></Flex>
                        </Stack>
                    </Flex>
                </Td>
                <Td>
                    <Flex>{formatCurrency(customer.product_price)}</Flex>
                </Td>
                <Td>
                    <Flex>{`
                    ${formatDate(customer?.created_at)}
                    ${formatTime(customer?.created_at)}
                    `}</Flex>
                </Td>
            </Tr>
        );
    });

    return (
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
    );
};
