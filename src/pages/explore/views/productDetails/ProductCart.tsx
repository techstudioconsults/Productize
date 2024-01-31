// import { useCallback, useEffect } from "react";
import { ProductCards } from "./ProductCard";
// import ProductCardDetailsInput from './ProductCardDetailsInput';
import ProductNavbar from "./ProductNavbar";
import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";
import { useTokenExists } from "@productize-v1.0.0/modules/shared/hooks";
import arrowLeft from "@icons/Property_2_Arrow-left_kafkjg.svg";
import { useNavigate } from "react-router-dom";
import { TwoColumnLayout } from "@productize-v1.0.0/modules/shared/ui";
// import { useGetFromCartMutation } from "@productize-v1.0.0/modules/shared/redux";

export const ProductCart = () => {
    const navigate = useNavigate();

    // const [getFromCart] = useGetFromCartMutation();

    // const getCart = useCallback(async () => {
    //     await getFromCart(null).unwrap();
    // }, [getFromCart]);

    // useEffect(() => {
    //     getCart();
    // }, [getCart]);

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
                <ProductCards />
                {/* <TwoColumnLayout
                    C1={<ProductCards />}
                    C2={undefined}
                    // C2={<ProductCardDetailsInput />}
                /> */}
            </Container>
        </>
    );
};

export default ProductCart;
