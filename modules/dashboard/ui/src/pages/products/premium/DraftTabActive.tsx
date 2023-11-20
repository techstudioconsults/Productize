import { Box } from "@chakra-ui/react";
import { ProductTable } from "../../../lib/tables/ProductTable";
import { ProductsTableControl } from "../../../lib/tables/tableControls/ProductsTableControl";

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
