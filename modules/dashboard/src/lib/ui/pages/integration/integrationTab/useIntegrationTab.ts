import { useEffect, useState } from 'react';
import { To, useLocation, useNavigate } from 'react-router-dom';

const tabNames = ["all-integrations", "linked-integrations"];

export const useIntegrationTab = () => {
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

    return {
        tabIndex,
        setTabIndex,
        handleTabClick,
    };
};
