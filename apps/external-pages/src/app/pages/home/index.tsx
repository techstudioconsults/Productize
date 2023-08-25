import { Flex, Text } from '@chakra-ui/react';
import { Navbar } from '@productize/external-pages-lib/ui';

const Home = () => {
  return (
    <Flex
      flexDir={`column`}
      justifyContent={`center`}
      alignItems={`center`}
    >
      <Text fontSize={`6xl`} color={`green`}>
        Productize External Pages
      </Text>
      <Navbar />
    </Flex>
  );
};

export default Home;
