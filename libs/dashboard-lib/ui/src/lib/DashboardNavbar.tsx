import { Box, Center, Container, Flex, Image, Text } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { SearchComp, Sidenav } from '@productize/shared/ui';
import { Link } from 'react-router-dom';

export const DashboardNavbar = () => {
  return (
    <Box borderBottom={`1px solid grey.300`}>
      <Box
        as="nav"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Center>
          <Text as={`h5`} color={`grey.500`}>
            Home
          </Text>
        </Center>

        <Flex justify={{ lg: 'center' }} align={{ lg: 'center' }} gap="1.5rem">
          <Box display={{ base: `none`, md: `block` }}>
            <SearchComp width={`17rem`} color={`grey.200`} />
          </Box>
          <Box display={{ base: `none`, xl: `initial` }}>
            <Link to={`cart`}>
              <Icon
                fontSize={`1.5rem`}
                icon={`material-symbols:notifications-sharp`}
              />
            </Link>
          </Box>
        </Flex>
        <Sidenav />
      </Box>
    </Box>
  );
};
