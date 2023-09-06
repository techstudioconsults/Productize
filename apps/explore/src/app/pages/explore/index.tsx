import { Box } from '@chakra-ui/react';
import ExploreBanner from 'apps/explore/src/libs/explore/1. ExploreBanner';
import ExploreFeatures from 'apps/explore/src/libs/explore/2. ExploreFeatures';
import ExploreSearch from 'apps/explore/src/libs/explore/3. ExploreSearch';
import ExploreDownloads from 'apps/explore/src/libs/explore/4. ExploreDownloads';
import ExploreLayout from 'apps/explore/src/libs/layouts/ExploreLayout';
import React from 'react';

const ExploreIndex: React.FC = () => {
  return (
    <ExploreLayout>
      <Box my={5}>
        <ExploreBanner />
      </Box>
      <Box my={5}>
        <ExploreFeatures />
      </Box>
      <Box my={5}>
        <ExploreSearch />
      </Box>
      <Box my={5}>
        <ExploreDownloads />
      </Box>
    </ExploreLayout>
  );
};

export default ExploreIndex;
