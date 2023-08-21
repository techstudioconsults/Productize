import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import Logo from '../../assets/icons/logo.svg';
import facebook from '../../assets/icons/facebook.svg';
import pinterest from '../../assets/icons/pinterest.svg';
import twitter from '../../assets/icons/twitter.svg';
import dribble from '../../assets/icons/dribble.svg';
import Container from '../../components/Container';

const Footer: React.FC = () => {
  return (
    <Box
      background='#F3F2FB'
      display='flex'
      flexDirection='column'
      marginTop='9.625rem'
      paddingTop='1rem'
      // w={'100%'}
    >
      <Container>
        <Box
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          paddingBottom='1rem'
          // px='8rem'
          // width={`100%`}
         
        >
          <Box>
            <Heading
              fontSize='2xl'
              fontWeight='medium'
              lineHeight='tall'
              textAlign={'start'}
            >
              Share knowledge online
            </Heading>
            <Text fontSize='md' fontWeight='medium' lineHeight='base'>
              Create an online video course, reach your community, and earn
              money
            </Text>
          </Box>
          <Box
            as='button'
            display='flex'
            justifyContent='center'
            alignItems='center'
            fontSize='md'
            fontWeight={500}
            lineHeight='base'
            padding='.8rem 1.6rem'
            background='#6D5DD3'
            color='hsla(248, 53%, 97%, 1)'
            _hover={{ bgColor: '#6D5DD3', opacity: 0.9 }}
            borderRadius='4px'
          >
            Create Product
          </Box>
        </Box>
      </Container>
     <Box border={'1px solid #f5f5f5'}></Box>

      <Container>
        <Box 
        display='flex' 
        gap='4.125rem' 
        marginTop='2.75rem'
        //  px='8rem'
         >
          <Box>
            <img src={Logo} alt='Logo' />
          </Box>

          <Box
            fontSize='md'
            fontWeight='medium'
            lineHeight='base'
            cursor={'pointer'}
            textAlign={'start'}
          >
            <p>Privacy Policy</p>
            <p>Cookie settings</p>
            <p>Sitemap</p>
            <p>Become a creator</p>
          </Box>

          <Box
            fontSize='md'
            fontWeight='medium'
            lineHeight='base'
            cursor={'pointer'}
            textAlign={'start'}
          >
            <p>Blog</p>
            <p>Help and support</p>
            <p>Terms</p>
          </Box>

          <Box
            fontSize='md'
            fontWeight='medium'
            lineHeight='base'
            cursor={'pointer'}
            textAlign={'start'}
          >
            <p>About us</p>
            <p>Contact us</p>
          </Box>
        </Box>

        <Box
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          paddingBottom='2.5rem'
          paddingTop='.6rem'
          // px='8rem'
        >
          <Box>
            <span>2023</span>
          </Box>

          <Box
            display='flex'
            alignItems='center'
            gap='1.4rem'
            cursor={'pointer'}
          >
            <img src={facebook} alt='Facebook' />
            <img src={pinterest} alt='Pinterest' />
            <img src={twitter} alt='Twitter' />
            <img src={dribble} alt='Dribble' />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

