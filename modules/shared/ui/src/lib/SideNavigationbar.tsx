import React, { ReactNode, useCallback, useEffect, useState } from "react";
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    useDisclosure,
    Image,
    Link,
    Center,
    DrawerCloseButton,
    DrawerFooter,
    Stack,
    Flex,
} from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import { SharedButton } from "./SharedButton";
import { useTokenExists } from "../../../hooks/src/lib/useToken";
import { AvatarComp } from "./Avatar";

interface sidebarProps {
    links?: ReactNode;
}

export const Sidenav = ({ links }: sidebarProps) => {
    const isAuth = useTokenExists();
    const [menuColor, setMenuColor] = useState(`white`);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { pathname } = useLocation();

    const switchMenuColor = useCallback(() => {
        switch (pathname) {
            case `/`:
                setMenuColor(`grey.100`);
                break;
            default:
                setMenuColor(`yellow.300`);
                break;
        }
    }, [pathname]);
    useEffect(() => {
        switchMenuColor();
    }, [switchMenuColor]);

    return (
        <>
            <Center color={menuColor} cursor={`pointer`} display={{ lg: `none` }}>
                <Icon fontSize={`2rem`} onClick={onOpen} icon={`ci:hamburger-md`} />
            </Center>

            <Drawer size={{ base: `sm` }} isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent px={10}>
                    <DrawerCloseButton my={2} />
                    <DrawerHeader p={0} py={5}>
                        {isAuth ? (
                            <AvatarComp />
                        ) : (
                            <Link as={RouterLink} to={`/`}>
                                <Image
                                    w={`60%`}
                                    cursor={`pointer`}
                                    src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951023/productize/Frame_14220_ogchl8_chcxzu.png`}
                                    alt="Productize"
                                />
                            </Link>
                        )}
                    </DrawerHeader>
                    <DrawerBody p={0}>{links}</DrawerBody>
                    <DrawerFooter>
                        <Flex gap={5} w={`100%`} flexDir={`column`}>
                            {isAuth ? (
                                <Link as={RouterLink} to={`/`}>
                                    <Image
                                        w={`60%`}
                                        cursor={`pointer`}
                                        src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951023/productize/Frame_14220_ogchl8_chcxzu.png`}
                                        alt="Productize"
                                    />
                                </Link>
                            ) : (
                                <>
                                    <Link as={RouterLink} to={`/auth/login`}>
                                        <SharedButton
                                            fontSize={{ base: `sm`, md: `md` }}
                                            text={"Login"}
                                            width={"100%"}
                                            height={"48px"}
                                            bgColor={"transparent"}
                                            textColor={"black"}
                                            borderRadius={"4px"}
                                        />
                                    </Link>
                                    <Link as={RouterLink} to={`/auth`}>
                                        <SharedButton
                                            fontSize={{ base: `sm`, md: `md` }}
                                            text={"Get Started"}
                                            width={"100%"}
                                            height={"48px"}
                                            bgColor={"yellow.200"}
                                            textColor={"black"}
                                            borderRadius={"4px"}
                                        />
                                    </Link>
                                </>
                            )}
                        </Flex>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
};

// export default Sidenav;
