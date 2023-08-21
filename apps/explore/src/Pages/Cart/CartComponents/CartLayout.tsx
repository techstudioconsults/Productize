import { Box } from '@chakra-ui/react';
import React from 'react';

type CartProps = {
  children: React.ReactNode;
};

const CartLayout = (props: CartProps) => {
  return <Box>{props.children}</Box>;
};

export default CartLayout;
