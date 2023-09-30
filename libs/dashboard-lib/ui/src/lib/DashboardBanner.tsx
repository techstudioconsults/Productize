import React from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';

export const DashboardBanner: React.FC = () => {
  return (
    <Flex
      flexDir={{ base: `column`, md: `row` }}
      alignItems={{ base: `center`, md: `flex-start` }}
      bgColor={`purple.200`}
      justifyContent={`space-between`}
      gap={4}
      bgImg={`https://res.cloudinary.com/dkszgtapy/image/upload/v1695997135/productize/Lines_t1t27k.png`}
      backgroundRepeat={`no-repeat`}
      backgroundPosition={`right center`}
      backgroundSize={{ base: `cover`, md: `contain` }}
      borderRadius={`9px`}
      p={8}
      color={`purple.100`}
    >
      <Box>
        <Text as={`h4`} textAlign={'start'} lineHeight={10} maxW={`35rem`}>
          Welcome to productize.
        </Text>
        <Text fontSize={`sm`} textAlign={'start'} maxW={`35rem`} mt={4}>
          Complete your profile to start getting your products <br /> published.
        </Text>
      </Box>
      <Box>
        <Image
          src={`https://res.cloudinary.com/dkszgtapy/image/upload/v1695996352/productize/Illustration_2_fslyo9.png`}
          alt="img"
        />
      </Box>
    </Flex>
  );
};
