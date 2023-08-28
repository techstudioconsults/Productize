import React from 'react';
import CartLayout from './CartLayout';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import Container from '../shared-ui/Container';
import CartData from '../shared-ui/cart-ui/CartData';


// import Container from '../../../components/Container';

const CartStore: React.FC = () => {
  const click = () => {
    alert('Clicked')
    console.log('I was clicked1');
    
  }
  const card = CartData.map((cart, id) => {
    return (
      <Box as={'section'} p={'1rem'} key={id}>
        <Flex
          justify={'space-between'}
          align={'flex-start'}
          p={'1rem 0'}
          borderBottom={'1px solid blue'}
        >
          <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            gap={'0.75rem'}
          >
            <Box>
              <Image src={cart.image} />
            </Box>

            <Box
              display={'flex'}
              flexDir={'column'}
              justifyContent={'center'}
              alignItems={'start'}
            >
              {/* <Text>{card.heading}</Text>
              <Flex gap={'0.5rem'} justify={'center'} align={'center'}>
                <Image src={card.avatar} />
                <Text>{card.text}</Text>
              </Flex>
              <Text textAlign={'start'}>{card.qty}</Text> */}
            </Box>
          </Box>

          <Box>
            <Text>{cart.price}</Text>
            <Image src={cart.delete} onClick={click} />
          </Box>
        </Flex>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Text>{cart.total}</Text>
          <Text>{cart.totalPrice}</Text>
        </Box>
      </Box>
    );
  });


  return (
    <CartLayout>
      <Container >

      <Box 
      w={'52.25rem'} 
      borderRadius={'8px'} 
      border={'1px solid #cfcfd0'}
      mt={'2rem'}
      
      >
        {card}
      </Box>
        </Container>
    </CartLayout>
  );
};

export default CartStore;
