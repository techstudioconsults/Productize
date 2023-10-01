import { Box, Flex, Image, Link, Stack, Text } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { DashboardNavbar, useLinks } from '@productize/dashboard-lib/ui';
import { Icon as IconSet, PaymentStatusTag } from '@productize/shared/ui';
import { NavLink, Outlet, Link as ReactLink } from 'react-router-dom';
import style from './navbar.module.scss';

const DashboardLayout = () => {
  const { links1, links2, links3 } = useLinks();

  const navLink1 = links1?.map((link) => {
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
            <IconSet icon={link.icon} name={link.name} size={`24px`} />
            <Text>{link?.name}</Text>
          </Flex>
          <Box display={link.type ? `none` : `block`}>
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
  const navLink2 = links2?.map((link) => {
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
            <IconSet icon={link.icon} name={link.name} size={`24px`} />
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
  const navLink3 = links3?.map((link) => {
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
            <IconSet icon={link.icon} name={link.name} size={`24px`} />
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
        <Stack p={0}>
          <NavLink
            state={`Home`}
            className={({ isActive }) =>
              isActive ? style.active : style.inactive
            }
            to={`home`}
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
                <IconSet
                  icon={`https://res.cloudinary.com/dkszgtapy/image/upload/v1696088709/Stockholm-icons_kizeoq.svg`}
                  name={`menu`}
                  size={`24px`}
                />
                <Text>Home</Text>
              </Flex>
            </Flex>
          </NavLink>
          {navLink1}
        </Stack>
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
