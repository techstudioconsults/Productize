/* eslint-disable react/jsx-no-undef */
import {
    Box,
    Card,
    CardBody,
    Divider,
    Flex,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Skeleton,
    Stack,
    Text,
} from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { useCurrency } from '@productize/hooks';
import { selectCart, selectCurrentUser, selectSingleProduct_EXTERNAL, useAddToCartMutation } from '@productize/redux';
import { SharedButton } from '@productize/ui';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductSideNav = ({ status }) => {
    const cart = useSelector(selectCart);
    const user = useSelector(selectCurrentUser);
    const [addToCart] = useAddToCartMutation();
    const product = useSelector(selectSingleProduct_EXTERNAL);
    const [totalPrice, setTotalPrice] = useState(0);
    const [productQuantity, setProductQuantity] = useState(1);
    const dispatch = useDispatch();
    const formatCurrency = useCurrency();

    const disableVendor = user?.name === product?.publisher;

    const handleProductQuantity = (quantity) => {
        setTotalPrice(product.price * parseInt(quantity));
        setProductQuantity(parseInt(quantity));
    };

    const saveToCartMemo = async () => {
        const checkoutProductFormat = cart?.checkoutProducts?.map((product) => {
            return {
                product_slug: product.slug,
                quantity: product.quantity,
            };
        });

        const checkout = {
            // paystack uses kobo for amounts
            total_amount: cart.totalProductPrice,
            products: checkoutProductFormat,
        };

        try {
            const res = await addToCart(checkout).unwrap();
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };

    const sendToCart = () => {
        const modifiedProduct = {
            ...product,
            quantity: productQuantity,
        };
        dispatch({ type: `App/updateCart`, payload: { product: modifiedProduct, totalPrice } });
    };

    useEffect(() => {
        setTotalPrice(product?.price);
    }, [product?.price]);

    return (
        <Card variant={`outline`}>
            <Skeleton isLoaded={!status.isLoading} borderRadius={8}>
                <CardBody>
                    <Flex bg={`purple.100`} justifyContent={`space-between`} p={2} borderRadius={`4px`}>
                        <Text fontWeight={500}>Sold</Text>
                        <Text>{product?.total_orders}</Text>
                    </Flex>
                    <Box my={4}>
                        <Text color={`grey.800`} fontSize={`22px`} fontWeight={600}>
                            {formatCurrency(totalPrice)}
                        </Text>
                        <Box mt={4}>
                            <NumberInput onChange={handleProductQuantity} defaultValue="1" size={`lg`} min={1}>
                                <NumberInputField />
                                <NumberInputStepper flexDir={`row`} width={`30%`}>
                                    <NumberIncrementStepper>
                                        <Icon icon={`ic:baseline-plus`} />
                                    </NumberIncrementStepper>
                                    <NumberDecrementStepper>
                                        <Icon icon={`ic:baseline-minus`} />
                                    </NumberDecrementStepper>
                                </NumberInputStepper>
                            </NumberInput>
                        </Box>
                    </Box>
                    <Box>
                        <Flex flexDir={`column`} w={`100%`} gap={4}>
                            <SharedButton
                                text={'Add to cart'}
                                width={`100%`}
                                height={'38px'}
                                bgColor={'purple.200'}
                                textColor={'white'}
                                borderRadius={'4px'}
                                fontSize={{ base: `sm`, xl: `md` }}
                                btnExtras={{
                                    onClick: sendToCart,
                                    disabled: disableVendor,
                                }}
                            />
                            <Link to={`/explore/product/cart`}>
                                <SharedButton
                                    btnExtras={{
                                        border: '1px solid #6D5DD3',
                                        onClick: saveToCartMemo,
                                        disabled: disableVendor,
                                    }}
                                    text={'Buy Now'}
                                    width={`100%`}
                                    height={'38px'}
                                    bgColor={'white'}
                                    textColor={'purple.200'}
                                    borderRadius={'4px'}
                                    fontSize={{ base: `sm`, xl: `md` }}
                                />
                            </Link>
                        </Flex>
                    </Box>
                    <Box my={10}>
                        <Text fontWeight={600}>The product includes</Text>
                        <Divider my={3} />
                        <Stack gap={4}>
                            <Flex color={`grey.500`} fontSize={`sm`} alignItems={`center`} justifyContent={`space-between`}>
                                <Text>Format</Text>
                                <Text>{product?.resources_info?.[0]?.mime_type}</Text>
                            </Flex>
                            <Flex color={`grey.500`} fontSize={`sm`} alignItems={`center`} justifyContent={`space-between`}>
                                <Text>File size</Text>
                                <Text>{product?.resources_info?.[0]?.size}</Text>
                            </Flex>
                            <Flex color={`grey.500`} fontSize={`sm`} alignItems={`center`} justifyContent={`space-between`}>
                                <Text>Articles</Text>
                                <Text>0</Text>
                            </Flex>
                            <Flex color={`grey.500`} fontSize={`sm`} alignItems={`center`} justifyContent={`space-between`}>
                                <Text>Downloadable recourses</Text>
                                <Text>{product?.no_of_resources}</Text>
                            </Flex>
                        </Stack>
                    </Box>
                </CardBody>
            </Skeleton>
        </Card>
    );
};

export default ProductSideNav;
