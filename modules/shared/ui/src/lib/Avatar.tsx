/* eslint-disable @nx/enforce-module-boundaries */
import { Avatar, Center, Flex, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
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
                    <Avatar size="sm" name={user?.name} src={user?.logo} />
                    <Flex display={{ base: 'none', lg: 'flex' }} alignItems="center" gap={2}>
                        <Text fontWeight={600} color={linkColor}>
                            {user?.username || user?.name}
                        </Text>
                    </Flex>
                </Center>
            </MenuButton>
            <MenuList zIndex={999} textAlign="start">
                <Link to="/dashboard/home">
                    <MenuItem justifyContent="flex-start" color="grey.400">
                        <Icon icon="ph:squares-four-fill" />
                        <Text ml={3}>Dashboard</Text>
                    </MenuItem>
                </Link>
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
