import React from "react";
import { ProductCards } from "./ProductCard";
// import ProductCardDetailsInput from './ProductCardDetailsInput';
import ProductNavbar from "./ProductNavbar";
import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";
import { useTokenExists } from "@productize-v1.0.0/modules/shared/hooks";
import { TwoColumnLayout } from "../../layouts/TwoColumnLayout";
import arrowLeft from "@icons/Property_2_Arrow-left_kafkjg.svg";
import { useNavigate } from "react-router-dom";

const ProductBuy = () => {
    const navigate = useNavigate();
    return (
        <>
            <ProductNavbar isAuth={useTokenExists()} />
            <Container mt={`5rem`} maxW={`60rem`}>
                <Flex w={`100%`} gap={8} alignItems={`center`} mb={5}>
                    <Box cursor={`pointer`} onClick={() => navigate(-1)}>
                        <Image src={arrowLeft} />
                    </Box>
                    <Text as={`h6`}>Back to product page</Text>
                </Flex>
                <TwoColumnLayout
                    C1={<ProductCards />}
                    C2={undefined}
                    // C2={<ProductCardDetailsInput />}
                />
            </Container>
        </>
    );
};

export default ProductBuy;
