import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Flex, Avatar, Text, Box } from '@chakra-ui/react';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { DashboardEmptyState } from '../../empty-states/DashboardEmptyState';
import { useCurrency } from '@productize/hooks';
import { selectCurrentToken } from '@productize/redux';
import { OnBoardingLoader } from '@productize/ui';

export const AnalyticsTable = () => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const formatCurrency = useCurrency();
    const token = useSelector(selectCurrentToken);

    const tableHeader = [`Latest Purchase`, `View`, `Price`, `Purchases`, `Revenue`].map((title) => {
        return (
            <Th py={3} key={title}>
                {title}
            </Th>
        );
    });
    const tableContent = data?.data?.map((content) => {
        return (
            <Tr key={content?.id}>
                <Td>
                    <Flex gap={2} alignItems={`center`}>
                        <Avatar zIndex={-1} bgColor={`yellow.100`} src={content?.thumbnail} borderRadius={`4px`} boxSize={`44px`} />
                        <Text>{content?.title}</Text>
                    </Flex>
                </Td>
                <Td>
                    <Flex>N/A</Flex>
                </Td>
                <Td>
                    <Flex>{formatCurrency(content?.price)}</Flex>
                </Td>
                <Td>
                    <Flex>{content?.total_order}</Flex>
                </Td>
                <Td>
                    <Flex>{formatCurrency(content?.total_sales)}</Flex>
                </Td>
            </Tr>
        );
    });

    const getTableData = useCallback(async () => {
        setLoading(true);
        try {
            const res = await axios.get(`https://productize-api.techstudio.academy/api/products/top`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(res.data);
            if (res.status === 200) {
                setData(res.data);
                setLoading(false);
            }
        } catch (error) {
            setLoading(false);
            console.error(error);
        }
    }, [token]);

    useEffect(() => {
        getTableData();
    }, [getTableData]);

    if (isLoading) {
        return <OnBoardingLoader />;
    }

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
            {!data?.data?.length && (
                <Box my={10}>
                    <DashboardEmptyState
                        content={{
                            title: '',
                            desc: 'You do not have Customers activities yet.',
                            img: `https://res.cloudinary.com/kingsleysolomon/image/upload/v1700317427/productize/Illustration_4_pujumv.png`,
                        }}
                        textAlign={{ base: `center` }}
                        showImage
                    />
                </Box>
            )}
        </TableContainer>
    );
};
