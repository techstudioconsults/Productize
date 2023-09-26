import { Box, Flex, Image, Link } from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';
// import { Sidenav } from './Sidebar';

const DashboardLayout = () => {

  return (
    <>
      {/* <Box display={{ base: `block`, md: `none` }}>
        <Navbar />
      </Box> */}
      <Flex>
        <Flex
          pos={`sticky`}
          top={0}
          flexDir={`column`}
          height={`100vh`}
          minW={`15.188rem`}
          border={`1px solid #01010120`}
          display={{ base: `none`, lg: `flex` }}
        >
          <Box my={5} w={`100%`}>
            <Link as={ReactLink} to={`/`}>
              <Image
                alt="logo"
                src={`https://res.cloudinary.com/dkszgtapy/image/upload/v1693034778/productize/Frame_14220_ogchl8.png`}
              />
            </Link>
          </Box>
          {/* <Box>
            <Links isMobile={true} />
          </Box> */}
        </Flex>

        <Flex flexDir={`column`} w={`100%`} padding={10}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          obcaecati rerum veritatis culpa? Sequi possimus itaque, saepe sunt
          quaerat esse quas neque veniam inventore minima doloribus voluptas
          expedita id! Nihil!
        </Flex>
      </Flex>
    </>
  );
};

export default DashboardLayout;
