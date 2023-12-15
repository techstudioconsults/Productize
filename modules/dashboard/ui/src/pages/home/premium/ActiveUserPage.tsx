import { Box, SimpleGrid, Text } from "@chakra-ui/react";

import { useEffect, useState } from "react";
import { DataWidgetCard } from "../../../lib/DataWidgetCard";
import { DashboardEmptyState } from "../../../lib/empty-states/DashboardEmptyState";
import { DashboardTable } from "../../../lib/tables/DashboardTable";
import { ProductsTableControl } from "../../../lib/tables/tableControls/ProductsTableControl";
import { selectProductAnalytics, useGetProductAnalyticsMutation } from "@productize-v1.0.0/modules/shared/redux";
import { useSelector } from "react-redux";
import { useCurrency } from "@productize-v1.0.0/modules/shared/hooks";

const ActiveUserPage = () => {
    const [emptyState] = useState(false);
    const [getProductAnaysis] = useGetProductAnalyticsMutation();
    const formatCurrency = useCurrency();
    const productAnaysis = useSelector(selectProductAnalytics);

    useEffect(() => {
        getProductAnaysis(null).unwrap();
    }, [getProductAnaysis]);

    return (
        <Box my={8}>
            {/* dropdown filters and buttons Controls */}
            <ProductsTableControl showRefreshBtn />
            {/* grid cards */}
            <Box>
                <SimpleGrid gap={4} my={4} columns={{ base: 1, md: 2 }}>
                    <Box>
                        <DataWidgetCard
                            tmy={2}
                            bmt={4}
                            showIcon
                            bgImg="https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951020/productize/Data_widget_1_bqcsji_dvrrm5.png"
                            title={"Total Sales"}
                            value={formatCurrency(productAnaysis.total_sales)}
                        />
                    </Box>
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
                </SimpleGrid>
                <SimpleGrid gap={4} my={4} columns={{ base: 1, md: 3 }}>
                    <Box>
                        <DataWidgetCard showIcon={false} title={"New Order"} value={formatCurrency(productAnaysis.new_orders)} />
                    </Box>
                    <Box>
                        <DataWidgetCard showIcon={false} title={"New Order Revenue"} value={formatCurrency(productAnaysis.new_orders_revenue)} />
                    </Box>
                    <Box>
                        <DataWidgetCard showIcon={false} title={"Total Products"} value={formatCurrency(productAnaysis.total_products)} />
                    </Box>
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
