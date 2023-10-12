import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
  Box,
  Link,
} from '@chakra-ui/react';
import { SharedButton } from '@productize/shared/ui';
import AllProductsTabLayout from './AllProductsTabLayout';
import LiveTabLayout from './LiveTabLayout';
import DraftTabLayout from './DraftTabLayout';
import DeleteTabLayout from './DeleteTabLayout';
import { Link as ReactLink } from 'react-router-dom';

export const DashboardTab = () => {
  const activeStateStyle = {
    borderBottom: `2px solid #6D5DD3`,
    fontWeight: 600,
    color: `grey.800`,
  };
  return (
    <Tabs size={`sm`}>
      <Box display={{ base: `flex`, md: `none` }} justifyContent={`flex-end`}>
        <Link as={ReactLink} to={`/dashboard/products/new`}>
          <SharedButton
            text={'New Product'}
            btnExtras={{
              leftIcon: `ei:plus`,
            }}
            width={'fit-content'}
            height={'40px'}
            bgColor={'purple.200'}
            textColor={'white'}
            borderRadius={'4px'}
            fontSize={{ base: `sm`, md: `sm` }}
          />
        </Link>
      </Box>
      <TabList justifyContent={`space-between`} color={`grey.400`}>
        <Flex>
          <Tab _selected={activeStateStyle} py={6}>
            All Products
          </Tab>
          <Tab _selected={activeStateStyle} py={6}>
            Live
          </Tab>
          <Tab _selected={activeStateStyle} py={6}>
            Drafts
          </Tab>
          <Tab _selected={activeStateStyle} py={6}>
            Deleted
          </Tab>
        </Flex>
        <Box display={{ base: `none`, md: `initial` }}>
          <Link as={ReactLink} to={`/dashboard/products/new`}>
            <SharedButton
              text={'New Product'}
              btnExtras={{
                leftIcon: `ei:plus`,
              }}
              width={'fit-content'}
              height={'40px'}
              bgColor={'purple.200'}
              textColor={'white'}
              borderRadius={'4px'}
              fontSize={{ base: `sm`, md: `sm` }}
            />
          </Link>
        </Box>
      </TabList>

      <TabPanels>
        <TabPanel px={0}>
          <AllProductsTabLayout />
        </TabPanel>
        <TabPanel px={0}>
          <LiveTabLayout />
        </TabPanel>
        <TabPanel px={0}>
          <DraftTabLayout />
        </TabPanel>
        <TabPanel px={0}>
          <DeleteTabLayout />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
