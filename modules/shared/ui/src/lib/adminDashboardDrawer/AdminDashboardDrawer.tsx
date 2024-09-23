import { Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, Image, Link, Center, Flex } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { Icon } from '@iconify/react';
import React, { memo } from 'react';
import { AdminDashboardLinks } from '@productize/admin-dashboard';
import { useTokenExists } from '@productize/hooks';
import { useDrawerState } from './useDrawState';

interface DashboardDrawerProps {
    links: any; // Adjust the type as per your requirement
}

export const AdminDashboardDrawer: React.FC<DashboardDrawerProps> = memo(({ links }) => {
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
                                <Image alt="logo" src="https://res.cloudinary.com/doejcrfso/image/upload/v1725356813/productize/ByteAAlley-Logo_ue2hqr.svg" />
                            </Link>
                        </Flex>
                    </DrawerHeader>
                    <DrawerBody p={0}>
                        <AdminDashboardLinks close={onClose} />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
});

AdminDashboardDrawer.displayName = 'AdminDashboardDrawer';
export default AdminDashboardDrawer;
