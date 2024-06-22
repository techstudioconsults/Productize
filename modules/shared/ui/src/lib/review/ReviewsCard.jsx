import { Card, Divider, Flex, Stack, Text, Box } from '@chakra-ui/react';
import ReviewTemplate from './ReviewTemplate';

export const ReviewsCard = ({ reviews }) => {
    const hasReviews = reviews && reviews.length > 0;

    console.log(reviews);

    return (
        <Card height={`30rem`} mb={4} shadow={`none`} variant={`outline`} p={4}>
            <Flex justifyContent={`space-between`} alignItems={`center`}>
                <Text as={`h5`} className={`small-text`}>
                    Product Reviews
                </Text>
                <Text className={`tiny-text`}>
                    {reviews?.length} Review{reviews.length === 1 ? null : `s`}
                </Text>
            </Flex>
            <Divider mt={2} color={`lightgray`} />
            <Stack pt={2} className={`hide_scrollbar`} overflowY={`scroll`} height="100%">
                {hasReviews ? (
                    reviews?.map((review) => (
                        <Stack key={review?.user}>
                            <ReviewTemplate review={review} />
                            <Divider my={2} color={`lightgray`} />
                        </Stack>
                    ))
                ) : (
                    <Box textAlign="center" color="gray.500" mt={4}>
                        <Text>No reviews available.</Text>
                    </Box>
                )}
            </Stack>
        </Card>
    );
};

export default ReviewsCard;
