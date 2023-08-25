import React from 'react';
import { Box, Flex, Image, Input } from '@chakra-ui/react';
import Logo from '../../assets/icons/logo.svg';
import CartIcon from '../../assets/icons/lock-icon.svg';
import search from '../../assets/icons/search.svg';
import Wrapper from './components/Wrapper';
import Container from '../../components/Container';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <Box background="#17B6BA" h="9rem">
      <Container>
        <Box
          as="nav"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Flex align={{ lg: 'center' }}>
            <img src={Logo} alt="Website logo" width="100%" />
          </Flex>

          <Flex
            justify={{ lg: 'center' }}
            align={{ lg: 'center' }}
            gap="1.5rem"
            position="relative"
          >
            <Image
              src={search}
              alt="Search icon"
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
            <Link to={`cart`}>
              <Image
                src={CartIcon}
                alt="cart icon"
                height="32px"
                width="32px"
              />
            </Link>
            <Flex
              as="button"
              justify={{ lg: 'center' }}
              align={{ lg: 'center' }}
              fontSize={{ lg: 'md' }}
              w={{ lg: '11.94rem' }}
              h={{ lg: '3rem' }}
              p={{ lg: '.75rem 2.25rem' }}
              color={'#f3f2fb'}
              _hover={{ bgColor: '#f6c21c', opacity: '0.7' }}
              bgColor={'#f6c21c'}
              fontWeight={{ lg: 'medium' }}
              lineHeight={{ lg: 6 }}
              borderRadius={'4px'}
            >
              Create Account
            </Flex>
          </Flex>
        </Box>
        <Wrapper />
      </Container>
    </Box>
  );
};

export default Navbar;
