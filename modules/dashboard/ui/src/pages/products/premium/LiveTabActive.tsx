import { Box } from "@chakra-ui/react";
import { ProductTable } from "../../../lib/tables/ProductTable";
import { ProductsTableControl } from "../../../lib/tables/tableControls/ProductsTableControl";

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
