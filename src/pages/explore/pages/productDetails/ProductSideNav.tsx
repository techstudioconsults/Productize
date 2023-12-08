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
    Stack,
    Text,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { useCurrency } from "@productize-v1.0.0/modules/shared/hooks";
import { selectSingleProduct_EXTERNAL } from "@productize-v1.0.0/modules/shared/redux";
import { SharedButton } from "@productize-v1.0.0/modules/shared/ui";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductSideNav = () => {
    const product = useSelector(selectSingleProduct_EXTERNAL);
    const [totalPrice, setTotalPrice] = useState(0);
    const [productQuantity, setProductQuantity] = useState(1);
    const dispatch = useDispatch();
    const formatCurrency = useCurrency();

    const handleProductQuantity = (quantity: string) => {
        setTotalPrice(product.price * parseInt(quantity));
        setProductQuantity(parseInt(quantity));
    };

    const addToCart = () => {
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
        <Card maxW="sm">
            <CardBody>
                <Flex bg={`purple.100`} justifyContent={`space-between`} p={2} borderRadius={`4px`}>
                    <Text fontWeight={500}>Sold</Text>
                    <Text>20</Text>
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
                            text={"Add to cart"}
                            width={`100%`}
                            height={"38px"}
                            bgColor={"purple.200"}
                            textColor={"white"}
                            borderRadius={"4px"}
                            fontSize={{ base: `sm`, xl: `md` }}
                            btnExtras={{
                                onClick: addToCart,
                            }}
                        />
                        <Link to={`/explore/product/cart`}>
                            <SharedButton
                                btnExtras={{
                                    border: "1px solid #6D5DD3",
                                }}
                                text={"Buy Now"}
                                width={`100%`}
                                height={"38px"}
                                bgColor={"white"}
                                textColor={"purple.200"}
                                borderRadius={"4px"}
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
                <Flex fontWeight={600} alignItems={`center`} gap={5}>
                    <Text>Share</Text>
                    <Text>Give as a gift</Text>
                </Flex>
            </CardBody>
        </Card>
    );
};

export default ProductSideNav;
