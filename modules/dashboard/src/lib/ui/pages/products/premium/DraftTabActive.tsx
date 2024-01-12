import { Box } from "@chakra-ui/react";
import { ProductsTableControl } from "../../../tables/tableControls/ProductsTableControl";
import { ProductTable } from "../../../tables/ProductTable";

interface draftActiveProps {
    products: [];
}

const DraftTabActive = ({ products }: draftActiveProps) => {
    return (
        <>
            <Box mb={4}>
                <ProductsTableControl />
            </Box>
            <ProductTable tableData={products} />
        </>
    );
};

export default DraftTabActive;
