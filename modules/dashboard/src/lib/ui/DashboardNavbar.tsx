import { Box, Center, Flex, Text } from '@chakra-ui/react';
import {
  SearchComp,
  AvatarComp,
  Icon,
  Sidenav,
} from '@productize-v1.0.0/modules/shared/ui';
import { useCallback, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import notification from "@icons/Property_2_Notifications_1_w4v7g4.svg";

export const DashboardNavbar = () => {
  const [header, setHeader] = useState('');
  const { state } = useLocation();

  const switchHeader = useCallback(() => {
    if (typeof state === `object`) {
      return;
    } else {
      setHeader(state);
    }
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
                icon={notification}
                name={'notification'}
              />
            </Link>
          </Box>
          <Box>
            <AvatarComp />
          </Box>
        </Flex>
        <Sidenav />
      </Box>
    </Box>
  );
};
