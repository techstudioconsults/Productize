import React from "react";
import { ProductCards } from "./ProductCard";
// import ProductCardDetailsInput from './ProductCardDetailsInput';
import ProductNavbar from "./ProductNavbar";
import { Container } from "@chakra-ui/react";
import { useTokenExists } from "@productize-v1.0.0/modules/shared/hooks";
import { TwoColumnLayout } from "../../layouts/TwoColumnLayout";

const ProductBuy = () => {
    return (
        <>
            <ProductNavbar isAuth={useTokenExists()} />
            <Container mt={`5rem`} maxW={`60rem`}>
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
