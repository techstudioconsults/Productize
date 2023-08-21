import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

const Home = () => {
  return (
    <Flex
      w={`100%`}
      h={`100vh`}
      justifyContent={`center`}
      alignItems={`center`}
    >
      <Text fontSize={`larger`} color={`green`}>
        Productize Landing Page
      </Text>
    </Flex>
  );
};

export default Home;
