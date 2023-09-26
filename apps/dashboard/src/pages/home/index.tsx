import { Box, Container, Flex, Text } from '@chakra-ui/react';
import { DashboardBanner, ProgressBar } from '@productize/dashboard-lib/ui';
import React from 'react';

const index = () => {
  return (
    <Container p={0} my={8} maxW={`47rem`}>
      <DashboardBanner />
      <Flex
        flexDir={{ base: `column`, md: `row` }}
        my={8}
        justifyContent={`space-between`}
        alignItems={{ base: `flex-start`, md: `center` }}
      >
        <Box>
          <Text as={`h6`} fontWeight={`bold`}>
            Get Started Guide
          </Text>
          <Text color={`grey.400`}>
            Use this personalized guide to get your store up and running.
          </Text>
        </Box>
        <Box>
          <ProgressBar />
        </Box>
      </Flex>
    </Container>
  );
};

export default index;
