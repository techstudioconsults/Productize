import { Box, Flex, Image, Link, Stack, Text } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { Icon as IconSet, PaymentStatusTag } from "@productize-v1.0.0/modules/shared/ui";
import { NavLink, Outlet, Link as ReactLink } from "react-router-dom";
import style from "./navbar.module.scss";
import { useLinks } from "../lib/links";
import { DashboardNavbar } from "../lib/DashboardNavbar";
import lock from "@icons/Property_2_Lock_xtdcwp.svg";

export const DashboardLayout = () => {
    const { links1, links2, links3 } = useLinks();

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
                    <Flex gap={2} alignItems={`center`}>
                        <IconSet icon={link.icon} name={link.name} size={`24px`} />
                        <Text>{link?.name}</Text>
                    </Flex>

                    <Box display={link.type ? `none` : `block`}>
                        <Icon color={`grey.400`} fontSize={`1.1rem`} icon={"foundation:lock"} />
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
                        <Icon color={`grey.400`} fontSize={`1.1rem`} icon={"foundation:lock"} />
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
                        <Icon color={`grey.400`} fontSize={`1.1rem`} icon={"foundation:lock"} />
                    </Box>
                </Flex>
            </NavLink>
        );
    });

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
                display={{ base: `none`, lg: `flex` }}
                gap={10}
                className="hide_scrollbar"
            >
                <Flex justifyContent={`center`} alignItems={`center`} gap={2} minH={`40px`}>
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
            </Flex>

            <Flex py={4} px={{ base: 4, md: 8 }} flexDir={`column`} w={`100%`}>
                <DashboardNavbar />
                <Outlet />
            </Flex>
        </Flex>
    );
};
