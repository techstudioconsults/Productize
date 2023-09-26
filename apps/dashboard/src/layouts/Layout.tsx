import { Box, Flex, Image, Link } from '@chakra-ui/react';
import { DashboardNavbar } from '@productize/dashboard-lib/ui';
import { PaymentStatusTag } from '@productize/shared/ui';
import { Link as ReactLink } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <Flex>
      <Flex
        pos={`sticky`}
        top={0}
        flexDir={`column`}
        p={4}
        height={`100vh`}
        minW={`15.188rem`}
        border={`1px solid #01010120`}
        display={{ base: `none`, lg: `flex` }}
      >
        <Flex
          justifyContent={`center`}
          alignItems={`center`}
          gap={2}
          minH={`40px`}
          w={`100%`}
        >
          <Link as={ReactLink} to={`/`}>
            <Image
              alt="logo"
              src={`https://res.cloudinary.com/dkszgtapy/image/upload/v1693034778/productize/Frame_14220_ogchl8.png`}
            />
          </Link>
          <PaymentStatusTag />
        </Flex>
        {/* <Box>
            <Links isMobile={true} />
          </Box> */}
      </Flex>

      <Flex py={4} px={8} flexDir={`column`} w={`100%`}>
        <DashboardNavbar />
      </Flex>
    </Flex>
  );
};

export default DashboardLayout;
