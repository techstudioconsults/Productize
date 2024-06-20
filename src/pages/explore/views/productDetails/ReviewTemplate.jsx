import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import StarRatings from 'react-star-ratings';

const ReviewTemplate = ({ review }) => {
    return (
        <Box>
            <Text className={`small-text`}>{review.comment}</Text>
            <Flex my={2} alignItems={`center`} justifyContent={`space-between`}>
                <Flex alignItems={`center`} gap={2}>
                    <Avatar size={`xs`} src={``} name={`Kinglsey Solomon`} />
                    <Box>
                        <Text fontWeight={`semibold`} className={`small-text`}>
                            Kingsley Solomon
                        </Text>
                        <Text className={`tiny-text`}>2 months ago</Text>
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
