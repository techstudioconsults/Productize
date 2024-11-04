/* eslint-disable @nx/enforce-module-boundaries */
import { Tabs, TabList, TabPanels, Tab, TabPanel, Flex, Box, Link } from '@chakra-ui/react';
import { SharedButton } from '@productize/ui';
import { Link as ReactLink } from 'react-router-dom';
import { useDashboardTabs } from './useDashboardTab';
import AllProductsTabLayout from '../AllProductsTabLayout';
import LiveTabLayout from '../LiveTabLayout';
import DraftTabLayout from '../DraftTabLayout';
import DeleteTabLayout from '../DeleteTabLayout';

const activeStateStyle = {
    borderBottom: `2px solid #6D5DD3`,
    fontWeight: 600,
    color: `grey.800`,
};

export const DashboardTab = () => {
    const { tabIndex, setTabIndex, handleTabClick } = useDashboardTabs();

    return (
        <Tabs isLazy={true} index={tabIndex} onChange={(index) => setTabIndex(index)} size={`sm`}>
            <Box display={{ md: `none` }} my={10}>
                <Link as={ReactLink} to={`/dashboard/products/new#product-details`}>
                    <SharedButton
                        text={'New Product'}
                        btnExtras={{
                            leftIcon: `ei:plus`,
                        }}
                        width={'100%'}
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
                    <Tab onClick={() => handleTabClick('#all-products')} id="all-products" _selected={activeStateStyle} py={6}>
                        All Products
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
                    <Link as={ReactLink} to={`/dashboard/products/new#product-details`}>
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
                            fontSize={{}} // fontSize={{ base: `sm`, md: `sm` }}
                        />
                    </Link>
                    <Link as={ReactLink} to={`/dashboard/funnels`}>
                        <SharedButton
                            text={'Funnels'}
                            btnExtras={{
                                leftIcon: `circum:filter`,
                                border: `1px solid`,
                            }}
                            width={'fit-content'}
                            height={'40px'}
                            bgColor={'transparent'}
                            textColor={'purple.200'}
                            borderRadius={'4px'}
                            fontSize={{}} // fontSize={{ base: `sm`, md: `sm` }}
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
