import React from 'react';
import { Box, Heading, Image, Text } from '@chakra-ui/react';

interface CardProps {
  image: string;
  heading: string;
  rate: number;
  count: number;
  price: number;
}

const Card: React.FC<CardProps> = ({ image, heading, rate, count, price }) => {
  return (
    <Box
      display={'flex'}
      flexDir={'column'}
      justifyContent={'start'}
      alignItems={'flex-start'}
      border='1px solid #F3F2FB'
      p={'.625rem'}
      w={'14.0625rem'}
      h={'19.8125rem'}
      cursor={'pointer'}
      _hover={{boxShadow: '5px 5px 5px #000', transform: 'scale(1.01)'}}
    >
      <Box
        display='flex'
        justifyContent={'center'}
        alignItems='center'
        alignSelf={'center'}
        mb='.75rem'
      >
        <Image
          src={image}
          alt={heading}
          w={'100%'}
          h={'12.063rem'}
          objectFit={'contain'}
        />
      </Box>
      <Heading
        fontSize='sm'
        fontWeight={'bold'}
        lineHeight={5}
        color='hsla(248, 11%, 7%, 1)'
        textAlign={'start'}
      >
        {heading}
      </Heading>

      <Box mt='.625rem'>
        <Text
          as='span'
          fontSize={'xs'}
          lineHeight={4}
          pr='.625rem'
         
          textAlign={'left'}
        >
          By Temilade Openiyi
        </Text>
        <Text as='span' fontSize={'xs'} lineHeight={4} ml='0.5rem' pr='.625rem'>
          {rate}
        </Text>
        <Text as='span' fontSize={'xs'} lineHeight={4}>
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
        ${price}
      </Text>
    </Box>
  );
};

export default Card;
