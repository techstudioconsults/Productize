import { Box } from '@chakra-ui/react';
import { ProductTable, TableControls } from '@productize/dashboard-lib/ui';

const DeleteTabActive = () => {
  return (
    <Box>
      <Box mb={4}>
        <TableControls />
      </Box>
      <ProductTable deleted />
    </Box>
  );
};

export default DeleteTabActive;
