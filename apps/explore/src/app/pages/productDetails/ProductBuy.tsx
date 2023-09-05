import { Box, Center, Container, Flex, Image, Input } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { ProductCards } from './ProductCard';
import { TwoColumnLayout } from 'apps/explore/src/libs/layouts/TwoColumnLayout';
import ProductCardDetailsInput from './ProductCardDetailsInput';

const ProductBuy = () => {
  return (
    <>
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
              <Flex alignItems={`center`} gap={3} px={3} bg={`grey.200`}>
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
              <Link to={`cart`}>
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
        </Container>
      </Box>
      <Container mt={`5rem`} maxW={`70rem`}>
        <TwoColumnLayout
          C1={<ProductCards />}
          C2={<ProductCardDetailsInput />}
        />
      </Container>
    </>
  );
};

export default ProductBuy;
