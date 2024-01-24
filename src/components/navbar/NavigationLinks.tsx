import { OrderedList, ListItem, Menu, MenuButton, Button, MenuList, MenuItem, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import style from "./scss/navbar.module.scss";
import { links } from "./utils/links";
import { Icon } from "@iconify/react";
import { useSelector } from "react-redux";
import { selectTags } from "@productize-v1.0.0/modules/shared/redux";

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
            <NavLink to={``} key={tag}>
                <MenuItem justifyContent={`start`} fontSize={`sm`} fontWeight={500}>
                    {tag}
                </MenuItem>
            </NavLink>
        );
    });

    return (
        <Menu>
            <MenuButton
                _hover={{ color: `red.100`, bg: `transparent` }} //change the hover color to that of the theme...DONT FORGET!!!
                color={{ base: linkColor, xl: isScroll ? `black` : linkColor }}
                fontWeight={`thin`}
                bg={`transparent`}
                as={Button}
                rightIcon={<Icon icon={`mdi:chevron-down`} />}
            >
                <Text fontSize={`16px`}>{link.name}</Text>
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
            return <DropdownLink linkColor={linkColor} isScroll={isScroll} key={link.id} link={link} />;
        } else {
            return (
                <NavLink key={link.id} to={link.path} className={({ isActive }) => (isActive ? style["active"] : style["inactive"])}>
                    <ListItem>{link.name}</ListItem>
                </NavLink>
            );
        }
    });
    return (
        <OrderedList
            width={`fit-content`}
            display={{ base: isMobile ? `flex` : `none`, xl: `flex` }}
            flexDir={isMobile ? `column` : `row`}
            color={isMobile || isScroll ? `black` : linkColor}
            alignItems={{ xl: `center` }}
            m={`auto`}
            gap={{ base: 10, xl: 10 }}
        >
            {navLinks}
        </OrderedList>
    );
};

export default Links;
