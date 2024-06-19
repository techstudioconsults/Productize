import { Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, Image, Link, Center, Flex } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { Icon } from '@iconify/react';
import React, { memo } from 'react';
import { DashboardLinks } from '@productize/dashboard';
import { useTokenExists } from '@productize/hooks';
import { PaymentStatusTag } from '../PaymentStatusTag';
import { useDrawerState } from './useDrawState';

interface DashboardDrawerProps {
    links: any; // Adjust the type as per your requirement
}

export const DashboardDrawer: React.FC<DashboardDrawerProps> = memo(({ links }) => {
    const isAuth = useTokenExists();
    const { isOpen, onOpen, onClose, menuColor } = useDrawerState();

    return (
        <>
            <Center color="grey.600" cursor="pointer" display={{ xl: 'none' }}>
                <Icon fontSize="2rem" onClick={onOpen} icon="ci:hamburger-md" />
            </Center>

            <Drawer size={{ base: 'xs' }} isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent px={5}>
                    <DrawerHeader p={0} py={5}>
                        <Flex flexDir="column" justifyContent="center" alignItems="center" gap={2} minH="40px">
                            <Link as={RouterLink} to="/seller">
                                <Image
                                    alt="logo"
                                    src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951023/productize/Frame_14220_ogchl8_chcxzu.png"
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
});

DashboardDrawer.displayName = 'DashboardDrawer';
export default DashboardDrawer;
