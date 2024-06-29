import { Card, Divider, Flex, Stack, Text, Box, Center, Skeleton } from '@chakra-ui/react';
import ReviewTemplate from './ReviewTemplate';
import { Icon } from '@iconify/react';
import { useGetSingleProductReviewsMutation } from '@productize/redux';
import { useCallback, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

export const ReviewsCard = () => {
    const [getSingleProductReviews] = useGetSingleProductReviewsMutation();
    const [productReviews, setProductReviews] = useState();
    const [isLoading, setLoading] = useState(true);
    const { productID } = useParams();
    const { hash } = useLocation();

    const fetchData = useCallback(async () => {
        try {
            const res = await getSingleProductReviews({ productID }).unwrap();
            if (res.data) {
                setProductReviews(res.data);
                setLoading(false);
            }
        } catch (error) {
            console.error(error);
        }
    }, [getSingleProductReviews, productID]);

    useEffect(() => {
        if (!hash) {
            fetchData();
        }
    }, [fetchData, hash]);

    const hasReviews = productReviews && productReviews.length > 0;

    return (
        <Skeleton isLoaded={hash.includes(`preview`) ? isLoading : !isLoading}>
            <Card height={`30rem`} mb={4} shadow={`none`} variant={`outline`} p={4}>
                <Flex justifyContent={`space-between`} alignItems={`center`}>
                    <Text as={`h5`} className={`small-text`}>
                        Product Reviews
                    </Text>
                    <Text className={`tiny-text`}>
                        {productReviews?.length} Review{productReviews?.length === 1 ? null : `s`}
                    </Text>
                </Flex>
                <Divider mt={2} color={`lightgray`} />
                <Stack pt={2} className={`hide_scrollbar`} overflowY={`scroll`} height="100%">
                    {hasReviews ? (
                        productReviews?.map((review) => (
                            <Stack key={review?.user}>
                                <ReviewTemplate review={review} />
                                <Divider my={2} color={`lightgray`} />
                            </Stack>
                        ))
                    ) : (
                        <Center flexDir={`column`} gap={4} color="gray.500" mt={4}>
                            <Icon fontSize={`2rem`} icon="emojione-v1:empty-note-pad" />
                            <Text>No reviews available.</Text>
                        </Center>
                    )}
                </Stack>
            </Card>
        </Skeleton>
    );
};

export default ReviewsCard;
