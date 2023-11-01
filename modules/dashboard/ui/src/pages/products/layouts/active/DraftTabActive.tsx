import { Box } from '@chakra-ui/react';
import { TableControls } from '../../../../lib/TableControls';
import { ProductTable } from '../../../../lib/tables/ProductTable';

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
