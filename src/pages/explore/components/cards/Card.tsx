import React from 'react';
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useCurrency } from '@productize/hooks';
import StarRatings from 'react-star-ratings';

interface CardProps {
    width?: string;
    image: string;
    heading: string;
    rate?: number;
    count?: number;
    price: number;
    publisher: string;
    productID: string | number;
}

const Card: React.FC<CardProps> = ({ width, image, heading, rate, count, price, publisher, productID }) => {
    const formatCurrency = useCurrency();
    return (
        <Box
            to={`/products/${productID}`}
            as={Link}
            display={'flex'}
            flexDir={'column'}
            justifyContent={'start'}
            alignItems={'flex-start'}
            border="1px solid #F3F2FB"
            p={'.625rem'}
            h={'19.8125rem'}
            w={width}
            cursor={'pointer'}
            _hover={{ boxShadow: '5px 5px 5px #000', transform: 'scale(1.01)' }}
        >
            <Box display="flex" w={`100%`} justifyContent={'center'} alignItems="center" alignSelf={'center'} mb=".75rem">
                <Image src={image} alt={heading} w={'100%'} h={'12.063rem'} objectFit={'cover'} />
            </Box>
            <Heading fontSize="sm" fontWeight={'bold'} lineHeight={5} color="hsla(248, 11%, 7%, 1)" textAlign={'start'}>
                {heading.slice(0, 30)}
            </Heading>

            <Box mt=".625rem">
                <Text as="span" fontSize={'xs'} lineHeight={4} pr=".625rem" textAlign={'left'}>
                    By {publisher.slice(0, 25)}
                </Text>
                {/* <Text as="span" fontSize={'xs'} lineHeight={4}>
                    {`count`}
                </Text> */}
            </Box>
            <Flex fontWeight={'bold'} color={'#6D5DD3'} textAlign={'start'} w={`100%`} alignItems={`center`} justifyContent={`space-between`}>
                <Text lineHeight={5} fontSize={'sm'}>
                    {formatCurrency(price)}
                </Text>
                <Box>
                    <StarRatings rating={4} starDimension="12px" starSpacing="1px" starRatedColor={`orange`} />
                </Box>
            </Flex>
        </Box>
    );
};

export default Card;
