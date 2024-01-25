import { Tabs, TabList, TabPanels, Tab, TabPanel, Flex } from "@chakra-ui/react";

import { Link, Outlet, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import AccountSettings from "../pages/AccountSettings";
import PaymentSettings from "../pages/PaymentSettings";
import PlanSettings from "../pages/plans/PlanSettings";

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
                    <Tab id="account" _selected={activeStateStyle} py={6}>
                        Account
                    </Tab>
                    <Tab id="payment" _selected={activeStateStyle} py={6}>
                        Payment
                    </Tab>
                    <Tab onClick={() => navigate(`/dashboard/settings/plans`)} id="plans" _selected={activeStateStyle} py={6}>
                        Plans
                    </Tab>
                </Flex>
            </TabList>

            <TabPanels>
                <TabPanel px={0}>
                    <AccountSettings />
                </TabPanel>
                <TabPanel px={0}>
                    <PaymentSettings />
                </TabPanel>
                <TabPanel px={0}>
                    <Outlet />
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
};
