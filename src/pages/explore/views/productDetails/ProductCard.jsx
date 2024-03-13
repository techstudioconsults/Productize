import { Avatar, Box, Card, CardBody, CardFooter, Divider, Flex, IconButton, Image, Skeleton, Stack, Text } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { useCurrency } from '@productize/hooks';
import { selectCart, usePurchaseProductMutation } from '@productize/redux';
import { SharedButton } from '@productize/ui';

import { useDispatch, useSelector } from 'react-redux';

export const ProductCard = ({ product }) => {
    const formatCurrency = useCurrency();
    const dispatch = useDispatch();

    const deleteProduct = () => {
        dispatch({ type: `App/deleteProductFromCart`, payload: { productSlug: product.slug } });
    };

    return (
        <Card direction={{ base: 'column', sm: 'row' }} alignItems={`center`} overflow="hidden" variant="none">
            <Box height={`8.5rem`}>
                <Image objectFit="cover" height={{ base: '100%' }} width={{ base: '100%', sm: '200px' }} src={product?.thumbnail} alt="Caffe Latte" />
            </Box>

            <Stack w={`100%`}>
                <CardBody>
                    <Flex justifyContent={`space-between`} fontWeight={600}>
                        <Text size="md">{product?.title}</Text>
                        <Text>{formatCurrency(product?.price)}</Text>
                    </Flex>
                    <Flex mt={3} gap={2} alignItems={`center`}>
                        <Avatar size={`sm`} bg={`grey.300`} name={product?.publisher} src={product?.publisher_logo} />
                        <Text fontWeight={`500`}>{product?.publisher}</Text>
                    </Flex>
                </CardBody>

                <CardFooter py={0} justifyContent={`space-between`}>
                    <Text>Qty: {product?.quantity}</Text>
                    <IconButton onClick={deleteProduct} bgColor={`transparent`} color={`red.200`} icon={<Icon icon={`mdi:trash`} />} aria-label={'delete'} />
                </CardFooter>
            </Stack>
        </Card>
    );
};

export const ProductCards = () => {
    const cart = useSelector(selectCart);
    const formatCurrency = useCurrency();

    const [purchaseProduct, { isLoading }] = usePurchaseProductMutation();

    const checkoutProductList = cart?.checkoutProducts?.map((product) => {
        return (
            <Skeleton key={product.slug} borderRadius={8} isLoaded={!isLoading}>
                <Box>
                    <ProductCard product={product} />
                    <Divider my={4} />
                </Box>
            </Skeleton>
        );
    });

    const handlePurchaseProduct = async () => {
        const checkoutProductFormat = cart?.checkoutProducts?.map((product) => {
            return {
                product_slug: product.slug,
                quantity: product.quantity,
            };
        });

        const checkout = {
            // paystack uses kobo for amounts
            amount: cart.totalProductPrice,
            products: checkoutProductFormat,
        };

         try {
             const res = await purchaseProduct(checkout).unwrap();
             if (res && res.data.authorization_url) {
                 window.location.href = res.data.authorization_url;
             } else {
                 console.error('Invalid response from purchaseProduct');
             }
         } catch (error) {
             console.error('Error during purchase:', error);
         }
    };

    return (
        <Box borderRadius={`8px`} border={`1px solid #CFCFD0`} p={5}>
            {checkoutProductList}
            <Flex fontWeight={600} justifyContent={`space-between`}>
                <Text>Total</Text>
                <Skeleton borderRadius={8} isLoaded={!isLoading}>
                    <Text px={5}>{formatCurrency(cart.totalProductPrice)}</Text>
                </Skeleton>
            </Flex>
            <Divider my={4} />
            <Stack gap={4}>
                <SharedButton
                    text={'Proceed to pay'}
                    width={'100%'}
                    height={'48px'}
                    bgColor={'purple.200'}
                    textColor={'grey.100'}
                    borderRadius={'4px'}
                    fontSize={{ base: `sm`, md: `md` }}
                    btnExtras={{
                        isLoading: isLoading,
                        loadingText: `Processing payment...`,
                        onClick: handlePurchaseProduct,
                        disabled: cart.totalProductPrice ? false : true,
                    }}
                />
            </Stack>
        </Box>
    );
};
