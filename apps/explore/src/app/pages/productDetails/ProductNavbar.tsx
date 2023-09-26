import { Box, Center, Container, Flex, Image, Input } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import {
  AvatarComp,
  SearchComp,
  SharedButton,
  Sidenav,
} from '@productize/shared/ui';
import React from 'react';
import { Link } from 'react-router-dom';

const ProductNavbar = ({ isAuth }: any) => {
  return (
    <Box bg={`grey.100`} py={5} borderBottom={`1px solid grey.300`}>
      <Container maxW={`70rem`}>
        <Box
          as="nav"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Center>
            <Link to={`/`}>
              <Image
                alt="logo"
                src={`https://res.cloudinary.com/dkszgtapy/image/upload/v1693034778/productize/Frame_14220_ogchl8.png`}
              />
            </Link>
          </Center>

          <Flex
            justify={{ lg: 'center' }}
            align={{ lg: 'center' }}
            gap="1.5rem"
          >
            <Box display={{ base: `none`, md: `block` }}>
              <SearchComp size="lg" width={`25rem`} color={`grey.200`} />
            </Box>
            <Box display={{ base: `none`, xl: `initial` }}>
              <Link to={`cart`}>
                <Icon fontSize={`1.5rem`} icon={`ion:cart-sharp`} />
              </Link>
            </Box>
            <Box display={{ base: `none`, xl: `initial` }}>
              {isAuth ? (
                <AvatarComp />
              ) : (
                <SharedButton
                  text={'Create Account'}
                  width={'190px'}
                  height={'48px'}
                  bgColor={'yellow.200'}
                  textColor={'white'}
                  borderRadius={'4px'}
                  fontSize={{ base: `sm`, xl: `md` }}
                />
              )}
            </Box>
          </Flex>
          <Sidenav />
        </Box>
      </Container>
    </Box>
  );
};

export default ProductNavbar;
