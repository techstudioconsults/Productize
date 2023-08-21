import React from 'react';
import { Box, Image, Input } from '@chakra-ui/react';
import Logo from '../../assets/icons/logo.svg';
import lockIcon from '../../assets/icons/lock-icon.svg';
import search from '../../assets/icons/search.svg';
import Wrapper from './components/Wrapper';
import Container from '../../components/Container';

const Navbar: React.FC = () => {
  return (
    <Box
    //  w='100%'
      background='#17B6BA' 
      // p='1rem 8rem' 
      h='9rem'
      >
        <Container>
        <Box
          as='nav'
          display='flex'
          justifyContent='space-between'
          alignItems='center'
        >
          <Box display='flex' w='8.75rem' h='2rem' mt='1.5rem'>
            <img src={Logo} alt='Website logo' width='100%' />
          </Box>

          <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            gap='1.5rem'
            position='relative'
          >
            <Image
              src={search}
              alt='Search icon'
              pos={'absolute'}
              left={'1rem'}
              zIndex={1000}
            />
            <Input
              type={'text'}
              placeholder={'Search'}
              _placeholder={{ color: '#fff' }}
              display={'flex'}
              flex={'1 0 0'}
              fontSize={'md'}
              fontWeight={'normal'}
              lineHeight={6}
              textIndent={'2rem'}
              w={'12.875rem'}
              h={'3rem'}
              p={'.75rem'}
              borderRadius={'4px'}
              bgColor={'#aedee0'}
            />

            <img src={lockIcon} alt='Lock icon' height='32px' width='32px' />
            <Box
              as='button'
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              fontSize={'md'}
              w={'11.94rem'}
              h={'3rem'}
              p={'.75rem 2.25rem'}
              color={'#f3f2fb'}
              _hover={{ bgColor: '#f6c21c', opacity: '0.7' }}
              bgColor={'#f6c21c'}
              fontWeight={'medium'}
              lineHeight={6}
              borderRadius={'4px'}
            >
              Create Account
            </Box>
          </Box>
        </Box>
        <Wrapper />
    </Container>
      </Box>
  );
};

export default Navbar;
