import React from 'react';
import {
  Box,
  Container,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { AvatarComp, SharedButton } from '@productize/shared/ui';
import { Sidenav } from './SideNavigationbar';
import Wrapper from '../Wrapper';

interface navProps {
  isAuth: boolean;
}

export const ExploreNavBar = ({ isAuth }: navProps) => {
  return (
    <Box background={`coral.200`} py={4}>
      <Container px={{ base: 4, lg: 0 }} maxW={`70rem`}>
        <Flex
          justifyContent={`space-between`}
          flexDir={{ base: `column`, lg: `row` }}
          as="nav"
          gap={4}
        >
          <Flex justifyContent={`space-between`} alignItems={`center`}>
            <Link as={RouterLink} to={`/`}>
              <img
                src={`https://res.cloudinary.com/dkszgtapy/image/upload/v1693034778/productize/Frame_14220_ogchl8.png`}
                alt="Website logo"
              />
            </Link>
            <Box display={{ base: `block`, lg: `none` }} fontSize={`1.5rem`}>
              <Icon icon={`mdi:cart`} />
            </Box>
          </Flex>
          <Flex gap={10} position="relative" alignItems={`center`}>
            <InputGroup size={`lg`}>
              <InputLeftElement
                pointerEvents="none"
                fontSize="1.2em"
                children={<Icon icon={`majesticons:search-line`} />}
              />
              <Input
                placeholder={'Search'}
                _placeholder={{ color: '#fff' }}
                w={'100%'}
                bgColor={'#aedee0'}
              />
            </InputGroup>
            <Link
              display={{ base: `none`, lg: `initial` }}
              as={RouterLink}
              to={`cart`}
            >
              <Icon fontSize={`1.5rem`} icon={`ion:cart-sharp`} />
            </Link>
            {isAuth ? (
              <AvatarComp />
            ) : (
              <Link
                display={{ base: `none`, lg: `initial` }}
                as={RouterLink}
                to={`/auth/signup`}
              >
                <SharedButton
                  fontSize={{ base: `sm`, md: `md` }}
                  text={'Create Account'}
                  width={'160px'}
                  height={'48px'}
                  bgColor={'yellow.200'}
                  textColor={'white'}
                  borderRadius={'4px'}
                />
              </Link>
            )}
            <Sidenav />
          </Flex>
        </Flex>
        <Box display={{ base: `none`, lg: `block` }}>
          <Wrapper />
        </Box>
      </Container>
    </Box>
  );
};
