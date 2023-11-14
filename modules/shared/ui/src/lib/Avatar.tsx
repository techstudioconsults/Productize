import {
  Avatar,
  Center,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Icon as IconSet } from './Icon';
import { Icon } from '@iconify/react';
import { selectCurrentUser, useLogoutMutation } from '@productize-v1.0.0/modules/shared/redux';
import menu from '@icons/Property_2_Menu_bwayf6.svg'

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
          <Text color={isScroll ? `black` : linkColor}>{user?.name}</Text>
          <Icon icon={'eva:chevron-down-outline'} />
        </Center>
      </MenuButton>
      <MenuList textAlign={`start`}>
        <MenuItem justifyContent={`flex-start`} color={`grey.400`}>
          <Link to={`/dashboard/home`}>
            <IconSet
              name="menu"
              icon={`https://res.cloudinary.com/dkszgtapy/image/upload/v1696088709/Stockholm-icons_kizeoq.svg`}
            />
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
