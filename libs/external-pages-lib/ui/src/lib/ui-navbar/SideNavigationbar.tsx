import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Image,
  Link,
  Center,
  DrawerCloseButton,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import Links from './NavigationLinks';
import { Icon } from '@iconify/react';

const Sidenav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Center cursor={`pointer`} display={{ xl: `none` }}>
        <Icon fontSize={`2rem`} onClick={onOpen} icon={`ci:hamburger-md`} />
      </Center>

      <Drawer
        size={{ base: `sm` }}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent bg={`black`} px={10}>
          <DrawerCloseButton color={`white`} my={2} />
          <DrawerHeader py={5}>
            <Link as={RouterLink} to={`/`}>
              <Image
                w={`60%`}
                cursor={`pointer`}
                src={`https://res.cloudinary.com/dkszgtapy/image/upload/v1693034778/productize/Frame_14220_ogchl8.png`}
                alt="metabnb"
              />
            </Link>
          </DrawerHeader>
          <DrawerBody py={10}>
            <Links isMobile={true} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidenav;
