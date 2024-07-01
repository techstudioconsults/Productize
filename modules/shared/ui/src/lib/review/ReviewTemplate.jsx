/* eslint-disable @nx/enforce-module-boundaries */
import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import { useDate } from '@productize/hooks';
import StarRatings from 'react-star-ratings';

export const ReviewTemplate = ({ review }) => {
    const formatDate = useDate();
    // const formatTime = useTime();
    return (
        <Box>
            <Text className={`small-text`}>{review.comment}</Text>
            <Flex my={2} alignItems={`center`} justifyContent={`space-between`}>
                <Flex alignItems={`center`} gap={2}>
                    <Avatar size={`xs`} src={review?.user?.logo} name={review?.user?.name} />
                    <Box>
                        <Text fontWeight={`semibold`} className={`small-text`}>
                            {review?.user?.name}
                        </Text>
                        <Text className={`tiny-text`}>{formatDate(review?.created_at)}</Text>
                    </Box>
                </Flex>
                <Box>
                    <StarRatings rating={review.rating} starDimension="12px" starSpacing="1px" starRatedColor={`orange`} />
                </Box>
            </Flex>
        </Box>
    );
};
export default ReviewTemplate;
