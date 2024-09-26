/* eslint-disable @nx/enforce-module-boundaries */
import { Avatar, Center, Flex, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { selectCurrentUser } from '@productize/redux';
import React, { memo } from 'react';
import { useLogout } from '@productize/hooks';

interface AvatarProps {
    isScroll?: boolean;
    linkColor?: string;
}

const defaultProps: Partial<AvatarProps> = {
    isScroll: false,
    linkColor: 'black',
};

export const AvatarComp: React.FC<AvatarProps> = memo(({ isScroll = false, linkColor = 'black' }) => {
    const { logOut } = useLogout();
    const user = useSelector(selectCurrentUser);
    const location = useLocation();

    const isDashboardHidden = location.pathname.startsWith('/Admin/') || location.pathname.startsWith('/dashboard/') || location.pathname.startsWith('/admin/');

    return (
        <Menu>
            <MenuButton
                transition="all 0.2s"
                borderRadius="md"
                borderWidth="1px"
                _hover={{ bg: 'transparent' }}
                _expanded={{ bg: 'transparent' }}
                _focus={{ boxShadow: 'none' }}
            >
                <Center gap={4}>
                    <Avatar size="sm" name={user?.name || ''} src={user?.logo || ''} />
                    <Flex display={{ base: 'none', lg: 'flex' }} alignItems="center" gap={2}>
                        <Text fontWeight={600} color={linkColor}>
                            {/* Truncate the name to 20 characters and ensure safety */}
                            {(user?.username || user?.name || '').length > 20
                                ? `${(user?.username || user?.name || '').slice(0, 20)}...`
                                : user?.username || user?.name || ''}
                        </Text>
                    </Flex>
                </Center>
            </MenuButton>
            <MenuList zIndex={999} textAlign="start">
                {!isDashboardHidden && (
                    <>
                        {/* Conditionally render based on user role */}
                        {user?.role === 'SUPER_ADMIN' || user?.role === 'ADMIN' ? (
                            <Link to="/Admin/home">
                                <MenuItem justifyContent="flex-start" color="grey.400">
                                    <Icon icon="ph:squares-four-fill" />
                                    <Text ml={3}>Dashboard</Text>
                                </MenuItem>
                            </Link>
                        ) : (
                            user?.role === 'USER' && (
                                <Link to="/dashboard/home">
                                    <MenuItem justifyContent="flex-start" color="grey.400">
                                        <Icon icon="ph:squares-four-fill" />
                                        <Text ml={3}>Dashboard</Text>
                                    </MenuItem>
                                </Link>
                            )
                        )}
                    </>
                )}

                <MenuItem justifyContent="flex-start" color="red.200" onClick={logOut}>
                    <Icon fontSize="1.3rem" icon="basil:logout-solid" />
                    <Text ml={3}>Log out</Text>
                </MenuItem>
            </MenuList>
        </Menu>
    );
});

AvatarComp.displayName = 'AvatarComp';
AvatarComp.defaultProps = defaultProps;
