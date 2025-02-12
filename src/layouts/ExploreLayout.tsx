import React, { useEffect } from 'react';
import { ExploreNavBar } from '../components/navbar/ExploreNavBar';
import { useTokenExists } from '@productize/hooks';
import { Footer, SharedButton } from '@productize/ui';
import { Box, Container, Divider, Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
// import ProductTagNav from '../pages/explore/components/ProductTagNav';

type ExploreProps = {
    children: React.ReactNode; // type children
};

export const ExploreLayout = (props: ExploreProps) => {
    return (
        <>
            <Box pos={`sticky`} top={0} background={`coral.200`} zIndex={999} pb={3}>
                <ExploreNavBar isAuth={useTokenExists()} />
                {/* <Container p={0} maxW={`70rem`}>
                    <ProductTagNav />
                </Container> */}
            </Box>
            {props.children}
            <Box bgColor={`purple.100`} py={5}>
                <Container maxW={`70rem`}>
                    <Flex flexDir={{ base: `column`, lg: `row` }} gap={5} justifyContent={`space-between`} alignItems={`center`}>
                        <Box textAlign={{ base: `center`, lg: `initial` }}>
                            <Text as={`h5`} color={`grey.800`}>
                                Share knowledge online
                            </Text>
                            <Text>Create an online video course, reach your community, and earn money</Text>
                        </Box>
                        <Box>
                            <Link to={`/dashboard/products/new#product-details`}>
                                <SharedButton
                                    text={'Create Product'}
                                    width={'fit-content'}
                                    height={'48px'}
                                    bgColor={'purple.200'}
                                    textColor={'purple.100'}
                                    borderRadius={'4px'}
                                    fontSize={{ base: `sm`, md: `md` }}
                                />
                            </Link>
                        </Box>
                    </Flex>
                </Container>
            </Box>
            <Box bg={`grey.300`}>
                <Divider />
            </Box>
            <Footer />
        </>
    );
};

// export default ExploreLayout;
