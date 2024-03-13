// import ExploreLayout from 'apps/explore/src/libs/layouts/ExploreLayout';
import { useCallback, useEffect } from 'react';

import ProductSummaryAndPreview from './ProductSummaryAndPreview';
import ProductSideNav from './ProductSideNav';
import ProductNavbar from './ProductNavbar';
import { Box, Container } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useGetSingleProduct_EXTERNALMutation } from '@productize/redux';
import { useTokenExists } from '@productize/hooks';
import { TwoColumnLayout } from '@productize/ui';

export const ProductDetails = () => {
    const [getSingleProducts_EXTERNAL, getAllProducts_EXTERNALStatus] = useGetSingleProduct_EXTERNALMutation();
    const { productID } = useParams();

    const fetchData = useCallback(async () => {
        try {
            await getSingleProducts_EXTERNAL({ productID }).unwrap();
        } catch (error) {
            console.error(error);
        }
    }, [getSingleProducts_EXTERNAL, productID]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <>
            <ProductNavbar isAuth={useTokenExists()} />
            <Container mt={`5rem`} maxW={`70rem`}>
                <TwoColumnLayout
                    C1={<ProductSummaryAndPreview status={getAllProducts_EXTERNALStatus} />}
                    C2={
                        <Box pos={`sticky`} top={`20rem`}>
                            <ProductSideNav status={getAllProducts_EXTERNALStatus} />
                        </Box>
                    }
                />
            </Container>
        </>
    );
};
