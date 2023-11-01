import { Box } from '@chakra-ui/react';
import { TableControls } from '../../../../lib/TableControls';
import { ProductTable } from '../../../../lib/tables/ProductTable';

interface draftActiveProps {
  products: [];
}

const DeleteTabActive = ({ products }: draftActiveProps) => {
  return (
    <Box>
      <Box mb={4}>
        <TableControls />
      </Box>
      <ProductTable deleted tableData={products} />
    </Box>
  );
};

export default DeleteTabActive;
