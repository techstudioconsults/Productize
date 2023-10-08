import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
  Box,
} from '@chakra-ui/react';
import { SharedButton } from '@productize/shared/ui';
import AllProductsTabLayout from './layouts/AllProductsTabLayout';
import LiveTabLayout from './layouts/LiveTabLayout';
import DraftTabLayout from './layouts/DraftTabLayout';
import DeleteTabLayout from './layouts/DeleteTabLayout';
export const DashboardTab = () => {
  // const tabStyle = {}
  const activeStateStyle = {
    borderBottom: `2px solid #6D5DD3`,
    fontWeight: 600,
    color: `grey.800`,
  };
  return (
    <Tabs size={`sm`}>
      <Box display={{ base: `flex`, md: `none` }} justifyContent={`flex-end`}>
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
