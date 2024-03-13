import { Avatar, Center, Flex, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useLogoutMutation, selectCurrentUser } from '@productize/redux';

interface avatarProp {
    isScroll?: boolean;
    linkColor?: string;
}

export const AvatarComp = ({ isScroll, linkColor }: avatarProp) => {
    const [logout] = useLogoutMutation();
    const navigate = useNavigate();
    const user = useSelector(selectCurrentUser);

    const logOut = async () => {
        try {
            const res = await logout(null).unwrap();
            if (res.message) {
                navigate(`/auth/login`);
            }
        } catch (error) {
            console.log(error);
        }
    };

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
                    <Flex display={{ base: `none`, lg: `Flex` }} alignItems={`center`} gap={2}>
                        <Text fontWeight={600} color={linkColor}>
                            {user?.name}
                        </Text>
                    </Flex>
                </Center>
            </MenuButton>
            <MenuList zIndex={999} textAlign={`start`}>
                <MenuItem justifyContent={`flex-start`} color={`grey.400`}>
                    <Link to={`/dashboard/home`}>
                        <Icon icon={`ph:squares-four-fill`} />
                        <Text ml={3}>Dashboard</Text>
                    </Link>
                </MenuItem>
                <MenuItem justifyContent={`flex-start`} color={`red.200`} onClick={logOut}>
                    <Icon fontSize={`1.3rem`} icon={`basil:logout-solid`} />
                    <Text ml={3}>Log out</Text>
                </MenuItem>
            </MenuList>
        </Menu>
    );
};
