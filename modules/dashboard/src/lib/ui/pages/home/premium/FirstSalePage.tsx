import { Box, Flex, SimpleGrid, Skeleton, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { DashboardBanner } from '../../../DashboardBanner';
import { DashboardRadioBtnComp } from '../../../DashboardRadioBtnComp';

import ProgressBar from '../../../ProgressBar';
import { DashboardTable } from '../../../tables/DashboardTable';
import { selectCurrentUser, selectProductAnalytics, useGetProductAnalyticsMutation, useGetUserMutation } from '@productize/redux';
import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataWidgetCard } from '../../../DataWidgetCard';
import { useCurrency } from '@productize/hooks';

const FirstSalePage = () => {
    const navigate = useNavigate();
    const [getUser] = useGetUserMutation();
    const user = useSelector(selectCurrentUser);
    const [getProductAnaysis, getProductAnaysisStatus] = useGetProductAnalyticsMutation();
    const formatCurrency = useCurrency();
    const productAnaysis = useSelector(selectProductAnalytics);

    useEffect(() => {
        const refresh = async () => {
            await getUser(null).unwrap();
        };
        refresh();
    }, [getUser]);

    const showAllStats = useCallback(async () => {
        try {
            await getUser(null).unwrap();
            await getProductAnaysis(null).unwrap();
        } catch (error) {
            return error;
        }
    }, [getProductAnaysis, getUser]);

    useEffect(() => {
        showAllStats();
    }, [getProductAnaysis, showAllStats]);

    return (
        <>
            <SimpleGrid columns={{ base: 1, xl: 2 }} gap={8} p={0} my={8}>
                <Box>
                    <DashboardBanner
                        alignContent="center"
                        height={`100%`}
                        img={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951034/productize/Illustration_2_fslyo9_vfqfto.png`}
                        bgImg={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951013/productize/Lines_t1t27k_gg0jau.png`}
                        title={'Welcome to productize.'}
                        desc={'Complete your profile to start getting your products published.'}
                        py={8}
                        px={8}
                    />
                </Box>
                <Box>
                    <Flex
                        flexDir={{ base: `column`, md: `row` }}
                        my={8}
                        justifyContent={`space-between`}
                        alignItems={{ base: `flex-start`, md: `center` }}
                        gap={8}
                    >
                        <Box>
                            <Text as={`h6`} fontWeight={`bold`}>
                                Get Started Guide
                            </Text>
                            <Text color={`grey.400`}>Use this personalized guide to get your store up and running.</Text>
                        </Box>
                        <Box>
                            <ProgressBar />
                        </Box>
                    </Flex>
                    <Box>
                        <DashboardRadioBtnComp
                            display={user?.profile_completed ? `none` : `flex`}
                            isChecked={user?.profile_completed}
                            title={'Customize your profile'}
                            subTitle={'Complete your profile to start getting your products published.'}
                            image={'https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951003/productize/Star_6_alusuk_sbe2un.png'}
                            btn={{
                                onClick: () => navigate(`/dashboard/profile/${user?.id}`),
                            }}
                            btnText={'Customize Profile'}
                        />
                        <DashboardRadioBtnComp
                            display={user?.payout_setup ? `none` : `flex`}
                            isChecked={user?.payout_setup}
                            title={'Set up your payout account'}
                            subTitle={'Complete your profile to start getting your products published.'}
                            image={'https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951033/productize/Illustration_1_wdmvgf_jpnhgm.png'}
                            btn={{
                                onClick: () => navigate(`/dashboard/settings#payment`),
                            }}
                            btnText={'Make Money'}
                        />

                        <DashboardRadioBtnComp
                            display={user?.first_sale ? `none` : `flex`}
                            isChecked={user?.first_sale}
                            title={'make your first sale'}
                            subTitle={'Complete your profile to start getting your products published.'}
                            image={'https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951025/productize/Frame_40446_y425kr_pcfgv4.png'}
                            btn={{}}
                            btnText={'Make Sale'}
                        />
                    </Box>
                </Box>
            </SimpleGrid>
            {/* grid cards */}
            <Box>
                <SimpleGrid gap={4} my={4} columns={{ base: 1, md: 2 }}>
                    <Skeleton isLoaded={!getProductAnaysisStatus.isLoading}>
                        <Box>
                            <DataWidgetCard
                                tmy={2}
                                bmt={4}
                                showIcon
                                bgImg="https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951020/productize/Data_widget_1_bqcsji_dvrrm5.png"
                                title={'Total Sales'}
                                // value={formatCurrency(productAnaysis.total_sales)}
                                value={productAnaysis.total_sales}
                            />
                        </Box>
                    </Skeleton>
                    <Skeleton isLoaded={!getProductAnaysisStatus.isLoading}>
                        <Box>
                            <DataWidgetCard
                                tmy={2}
                                bmt={4}
                                showIcon
                                bgImg="https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951021/productize/Data_widget_2_fwd9pa_nhxqwd.png"
                                title={'Total Revenue'}
                                value={formatCurrency(productAnaysis.total_revenues)}
                            />
                        </Box>
                    </Skeleton>
                </SimpleGrid>
                <SimpleGrid gap={4} my={4} columns={{ base: 1, md: 3 }}>
                    <Skeleton isLoaded={!getProductAnaysisStatus.isLoading}>
                        <Box>
                            <DataWidgetCard showIcon={false} title={'New Order'} value={productAnaysis.new_orders} />
                        </Box>
                    </Skeleton>
                    <Skeleton isLoaded={!getProductAnaysisStatus.isLoading}>
                        <Box>
                            <DataWidgetCard showIcon={false} title={'New Order Revenue'} value={formatCurrency(productAnaysis.new_orders_revenue)} />
                        </Box>
                    </Skeleton>
                    <Skeleton isLoaded={!getProductAnaysisStatus.isLoading}>
                        <Box>
                            <DataWidgetCard showIcon={false} title={'Total Products'} value={productAnaysis.total_products} />
                        </Box>
                    </Skeleton>
                </SimpleGrid>
            </Box>
            {/* empty state */}
            {/* {!user?.first_product_created ? null : (
                <Box>
                    <Text as={`h6`}>Activity</Text>

                    <Box mt={4}>
                        <DashboardTable data={undefined} status={undefined} />
                    </Box>
                </Box>
            )} */}
        </>
    );
};

export default FirstSalePage;
