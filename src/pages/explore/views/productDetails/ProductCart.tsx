/* eslint-disable @typescript-eslint/no-explicit-any */
import { EmptyState } from '@productize/dashboard';
import { ProductCards } from './ProductCard';
import ProductNavbar from './ProductNavbar';
import { Box, Container, Flex, Image, Text } from '@chakra-ui/react';
import arrowLeft from '@icons/Property_2_Arrow-left_kafkjg.svg';
import { useTokenExists } from '@productize/hooks';
import { selectCart } from '@productize/redux';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { SharedButton } from '@productize/ui';

export const ProductCart = () => {
    const navigate = useNavigate();
    const cart = useSelector(selectCart);
    const hasToken = useTokenExists();

    return (
        <>
            <ProductNavbar isAuth={hasToken} />
            <Container mt={`5rem`} maxW={`50rem`}>
                <Flex w={`fit-content`} gap={8} alignItems={`center`} mb={5} cursor={`pointer`} onClick={() => navigate(-1)}>
                    <Box>
                        <Image src={arrowLeft} />
                    </Box>
                    <Text as={`h6`}>Back to product page</Text>
                </Flex>
                {hasToken ? (
                    cart.totalProductQuantity ? (
                        <ProductCards />
                    ) : (
                        <EmptyState
                            content={{
                                title: 'Cart is empty',
                                desc: 'Click the add to cart button to add to product to cart.',
                                img: undefined,
                            }}
                            textAlign={{ base: `center` }}
                            showImage={false}
                        />
                    )
                ) : (
                    <Box textAlign="center" py={10} px={6}>
                        <Box bg="gray.100" p={{ base: 4, sm: 20 }} borderRadius="md" boxShadow="lg">
                            <Text fontSize={{ base: `md`, sm: `2xl` }} fontWeight="bold" mb={2}>
                                Please log in to view your cart
                            </Text>
                            <Text fontSize={{ base: `sm`, sm: `md` }} mb={6}>
                                To see the items in your cart, you need to log in. Click the button below to go to the login page.
                            </Text>
                            <Link to={`/auth/login`}>
                                <SharedButton
                                    fontSize={{ base: `sm`, md: `md` }}
                                    text={'Login'}
                                    width={`100%`}
                                    height={'48px'}
                                    borderRadius={'4px'}
                                    bgColor={'purple.200'}
                                    textColor={'grey.100'}
                                />
                            </Link>
                        </Box>
                    </Box>
                )}
            </Container>
        </>
    );
};

export default ProductCart;
