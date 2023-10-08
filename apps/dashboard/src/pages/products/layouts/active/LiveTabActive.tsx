import { Box } from '@chakra-ui/react';
import { ProductTable, TableControls } from '@productize/dashboard-lib/ui';

const LiveTabActive = () => {
  return (
    <>
      {/* <Box my={4}>
        <TableControls />
      </Box> */}
      <ProductTable live />
    </>
  );
};

export default LiveTabActive;
