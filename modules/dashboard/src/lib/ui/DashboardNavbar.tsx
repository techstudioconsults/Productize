import { Box, Center, Flex, Text } from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { DashboardDrawer, AvatarComp, SearchComp } from '@productize/ui';
import NotificationApp from './pages/notification/NotificationApp';

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
            <Box as="nav" display="flex" justifyContent="space-between" alignItems="center">
                <Flex alignItems={`center`} gap={4}>
                    <DashboardDrawer links={undefined} />
                    <Center>
                        <Text as={`h5`} color={`grey.500`} fontWeight={600}>
                            {header}
                        </Text>
                    </Center>
                </Flex>
                <Flex justify={{ lg: 'center' }} alignItems={`center`} gap="1.5rem">
                    <Box display={{ base: `none`, md: `block` }}>
                        <SearchComp width={`17rem`} color={`grey.200`} />
                    </Box>
                    <Box>
                        <NotificationApp />
                    </Box>
                    <Box>
                        <AvatarComp />
                    </Box>
                </Flex>
            </Box>
            <Box mt={4} display={{ base: `block`, md: `none` }}>
                <SearchComp width={`100%`} color={`grey.200`} />
            </Box>
        </Box>
    );
};
