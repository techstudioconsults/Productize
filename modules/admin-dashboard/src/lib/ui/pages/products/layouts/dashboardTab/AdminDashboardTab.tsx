/* eslint-disable @nx/enforce-module-boundaries */
import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Flex, Box, Link } from '@chakra-ui/react';
import { SharedButton } from '../../../../../../../../shared/ui/src/lib/SharedButton';
import { Link as ReactLink } from 'react-router-dom';
import { useDashboardTabs } from './AdminUseDashboardTab';
import AllProductsTabLayout from '../../AllProduct/AdminAllProduct';
import TopSellingProduct from '../../TopSellingProduct/TopSellingProduct';

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
                    <Tab onClick={() => handleTabClick('#top-selling')} id="top-selling" _selected={activeStateStyle} py={6}>
                        Top Selling
                    </Tab>
                </Flex>
                {/* <Box display={{ base: `none`, md: `block` }}>
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
                            fontSize={{ base: `sm`, md: `sm` }}
                        />
                    </Link>
                </Box> */}
            </TabList>
            <TabPanels>
                <TabPanel px={0}>
                    <AllProductsTabLayout />
                </TabPanel>
                <TabPanel px={0} key={tabIndex}>
                    <TopSellingProduct />
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
};
