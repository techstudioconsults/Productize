import { Box, Flex, Select, SimpleGrid, Text } from "@chakra-ui/react";
import LineChart from "./charts/Chart1";
import style from "./scss/graph.module.scss";
import { useEffect, useState } from "react";
import { selectProductAnalytics, useGetProductAnalyticsMutation } from "@productize-v1.0.0/modules/shared/redux";
import { useCurrency } from "@productize-v1.0.0/modules/shared/hooks";
import { useSelector } from "react-redux";

import { AnalyticsTable } from "./AnalyticsTable";
import { DataWidgetCard } from "../../DataWidgetCard";
import { DashboardEmptyState } from "../../empty-states/DashboardEmptyState";
import { HomeFilterController } from "../home/premium/components/HomeFilterController";

export const Analytics = () => {
    const [status, setStatus] = useState(``);
    const [emptyState] = useState(false);
    const [getProductAnaysis] = useGetProductAnalyticsMutation();
    const formatCurrency = useCurrency();
    const productAnaysis = useSelector(selectProductAnalytics);
    const currentMonth = new Date().toLocaleString("en-US", { month: "long" });

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
            <HomeFilterController />
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
                                <Flex w={`100%`} justifyContent={`flex-end`} alignItems={`center`} className={style.title} gap={5}>
                                    <Flex>
                                        <Select placeholder="Months" defaultValue={currentMonth}>
                                            <option value="January">January</option>
                                            <option value="February">February</option>
                                            <option value="March">March</option>
                                            <option value="April">April</option>
                                            <option value="May">May</option>
                                            <option value="June">June</option>
                                            <option value="July">July</option>
                                            <option value="August">August</option>
                                            <option value="September">September</option>
                                            <option value="October">October</option>
                                            <option value="November">November</option>
                                            <option value="December">December</option>
                                        </Select>
                                    </Flex>
                                    <Flex>
                                        <Select placeholder="View By Digital Product">
                                            <option value="option1">option 1</option>
                                            <option value="option2">option 2</option>
                                            <option value="option3">option 3</option>
                                        </Select>
                                    </Flex>
                                </Flex>
                            </div>
                            <div className={style.imgWrapper}>
                                <LineChart />
                            </div>
                            <Box my={10}>
                                <Text as={`h6`} my={5}>
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
};
