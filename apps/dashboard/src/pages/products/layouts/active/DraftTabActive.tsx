import { Box } from '@chakra-ui/react';
import { ProductTable, TableControls } from '@productize/dashboard-lib/ui';

const DraftTabActive = () => {
  return (
    <>
      <Box mb={4}>
        <TableControls />
      </Box>
      <ProductTable draft />
    </>
  );
};

export default DraftTabActive;
