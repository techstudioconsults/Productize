/* eslint-disable @nx/enforce-module-boundaries */
import { Tabs, TabList, TabPanels, Tab, TabPanel, Flex, Box, Link } from '@chakra-ui/react';

import LiveTabLayout from './LiveTabLayout';
import DraftTabLayout from './DraftTabLayout';
import DeleteTabLayout from './DeleteTabLayout';
import { Link as ReactLink, To, useLocation, useNavigate } from 'react-router-dom';
import AllProductsTabLayout from './AllProductsTabLayout';
import { useEffect, useState } from 'react';
import { SharedButton } from '@productize/ui';

const activeStateStyle = {
    borderBottom: `2px solid #6D5DD3`,
    fontWeight: 600,
    color: `grey.800`,
};

const tabNames = ['all-products', 'live', 'draft', 'deleted'];

export const DashboardTab = () => {
    const { state, hash } = useLocation();
    const navigate = useNavigate();
    const getHashIndex = tabNames.findIndex((tab) => hash === `#${tab}`);
    const [tabIndex, setTabIndex] = useState(getHashIndex);

    const handleTabClick = (tabId: To) => {
        navigate(tabId);
    };

    useEffect(() => {
        setTabIndex(getHashIndex);
    }, [getHashIndex, state]);

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
                <Box display={{ base: `none`, md: `block` }}>
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
