import { OrderedList, ListItem, Menu, MenuButton, Button, MenuList, MenuItem, Text, Flex, Center } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import style from './scss/navbar.module.scss';
import { links } from './utils/links';
import { Icon } from '@iconify/react';
import { useSelector } from 'react-redux';
import { selectTags } from '@productize/redux';

// testing links

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
    isScroll?: boolean;
    linkColor?: string;
};

const DropdownLink = ({ isScroll, link, linkColor }: DropdownLinkProps) => {
    const tags = useSelector(selectTags);

    const navLinks = tags?.map((tag: string) => {
        return (
            <NavLink key={tag} to={`/explore?tag=${tag.toLowerCase()}`}>
                <MenuItem justifyContent={`start`} fontSize={`sm`} fontWeight={500}>
                    {tag}
                </MenuItem>
            </NavLink>
        );
    });

    return (
        <Menu>
            <MenuButton
                p={0}
                _hover={{ color: `red.100`, bg: `transparent` }} //change the hover color to that of the theme...DONT FORGET!!!
                color={{ base: linkColor, xl: isScroll ? `black` : linkColor }}
                fontWeight={`thin`}
                bg={`transparent`}
                as={Button}
                variant={`link`}
                rightIcon={
                    <Center display={{ base: `none`, lg: `initial` }}>
                        <Icon icon={`mdi:chevron-down`} />
                    </Center>
                }
            >
                <Text fontSize={`16px`} fontWeight={600}>
                    {link.name}
                </Text>
            </MenuButton>
            <MenuList ml={-14} color={`black`}>
                <NavLink to={`/explore`}>
                    <MenuItem justifyContent={`start`} fontSize={`sm`} fontWeight={500}>
                        All
                    </MenuItem>
                </NavLink>
                {navLinks}
            </MenuList>
        </Menu>
    );
};

type NavbarProps = {
    isMobile: boolean;
    isScroll?: boolean;
    linkColor?: string;
};

const Links = ({ isScroll, isMobile, linkColor }: NavbarProps) => {
    const navLinks = links.map((link) => {
        if (link.type === `dropdown`) {
            return (
                <Flex key={link.id} my={5} py={5} justifyContent={`center`}>
                    <DropdownLink linkColor={linkColor} isScroll={isScroll} link={link} />
                </Flex>
            );
        } else {
            return (
                <Flex color={linkColor} key={link.id} my={5} py={5} justifyContent={`center`}>
                    <NavLink to={link.path} className={({ isActive }) => (isActive ? style['active'] : style['inactive'])}>
                        <ListItem fontWeight={600}>{link.name}</ListItem>
                    </NavLink>
                </Flex>
            );
        }
    });
    return (
        <OrderedList
            m={0}
            display={{ base: isMobile ? `flex` : `none`, lg: `flex` }}
            flexDir={isMobile ? `column` : `row`}
            color={isMobile || isScroll ? `black` : linkColor}
            gap={{ base: 0, lg: 10 }}
        >
            {navLinks}
        </OrderedList>
    );
};

export default Links;
