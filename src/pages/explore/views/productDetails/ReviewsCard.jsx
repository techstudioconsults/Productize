import { Card, Divider, Flex, Stack, Text } from '@chakra-ui/react';
import ReviewTemplate from './ReviewTemplate';

const ReviewsCard = ({ reviews }) => {
    const productReviews = reviews?.map((review) => {
        return (
            <Stack key={review?.user}>
                <ReviewTemplate review={review} />
                <Divider my={2} color={`lightgray`} />
            </Stack>
        );
    });

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
            <Stack pt={2} className={`hide_scrollbar`} overflowY={`scroll`}>
                {productReviews}
            </Stack>
        </Card>
    );
};
export default ReviewsCard;
