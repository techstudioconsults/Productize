import { Box } from '@chakra-ui/react';
import React from 'react';

type ContainerProps = {
    children: React.ReactNode; // children type
}

const Container = (props: ContainerProps) => {
  return (
    <Box
    w={'100%'}
    maxW={'1440px'}
    m={'0 auto'}
    textAlign={'center'}
    padding={'1rem 8rem'}
    >
        {props.children}
    </Box>
  )
}

export default Container;