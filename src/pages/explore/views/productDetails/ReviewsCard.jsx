import { Card, Divider, Flex, Stack, Text } from '@chakra-ui/react';
import ReviewTemplate from './ReviewTemplate';

const ReviewsCard = ({ reviews }) => {
    return (
        <Card height={`30rem`} mb={4} shadow={`none`} variant={`outline`} p={4}>
            <Flex justifyContent={`space-between`} alignItems={`center`}>
                <Text as={`h5`} className={`small-text`}>
                    Product Reviews
                </Text>
                <Text className={`tiny-text`}>100 Reviews</Text>
            </Flex>
            <Divider mt={2} color={`lightgray`} />
            <Stack pt={2} className={`hide_scrollbar`} overflowY={`scroll`}>
                <ReviewTemplate />
                <Divider my={2} color={`lightgray`} />
                <ReviewTemplate />
                <Divider my={2} color={`lightgray`} />
                <ReviewTemplate />
                <Divider my={2} color={`lightgray`} />
                <ReviewTemplate />
                <Divider my={2} color={`lightgray`} />
                <ReviewTemplate />
                <Divider my={2} color={`lightgray`} />
                <ReviewTemplate />
                <Divider my={2} color={`lightgray`} />
                <ReviewTemplate />
                <Divider my={2} color={`lightgray`} />
            </Stack>
        </Card>
    );
};
export default ReviewsCard;
