import { Box } from "@chakra-ui/react";
import { ProductsTableControl } from "../../../tables/tableControls/ProductsTableControl";
import { ProductTable } from "../../../tables/ProductTable";
import { LiveTable } from "../../../tables/LiveTable";

interface liveActiveProps {
    products: [];
}

const LiveTabActive = ({ products }: liveActiveProps) => {
    return (
        <>
            <Box my={4}>
                <ProductsTableControl />
            </Box>
            <LiveTable live tableData={[]} />
        </>
    );
};

export default LiveTabActive;
