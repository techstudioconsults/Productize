import { Box, SimpleGrid, Skeleton, Text } from "@chakra-ui/react";

import { useEffect, useState } from "react";
import { selectProductAnalytics, useGetProductAnalyticsMutation } from "@productize-v1.0.0/modules/shared/redux";
import { useSelector } from "react-redux";
import { useCurrency } from "@productize-v1.0.0/modules/shared/hooks";
import { HomeFilterController } from "./components/HomeFilterController";
import { DataWidgetCard } from "../../../DataWidgetCard";
import { DashboardEmptyState } from "../../../empty-states/DashboardEmptyState";
import { DashboardTable } from "../../../tables/DashboardTable";

const ActiveUserPage = () => {
    const [emptyState] = useState(false);
    const [getProductAnaysis, getProductAnaysisStatus] = useGetProductAnalyticsMutation();
    const formatCurrency = useCurrency();
    const productAnaysis = useSelector(selectProductAnalytics);

    useEffect(() => {
        getProductAnaysis(null).unwrap();
    }, [getProductAnaysis]);

    return (
        <Box my={8}>
            {/* dropdown filters and buttons Controls */}
            <HomeFilterController showRefreshBtn />
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
                                title={"Total Sales"}
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
                                title={"Total Revenue"}
                                value={formatCurrency(productAnaysis.total_revenues)}
                            />
                        </Box>
                    </Skeleton>
                </SimpleGrid>
                <SimpleGrid gap={4} my={4} columns={{ base: 1, md: 3 }}>
                    <Skeleton isLoaded={!getProductAnaysisStatus.isLoading}>
                        <Box>
                            <DataWidgetCard showIcon={false} title={"New Order"} value={productAnaysis.new_orders} />
                        </Box>
                    </Skeleton>
                    <Skeleton isLoaded={!getProductAnaysisStatus.isLoading}>
                        <Box>
                            <DataWidgetCard showIcon={false} title={"New Order Revenue"} value={formatCurrency(productAnaysis.new_orders_revenue)} />
                        </Box>
                    </Skeleton>
                    <Skeleton isLoaded={!getProductAnaysisStatus.isLoading}>
                        <Box>
                            <DataWidgetCard
                                showIcon={false}
                                title={"Total Products"}
                                value={productAnaysis.total_products}
                                // value={formatCurrency(productAnaysis.total_products)}
                            />
                        </Box>
                    </Skeleton>
                </SimpleGrid>
            </Box>
            {/* empty state */}
            <Box my={10}>
                <Text as={`h6`}>Sales</Text>
                <Box mt={4}>
                    {emptyState ? (
                        <DashboardEmptyState
                            content={{
                                title: "",
                                desc: "You do not have any sales activities yet.",
                                img: `https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951005/productize/Illustration_oblvox_athyeh.png`,
                            }}
                            textAlign={{ base: `center` }}
                            showImage
                        />
                    ) : (
                        <DashboardTable />
                    )}
                </Box>
            </Box>
        </Box>
    );
};

export default ActiveUserPage;