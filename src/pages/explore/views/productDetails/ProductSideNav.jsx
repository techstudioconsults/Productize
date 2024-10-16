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
import {
    selectCart,
    selectCurrentUser,
    selectSingleProduct_EXTERNAL,
    useAddToCartMutation,
    useGetFromCartMutation,
    useUpdateCartMutation,
} from '@productize/redux';
import { SharedButton, ToastFeedback, useToastAction } from '@productize/ui';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import toastImg from '@icons/star-notice.png';

const ProductSideNav = ({ status }) => {
    const cart = useSelector(selectCart);
    const user = useSelector(selectCurrentUser);
    const { toast, toastIdRef, close } = useToastAction();
    const [addToCart, addToCartStatus] = useAddToCartMutation();
    const [updateCart] = useUpdateCartMutation();
    const [getFromCart] = useGetFromCartMutation();
    const product = useSelector(selectSingleProduct_EXTERNAL);
    const [totalPrice, setTotalPrice] = useState(0);
    const [productQuantity, setProductQuantity] = useState(1);
    const formatCurrency = useCurrency();
    const navigate = useNavigate();

    const disableVendor = user?.name === product?.publisher;

    // const productProperty = product?.assets?.length
    // console.log(productProperty); 

    const handleProductQuantity = (quantity) => {
        setTotalPrice(product.price * parseInt(quantity));
        setProductQuantity(parseInt(quantity));
    };

    const sendToCart = async () => {
        try {
            const res = await getFromCart(null).unwrap();
            if (res.data.length) {
                res.data.forEach(async (item) => {
                    if (item.product_slug === product?.slug) {
                        const res = await updateCart({ cart_id: item.id, body: { quantity: productQuantity } }).unwrap();
                        if (res) {
                            getFromCart(null).unwrap();
                            toastIdRef.current = toast({
                                position: 'top',
                                render: () => (
                                    <ToastFeedback
                                        message={`${product?.title || product?.product_title} updated successfully`}
                                        title="Product update"
                                        icon={toastImg}
                                        btnColor={`purple.200`}
                                        bgColor={undefined}
                                        color={undefined}
                                        handleClose={close}
                                    />
                                ),
                            });
                        }
                    } else {
                        const modifiedProduct = {
                            product_slug: product.slug,
                            quantity: productQuantity,
                        };
                        console.log(modifiedProduct);
                        const res = await addToCart(modifiedProduct).unwrap();
                        if (res) {
                            getFromCart(null).unwrap();
                        }
                    }
                });
            } else {
                const modifiedProduct = {
                    product_slug: product.slug,
                    quantity: productQuantity,
                };
                console.log(modifiedProduct);

                const res = await addToCart(modifiedProduct).unwrap();
                if (res) {
                    getFromCart(null).unwrap();
                }
            }
        } catch (err) {
            return;
        }
    };

    const handleBuyNow = () => {
        sendToCart();
        setTimeout(() => {
            navigate(`/explore/product/cart`);
        }, [2000]);
    };

    useEffect(() => {
        setTotalPrice(product?.price);
    }, [product?.price]);

    return (
        <Box>
            <Card variant={`outline`}>
                <Skeleton isLoaded={!status.isLoading} borderRadius={8}>
                    <CardBody>
                        <Flex bg={`purple.100`} justifyContent={`space-between`} p={2} borderRadius={`4px`}>
                            <Text fontWeight={500}>Sold</Text>
                            <Text>{product?.total_orders}</Text>
                        </Flex>
                        <Box my={4}>
                            <Text>
                                <Text as={`span`} color={`grey.800`} fontSize={`22px`} fontWeight={600}>
                                    {product?.discount_price ? formatCurrency(product?.discount_price) : formatCurrency(totalPrice)}
                                </Text>
                                <Text textDecor={`line-through`} hidden={!product?.discount_price} ml={2} color={`red`} fontWeight={600} as={`span`}>
                                    {formatCurrency(product?.price)}
                                </Text>
                            </Text>
                            {/* <Box title={`You can only select one digital or skill selling quantity`} mt={4}>
                                <NumberInput
                                    onChange={handleProductQuantity}
                                    defaultValue="1"
                                    size={`lg`}
                                    min={1}
                                    // max={product?.product_type === `digital_product` ? 1 : 10}
                                    max={1}
                                >
                                    <NumberInputField readOnly />
                                    <NumberInputStepper flexDir={`row`} width={`30%`}>
                                        <NumberIncrementStepper>
                                            <Icon icon={`ic:baseline-plus`} />
                                        </NumberIncrementStepper>
                                        <NumberDecrementStepper>
                                            <Icon icon={`ic:baseline-minus`} />
                                        </NumberDecrementStepper>
                                    </NumberInputStepper>
                                </NumberInput>
                            </Box> */}
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
                                        isLoading: addToCartStatus.isLoading,
                                        loadingText: `adding to cart...`,
                                    }}
                                />
                                {/* <Link to={`/explore/product/cart`}> */}
                                <SharedButton
                                    btnExtras={{
                                        onClick: handleBuyNow,
                                        border: '1px solid #6D5DD3',
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
                                {/* </Link> */}
                            </Flex>
                        </Box>
                        <Box my={10}>
                            <Text fontWeight={600}>The product includes</Text>
                            <Divider my={3} />
                            <Stack gap={4}>
                                <Flex color={`grey.500`} fontSize={`sm`} alignItems={`center`} justifyContent={`space-between`}>
                                    <Text fontWeight={600}>Format</Text>
                                    <Text>{product?.assets?.[0]?.extension}</Text>
                                </Flex>
                                <Flex color={`grey.500`} fontSize={`sm`} alignItems={`center`} justifyContent={`space-between`}>
                                    <Text fontWeight={600}>File size</Text>
                                    <Text>{product?.assets?.[0]?.size}</Text>
                                </Flex>
                                {/* <Flex color={`grey.500`} fontSize={`sm`} alignItems={`center`} justifyContent={`space-between`}>
                                    <Text>Articles</Text>
                                    <Text>0</Text>
                                </Flex> */}
                                <Flex color={`grey.500`} fontSize={`sm`} alignItems={`center`} justifyContent={`space-between`}>
                                    <Text fontWeight={600}>Downloadable Resources</Text>
                                    <Text>{product?.assets?.length}</Text>
                                </Flex>
                            </Stack>
                        </Box>
                    </CardBody>
                </Skeleton>
            </Card>
        </Box>
    );
};

export default ProductSideNav;

/* eslint-disable react/jsx-no-undef */
// import {
//     Box,
//     Card,
//     CardBody,
//     Divider,
//     Flex,
//     NumberDecrementStepper,
//     NumberIncrementStepper,
//     NumberInput,
//     NumberInputField,
//     NumberInputStepper,
//     Skeleton,
//     Stack,
//     Text,
// } from '@chakra-ui/react';
// import { Icon } from '@iconify/react';
// import { useCurrency } from '@productize/hooks';
// import {
//     selectCart,
//     selectCurrentUser,
//     selectSingleProduct_EXTERNAL,
//     useAddToCartMutation,
//     useGetFromCartMutation,
//     useUpdateCartMutation,
// } from '@productize/redux';
// import { SharedButton, ToastFeedback, useToastAction } from '@productize/ui';
// import { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import toastImg from '@icons/star-notice.png';

// const ProductSideNav = ({ status }) => {
//     const cart = useSelector(selectCart);
//     const user = useSelector(selectCurrentUser);
//     const { toast, toastIdRef, close } = useToastAction();
//     const [addToCart, addToCartStatus] = useAddToCartMutation();
//     const [updateCart] = useUpdateCartMutation();
//     const [getFromCart] = useGetFromCartMutation();
//     const product = useSelector(selectSingleProduct_EXTERNAL);
//     const [totalPrice, setTotalPrice] = useState(0);
//     const [productQuantity, setProductQuantity] = useState(1);
//     const formatCurrency = useCurrency();

//     const disableVendor = user?.name === product?.publisher;
//     const productInCart = cart?.items?.find((item) => item.product_slug === product?.slug);

//     const handleProductQuantity = (quantity) => {
//         setTotalPrice(product.price * parseInt(quantity));
//         setProductQuantity(parseInt(quantity));
//     };

//     const sendToCart = async () => {
//         try {
//             if (productInCart) {
//                 const res = await updateCart({ cart_id: productInCart.id, body: { quantity: productQuantity } }).unwrap();
//                 if (res) {
//                     getFromCart(null).unwrap();
//                     toastIdRef.current = toast({
//                         position: 'top',
//                         render: () => (
//                             <ToastFeedback
//                                 message={`${product?.title || product?.product_title} updated successfully`}
//                                 title="Product update"
//                                 icon={toastImg}
//                                 btnColor={`purple.200`}
//                                 bgColor={undefined}
//                                 color={undefined}
//                                 handleClose={close}
//                             />
//                         ),
//                     });
//                 }
//             } else {
//                 const modifiedProduct = {
//                     product_slug: product.slug,
//                     quantity: productQuantity,
//                 };
//                 const res = await addToCart(modifiedProduct).unwrap();
//                 if (res) {
//                     getFromCart(null).unwrap();
//                 }
//             }
//         } catch (err) {
//             return;
//         }
//     };

//     useEffect(() => {
//         setTotalPrice(product?.price);
//     }, [product?.price]);

//     return (
//         <Box>
//             <Card variant="outline">
//                 <Skeleton isLoaded={!status.isLoading} borderRadius={8}>
//                     <CardBody>
//                         <Flex bg="purple.100" justifyContent="space-between" p={2} borderRadius="4px">
//                             <Text fontWeight={500}>Sold</Text>
//                             <Text>{product?.total_orders}</Text>
//                         </Flex>
//                         <Box my={4}>
//                             <Text color="grey.800" fontSize="22px" fontWeight={600}>
//                                 {formatCurrency(totalPrice)}
//                                 <Text textDecor="line-through" ml={2} color="red" fontWeight={600} as="span">
//                                     {formatCurrency(totalPrice)}
//                                 </Text>
//                             </Text>
//                             <Box mt={4}>
//                                 <NumberInput
//                                     onChange={handleProductQuantity}
//                                     defaultValue="1"
//                                     size="lg"
//                                     min={1}
//                                     max={product?.product_type === 'digital_product' ? 1 : 10}
//                                 >
//                                     <NumberInputField readOnly />
//                                     <NumberInputStepper flexDir="row" width="30%">
//                                         <NumberIncrementStepper>
//                                             <Icon icon="ic:baseline-plus" />
//                                         </NumberIncrementStepper>
//                                         <NumberDecrementStepper>
//                                             <Icon icon="ic:baseline-minus" />
//                                         </NumberDecrementStepper>
//                                     </NumberInputStepper>
//                                 </NumberInput>
//                             </Box>
//                         </Box>
//                         <Box>
//                             <Flex flexDir="column" w="100%" gap={4}>
//                                 <SharedButton
//                                     text={'Add to cart'}
//                                     width="100%"
//                                     height="38px"
//                                     bgColor={'purple.200'}
//                                     textColor={'white'}
//                                     borderRadius={'4px'}
//                                     fontSize={{ base: 'sm', xl: 'md' }}
//                                     btnExtras={{
//                                         onClick: sendToCart,
//                                         disabled: disableVendor || productInCart,
//                                         isLoading: addToCartStatus.isLoading,
//                                         loadingText: `adding to cart...`,
//                                     }}
//                                 />
//                                 <Link hidden={!cart.totalProductQuantity} to="/explore/product/cart">
//                                     <SharedButton
//                                         btnExtras={{
//                                             border: '1px solid #6D5DD3',
//                                             disabled: disableVendor,
//                                         }}
//                                         text={'Buy Now'}
//                                         width="100%"
//                                         height="38px"
//                                         bgColor="white"
//                                         textColor="purple.200"
//                                         borderRadius="4px"
//                                         fontSize={{ base: 'sm', xl: 'md' }}
//                                     />
//                                 </Link>
//                             </Flex>
//                         </Box>
//                         <Box my={10}>
//                             <Text fontWeight={600}>The product includes</Text>
//                             <Divider my={3} />
//                             <Stack gap={4}>
//                                 <Flex color="grey.500" fontSize="sm" alignItems="center" justifyContent="space-between">
//                                     <Text fontWeight={600}>Format</Text>
//                                     <Text>{product?.resources?.[0]?.mime_type}</Text>
//                                 </Flex>
//                                 <Flex color="grey.500" fontSize="sm" alignItems="center" justifyContent="space-between">
//                                     <Text fontWeight={600}>File size</Text>
//                                     <Text>{product?.resources?.[0]?.size}</Text>
//                                 </Flex>
//                                 <Flex color="grey.500" fontSize="sm" alignItems="center" justifyContent="space-between">
//                                     <Text fontWeight={600}>Downloadable resources</Text>
//                                     <Text>{product?.resources?.length}</Text>
//                                 </Flex>
//                             </Stack>
//                         </Box>
//                     </CardBody>
//                 </Skeleton>
//             </Card>
//         </Box>
//     );
// };

// export default ProductSideNav;
