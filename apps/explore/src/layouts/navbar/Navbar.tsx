import React from 'react';
import { Box, Flex, Image, Input, Link } from '@chakra-ui/react';
import search from '../../../assets/icons/search.svg';
// import Wrapper from './components/Wrapper';
import { Link as RouterLink } from 'react-router-dom';
import { Icon } from '@iconify/react';

const Navbar: React.FC = () => {
  return (
    <Box background={`coral.200`} h="9rem">
      <Box as="nav">
        <Flex>
          <img
            src={`https://res.cloudinary.com/dkszgtapy/image/upload/v1693034778/productize/Frame_14220_ogchl8.png`}
            alt="Website logo"
          />
        </Flex>
        <Flex
          display={{ base: `none`, lg: `Flex` }}
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
          <Link as={RouterLink} to={`cart`}>
            <Icon fontSize={`1.5rem`} icon={`ion:cart-sharp`} />
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
      {/* <Wrapper /> */}
    </Box>
  );
};

export default Navbar;
