import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';

import plant from '../../assets/icons/Group 1.png';
import Container from '../shared-ui/Container';

const ExploreBanner: React.FC = () => {
  return (
    <Box as={`section`} pos={'relative'}>
      {/* <Container> */}
      <Box
        display={`flex`}
        justifyContent={`center`}
        alignItems={`center`}
        mt={`5.7rem`}
      ></Box>
      <Box
        bgColor={'#FBE69A'}
        borderRadius={'8px'}
        pos={'relative'}
        height={'9rem'}
        pl={`2rem`}
        pt={'1.5rem'}
        pb={'2.5rem'}
      >
        <Text
          textAlign={'start'}
          color={'#0E0A2D'}
          fontSize={'2rem'}
          fontWeight={'bold'}
          lineHeight={10}
        >
          Unlock your potential with creator’s curated course.
        </Text>
      </Box>
      {/* </Container> */}
    </Box>
  );
};

export default ExploreBanner;
