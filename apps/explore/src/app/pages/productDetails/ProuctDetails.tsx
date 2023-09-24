// import ExploreLayout from 'apps/explore/src/libs/layouts/ExploreLayout';
import React from 'react';

import ProductSummary from './ProductSummary';
import ProductSideNav from './ProductSideNav';
import ProductNavbar from './ProductNavbar';
import { Container } from '@chakra-ui/react';
import { TwoColumnLayout } from '../../../layouts/TwoColumnLayout';
import { useTokenExists } from '@productize/shared/hooks';
// import Footers from 'apps/explore/src/libs/layouts/footer/Footer';

const ProuctDetails = () => {
  return (
    <>
      <ProductNavbar isAuth={useTokenExists()} />
      <Container mt={`5rem`} maxW={`70rem`}>
        <TwoColumnLayout C1={<ProductSummary />} C2={<ProductSideNav />} />
      </Container>
      {/* <Footers /> */}
    </>
  );
};

export default ProuctDetails;
