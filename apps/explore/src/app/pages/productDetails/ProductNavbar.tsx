import { Box, Center, Container, Flex, Image, Input } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { Sidenav } from '@productize/external-pages-lib/ui';
import { SharedButton } from '@productize/shared/ui';
import React from 'react';
import { Link } from 'react-router-dom';

const ProductNavbar = () => {
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
            position="relative"
          >
            <Flex
              display={{ base: `none`, xl: `flex` }}
              alignItems={`center`}
              gap={3}
              px={3}
              bg={`grey.200`}
            >
              <Icon fontSize={`1.5rem`} icon={`ri:search-line`} />
              <Input
                type={'text'}
                placeholder={'Search'}
                _placeholder={{ color: 'grey.400' }}
                display={'flex'}
                // flex={'1 0 0'}
                fontSize={'md'}
                fontWeight={'normal'}
                lineHeight={6}
                // textIndent={'2rem'}
                w={'20rem'}
                h={'3rem'}
                p={'.75rem'}
                border={`none`}
                borderRadius={'4px'}
              />
            </Flex>
            <Box display={{ base: `none`, xl: `initial` }}>
              <Link to={`cart`}>
                <Icon fontSize={`1.5rem`} icon={`ion:cart-sharp`} />
              </Link>
            </Box>
            <Box display={{ base: `none`, xl: `initial` }}>
              <SharedButton
                text={'Create Account'}
                width={'190px'}
                height={'48px'}
                bgColor={'yellow.200'}
                textColor={'white'}
                borderRadius={'4px'}
                fontSize={{ base: `sm`, xl: `md` }}
              />
            </Box>
          </Flex>
          <Sidenav />
        </Box>
      </Container>
    </Box>
  );
};

export default ProductNavbar;
