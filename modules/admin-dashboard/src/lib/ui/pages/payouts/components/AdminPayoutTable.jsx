import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Flex, Text, Avatar, Tag, Box } from '@chakra-ui/react';
import { useCurrency, useDate, useTime } from '@productize/hooks';
import { selectPayouts, useGetPayoutsMutation } from '@productize/redux';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { DashboardEmptyState } from '../../../empty-states/AdminDashboardEmptyState';

export const AdminPayoutTable = () => {
    const [getPayouts] = useGetPayoutsMutation();
    const payouts = useSelector(selectPayouts);
    const formatCurrency = useCurrency();
    const formatDate = useDate();
    const formatTime = useTime();

    const showPayouts = useCallback(async () => {
        try {
            await getPayouts(null).unwrap();
        } catch (error) {
            return error;
        }
    }, [getPayouts]);

    useEffect(() => {
        showPayouts();
    }, [showPayouts]);

    // if (getPayoutsStatus.isLoading) {
    //     return <OnBoardingLoader />;
    // }

    function calculatePercentage(percentage, baseValue) {
        const percentageDecimal = percentage / 100;
        const result = percentageDecimal * baseValue;
        return result;
    }

    const tableHeader = [`Price`, `Bank Account`, `Period`].map((title) => {
        return (
            <Th py={3} key={title}>
                {title}
            </Th>
        );
    });

    const withdrawEarnings = payouts?.map((earning) => {
        return (
            <Tr _hover={{ bgColor: `purple.100` }} key={earning.id}>
                <Td>
                    <Flex alignItems={`center`}>
                        <Text>{formatCurrency(earning.amount)}</Text>
                    </Flex>
                </Td>
                <Td py={5}>
                    <Flex alignItems={`center`} gap={5}>
                        <Avatar size={`xs`} name={earning.bank_name} src={null} />
                        <Text>{`${earning.bank_name} ${earning?.account?.number?.slice(0, 3)}****${earning?.account?.number?.slice(7)}`}</Text>
                    </Flex>
                </Td>
                <Td>
                    <Flex>{`
                    ${formatDate(earning?.created_at)}
                    ${formatTime(earning?.created_at)}
                    `}</Flex>
                </Td>
                {/* <Td>
                    <Flex>
                        <Tag
                            bg={earning.status === `pending` ? `yellow.200` : earning.status === `completed` ? `green.200` : `red.200`}
                            color={`grey.100`}
                            fontWeight={600}
                            size={`lg`}
                            fontSize={`sm`}
                        >
                            {earning?.status}
                        </Tag>
                    </Flex>
                </Td> */}
                {/* <Td>
                    <Flex>
                        <Tag bg={`grey.200`} color={`green.300`} fontWeight={600} size={`lg`} fontSize={`sm`}>
                            5%
                        </Tag>
                    </Flex>
                </Td> */}
                {/* <Td>
                    <Flex>
                        <Tag bg={`grey.200`} color={`green.200`} fontWeight={600} size={`lg`} fontSize={`sm`}>
                            {formatCurrency(calculatePercentage(5, earning?.amount))}
                        </Tag>
                    </Flex>
                </Td> */}
            </Tr>
        );
    });

    return (
        <>
            <TableContainer display={`flex`} flexDir={`column`} justifyContent={`space-between`} overflowY={`auto`}>
                <Table size={`sm`} variant="simple">
                    {/* head */}
                    <Thead zIndex={1} pos={`sticky`} top={0}>
                        <Tr bgColor={`purple.100`} color={`grey.300`}>
                            {tableHeader}
                        </Tr>
                    </Thead>
                    {/* body */}
                    <Tbody color={`purple.300`}>{withdrawEarnings}</Tbody>
                </Table>
                {!payouts?.length && (
                    <Box my={10}>
                        <DashboardEmptyState
                            content={{
                                title: '',
                                desc: 'Payout Table is Empty.',
                                img: `https://res.cloudinary.com/kingsleysolomon/image/upload/v1700317427/productize/Illustration_4_pujumv.png`,
                            }}
                            textAlign={{ base: `center` }}
                            showImage
                            hideCta={true}
                        />
                    </Box>
                )}
            </TableContainer>
            {/* TABLE PAGINATION */}
        </>
    );
};
