import React, { useEffect } from 'react';
import { Box, Flex, SimpleGrid, Skeleton, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { DashboardBanner } from '../../../DashboardBanner';
import { DashboardRadioBtnComp } from '../../../DashboardRadioBtnComp';
import ProgressBar from '../../../ProgressBar';
import { DataWidgetCard } from '../../../DataWidgetCard';
import { useCurrency } from '@productize/hooks';
import { useProductAnalytics, useUser } from '../services/services';

const FirstSalePage: React.FC = () => {
    const navigate = useNavigate();
    const formatCurrency = useCurrency();
    const { user, refreshUser } = useUser();
    const { productAnalytics, isLoading } = useProductAnalytics();

    useEffect(() => {
        refreshUser();
    }, [refreshUser]);

    return (
        <>
            <SimpleGrid columns={{ base: 1, xl: 2 }} gap={8} p={0} my={8}>
                <Box>
                    <DashboardBanner
                        alignContent="center"
                        height="100%"
                        img="https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951034/productize/Illustration_2_fslyo9_vfqfto.png"
                        bgImg="https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951013/productize/Lines_t1t27k_gg0jau.png"
                        title="Welcome to ByteAlley."
                        desc="Complete your profile to start getting your products published."
                        py={8}
                        px={8}
                    />
                </Box>
                <Box>
                    <Flex
                        flexDir={{ base: 'column', md: 'row' }}
                        my={8}
                        justifyContent="space-between"
                        alignItems={{ base: 'flex-start', md: 'center' }}
                        gap={8}
                    >
                        <Box>
                            <Text as="h6" fontWeight="bold">
                                Get Started Guide
                            </Text>
                            <Text color="grey.400">Use this personalized guide to get your store up and running.</Text>
                        </Box>
                        <Box>
                            <ProgressBar />
                        </Box>
                    </Flex>
                    <Box>
                        <DashboardRadioBtnComp
                            display={user?.profile_completed ? 'none' : 'flex'}
                            isChecked={user?.profile_completed}
                            title="Customize your profile"
                            subTitle="Complete your profile to start getting your products published."
                            image="https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951003/productize/Star_6_alusuk_sbe2un.png"
                            btn={{
                                onClick: () => navigate(`/dashboard/profile/${user?.id}`),
                            }}
                            btnText="Customize Profile"
                        />
                        <DashboardRadioBtnComp
                            display={user?.payout_setup ? 'none' : 'flex'}
                            isChecked={user?.payout_setup}
                            title="Set up your payout account"
                            subTitle="Complete your profile to start getting your products published."
                            image="https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951033/productize/Illustration_1_wdmvgf_jpnhgm.png"
                            btn={{
                                onClick: () => navigate(`/dashboard/settings#payment`),
                            }}
                            btnText="Make Money"
                        />
                        <DashboardRadioBtnComp
                            display={user?.first_sale ? 'none' : 'flex'}
                            isChecked={user?.first_sale}
                            title="Make your first sale"
                            subTitle="Complete your profile to start getting your products published."
                            image="https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951025/productize/Frame_40446_y425kr_pcfgv4.png"
                            btn={{}}
                            btnText="Make Sale"
                        />
                    </Box>
                </Box>
            </SimpleGrid>
            <Box>
                <SimpleGrid gap={4} my={4} columns={{ base: 1, md: 2 }}>
                    <Skeleton borderRadius={8} isLoaded={!isLoading}>
                        <Box>
                            <DataWidgetCard
                                tmy={2}
                                bmt={4}
                                showIcon
                                bgImg="https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951020/productize/Data_widget_1_bqcsji_dvrrm5.png"
                                title="New Order Revenue"
                                value={formatCurrency(productAnalytics.new_orders_revenue)}
                            />
                        </Box>
                    </Skeleton>
                    <Skeleton borderRadius={8} isLoaded={!isLoading}>
                        <Box>
                            <DataWidgetCard
                                tmy={2}
                                bmt={4}
                                showIcon
                                bgImg="https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951021/productize/Data_widget_2_fwd9pa_nhxqwd.png"
                                title="Total Revenue"
                                value={formatCurrency(productAnalytics.total_revenues)}
                            />
                        </Box>
                    </Skeleton>
                </SimpleGrid>
                <SimpleGrid gap={4} my={4} columns={{ base: 1, md: 3 }}>
                    <Skeleton borderRadius={8} isLoaded={!isLoading}>
                        <Box>
                            <DataWidgetCard showIcon={false} title="New Order" value={productAnalytics.new_orders} />
                        </Box>
                    </Skeleton>
                    <Skeleton borderRadius={8} isLoaded={!isLoading}>
                        <Box>
                            <DataWidgetCard title="Total Sales" showIcon={false} value={productAnalytics.total_sales} />
                        </Box>
                    </Skeleton>
                    <Skeleton borderRadius={8} isLoaded={!isLoading}>
                        <Box>
                            <DataWidgetCard showIcon={false} title="Total Products" value={productAnalytics.total_products} />
                        </Box>
                    </Skeleton>
                </SimpleGrid>
            </Box>
        </>
    );
};

export default FirstSalePage;
