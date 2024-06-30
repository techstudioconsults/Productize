/* eslint-disable @nx/enforce-module-boundaries */
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Flex, Text } from '@chakra-ui/react';
import { useDate, useTime } from '@productize/hooks';
import { selectSingleProductCustomers } from '@productize/redux';
import { useSelector } from 'react-redux';

// USE REDUX TO FETCH THE DATA -- DANIEL

export const ProductCustomerTable = ({ status }) => {
    const customers = useSelector(selectSingleProductCustomers);
    const formatDate = useDate();
    const formatTime = useTime();

    const tableHeader = [`Customer name`, `Customer Email`, `Quantity`, `Date`].map((title) => {
        return (
            <Th py={3} key={title}>
                {title}
            </Th>
        );
    });
    const tableContent = customers?.map((content) => {
        return (
            <Tr key={content.id}>
                <Td>
                    <Flex gap={2} alignItems={`center`}>
                        <Text>{content?.customer?.name}</Text>
                    </Flex>
                </Td>
                <Td>
                    <Flex my={5}>{content?.customer?.email}</Flex>
                </Td>
                <Td>
                    <Flex>{content?.quantity}</Flex>
                </Td>
                <Td>
                    <Flex>{`
                    ${formatDate(content?.created_at)}
                    ${formatTime(content?.created_at)}
                    `}</Flex>
                </Td>
            </Tr>
        );
    });

    return (
        <TableContainer maxH={`25rem`} overflowY={`auto`}>
            <Table size={`sm`} variant="simple">
                {/* head */}
                <Thead pos={`sticky`} top={0}>
                    <Tr bgColor={`purple.100`} color={`grey.300`}>
                        {tableHeader}
                    </Tr>
                </Thead>
                {/* body */}
                <Tbody color={`purple.300`}>{tableContent}</Tbody>
            </Table>
        </TableContainer>
    );
};
