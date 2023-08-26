import {
  OrderedList,
  ListItem,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import style from './navbar.module.scss';
import { links } from './links';
import { Icon } from '@iconify/react';

type SubLink = {
  id: number;
  name: string;
  path: string;
};

type LinkProp = {
  id: number;
  name: string;
  path: string;
  type: string;
  subLinks?: SubLink[];
};

type DropdownLinkProps = {
  link: LinkProp;
};

const DropdownLink = ({ link }: DropdownLinkProps) => {
  const navLinks = link.subLinks?.map((l) => {
    return (
      <MenuItem justifyContent={`start`} fontSize={`sm`} fontWeight={500} key={l.id}>
        {l.name}
      </MenuItem>
    );
  });

  return (
    <Menu>
      <MenuButton
        _hover={{ color: `red.100`, bg: `transparent` }} //change the hover color to that of the theme...DONT FORGET!!!
        fontWeight={`thin`}
        bg={`transparent`}
        as={Button}
        rightIcon={<Icon icon={`mdi:chevron-down`} />}
      >
        {link.name}
      </MenuButton>
      <MenuList>{navLinks}</MenuList>
    </Menu>
  );
};

type NavbarProps = {
  isMobile: boolean;
};

const Links = ({ isMobile }: NavbarProps) => {
  const navLinks = links.map((link) => {
    if (link.type === `dropdown`) {
      return <DropdownLink key={link.id} link={link} />;
    } else {
      return (
        <NavLink
          key={link.id}
          to={link.path}
          className={({ isActive }) =>
            isActive ? style.active : style.inactive
          }
        >
          <ListItem>{link.name}</ListItem>
        </NavLink>
      );
    }
  });
  return (
    <OrderedList
      display={{ base: isMobile ? `flex` : `none`, xl: `flex` }}
      flexDir={isMobile ? `column` : `row`}
      color={isMobile ? `white` : `blackText`}
      alignItems={{ xl: `center` }}
      m={0}
      gap={{ base: 10, xl: 10 }}
    >
      {navLinks}
    </OrderedList>
  );
};

export default Links;
