import { Flex, Text } from '@chakra-ui/react';
import { Navbar } from '@productize/external-pages-lib/ui';

const Home = () => {
  return (
    <Flex flexDir={`column`} justifyContent={`center`} alignItems={`center`}>
      <Text as={`h1`} color={`green.200`}>
        Productize External Pages
      </Text>
      <Navbar />
    </Flex>
  );
};

export default Home;
