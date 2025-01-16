/* eslint-disable @nx/enforce-module-boundaries */
import { Box } from '@chakra-ui/react';
import { IntegrationTab } from './integrationTab/IntegrationTab';

export const Integration = () => {
  return (
    <Box mt={8}>
      <IntegrationTab />
    </Box>
  );
};
