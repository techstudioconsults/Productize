import {
  Avatar,
  Center,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { selectCurrentuser, useLogoutMutation } from '@productize/shared/redux';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

interface avatarProp {
  isScroll?: boolean;
  linkColor?: string;
}

export const AvatarComp = ({ isScroll, linkColor }: avatarProp) => {
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();
  const user = useSelector(selectCurrentuser);

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
          <Avatar
            size="sm"
            name="Kent Dodds"
            src="https://bit.ly/kent-c-dodds"
          />
          <Text color={isScroll ? `black` : linkColor}>{user?.name}</Text>
          <Icon icon={'eva:chevron-down-outline'} />
        </Center>
      </MenuButton>
      <MenuList textAlign={`start`}>
        <MenuItem justifyContent={`flex-start`} color={`grey.400`}>
          <Link to={`/dashboard/home`}>
            <Icon fontSize={`1.3rem`} icon={`ep:menu`} />
            <Text ml={3}>Dashboard</Text>
          </Link>
        </MenuItem>
        <MenuItem
          justifyContent={`flex-start`}
          color={`red.200`}
          onClick={logOut}
        >
          <Icon fontSize={`1.3rem`} icon={`basil:logout-solid`} />
          <Text ml={3}>Log out</Text>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
