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
import { useLogoutMutation } from '@productize/shared/redux';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const AvatarComp = () => {
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();

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
          <Icon icon={'eva:chevron-down-outline'} />
        </Center>
      </MenuButton>
      <MenuList>
        <MenuItem color={`red.200`} onClick={logOut}>
          <Icon fontSize={`1.3rem`} icon={`basil:logout-solid`} />
          <Text ml={3}>Log out</Text>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
