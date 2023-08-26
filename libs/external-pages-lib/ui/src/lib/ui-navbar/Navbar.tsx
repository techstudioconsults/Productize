import { Text, Box } from '@chakra-ui/react';

/* eslint-disable-next-line */
export interface NavbarProps {}

export function Navbar(props: NavbarProps) {
  return (
    <Box bg={`yellow.100`}>
      <Text color={`purple.300`}>The Navbar!</Text>
    </Box>
  );
}

export default Navbar;
