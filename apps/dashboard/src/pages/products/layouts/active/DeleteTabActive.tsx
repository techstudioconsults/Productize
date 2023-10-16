import { Box } from '@chakra-ui/react';
import { ProductTable, TableControls } from '@productize/dashboard-lib/ui';

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
