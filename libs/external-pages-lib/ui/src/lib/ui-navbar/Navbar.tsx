import { Flex, Image, Center, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

import Links from './NavigationLinks';
import { Sidenav } from './SideNavigationbar';
import { SharedButton } from '@productize/shared/ui';

export const Navbar = () => {
  return (
    <Flex
      className="cc-container"
      justifyContent={`space-between`}
      alignItems={`center`}
      height={`5rem`}
      paddingInline={{ base: 4, xl: 0 }}
    >
      <Center>
        <Link as={RouterLink} to={`/`}>
          <Image
            alt="logo"
            src={`https://res.cloudinary.com/dkszgtapy/image/upload/v1693034778/productize/Frame_14220_ogchl8.png`}
          />
        </Link>
      </Center>
      <Links isMobile={false} />
      <Flex display={{ base: `none`, xl: `flex` }} gap={2}>
        <Link>
          <SharedButton
            fontSize={{ base: `sm`, md: `md` }}
            text={'Login'}
            width={'160px'}
            height={'48px'}
            bgColor={'transparent'}
            textColor={'white'}
            borderRadius={'4px'}
          />
        </Link>
        <Link>
          <SharedButton
            fontSize={{ base: `sm`, md: `md` }}
            text={'Get Started'}
            width={'160px'}
            height={'48px'}
            bgColor={'yellow.200'}
            textColor={'white'}
            borderRadius={'4px'}
          />
        </Link>
      </Flex>
      <Sidenav />
    </Flex>
  );
};
