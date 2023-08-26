import { Flex, Image, Center, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

import Links from './NavigationLinks';
import Sidenav from './SideNavigationbar';

export const Navbar = () => {
  return (
    <Flex
      className="cc-container"
      justifyContent={`space-between`}
      alignItems={`center`}
      height={`3rem`}
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
      <Sidenav />
    </Flex>
  );
};
