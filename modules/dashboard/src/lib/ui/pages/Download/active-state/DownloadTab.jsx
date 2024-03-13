import { Tabs, TabList, TabPanels, Tab, TabPanel, Flex } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import AllDownloads from "../component/AllDownloads";
import DigitalProductDownloads from "../component/DigitalProductDownloads";

const activeStateStyle = {
    borderBottom: `2px solid #6D5DD3`,
    fontWeight: 600,
    color: `grey.800`,
};

const tabNames = ["all-downloads", "digital-products", "print-on-demand", "video-streaming", "subscription"];

export const DownloadTab = () => {
    const { state, hash } = useLocation();
    const navigate = useNavigate();
    const getHashIndex = tabNames.findIndex((tab) => hash === `#${tab}`);
    const [tabIndex, setTabIndex] = useState(getHashIndex);

    const handleTabClick = (tabId) => {
        navigate(tabId);
    };

    useEffect(() => {
        setTabIndex(getHashIndex);
    }, [getHashIndex, state]);

    return (
        <Tabs isLazy={true} index={tabIndex} onChange={(index) => setTabIndex(index)} size={`sm`}>
            <TabList className={`hide_scrollbar`} overflowX={`scroll`} overflowY={`hidden`} justifyContent={`space-between`} color={`grey.400`}>
                <Flex>
                    <Tab
                        w={{ base: `10rem`, md: `initial` }}
                        onClick={() => handleTabClick('#all-downloads')}
                        id="all-downloads"
                        _selected={activeStateStyle}
                        py={6}
                        // px={0}
                    >
                        All Downloads
                    </Tab>
                    <Tab
                        w={{ base: `10rem`, md: `initial` }}
                        isDisabled
                        onClick={() => handleTabClick('#digital-products')}
                        id="digital-products"
                        _selected={activeStateStyle}
                        py={6}
                    >
                        Digital Products
                    </Tab>
                    <Tab
                        w={{ base: `10rem`, md: `initial` }}
                        isDisabled
                        onClick={() => handleTabClick('#print-on-demand')}
                        id="print-on-demand"
                        _selected={activeStateStyle}
                        py={6}
                    >
                        Print On Demand
                    </Tab>
                    <Tab
                        w={{ base: `10rem`, md: `initial` }}
                        isDisabled
                        onClick={() => handleTabClick('#video-streaming')}
                        id="video-streaming"
                        _selected={activeStateStyle}
                        py={6}
                    >
                        Video Streaming
                    </Tab>
                    <Tab
                        w={{ base: `10rem`, md: `initial` }}
                        isDisabled
                        onClick={() => handleTabClick('#subscription')}
                        id="subscription"
                        _selected={activeStateStyle}
                        py={6}
                    >
                        Subscription
                    </Tab>
                </Flex>
            </TabList>

            <TabPanels>
                <TabPanel px={0}>
                    <AllDownloads />
                </TabPanel>
                <TabPanel px={0}>
                    <DigitalProductDownloads />
                </TabPanel>
                <TabPanel px={0}>
                    <DigitalProductDownloads />
                </TabPanel>
                <TabPanel px={0}>
                    <DigitalProductDownloads />
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
};
