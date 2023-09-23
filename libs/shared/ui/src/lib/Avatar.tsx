import { Avatar, Center, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import React from 'react';

export const AvatarComp = () => {
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
        <MenuItem>Log out</MenuItem>
      </MenuList>
    </Menu>
  );
};

