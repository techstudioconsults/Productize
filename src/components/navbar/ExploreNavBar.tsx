import { Box, Container, Flex, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import Links from './NavigationLinks';
import ProductTagNav from '../../pages/explore/components/ProductTagNav';
import { AvatarComp, SearchComp, Cart, SharedButton, Sidenav } from '@productize/ui';

interface navProps {
    isAuth: boolean;
}

export const ExploreNavBar = ({ isAuth }: navProps) => {
    return (
        <Box pos={`sticky`} top={0} background={`coral.200`} py={4}>
            <Container px={{ base: 4, sm: 8, xl: 0 }} maxW={`70rem`}>
                <Flex justifyContent={`space-between`} flexDir={{ base: `column`, lg: `row` }} as="nav" gap={4}>
                    <Flex justifyContent={`space-between`} alignItems={`center`}>
                        <Sidenav links={<Links isMobile={true} />} />
                        <Link as={RouterLink} to={`/`}>
                            <img
                                src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951023/productize/Frame_14220_ogchl8_chcxzu.png`}
                                alt="Website logo"
                            />
                        </Link>
                        <Box display={{ lg: `none` }}>
                            <AvatarComp />
                        </Box>
                    </Flex>
                    <Flex justifyContent={`space-between`} gap={5} alignItems={`center`}>
                        <Box w={{ base: `100%`, lg: `initial` }}>
                            <SearchComp size="lg" color={`coral.100`} />
                        </Box>
                        <Box fontSize={`1.5rem`}>
                            <Cart />
                        </Box>
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
                    </Flex>
                </Flex>
                <Box display={{ base: `none`, lg: `block` }}>
                    <ProductTagNav />
                </Box>
            </Container>
        </Box>
    );
};
