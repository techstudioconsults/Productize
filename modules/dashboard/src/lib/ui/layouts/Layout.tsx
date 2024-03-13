import { Box, Center, Container, Flex, Image, Link, Stack, Text } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { Icon as IconSet, PaymentStatusTag } from '@productize/ui';
import { NavLink, Outlet, Link as ReactLink } from 'react-router-dom';
import style from './navbar.module.scss';
import { useCallback, useEffect } from 'react';
import { useGetUserMutation } from '@productize/redux';
import { useLinks } from '../utils/links';
import { DashboardNavbar } from '../DashboardNavbar';

export const DashboardLayout = () => {
    const { links1, links2, links3 } = useLinks();
    const [getUser] = useGetUserMutation();

    const navLink1 = links1?.map((link) => {
        return (
            <NavLink state={link?.name} className={({ isActive }) => (isActive ? style.active : style.inactive)} to={link?.path} key={link?.id}>
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
            <NavLink state={link?.name} className={({ isActive }) => (isActive ? style.active : style.inactive)} to={link.path} key={link.id}>
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
            <NavLink state={link?.name} className={({ isActive }) => (isActive ? style.active : style.inactive)} to={link.path} key={link.id}>
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
        <Flex>
            <Flex
                overflow={`auto`}
                pos={`sticky`}
                top={0}
                flexDir={`column`}
                p={4}
                height={`100vh`}
                w={`18rem`}
                border={`1px solid #01010120`}
                display={{ base: `none`, xl: `flex` }}
                gap={10}
                className="hide_scrollbar"
            >
                <Flex justifyContent={`center`} flexDir={`column`} alignItems={`center`} gap={2} minH={`40px`}>
                    <Link as={ReactLink} to={`/`}>
                        <Image
                            alt="logo"
                            src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951023/productize/Frame_14220_ogchl8_chcxzu.png`}
                        />
                    </Link>
                    <PaymentStatusTag />
                </Flex>
                <Stack p={0}>
                    <NavLink state={`Home`} className={({ isActive }) => (isActive ? style.active : style.inactive)} to={`home`}>
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
                                {/* <IconSet icon={`ph:squares-four-fill`} name={`menu`} size={`24px`} /> */}
                                <Icon icon={`ph:squares-four-fill`} />
                                <Text>Home</Text>
                            </Flex>
                        </Flex>
                    </NavLink>
                    {navLink1}
                </Stack>
                <Stack p={0}>{navLink2}</Stack>
                <Stack p={0}>{navLink3}</Stack>
                {/* <Flex w={`100%`} alignItems={`center`} justifyContent={`center`} border={`1px solid red`}>
                    <PaymentStatusTag />
                </Flex> */}
            </Flex>
            <Flex flexDir={`column`} w={`100%`}>
                <Box bgColor={`white`} py={4} px={{ base: 4, md: 8 }} pos={`sticky`} top={0} zIndex={999}>
                    <DashboardNavbar />
                </Box>
                <Container py={4} px={{ base: 4, md: 8 }} maxW={1220}>
                    <Outlet />
                </Container>
            </Flex>
        </Flex>
    );
};
