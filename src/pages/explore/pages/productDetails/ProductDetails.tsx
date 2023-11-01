// import ExploreLayout from 'apps/explore/src/libs/layouts/ExploreLayout';
import React from 'react';

import ProductSummaryAndPreview from './ProductSummaryAndPreview';
import ProductSideNav from './ProductSideNav';
import ProductNavbar from './ProductNavbar';
import { Container } from '@chakra-ui/react';
import { useTokenExists } from '@productize-v1.0.0/modules/shared/hooks';
import { TwoColumnLayout } from '../../layouts/TwoColumnLayout';
// import Footers from 'apps/explore/src/libs/layouts/footer/Footer';

const ProductDetails = () => {
  return (
    <>
      <ProductNavbar isAuth={useTokenExists()} />
      <Container mt={`5rem`} maxW={`70rem`}>
        <TwoColumnLayout
          C1={<ProductSummaryAndPreview />}
          C2={<ProductSideNav />}
        />
      </Container>
      {/* <Footers /> */}
    </>
  );
};

export default ProductDetails;
