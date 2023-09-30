import { Box, Center, Flex, Text } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { SearchComp, Sidenav } from '@productize/shared/ui';
import { useCallback, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const DashboardNavbar = () => {
  const [header, setHeader] = useState('');
  const { state } = useLocation();

  const switchHeader = useCallback(() => {
    setHeader(state);
  }, [state]);

  useEffect(() => {
    switchHeader();
  }, [switchHeader]);

  return (
    <Box borderBottom={`1px solid grey.300`}>
      <Box
        as="nav"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Center>
          <Text as={`h5`} color={`grey.500`} fontWeight={400}>
            {header}
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
