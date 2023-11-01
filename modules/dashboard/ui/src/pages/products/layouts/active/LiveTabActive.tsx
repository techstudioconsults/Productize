import { Box } from '@chakra-ui/react';
import { TableControls } from '../../../../lib/TableControls';
import { ProductTable } from '../../../../lib/tables/ProductTable';

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
