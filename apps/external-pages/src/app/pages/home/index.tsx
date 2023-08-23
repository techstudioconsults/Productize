import { Flex, Text } from '@chakra-ui/react';
import { Shared } from '@productize/shared';
// import { LandingPageLibUi } from '@productize/landing-page-lib/ui';
import React from 'react';

const Home = () => {
  return (
    <Flex
      w={`100%`}
      h={`100vh`}
      flexDir={`column`}
      justifyContent={`center`}
      alignItems={`center`}
    >
      <Text fontSize={`larger`} color={`green`}>
        Productize External Pages
      </Text>
      {/* <LandingPageLibUi /> */}
      <Shared />
    </Flex>
  );
};

export default Home;
