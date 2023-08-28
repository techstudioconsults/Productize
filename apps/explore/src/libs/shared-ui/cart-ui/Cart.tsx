import { Box } from '@chakra-ui/react';
import React from 'react'

type CartProps = {
    children: React.ReactNode; //type children
}

const Cart = (props: CartProps) => {
  return (
    <Box>
        {props.children}
    </Box>
  )
}

export default Cart;