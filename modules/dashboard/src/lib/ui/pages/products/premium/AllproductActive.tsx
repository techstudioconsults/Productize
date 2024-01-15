import { Box, SimpleGrid, Skeleton, Stack } from "@chakra-ui/react";
import { useCurrency } from "@productize-v1.0.0/modules/shared/hooks";
import { selectProductAnalytics, useGetProductAnalyticsMutation } from "@productize-v1.0.0/modules/shared/redux";
import { useSelector } from "react-redux";
import { DataWidgetCard } from "../../../DataWidgetCard";
import { ProductsTableControl } from "../../../tables/tableControls/ProductsTableControl";
import { ProductTable } from "../../../tables/ProductTable";
import { useCallback, useEffect } from "react";

interface draftActiveProps {
    products: [];
}

const AllproductActive = ({ products }: draftActiveProps) => {
    const [getProductsAnalytics, getProductsAnalyticsStatus] = useGetProductAnalyticsMutation();
    const productsAnalyics = useSelector(selectProductAnalytics);
    const formatCurrency = useCurrency();

    const showAllProducts = useCallback(async () => {
        try {
            await getProductsAnalytics(null).unwrap();
        } catch (error) {
            return error;
        }
    }, [getProductsAnalytics]);

    useEffect(() => {
        showAllProducts();
    }, [showAllProducts]);

    return (
        <Box my={8}>
            {/* grid cards */}
            <Box>
                <SimpleGrid gap={4} my={4} columns={{ base: 1, md: 4 }}>
                    <Skeleton isLoaded={!getProductsAnalyticsStatus.isLoading}>
                        <Box>
                            <DataWidgetCard showIcon={false} title={"Total Products"} value={productsAnalyics?.total_products} />
                        </Box>
                    </Skeleton>
                    <Skeleton isLoaded={!getProductsAnalyticsStatus.isLoading}>
                        <Box>
                            <DataWidgetCard showIcon={false} title={"Total Sales"} value={productsAnalyics?.total_sales} />
                        </Box>
                    </Skeleton>
                    <Skeleton isLoaded={!getProductsAnalyticsStatus.isLoading}>
                        <Box>
                            <DataWidgetCard showIcon={false} title={"Customers"} value={productsAnalyics?.total_customers} />
                        </Box>
                    </Skeleton>
                    <Skeleton isLoaded={!getProductsAnalyticsStatus.isLoading}>
                        <Box>
                            <DataWidgetCard showIcon={false} title={"Total Revenue"} value={formatCurrency(productsAnalyics?.total_revenues)} />
                        </Box>
                    </Skeleton>
                </SimpleGrid>
            </Box>
            {/* dropdown filters and buttons Controls */}
            <Stack mt={12} gap={4}>
                <ProductsTableControl />
                <ProductTable tableData={products} />
            </Stack>
        </Box>
    );
};

export default AllproductActive;
