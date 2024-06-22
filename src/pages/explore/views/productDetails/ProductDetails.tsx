// import ExploreLayout from 'apps/explore/src/libs/layouts/ExploreLayout';
import { useCallback, useEffect, useState } from 'react';

import ProductSummaryAndPreview from './ProductSummaryAndPreview';
import ProductSideNav from './ProductSideNav';
import ProductNavbar from './ProductNavbar';
import { Box, Center, Container, Flex, Image, Stack, Text } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetSingleProductReviewsMutation, useGetSingleProduct_EXTERNALMutation } from '@productize/redux';
import { useTokenExists } from '@productize/hooks';
import { ReviewsCard, SpinnerComponentSmall, TwoColumnLayout } from '@productize/ui';
import arrowLeft from '@icons/Property_2_Arrow-left_kafkjg.svg';

export const ProductDetails = () => {
    const [getSingleProducts_EXTERNAL, getAllProducts_EXTERNALStatus] = useGetSingleProduct_EXTERNALMutation();
    const [getSingleProductReviews] = useGetSingleProductReviewsMutation();
    const [productReviews, setProductReviews] = useState();
    const [isLoading, setLoading] = useState(true);
    const { productID } = useParams();
    const navigate = useNavigate();

    const fetchData = useCallback(async () => {
        try {
            await getSingleProducts_EXTERNAL({ productID }).unwrap();
            const res = await getSingleProductReviews({ productID }).unwrap();
            if (res.data) {
                setProductReviews(res.data);
                setLoading(false);
            }
        } catch (error) {
            console.error(error);
        }
    }, [getSingleProductReviews, getSingleProducts_EXTERNAL, productID]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <>
            <ProductNavbar isAuth={useTokenExists()} />
            <Container mt={`5rem`} maxW={`70rem`}>
                <Flex w={`fit-content`} gap={8} alignItems={`center`} mb={5} cursor={`pointer`} onClick={() => navigate(-1)}>
                    <Box>
                        <Image src={arrowLeft} />
                    </Box>
                    <Text as={`h6`}>Back</Text>
                </Flex>
                <TwoColumnLayout
                    C1={<ProductSummaryAndPreview status={getAllProducts_EXTERNALStatus} />}
                    C2={
                        <Stack pos={`sticky`} top={`20rem`} gap={4}>
                            <ProductSideNav status={getAllProducts_EXTERNALStatus} />
                            {isLoading ? (
                                <Center p={10}>
                                    <SpinnerComponentSmall />
                                </Center>
                            ) : (
                                <ReviewsCard reviews={productReviews} />
                            )}
                        </Stack>
                    }
                />
            </Container>
        </>
    );
};
