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
    Text,
} from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import { SharedButton } from "./SharedButton";
import { useTokenExists } from "../../../hooks/src/lib/useToken";

interface sidebarProps {
    links?: ReactNode;
}

export const Sidenav = ({ links }: sidebarProps) => {
    const isAuth = useTokenExists();
    const [menuColor, setMenuColor] = useState(`white`);
    const [bgColor, setBgColor] = useState(`white`);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { pathname } = useLocation();

    const switchMenuColor = useCallback(() => {
        switch (pathname) {
            case `/`:
                setMenuColor(`grey.100`);
                setBgColor(`purple.200`);
                break;
            case `/features`:
                setMenuColor(`coral.300`);
                setBgColor(`coral.100`);
                break;
            case `/pricing`:
                setMenuColor(`yellow.300`);
                setBgColor(`yellow.100`);
                break;
            default:
                setMenuColor(`black.300`);
                setBgColor(`white`);
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

            <Drawer size={{ base: `xs` }} isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent
                    boxShadow={`3px 0 3px #000`}
                    bgSize={`50%`}
                    bgImage={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951013/productize/Lines_t1t27k_gg0jau.png`}
                    bgColor={bgColor}
                    px={10}
                >
                    {/* <DrawerCloseButton my={2} /> */}
                    <DrawerHeader p={0} py={5}>
                        <Link as={RouterLink} to={`/`}>
                            <Image
                                w={`60%`}
                                cursor={`pointer`}
                                src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951023/productize/Frame_14220_ogchl8_chcxzu.png`}
                                alt="Productize"
                            />
                        </Link>
                    </DrawerHeader>
                    <DrawerBody p={0}>{links}</DrawerBody>
                    <DrawerFooter>
                        <Flex gap={5} w={`100%`} flexDir={`column`}>
                            {!isAuth && (
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
                    <Text color={menuColor} py={2} fontSize={`xs`} textAlign={`center`}>
                        &copy;{new Date().getFullYear()}
                    </Text>
                </DrawerContent>
            </Drawer>
        </>
    );
};

// export default Sidenav;
