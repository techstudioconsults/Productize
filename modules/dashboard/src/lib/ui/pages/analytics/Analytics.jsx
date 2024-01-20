import { Box, Flex, Select, SimpleGrid, Text } from "@chakra-ui/react";
import LineChart from "./charts/Chart1";
import style from "./scss/graph.module.scss";
import { useEffect, useState } from "react";
import { selectProductAnalytics, useGetProductAnalyticsMutation } from "@productize-v1.0.0/modules/shared/redux";
import { useCurrency } from "@productize-v1.0.0/modules/shared/hooks";
import { useSelector } from "react-redux";

import { AnalyticsTable } from "./AnalyticsTable";
import { ProductsTableControl } from "../../tables/tableControls/ProductsTableControl";
import { DataWidgetCard } from "../../DataWidgetCard";
import { DashboardEmptyState } from "../../empty-states/DashboardEmptyState";

export const Analytics = () => {
    const [status, setStatus] = useState(``);
    const [emptyState] = useState(false);
    const [getProductAnaysis] = useGetProductAnalyticsMutation();
    const formatCurrency = useCurrency();
    const productAnaysis = useSelector(selectProductAnalytics);

    const data = [`All`, `Draft`, `Published`].map((item) => ({
        label: item,
        value: item,
    }));

    useEffect(() => {
        getProductAnaysis(null).unwrap();
    }, [getProductAnaysis]);

    const handleStatusChange = (value) => {
        setStatus(value.toLowerCase());
    };

    return (
        <Box my={8}>
            {/* dropdown filters and buttons Controls */}
            <ProductsTableControl showRefreshBtn />
            {/* grid cards */}
            <Box>
                <SimpleGrid gap={4} my={4} columns={{ base: 1, md: 3 }}>
                    <Box>
                        <DataWidgetCard showIcon={false} title={"Order"} value={0} />
                    </Box>
                    <Box>
                        <DataWidgetCard showIcon={false} title={"Views"} value={0} />
                    </Box>
                    <Box>
                        <DataWidgetCard showIcon={false} title={"Revenue"} value={formatCurrency(productAnaysis.total_revenues)} />
                    </Box>
                    <Box>
                        <DataWidgetCard showIcon={false} title={"New Order"} value={productAnaysis.new_orders} />
                    </Box>
                    <Box>
                        <DataWidgetCard showIcon={false} title={"New Order Revenue"} value={formatCurrency(productAnaysis.new_orders_revenue)} />
                    </Box>
                    <Box>
                        <DataWidgetCard showIcon={false} title={"Total Products"} value={productAnaysis.total_products} />
                    </Box>
                </SimpleGrid>
            </Box>
            {/* empty state */}
            <Box my={10}>
                <Text as={`h6`}>Revenue Overview</Text>
                <Box mt={4}>
                    {emptyState ? (
                        <DashboardEmptyState
                            content={{
                                title: "",
                                desc: "You do not have any Customer activities yet.",
                                img: `https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951005/productize/Illustration_oblvox_athyeh.png`,
                            }}
                            textAlign={{ base: `center` }}
                            showImage
                        />
                    ) : (
                        <section className={style.graphCard}>
                            <div className={style.header}>
                                <Flex w={`100%`} justifyContent={`space-between`} alignItems={`center`} className={style.title}>
                                    <Flex color={`grey.300`} gap={5}>
                                        {/* <Text>Orders (2)</Text>
                                        <Text>Cancellted (1)</Text>
                                        <Text>Product Sold (2)</Text> */}
                                    </Flex>
                                    <Flex>
                                        <Select placeholder="View By Months">
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            <option value="option3">Option 3</option>
                                        </Select>
                                    </Flex>
                                </Flex>
                            </div>
                            <div className={style.imgWrapper}>
                                <LineChart />
                            </div>
                            <Box my={10}>
                                <Text as={`h6`}>Top Product</Text>
                                <AnalyticsTable />
                            </Box>
                        </section>
                    )}
                </Box>
            </Box>
        </Box>
    );
};
