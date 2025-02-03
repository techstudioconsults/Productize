/* eslint-disable @nx/enforce-module-boundaries */
import { Tabs, TabList, TabPanels, Tab, TabPanel, Flex, Box } from '@chakra-ui/react';
import { useFunnelTab } from './useFunnelTab';
import FunnelTypeModal from '../funnelTypeModal';
import AllFunnelsTabLayout from '../layout/AllFunnelTabLayout';
import DeleteTabLayout from '../layout/DeleteTabLayout';
import LiveTabLayout from '../layout/LiveTabLayout';
import DraftTabLayout from '../layout/DraftTabLayout';

const activeStateStyle = {
  borderBottom: `2px solid #6D5DD3`,
  fontWeight: 600,
  color: `grey.800`,
};

export const FunnelTab = () => {
  const { tabIndex, setTabIndex, handleTabClick } = useFunnelTab();

  return (
    <Tabs isLazy={true} index={tabIndex} onChange={(index) => setTabIndex(index)} size={`sm`}>
      <Box display={{ md: `none` }} my={10}>
        <FunnelTypeModal CTATitle={`New funnel`} />
      </Box>
      <TabList justifyContent={`space-between`} color={`grey.400`}>
        <Flex>
          <Tab onClick={() => handleTabClick('#all-funnels')} id="all-funnels" _selected={activeStateStyle} py={6}>
            All Funnels
          </Tab>
          <Tab onClick={() => handleTabClick('#live')} id="live" _selected={activeStateStyle} py={6}>
            Live
          </Tab>
          <Tab onClick={() => handleTabClick('#draft')} id="draft" _selected={activeStateStyle} py={6}>
            Drafts
          </Tab>
          <Tab onClick={() => handleTabClick('#deleted')} id="deleted" _selected={activeStateStyle} py={6}>
            Deleted
          </Tab>
        </Flex>
        <Box display={{ base: `none`, md: `flex` }} gap={4}>
          <FunnelTypeModal CTATitle={`New funnel`} />
        </Box>
      </TabList>
      <TabPanels>
        <TabPanel px={0}>
          <AllFunnelsTabLayout />
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
