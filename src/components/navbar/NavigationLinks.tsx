import React from 'react';
import { OrderedList, ListItem, Menu, MenuButton, Button, MenuList, MenuItem, Text, Flex, Center } from '@chakra-ui/react';
import { NavLink, useLocation } from 'react-router-dom';
import style from './scss/navbar.module.scss';
import { links } from './utils/links';
import { Icon } from '@iconify/react';
import { selectTags } from '@productize/redux';
import { useSelector } from 'react-redux';

// Define the types for the links

// Title case conversion function
function toTitleCase(str: string): string {
    return str.replace(/\w\S*/g, (txt: string) => {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

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

    
    // const navLinks = tags?.map((tag: { name: string }) => (
    //     <NavLink key={tag.name} to={`/explore?tag=${tag.name.toLowerCase()}`}>
    //         <MenuItem justifyContent="start" fontSize="sm" fontWeight={500}>
    //             {tag.name.replace('_', ' ')}
    //         </MenuItem>
    //     </NavLink>
    // ));

    const navLinks = tags?.map((tag: { name: string }) => (
        <NavLink key={tag.name} to={`/explore?tag=${tag.name.toLowerCase()}`}>
            <MenuItem justifyContent="start" fontSize="sm" fontWeight={500}>
                {toTitleCase(tag.name.replace('_', ' '))}
            </MenuItem>
        </NavLink>
    ));

    return (
        <Menu>
            <MenuButton
                p={0}
                _hover={{ color: 'red.100', bg: 'transparent' }}
                color={{ base: linkColor, xl: isScroll ? 'black' : linkColor }}
                fontWeight="thin"
                bg="transparent"
                as={Button}
                variant="link"
                rightIcon={
                    <Center>
                        <Icon icon="mdi:chevron-down" />
                    </Center>
                }
            >
                <Text fontSize="16px" fontWeight={600}>
                    {link.name}
                </Text>
            </MenuButton>
            <MenuList ml={-14} color="black">
                <NavLink to="/explore">
                    <MenuItem justifyContent="start" fontSize="sm" fontWeight={500}>
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
    const location = useLocation();

    const navLinks = links.map((link) => {
        const linkStyleColor = isMobile && location.pathname.includes('seller') ? 'grey.100' : linkColor;

        if (link.type === 'dropdown') {
            return (
                <Flex key={link.id}>
                    <DropdownLink linkColor={linkStyleColor} isScroll={isScroll} link={link} />
                </Flex>
            );
        } else {
            return (
                <Flex color={linkStyleColor} key={link.id}>
                    <NavLink to={link.path} className={({ isActive }) => (isActive ? style.active : style.inactive)}>
                        <ListItem fontWeight={600}>{link.name}</ListItem>
                    </NavLink>
                </Flex>
            );
        }
    });

    return (
        <OrderedList
            m={20}
            display={{ base: isMobile ? 'flex' : 'none', lg: 'flex' }}
            flexDir={isMobile ? 'column' : 'row'}
            color={isMobile || isScroll ? 'black' : linkColor}
            gap={{ base: 20, lg: 10 }}
            alignItems="flex-start"
        >
            {navLinks}
        </OrderedList>
    );
};

export default Links;
