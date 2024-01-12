// import ExploreLayout from 'apps/explore/src/libs/layouts/ExploreLayout';
import { useCallback, useEffect } from "react";

import ProductSummaryAndPreview from "./ProductSummaryAndPreview";
import ProductSideNav from "./ProductSideNav";
import ProductNavbar from "./ProductNavbar";
import { Container } from "@chakra-ui/react";
import { useTokenExists } from "@productize-v1.0.0/modules/shared/hooks";
import { useGetSingleProduct_EXTERNALMutation } from "@productize-v1.0.0/modules/shared/redux";
import { useParams } from "react-router-dom";
import { TwoColumnLayout } from "@productize-v1.0.0/modules/shared/ui";
// import Footers from 'apps/explore/src/libs/layouts/footer/Footer';

const ProductDetails = () => {
    const [getSingleProducts_EXTERNAL] = useGetSingleProduct_EXTERNALMutation();

    const { productID } = useParams();

    const fetchData = useCallback(async () => {
        try {
            await getSingleProducts_EXTERNAL({ productID }).unwrap();
        } catch (error) {
            console.log(error);
        }
    }, [getSingleProducts_EXTERNAL, productID]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <>
            <ProductNavbar isAuth={useTokenExists()} />
            <Container mt={`5rem`} maxW={`70rem`}>
                <TwoColumnLayout C1={<ProductSummaryAndPreview />} C2={<ProductSideNav />} />
            </Container>
            {/* <Footers /> */}
        </>
    );
};

export default ProductDetails;
