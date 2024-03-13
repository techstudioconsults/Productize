import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Flex, Avatar, Text } from '@chakra-ui/react';
import { DashboardEmptyState } from '../empty-states/DashboardEmptyState';
import { useCurrency, useDate, useTime } from '@productize/hooks';
import { OnBoardingLoader } from '@productize/ui';

// USE REDUX TO FETCH THE DATA -- DANIEL

export const DashboardTable = ({ data, status }) => {
    console.log(data);

    const formatCurrrency = useCurrency();
    const formatDate = useDate();
    const formatTime = useTime();

    const tableHeader = [`Product`, `Price`, `Customer's Email`, `Date`].map((title) => {
        return (
            <Th py={3} key={title}>
                {title}
            </Th>
        );
    });
    const tableContent = data?.map((content) => {
        return (
            <Tr key={content.id}>
                <Td>
                    <Flex gap={2} alignItems={`center`}>
                        <Avatar zIndex={-1} bgColor={`yellow.100`} src={content.product_thumbnail} borderRadius={`4px`} boxSize={`44px`} />
                        <Text>{content?.product_title}</Text>
                    </Flex>
                </Td>
                <Td>
                    <Flex>{formatCurrrency(content?.product_price)}</Flex>
                </Td>
                <Td>
                    <Flex>{content?.customer_email}</Flex>
                </Td>
                <Td>
                    <Flex>
                        {formatDate(content?.created_at)}
                        {` `}
                        {formatTime(content?.created_at)}
                    </Flex>
                </Td>
            </Tr>
        );
    });

    return (
        <TableContainer maxH={`25rem`} overflowY={`auto`}>
            {status?.isLoading ? (
                <OnBoardingLoader />
            ) : data?.length ? (
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
            ) : (
                <DashboardEmptyState
                    content={{
                        title: '',
                        desc: 'You do not have any sales activities yet.',
                        img: `https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951005/productize/Illustration_oblvox_athyeh.png`,
                    }}
                    textAlign={{ base: `center` }}
                    showImage
                />
            )}
        </TableContainer>
    );
};
