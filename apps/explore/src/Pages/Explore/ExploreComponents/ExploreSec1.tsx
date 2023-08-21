import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
import backgroundImage from '../../../assets/image/backgroundImage.png';
import Container from '../../../components/Container';
import plant from '../../../assets/icons/Group 1.png';

const ExploreSec1: React.FC = () => {
  return (
    <Box as={`section`} pos={'relative'}>
      <Container>
        <Box
          display={`flex`}
          justifyContent={`center`}
          alignItems={`center`}
          mt={`5.7rem`}
        >
          {/* <img src={backgroundImage} alt='background-image' /> */}
        </Box>
        <Box
          bgColor={'#FBE69A'}
          borderRadius={'8px'}
          pos={'relative'}
          height={'9rem'}
          pl={`2rem`}
          pt={'1.5rem'}
          pb={'2.5rem'}
        >
          <Text textAlign={'start'} color={'#0E0A2D'} fontSize={'2rem'} fontWeight={'bold'} lineHeight={10} w={'25.4375rem'}>
            Unlock your potential with creator’s curated course.
          </Text>
          <Image src={plant} pos={'absolute'} right={'1rem'} top={'-.1rem'} />
        </Box>
      </Container>
    </Box>
  );
};

export default ExploreSec1;
