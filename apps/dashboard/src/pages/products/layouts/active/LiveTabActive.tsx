import { Box } from '@chakra-ui/react';
import { ProductTable, TableControls } from '@productize/dashboard-lib/ui';

interface liveActiveProps {
  products: [];
}

const LiveTabActive = ({ products }: liveActiveProps) => {
  return (
    <>
      <Box my={4}>
        <TableControls />
      </Box>
      <ProductTable tableData={products} />
    </>
  );
};

export default LiveTabActive;
