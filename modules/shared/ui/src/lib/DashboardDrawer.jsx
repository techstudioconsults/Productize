import { useCallback, useEffect, useState } from "react";
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
    Flex,
} from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useTokenExists } from "../../../hooks/src/lib/useToken";
import { PaymentStatusTag } from "./PaymentStatusTag";
import { DashboardLinks } from "@productize-v1.0.0/dashboard";

export const DashboardDrawer = ({ links }) => {
    const isAuth = useTokenExists();
    const [menuColor, setMenuColor] = useState(`white`);
    const { isOpen, onOpen, onClose } = useDisclosure();
    // const { pathname } = useLocation();

    // const switchMenuColor = useCallback(() => {
    //     switch (pathname) {
    //         case `/`:
    //             setMenuColor(`grey.100`);
    //             break;
    //         default:
    //             setMenuColor(`yellow.300`);
    //             break;
    //     }
    // }, [pathname]);
    // useEffect(() => {
    //     switchMenuColor();
    // }, [switchMenuColor]);

    return (
        <>
            <Center color={`grey.600`} cursor={`pointer`} display={{ xl: `none` }}>
                <Icon fontSize={`2rem`} onClick={onOpen} icon={`ci:hamburger-md`} />
            </Center>

            <Drawer size={{ base: `xs` }} isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent px={5}>
                    {/* <DrawerCloseButton fontWeight={`bolder`} /> */}
                    <DrawerHeader p={0} py={5}>
                        <Flex justifyContent={`center`} alignItems={`center`} gap={2} minH={`40px`}>
                            <Link as={RouterLink} to={`/`}>
                                <Image
                                    alt="logo"
                                    src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951023/productize/Frame_14220_ogchl8_chcxzu.png`}
                                />
                            </Link>
                            <PaymentStatusTag />
                        </Flex>
                    </DrawerHeader>
                    <DrawerBody p={0}>
                        <DashboardLinks close={onClose} />
                    </DrawerBody>
                    {/* <DrawerFooter></DrawerFooter> */}
                </DrawerContent>
            </Drawer>
        </>
    );
};
