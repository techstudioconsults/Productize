import { Box } from "@chakra-ui/react";
import { ProductsTableControl } from "../../../tables/tableControls/ProductsTableControl";
import { ProductTable } from "../../../tables/ProductTable";

interface liveActiveProps {
    products: [];
}

const LiveTabActive = ({ products }: liveActiveProps) => {
    return (
        <>
            <Box my={4}>
                <ProductsTableControl />
            </Box>
            <ProductTable tableData={products} />
        </>
    );
};

export default LiveTabActive;
