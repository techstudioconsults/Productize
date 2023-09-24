import React from 'react';
import { ProductCards } from './ProductCard';
import ProductCardDetailsInput from './ProductCardDetailsInput';
import ProductNavbar from './ProductNavbar';
import { Container } from '@chakra-ui/react';
import { TwoColumnLayout } from '../../../layouts/TwoColumnLayout';
import { useTokenExists } from '@productize/shared/hooks';

const ProductBuy = () => {
  return (
    <>
      <ProductNavbar isAuth={useTokenExists()} />
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
