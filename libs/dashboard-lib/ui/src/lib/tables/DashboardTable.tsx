import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Flex,
  Avatar,
  Text,
} from '@chakra-ui/react';

export const DashboardTable = () => {
  const tableHeader = [`Product`, `Price`, `Customer's Email`, `Date`].map(
    (title) => {
      return (
        <Th py={3} key={title}>
          {title}
        </Th>
      );
    }
  );
  const tableContent = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((content) => {
    return (
      <Tr key={content}>
        <Td>
          <Flex gap={2} alignItems={`center`}>
            <Avatar
              zIndex={-1}
              bgColor={`yellow.100`}
              src="https://res.cloudinary.com/dkszgtapy/image/upload/v1692269980/learning_atvahc.gif"
              borderRadius={`4px`}
              boxSize={`44px`}
            />
            <Text>UX Design Fundamentals</Text>
          </Flex>
        </Td>
        <Td>
          <Flex>NGN 5.500</Flex>
        </Td>
        <Td>
          <Flex>example@gmail.com</Flex>
        </Td>
        <Td>
          <Flex>15 May 2023 8:00 am</Flex>
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
