import React from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';

interface dashboardProps {
  bgImg: string;
  img: string;
  title: string;
  desc: string;
  padding?: string | object | number;
  py?: string | object | number;
  px?: string | object | number;
}

export const DashboardBanner = ({
  bgImg,
  img,
  title,
  desc,
  padding,
  py,
  px,
}: dashboardProps) => {
  return (
    <Flex
      flexDir={{ base: `column`, md: `row` }}
      alignItems={{ base: `center`, md: `flex-start` }}
      bgColor={`purple.200`}
      justifyContent={`space-between`}
      gap={4}
      bgImg={bgImg}
      backgroundRepeat={`no-repeat`}
      backgroundPosition={`right center`}
      backgroundSize={{ base: `cover`, md: `contain` }}
      borderRadius={`9px`}
      py={py}
      px={px}
      color={`purple.100`}
    >
      <Box padding={padding}>
        <Text as={`h4`} textAlign={'start'} lineHeight={10} maxW={`35rem`}>
          {title}
        </Text>
        <Text fontSize={`sm`} textAlign={'start'} maxW={`35rem`} mt={4}>
          {desc}
        </Text>
      </Box>
      <Box w={`263px`}>
        <Image src={img} alt="img" />
      </Box>
    </Flex>
  );
};
