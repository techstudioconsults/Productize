import { Box, Container } from '@chakra-ui/react';
import { ExploreBanner, ExploreFeatures } from '@productize/explore-lib/ui';
import ExploreLayout from 'apps/explore/src/libs/layouts/ExploreLayout';
import React from 'react';

const ExploreIndex: React.FC = () => {
  return (
    <ExploreLayout>
      <Container
        p={{ base: 4, lg: 0 }}
        maxW={`70rem`}
        my={{ base: `3rem`, lg: `7rem` }}
      >
        <ExploreBanner />
      </Container>
      <Container
        my={{ base: `3rem`, lg: `7rem` }}
        p={{ base: 4, lg: 0 }}
        maxW={`70rem`}
      >
        <ExploreFeatures title={`Featured`} />
      </Container>
      <Container
        my={{ base: `3rem`, lg: `7rem` }}
        p={{ base: 4, lg: 0 }}
        maxW={`70rem`}
      >
        <ExploreFeatures title={`Based on your recent search`} />
      </Container>
      <Container
        my={{ base: `3rem`, lg: `7rem` }}
        p={{ base: 4, lg: 0 }}
        maxW={`70rem`}
      >
        <ExploreFeatures title={`Most Downloaded`} />
      </Container>
    </ExploreLayout>
  );
};

export default ExploreIndex;
