import { Box } from "@chakra-ui/react";
import { ProductsTableControl } from "../../../tables/tableControls/ProductsTableControl";
import { DeletedTable } from "../../../tables/DeletedTable";

interface draftActiveProps {
    products: [];
}

const DeleteTabActive = ({ products }: draftActiveProps) => {
    return (
        <Box>
            <Box mb={4}>
                <ProductsTableControl />
            </Box>
            <DeletedTable deleted tableData={[]} />
        </Box>
    );
};

export default DeleteTabActive;
