import { Tabs, TabList, TabPanels, Tab, TabPanel, Flex } from "@chakra-ui/react";

import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import AccountSettings from "../pages/AccountSettings";

const activeStateStyle = {
    borderBottom: `2px solid #6D5DD3`,
    fontWeight: 600,
    color: `grey.800`,
};

const tabNames = ["account", "payment", "plans"];

export const SettingsTab = () => {
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
            <TabList justifyContent={`space-between`} color={`grey.400`}>
                <Flex>
                    <Tab onClick={() => handleTabClick("#account")} id="account" _selected={activeStateStyle} py={6}>
                        Account
                    </Tab>
                    <Tab onClick={() => handleTabClick("#payment")} id="payment" _selected={activeStateStyle} py={6}>
                        Payment
                    </Tab>
                    <Tab onClick={() => handleTabClick("#plans")} id="plans" _selected={activeStateStyle} py={6}>
                        Plans
                    </Tab>
                </Flex>
            </TabList>

            <TabPanels>
                <TabPanel px={0}>
                    <AccountSettings />
                </TabPanel>
                <TabPanel px={0}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum at tempore soluta vero porro, quibusdam officiis obcaecati illum eos,
                    inventore aspernatur blanditiis voluptatem ipsum deleniti magni incidunt quis sed laudantium voluptate dignissimos repellat! Facere mollitia
                    sit corporis, nobis voluptas sint.
                </TabPanel>
                <TabPanel px={0}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ea?</TabPanel>
            </TabPanels>
        </Tabs>
    );
};
