import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Flex, Text, Tag, IconButton } from '@chakra-ui/react';

import { Icon } from '@iconify/react';
import { useCurrency, useDate, useTime } from '@productize/hooks';

export const BillingCycleTable = ({ tableData }) => {
    const formatCurrency = useCurrency();
    const formatDate = useDate();
    const formatTime = useTime();

    const tableHeader = [`Plan`, `Price`, `Date`, `Status`, `Download`].map((title) => {
        return (
            <Th py={3} key={title}>
                {title}
            </Th>
        );
    });
    const tableBills = tableData?.map((bill) => {
        return (
            <Tr key={bill.reference}>
                <Td>
                    <Text>{bill?.plan}</Text>
                </Td>
                <Td>
                    <Text>{formatCurrency(bill.price)}</Text>
                </Td>
                <Td>
                    <Flex>{`
                    ${formatDate(bill?.date)}
                    ${formatTime(bill?.date)}
                    `}</Flex>
                </Td>
                <Td>
                    <Tag bgColor={`green.100`} color={`green.200`}>
                        {bill?.status}
                    </Tag>
                </Td>
                <Td>
                    <IconButton isDisabled size={`sm`}>
                        <Icon fontSize={`1.2rem`} icon={`material-symbols:download`} />
                    </IconButton>
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
                <Tbody color={`purple.300`}>{tableBills}</Tbody>
            </Table>
        </TableContainer>
    );
};
