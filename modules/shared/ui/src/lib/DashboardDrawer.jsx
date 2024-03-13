import { useState } from 'react';
import { Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, useDisclosure, Image, Link, Center, Flex } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useTokenExists } from '../../../hooks/src/lib/useToken';
import { PaymentStatusTag } from './PaymentStatusTag';
import { DashboardLinks } from '@productize/dashboard';

export const DashboardDrawer = ({ links }) => {
    const isAuth = useTokenExists();
    const [menuColor, setMenuColor] = useState(`white`);
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Center color={`grey.600`} cursor={`pointer`} display={{ xl: `none` }}>
                <Icon fontSize={`2rem`} onClick={onOpen} icon={`ci:hamburger-md`} />
            </Center>

            <Drawer size={{ base: `xs` }} isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent px={5}>
                    <DrawerHeader p={0} py={5}>
                        <Flex flexDir={`column`} justifyContent={`center`} alignItems={`center`} gap={2} minH={`40px`}>
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
                </DrawerContent>
            </Drawer>
        </>
    );
};
