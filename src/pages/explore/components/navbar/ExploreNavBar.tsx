import React from 'react';
import { Box, Container, Flex, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Wrapper from '../ProductTagNav';
import { AvatarComp, Cart, SearchComp, SharedButton, Sidenav } from '@productize/ui';
import Links from '../../../../../src/components/navbar/NavigationLinks';

interface navProps {
    isAuth: boolean;
}

export const ExploreNavBar = ({ isAuth }: navProps) => {
    return (
        <Box background={`coral.200`} py={4}>
            <Container px={{ base: 4, lg: 0 }} maxW={`70rem`}>
                <Flex justifyContent={`space-between`} flexDir={{ base: `column`, lg: `row` }} as="nav" gap={4}>
                    <Flex justifyContent={`space-between`} alignItems={`center`}>
                        <Link as={RouterLink} to={`/`}>
                            <img
                                src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951023/productize/Frame_14220_ogchl8_chcxzu.png`}
                                alt="Website logo"
                            />
                        </Link>
                        <Box display={{ base: `block`, lg: `none` }} fontSize={`1.5rem`}>
                            <Icon icon={`mdi:cart`} />
                        </Box>
                    </Flex>
                    <Flex justifyContent={`space-between`} gap={10} alignItems={`center`}>
                        <Box>
                            <SearchComp size="lg" color={`coral.100`} />
                        </Box>
                        <Cart />
                        {isAuth ? (
                            <Box display={{ base: `none`, lg: `initial` }}>
                                <AvatarComp />
                            </Box>
                        ) : (
                            <Link display={{ base: `none`, lg: `initial` }} as={RouterLink} to={`/auth`}>
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
                        <Sidenav links={<Links isMobile={false} />} />
                    </Flex>
                </Flex>
                <Box display={{ base: `none`, lg: `block` }}>
                    <Wrapper />
                </Box>
            </Container>
        </Box>
    );
};
