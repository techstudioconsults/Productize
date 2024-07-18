import { Box, Flex, SimpleGrid, Skeleton, Text, VStack, Select } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import style from './scss/graph.module.scss';
import { AnalyticsTable } from './AnalyticsTable';
import { DataWidgetCard } from '../../DataWidgetCard';
import { DashboardEmptyState } from '../../empty-states/DashboardEmptyState';
import { selectCurrentToken, selectProductAnalytics, useGetProductAnalyticsMutation } from '@productize/redux';
import { useCurrency } from '@productize/hooks';
import BarChart from './charts/BarChart';

const getDaysInMonth = (month) => {
    const year = new Date().getFullYear();
    return new Date(year, month, 0).getDate();
};

export const Analytics = () => {
    const token = useSelector(selectCurrentToken);
    const [isLoading, setLoading] = useState(true);
    const [viewBy, setViewBy] = useState('days');
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
    const [dailyRevenueData, setDailyRevenueData] = useState([]);
    const [getProductAnalytics] = useGetProductAnalyticsMutation();
    const formatCurrency = useCurrency();
    const productAnalysis = useSelector(selectProductAnalytics);

    const fetchDailyRevenueData = async (month) => {
        const year = new Date().getFullYear();
        const formattedMonth = month < 10 ? `0${month}` : month;
        const url = `https://productize-api.techstudio.academy/api/revenues/daily?month=${year}-${formattedMonth}`;
        try {
            const response = await axios.get(url, {
                headers: {
                    Authorization: 'Bearer ' + token,
                },
            });
            const data = response.data.data;
            console.log(data);
            const daysInMonth = getDaysInMonth(month);
            const dailyRevenueData = Array.from({ length: daysInMonth }, (_, index) => {
                const day = index + 1;
                const date = `${year}-${formattedMonth}-${day < 10 ? `0${day}` : day}`;
                return {
                    day,
                    revenue: data[date] ? data[date].amount : 0,
                };
            });
            return dailyRevenueData;
        } catch (error) {
            console.error('Error fetching daily revenue data:', error);
            return [];
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const res = await getProductAnalytics(null).unwrap();
            if (res.data) {
                setLoading(false);
            }
        };
        fetchData();
    }, [getProductAnalytics]);

    useEffect(() => {
        const updateRevenueData = async () => {
            const data = await fetchDailyRevenueData(currentMonth);
            setDailyRevenueData(data);
        };
        updateRevenueData();
    }, [currentMonth]);

    const handleMonthChange = (e) => {
        const selectedMonth = parseInt(e.target.value, 10);
        setCurrentMonth(selectedMonth);
    };

    const EmptyStateDisplay = () => (
        <DashboardEmptyState
            content={{
                title: '',
                desc: 'You do not have Customer activities yet.',
                img: 'https://res.cloudinary.com/kingsleysolomon/image/upload/v1700317427/productize/Illustration_4_pujumv.png',
            }}
            textAlign={{ base: 'center' }}
            showImage
        />
    );

    const ActiveStateDisplay = () => (
        <Box my={8}>
            <SimpleGrid gap={4} my={4} columns={{ base: 1, sm: 2, md: 3 }}>
                <DataWidgetCard showIcon={false} title="Order" value={0} />
                <DataWidgetCard showIcon={false} title="Views" value={0} />
                <DataWidgetCard showIcon={false} title="Revenue" value={formatCurrency(productAnalysis.total_revenues)} />
                <DataWidgetCard showIcon={false} title="New Order" value={productAnalysis.new_orders} />
                <DataWidgetCard showIcon={false} title="New Order Revenue" value={formatCurrency(productAnalysis.new_orders_revenue)} />
                <DataWidgetCard showIcon={false} title="Total Products" value={productAnalysis.total_products} />
            </SimpleGrid>

            <Box my={10}>
                <Text as="h6">Revenue Overview</Text>
                <Box mt={4}>
                    {productAnalysis?.total_products === 0 ? (
                        <EmptyStateDisplay />
                    ) : (
                        <section className={style.graphCard}>
                            <div className={style.header}>
                                <Flex w="100%" justifyContent="flex-end" alignItems="center" className={style.title} gap={5}>
                                    <Select placeholder="Months" value={currentMonth} onChange={handleMonthChange}>
                                        <option value="1">January</option>
                                        <option value="2">February</option>
                                        <option value="3">March</option>
                                        <option value="4">April</option>
                                        <option value="5">May</option>
                                        <option value="6">June</option>
                                        <option value="7">July</option>
                                        <option value="8">August</option>
                                        <option value="9">September</option>
                                        <option value="10">October</option>
                                        <option value="11">November</option>
                                        <option value="12">December</option>
                                    </Select>
                                    <Select disabled placeholder="View By Digital Product">
                                        <option value="digital-product">Digital Product</option>
                                        <option value="print-on-demand">Print on demand</option>
                                        <option value="video-stream">Video streaming</option>
                                        <option value="subscription">Subscription</option>
                                    </Select>
                                    <Select w={{ md: '20rem' }} placeholder="View By" onChange={(e) => setViewBy(e.target.value)} value={viewBy}>
                                        <option value="weeks">Weeks</option>
                                        <option value="days">Days</option>
                                    </Select>
                                </Flex>
                            </div>
                            <div className={style.imgWrapper}>
                                <BarChart data={dailyRevenueData} />
                            </div>
                            <Box my={10}>
                                <Text as="h6" my={5}>
                                    Top Product
                                </Text>
                                <AnalyticsTable />
                            </Box>
                        </section>
                    )}
                </Box>
            </Box>
        </Box>
    );

    if (isLoading) {
        return <AnalyticsSkeleton />;
    }

    return productAnalysis.total_products ? <ActiveStateDisplay /> : <EmptyStateDisplay />;
};

export default Analytics;

const AnalyticsSkeleton = () => {
    return (
        <Box p={5}>
            <SimpleGrid columns={{ sm: 2, md: 3 }} gap={6} mb={6}>
                <Skeleton borderRadius={8} p={5} height="7rem" borderWidth="1px" />
                <Skeleton borderRadius={8} p={5} height="7rem" borderWidth="1px" />
                <Skeleton borderRadius={8} p={5} height="7rem" borderWidth="1px" />
                <Skeleton borderRadius={8} p={5} height="7rem" borderWidth="1px" />
                <Skeleton borderRadius={8} p={5} height="7rem" borderWidth="1px" />
                <Skeleton borderRadius={8} p={5} height="7rem" borderWidth="1px" />
            </SimpleGrid>

            <Flex mt={20} justify="space-between" mb={6} gap={6}>
                <Skeleton borderRadius={8} height="40px" width="100%" />
                <Skeleton borderRadius={8} height="40px" width="100%" />
            </Flex>
            <Skeleton borderRadius={8} height="10rem" width="100%" />
            <VStack mt={5}>
                <Skeleton borderRadius={8} height="40px" width="100%" />
                <Skeleton borderRadius={8} height="40px" width="100%" />
                <Skeleton borderRadius={8} height="40px" width="100%" />
            </VStack>
        </Box>
    );
};
