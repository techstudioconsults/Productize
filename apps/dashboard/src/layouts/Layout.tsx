import { Box, Flex, Image, Link, Stack, Text } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import {
  DashboardNavbar,
  links,
  links2,
  links3,
} from '@productize/dashboard-lib/ui';
import { PaymentStatusTag } from '@productize/shared/ui';
import { NavLink, Outlet, Link as ReactLink } from 'react-router-dom';
import style from './navbar.module.scss';

const DashboardLayout = () => {
  const navLink1 = links.map((link) => {
    return (
      <NavLink
        state={link?.name}
        className={({ isActive }) => (isActive ? style.active : style.inactive)}
        to={link?.path}
        key={link?.id}
      >
        <Flex
          borderRadius={`8px`}
          width={`195px`}
          py={`12px`}
          px={`16px`}
          fontSize={`1.5rem`}
          alignItems={`center`}
          justifyContent={`space-between`}
          w={`100%`}
        >
          <Flex gap={2} alignItems={`center`}>
            <Icon icon={link.icon} />
            <Text>{link?.name}</Text>
          </Flex>
          <Box display={link.type === `free` ? `none` : `block`}>
            <Icon
              color={`grey.400`}
              fontSize={`1.1rem`}
              icon={'foundation:lock'}
            />
          </Box>
        </Flex>
      </NavLink>
    );
  });
  const navLink2 = links2.map((link) => {
    return (
      <NavLink
        state={link?.name}
        className={({ isActive }) => (isActive ? style.active : style.inactive)}
        to={link.path}
        key={link.id}
      >
        <Flex
          borderRadius={`8px`}
          width={`195px`}
          py={`12px`}
          px={`16px`}
          fontSize={`1.5rem`}
          alignItems={`center`}
          justifyContent={`space-between`}
          w={`100%`}
        >
          <Flex gap={2} alignItems={`center`}>
            <Icon icon={link.icon} />
            <Text>{link?.name}</Text>
          </Flex>
          <Box display={link.type === `free` ? `none` : `block`}>
            <Icon
              color={`grey.400`}
              fontSize={`1.1rem`}
              icon={'foundation:lock'}
            />
          </Box>
        </Flex>
      </NavLink>
    );
  });
  const navLink3 = links3.map((link) => {
    return (
      <NavLink
        state={link?.name}
        className={({ isActive }) => (isActive ? style.active : style.inactive)}
        to={link.path}
        key={link.id}
      >
        <Flex
          borderRadius={`8px`}
          width={`195px`}
          py={`12px`}
          px={`16px`}
          fontSize={`1.5rem`}
          alignItems={`center`}
          justifyContent={`space-between`}
          w={`100%`}
        >
          <Flex gap={2} alignItems={`center`}>
            <Icon icon={link.icon} />
            <Text>{link?.name}</Text>
          </Flex>
          <Box display={link.type === `free` ? `none` : `block`}>
            <Icon
              color={`grey.400`}
              fontSize={`1.1rem`}
              icon={'foundation:lock'}
            />
          </Box>
        </Flex>
      </NavLink>
    );
  });

  return (
    <Flex>
      <Flex
        overflow={`auto`}
        pos={`sticky`}
        top={0}
        flexDir={`column`}
        p={4}
        height={`100vh`}
        w={`18rem`}
        border={`1px solid #01010120`}
        display={{ base: `none`, lg: `flex` }}
        gap={10}
        className="hide_scrollbar"
      >
        <Flex
          justifyContent={`center`}
          alignItems={`center`}
          gap={2}
          minH={`40px`}
        >
          <Link as={ReactLink} to={`/`}>
            <Image
              alt="logo"
              src={`https://res.cloudinary.com/dkszgtapy/image/upload/v1693034778/productize/Frame_14220_ogchl8.png`}
            />
          </Link>
          <PaymentStatusTag />
        </Flex>
        <Stack p={0}>{navLink1}</Stack>
        <Stack p={0}>{navLink2}</Stack>
        <Stack p={0}>{navLink3}</Stack>
      </Flex>

      <Flex py={4} px={{ base: 4, md: 8 }} flexDir={`column`} w={`100%`}>
        <DashboardNavbar />
        <Outlet />
      </Flex>
    </Flex>
  );
};

export default DashboardLayout;
