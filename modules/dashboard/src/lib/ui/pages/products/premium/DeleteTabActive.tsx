import { Box } from "@chakra-ui/react";
import { ProductsTableControl } from "../../../tables/tableControls/ProductsTableControl";
import { ProductTable } from "../../../tables/ProductTable";

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
