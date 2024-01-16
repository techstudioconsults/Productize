import { Box } from "@chakra-ui/react";
import { ProductsTableControl } from "../../../tables/tableControls/ProductsTableControl";
import { DraftTable } from "../../../tables/DraftTable";

interface draftActiveProps {
    products: [];
}

const DraftTabActive = ({ products }: draftActiveProps) => {
    return (
        <>
            <Box mb={4}>
                <ProductsTableControl />
            </Box>
            <DraftTable draft tableData={[]} />
        </>
    );
};

export default DraftTabActive;
