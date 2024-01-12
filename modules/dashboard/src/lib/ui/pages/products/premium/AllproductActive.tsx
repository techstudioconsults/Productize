import { Box, SimpleGrid, Stack } from "@chakra-ui/react";
import { useCurrency } from "@productize-v1.0.0/modules/shared/hooks";
import { selectProductAnalytics } from "@productize-v1.0.0/modules/shared/redux";
import { SpinnerComponentSmall } from "@productize-v1.0.0/modules/shared/ui";
import { useSelector } from "react-redux";
import { DataWidgetCard } from "../../../DataWidgetCard";
import { ProductsTableControl } from "../../../tables/tableControls/ProductsTableControl";
import { ProductTable } from "../../../tables/ProductTable";

interface draftActiveProps {
    products: [];
}

const AllproductActive = ({ products }: draftActiveProps) => {
    // const allProducts = useSelector(selectAllProducts);
    const productsAnalyics = useSelector(selectProductAnalytics);
    const formatCurrency = useCurrency();

    return (
        <Box my={8}>
            {/* grid cards */}
            <Box>
                <SimpleGrid gap={4} my={4} columns={{ base: 1, md: 4 }}>
                    <Box>
                        <DataWidgetCard showIcon={false} title={"Total Products"} value={productsAnalyics?.total_products} />
                    </Box>
                    <Box>
                        <DataWidgetCard showIcon={false} title={"Total Sales"} value={productsAnalyics?.total_sales} />
                    </Box>
                    <Box>
                        <DataWidgetCard showIcon={false} title={"Customers"} value={productsAnalyics?.total_customers} />
                    </Box>
                    <Box>
                        <DataWidgetCard showIcon={false} title={"Total Revenue"} value={formatCurrency(productsAnalyics?.total_revenues)} />
                    </Box>
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
