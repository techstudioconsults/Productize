import { Box } from "@chakra-ui/react";
import { ProductTable } from "../../../lib/tables/ProductTable";
import { ProductsTableControl } from "../../../lib/tables/tableControls/ProductsTableControl";

interface draftActiveProps {
    products: [];
}

const DeleteTabActive = ({ products }: draftActiveProps) => {
    return (
        <Box>
            <Box mb={4}>
                <ProductsTableControl />
            </Box>
            <ProductTable deleted tableData={products} />
        </Box>
    );
};

export default DeleteTabActive;
