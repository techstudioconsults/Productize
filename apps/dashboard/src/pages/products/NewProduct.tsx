import { Box } from '@chakra-ui/react';
import React from 'react';
import { NewProductTab } from './layouts/NewProductTab';

const NewProduct = () => {
  return (
    <Box mt={8}>
      <NewProductTab />
    </Box>
  );
};

export default NewProduct;
