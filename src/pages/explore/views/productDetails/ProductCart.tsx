/* eslint-disable @typescript-eslint/no-explicit-any */
import { EmptyState } from '@productize/dashboard';
import { ProductCards } from './ProductCard';
import ProductNavbar from './ProductNavbar';
import { Box, Container, Flex, Image, Text } from '@chakra-ui/react';
import arrowLeft from '@icons/Property_2_Arrow-left_kafkjg.svg';
import { useTokenExists } from '@productize/hooks';
import { selectCart, useGetFromCartMutation } from '@productize/redux';
import { SpinnerComponent } from '@productize/ui';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';

export const ProductCart = () => {
    const navigate = useNavigate();
    const cart = useSelector(selectCart);
    const [getFromCart, getFromCartStatus] = useGetFromCartMutation();

    const getCartProduct = useCallback(async () => {
        try {
            await getFromCart(null).unwrap();
        } catch (err: any) {
            return;
        }
    }, [getFromCart]);

    useEffect(() => {
        getCartProduct();
    }, [getCartProduct]);

    if (getFromCartStatus.isLoading) {
        <SpinnerComponent />;
    }

    return (
        <>
            <ProductNavbar isAuth={useTokenExists()} />
            <Container mt={`5rem`} maxW={`50rem`}>
                <Flex w={`fit-content`} gap={8} alignItems={`center`} mb={5} cursor={`pointer`} onClick={() => navigate(-1)}>
                    <Box>
                        <Image src={arrowLeft} />
                    </Box>
                    <Text as={`h6`}>Back to product page</Text>
                </Flex>
                {cart.totalProductQuantity ? (
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
                )}
            </Container>
        </>
    );
};

export default ProductCart;
