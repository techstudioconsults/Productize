import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

export const DashboardBanner: React.FC = () => {
  return (
    <Flex
      alignItems={`flex-start`}
      bgColor={`purple.200`}
      bgImg={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1695716061/productize/Group_5_firhbw.png`}
      backgroundSize={`70%`}
      backgroundRepeat={`no-repeat`}
      backgroundPosition={`right top`}
      h={`12rem`}
      borderRadius={`9px`}
      padding={8}
      color={`purple.100`}
      // maxW={}
    >
      <Box>
        <Text
          as={`h4`}
          textAlign={'start'}
          lineHeight={10}
          maxW={`35rem`}
        >
          Welcome to productize.
        </Text>
        <Text
          fontSize={`sm`}
          textAlign={'start'}
          maxW={`35rem`}
          mt={4}
        >
          Complete your profile to start getting your products <br /> published.
        </Text>
      </Box>
    </Flex>
  );
};
