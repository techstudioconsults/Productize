import React from 'react';
import { Box, Heading, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useCurrency } from '@productize/hooks';

interface CardProps {
    image: string;
    heading: string;
    rate?: number;
    count?: number;
    price: number;
    publisher: string;
    productID: string | number;
}

const Card: React.FC<CardProps> = ({ image, heading, rate, count, price, publisher, productID }) => {
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
            cursor={'pointer'}
            _hover={{ boxShadow: '5px 5px 5px #000', transform: 'scale(1.01)' }}
        >
            <Box display="flex" w={`100%`} justifyContent={'center'} alignItems="center" alignSelf={'center'} mb=".75rem">
                <Image src={image} alt={heading} w={'100%'} h={'12.063rem'} objectFit={'contain'} />
            </Box>
            <Heading fontSize="sm" fontWeight={'bold'} lineHeight={5} color="hsla(248, 11%, 7%, 1)" textAlign={'start'}>
                {heading}
            </Heading>

            <Box mt=".625rem">
                <Text as="span" fontSize={'xs'} lineHeight={4} pr=".625rem" textAlign={'left'}>
                    By {publisher}
                </Text>
                <Text as="span" fontSize={'xs'} lineHeight={4} ml="0.5rem" pr=".625rem">
                    {rate}
                </Text>
                <Text as="span" fontSize={'xs'} lineHeight={4}>
                    {count}
                </Text>
            </Box>
            <Text
                display={'flex'}
                justifyContent={'start'}
                alignSelf={'flex-start'}
                fontSize={'sm'}
                fontWeight={'bold'}
                lineHeight={5}
                color={'#6D5DD3'}
                textAlign={'start'}
            >
                {formatCurrency(price)}
            </Text>
        </Box>
    );
};

export default Card;
