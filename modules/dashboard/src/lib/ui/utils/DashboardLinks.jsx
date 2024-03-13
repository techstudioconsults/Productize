import { useCallback, useEffect } from 'react';
import { useLinks } from './links';
import { useGetUserMutation } from '@productize/redux';
import { Icon } from '@iconify/react';
import { Icon as IconSet } from '@productize/ui';
import { NavLink } from 'react-router-dom';
import { Box, Center, Flex, Stack, Text } from '@chakra-ui/react';
import style from '../layouts/navbar.module.scss';

export const DashboardLinks = ({ close }) => {
    const { links1, links2, links3 } = useLinks();
    const [getUser] = useGetUserMutation();

    const navLink1 = links1?.map((link) => {
        return (
            <NavLink
                onClick={() => close()}
                state={link?.name}
                className={({ isActive }) => (isActive ? style.active : style.inactive)}
                to={link?.path}
                key={link?.id}
            >
                <Flex
                    borderRadius={`8px`}
                    width={`195px`}
                    py={`12px`}
                    px={`16px`}
                    fontSize={`1.5rem`}
                    alignItems={`center`}
                    justifyContent={`space-between`}
                    w={`100%`}
                >
                    <Flex w={`100%`} gap={2} alignItems={`center`} justifyContent={`space-between`}>
                        <Flex gap={2} alignItems={`center`}>
                            <IconSet icon={link.icon} name={link.name} size={`24px`} />
                            <Text>{link?.name}</Text>
                        </Flex>
                        <Center
                            display={link?.analysis ? `flex` : `none`}
                            w={`1.5rem`}
                            h={`1.5rem`}
                            fontSize={`0.8rem`}
                            borderRadius={`100%`}
                            color={`grey.100`}
                            bg={`red.200`}
                        >
                            {link?.analysis}
                        </Center>
                    </Flex>

                    <Box display={link.type ? `none` : `block`}>
                        <Icon color={`grey.400`} fontSize={`1.1rem`} icon={'foundation:lock'} />
                    </Box>
                </Flex>
            </NavLink>
        );
    });
    const navLink2 = links2?.map((link) => {
        return (
            <NavLink
                onClick={() => close()}
                state={link?.name}
                className={({ isActive }) => (isActive ? style.active : style.inactive)}
                to={link.path}
                key={link.id}
            >
                <Flex
                    borderRadius={`8px`}
                    width={`195px`}
                    py={`12px`}
                    px={`16px`}
                    fontSize={`1.5rem`}
                    alignItems={`center`}
                    justifyContent={`space-between`}
                    w={`100%`}
                >
                    <Flex gap={2} alignItems={`center`}>
                        <IconSet icon={link.icon} name={link.name} size={`24px`} />
                        <Text>{link?.name}</Text>
                    </Flex>

                    <Box display={link.type === `free` ? `none` : `block`}>
                        <Icon color={`grey.400`} fontSize={`1.1rem`} icon={'foundation:lock'} />
                    </Box>
                </Flex>
            </NavLink>
        );
    });
    const navLink3 = links3?.map((link) => {
        return (
            <NavLink
                onClick={() => close()}
                state={link?.name}
                className={({ isActive }) => (isActive ? style.active : style.inactive)}
                to={link.path}
                key={link.id}
            >
                <Flex
                    borderRadius={`8px`}
                    width={`195px`}
                    py={`12px`}
                    px={`16px`}
                    fontSize={`1.5rem`}
                    alignItems={`center`}
                    justifyContent={`space-between`}
                    w={`100%`}
                >
                    <Flex gap={2} alignItems={`center`}>
                        <IconSet icon={link.icon} name={link.name} size={`24px`} />
                        <Text>{link?.name}</Text>
                    </Flex>

                    <Box display={link.type === `free` ? `none` : `block`}>
                        <Icon color={`grey.400`} fontSize={`1.1rem`} icon={'foundation:lock'} />
                    </Box>
                </Flex>
            </NavLink>
        );
    });

    const setUser = useCallback(async () => {
        await getUser(null).unwrap();
    }, [getUser]);

    useEffect(() => {
        setUser();
    }, [setUser]);
    return (
        <Flex overflow={`auto`} flexDir={`column`} gap={10} className="hide_scrollbar" p={2}>
            <Stack p={0}>
                <NavLink onClick={() => close()} state={`Home`} className={({ isActive }) => (isActive ? style.active : style.inactive)} to={`home`}>
                    <Flex
                        borderRadius={`8px`}
                        width={`195px`}
                        py={`12px`}
                        px={`16px`}
                        fontSize={`1.5rem`}
                        alignItems={`center`}
                        justifyContent={`space-between`}
                        w={`100%`}
                    >
                        <Flex gap={2} alignItems={`center`}>
                            <Icon icon={`ph:squares-four-fill`} />
                            <Text>Home</Text>
                        </Flex>
                    </Flex>
                </NavLink>
                {navLink1}
            </Stack>
            <Stack p={0}>{navLink2}</Stack>
            <Stack p={0}>{navLink3}</Stack>
        </Flex>
    );
};

export default DashboardLinks;
