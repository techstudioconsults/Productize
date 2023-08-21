import { Flex, Text } from '@chakra-ui/react';
import { Greeting } from '@react-module-federation/shared-components';
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
        Productize Landing Page
      </Text>
      <Greeting title={'Greeting'} />
    </Flex>
  );
};

export default Home;
