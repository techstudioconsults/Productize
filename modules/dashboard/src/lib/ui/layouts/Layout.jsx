/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @nx/enforce-module-boundaries */
import { Box, Center, Container, Flex, Image, Link, Progress, Stack, Text } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { Icon as IconSet, PaymentStatusTag } from '@productize/ui';
import { NavLink, Outlet, Link as ReactLink } from 'react-router-dom';
import style from './navbar.module.scss';
import { useCallback, useEffect, useState } from 'react';
import { selectProgressBar, useGetUserMutation } from '@productize/redux';
import { useLinks } from '../utils/links';
import { DashboardNavbar } from '../DashboardNavbar';
import { useSelector } from 'react-redux';
import { useFunnelData } from '../pages/funnel/services/useFunnelData';

export const DashboardLayout = () => {
  const { links1, links2, links3 } = useLinks();
  const [getUser] = useGetUserMutation();
  const progress = useSelector(selectProgressBar);
  const [isProgressVisible, setIsProgressVisible] = useState(false);
  const { fetchData } = useFunnelData(); // Use the hook

  const navLink1 = links1?.map((link) => {
    return (
      <NavLink state={link?.name} className={({ isActive }) => (isActive ? style.active : style.inactive)} to={link?.path} key={link?.id}>
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
          <Flex w={`100%`} gap={2} alignItems={`center`} justifyContent={`space-between`}>
            <Flex gap={2} alignItems={`center`}>
              <IconSet icon={link.icon} name={link.name} size={`24px`} />
              <Text>{link?.name}</Text>
            </Flex>
            <Center
              display={link?.analysis ? `flex` : `none`}
              w={`1.5rem`}
              h={`1.5rem`}
              fontSize={`0.8rem`}
              borderRadius={`100%`}
              color={`grey.100`}
              bg={`red.200`}
            >
              {link?.analysis || 10}
            </Center>
          </Flex>
          <Box display={link.type ? `none` : `block`}>
            <Icon color={`grey.400`} fontSize={`1.1rem`} icon={'foundation:lock'} />
          </Box>
        </Flex>
      </NavLink>
    );
  });
  const navLink2 = links2?.map((link) => {
    return (
      <NavLink state={link?.name} className={({ isActive }) => (isActive ? style.active : style.inactive)} to={link.path} key={link.id}>
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
            <Icon color={`grey.400`} fontSize={`1.1rem`} icon={'foundation:lock'} />
          </Box>
        </Flex>
      </NavLink>
    );
  });
  const navLink3 = links3?.map((link) => {
    return (
      <NavLink state={link?.name} className={({ isActive }) => (isActive ? style.active : style.inactive)} to={link.path} key={link.id}>
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
            <Icon color={`grey.400`} fontSize={`1.1rem`} icon={'foundation:lock'} />
          </Box>
        </Flex>
      </NavLink>
    );
  });

  const setUser = useCallback(async () => {
    try {
      await getUser(null).unwrap();
    } catch (err) {
      return;
    }
  }, [getUser]);

  useEffect(() => {
    setUser();
  }, [setUser]);

  useEffect(() => {
    if (progress > 0 && progress < 100) {
      setIsProgressVisible(true);
    } else if (progress === 0) {
      setTimeout(() => {
        setIsProgressVisible(false);
        fetchData();
      }, 3000);
    }
  }, [progress]);

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
        display={{ base: `none`, xl: `flex` }}
        gap={10}
        className="hide_scrollbar"
      >
        <Flex justifyContent={`center`} alignItems={`flex-start`} minH={`40px`}>
          <Link as={ReactLink} to={`/seller`}>
            <Image alt="logo" src={`https://res.cloudinary.com/doejcrfso/image/upload/v1725356813/productize/ByteAAlley-Logo_ue2hqr.svg`} />
          </Link>
          <PaymentStatusTag />
        </Flex>
        <Stack p={0}>
          <NavLink state={`Home`} className={({ isActive }) => (isActive ? style.active : style.inactive)} to={`home`}>
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
                {/* <IconSet icon={`ph:squares-four-fill`} name={`menu`} size={`24px`} /> */}
                <Icon icon={`ph:squares-four-fill`} />
                <Text>Home</Text>
              </Flex>
            </Flex>
          </NavLink>
          {navLink1}
        </Stack>
        <Stack p={0}>{navLink2}</Stack>
        <Stack p={0}>{navLink3}</Stack>
        {/* <Flex w={`100%`} alignItems={`center`} justifyContent={`center`} border={`1px solid red`}>
                    <PaymentStatusTag />
                </Flex> */}
      </Flex>
      <Flex flexDir={`column`} w={`100%`}>
        <Box bgColor={`white`} py={4} px={{ base: 4, md: 8 }} pos={`sticky`} top={0} zIndex={999}>
          <DashboardNavbar />
        </Box>
        <Container py={4} px={{ base: 4, md: 8 }} maxW={1220}>
          <Outlet />
        </Container>
        {isProgressVisible && (
          <Box w={`30%`} pos={`fixed`} top={0} left={`35%`} zIndex={999}>
            <Box mb={6} p={4} bg="white" borderRadius="md" boxShadow="lg">
              {progress === 0 ? (
                <Text mb={2} textAlign="center">
                  Uploading Funnel Completed
                </Text>
              ) : (
                <>
                  <Text mb={2} textAlign="center">
                    {progress < 100 ? `Uploading Funnel... ${progress}%` : 'Processing...'}
                  </Text>
                  <Progress borderRadius="10px" value={progress} colorScheme="purple" />
                </>
              )}
            </Box>
          </Box>
        )}
      </Flex>
    </Flex>
  );
};
