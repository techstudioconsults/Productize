import { Box } from '@chakra-ui/react';
import { ProductTable, TableControls } from '@productize/dashboard-lib/ui';

interface draftActiveProps {
  products: [];
}

const DraftTabActive = ({ products }: draftActiveProps) => {
  return (
    <>
      <Box mb={4}>
        <TableControls />
      </Box>
      <ProductTable tableData={products} />
    </>
  );
};

export default DraftTabActive;
