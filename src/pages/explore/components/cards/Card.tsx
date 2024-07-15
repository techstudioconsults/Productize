import React, { useEffect, useState } from 'react';
import { Box, Flex, Heading, Image, Tag, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useCurrency, useDiscountCalculator } from '@productize/hooks';
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
    aggrRating: string | number;
    discountPrice: number; // Ensure discountPrice is a number
}

const Card: React.FC<CardProps> = ({ width, image, heading, rate, count, price, publisher, productID, aggrRating, discountPrice }) => {
    const formatCurrency = useCurrency();
    const { calculateDiscountPercentage } = useDiscountCalculator();
    const [discountPercentage, setDiscountPercentage] = useState(0);

    useEffect(() => {
        const res: any = calculateDiscountPercentage(price, discountPrice);
        setDiscountPercentage(res.discount?.toFixed(0));
    }, [calculateDiscountPercentage, discountPrice, price]);

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

            <Flex alignItems={`center`} justifyContent={`space-between`} w={`100%`} mt=".625rem">
                <Text as="span" fontSize={'xs'} lineHeight={4} pr=".625rem" textAlign={'left'}>
                    By {publisher.slice(0, 25)}
                </Text>
                <Flex hidden={!aggrRating} alignItems={`flex-end`}>
                    <StarRatings numberOfStars={1} rating={aggrRating} starDimension="20px" starSpacing="1px" starRatedColor={`orange`} />
                    <Text as={`span`} fontSize={`xs`}>
                        {aggrRating}
                    </Text>
                </Flex>
            </Flex>
            <Flex mt={2} fontWeight={'bold'} color={'#6D5DD3'} textAlign={'start'} w={`100%`} alignItems={`center`} justifyContent={`space-between`}>
                <Flex alignItems={`center`} gap={2}>
                    <Text fontSize={'sm'}>{discountPrice ? formatCurrency(discountPrice) : formatCurrency(price)}</Text>
                    <Text hidden={!discountPrice} textDecoration={`line-through`} color={`red.500`} fontSize={'xs'}>
                        {!discountPrice ? formatCurrency(discountPrice) : formatCurrency(price)}
                    </Text>
                </Flex>
                <Tag colorScheme={`orange`} fontSize={'xs'} hidden={discountPercentage >= 100}>
                    {-discountPercentage}%
                </Tag>
            </Flex>
        </Box>
    );
};

export default Card;
