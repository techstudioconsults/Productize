import { Avatar, Box, Card, CardBody, CardFooter, Center, Divider, Flex, IconButton, Image, Stack, Text } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { useCurrency } from "@productize-v1.0.0/modules/shared/hooks";
import { selectCart, useAddToCartMutation, useGetFromCartMutation, usePurchaseProductMutation } from "@productize-v1.0.0/modules/shared/redux";
import { SharedButton } from "@productize-v1.0.0/modules/shared/ui";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// interface productProp {
//     product: any;
// }

export const ProductCard = ({ product }) => {
    const formatCurrency = useCurrency();
    const dispatch = useDispatch();

    const deleteProduct = () => {
        dispatch({ type: `App/deleteProductFromCart`, payload: { productSlug: product.slug } });
    };

    return (
        <Card direction={{ base: "column", sm: "row" }} alignItems={`center`} overflow="hidden" variant="none">
            <Box height={`8.5rem`}>
                <Image objectFit="cover" height={{ base: "100%" }} width={{ base: "100%", sm: "200px" }} src={product?.thumbnail} alt="Caffe Latte" />
            </Box>

            <Stack w={`100%`}>
                <CardBody>
                    <Flex justifyContent={`space-between`} fontWeight={600}>
                        <Text size="md">{product?.title}</Text>
                        <Text>{formatCurrency(product?.price)}</Text>
                    </Flex>
                    <Flex mt={3} gap={2} alignItems={`center`}>
                        <Avatar size={`sm`} name={product?.publisher} src="https://bit.ly/code-beast" />
                        <Text fontWeight={`500`}>{product?.publisher}</Text>
                    </Flex>
                </CardBody>

                <CardFooter py={0} justifyContent={`space-between`}>
                    <Text>Qty: {product?.quantity}</Text>
                    <IconButton onClick={deleteProduct} bgColor={`transparent`} color={`red.200`} icon={<Icon icon={`mdi:trash`} />} aria-label={"delete"} />
                </CardFooter>
            </Stack>
        </Card>
    );
};

export const ProductCards = () => {
    const cart = useSelector(selectCart);
    const formatCurrency = useCurrency();
    const [addToCart] = useAddToCartMutation();
    const [purchaseProduct, { isLoading }] = usePurchaseProductMutation();

    const checkoutProductList = cart?.checkoutProducts?.map((product) => {
        return (
            <Box key={product.slug}>
                <ProductCard product={product} />
                <Divider my={4} />
            </Box>
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
            console.log(res);
            if (res) {
                window.location.href = res.authorization_url;
            }
        } catch (error) {
            console.log(error);
        }
    };

    // const saveCart = useCallback(async () => {
    //     const checkoutProductFormat = cart?.checkoutProducts?.map((product) => {
    //         return {
    //             product_slug: product.slug,
    //             quantity: product.quantity,
    //         };
    //     });

    //     const checkout = {
    //         // paystack uses kobo for amounts
    //         total_amount: cart.totalProductPrice,
    //         products: checkoutProductFormat,
    //     };

    //     try {
    //         const res = await addToCart(checkout).unwrap();
    //         console.log(res);
    //         // if (res) {
    //         //     window.location.href = res.authorization_url;
    //         // }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }, [addToCart, cart?.checkoutProducts, cart.totalProductPrice]);

    // useEffect(() => {
    //     saveCart();

    //     console.log(`productcard`);
    // }, [saveCart]);

    return (
        <Box borderRadius={`8px`} border={`1px solid #CFCFD0`} p={5}>
            {checkoutProductList}
            <Flex fontWeight={600} justifyContent={`space-between`}>
                <Text>Total</Text>
                <Text px={5}>{formatCurrency(cart.totalProductPrice)}</Text>
            </Flex>
            <Divider my={4} />
            <Stack gap={4}>
                <SharedButton
                    text={"Proceed to pay"}
                    width={"100%"}
                    height={"48px"}
                    bgColor={"purple.200"}
                    textColor={"grey.100"}
                    borderRadius={"4px"}
                    fontSize={{ base: `sm`, md: `md` }}
                    btnExtras={{
                        isLoading: isLoading,
                        loadingText: `Processing payment...`,
                        onClick: handlePurchaseProduct,
                        disabled: cart.totalProductPrice ? false : true,
                    }}
                />
                <Text textAlign={`center`} color={`grey.400`} textDecor={`underline`}>
                    Give As Gift
                </Text>
            </Stack>
        </Box>
    );
};
