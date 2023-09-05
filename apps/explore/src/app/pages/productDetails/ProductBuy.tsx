import React from 'react';
import { ProductCards } from './ProductCard';
import { TwoColumnLayout } from 'apps/explore/src/libs/layouts/TwoColumnLayout';
import ProductCardDetailsInput from './ProductCardDetailsInput';
import ProductNavbar from './ProductNavbar';
import { Container } from '@chakra-ui/react';

const ProductBuy = () => {
  return (
    <>
      <ProductNavbar />
      <Container mt={`5rem`} maxW={`70rem`}>
        <TwoColumnLayout
          C1={<ProductCards />}
          C2={<ProductCardDetailsInput />}
        />
      </Container>
    </>
  );
};

export default ProductBuy;
