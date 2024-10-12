import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '@productize/redux'; 

const activeStateStyle = {
    borderBottom: `2px solid #6D5DD3`,
    fontWeight: 600,
    color: `grey.800`,
};

const inactiveTabStyle = {
    borderBottom: '2px solid transparent',
    color: 'grey.400',
};

const tabNames = ['account', 'addnewadmin'];

export const AdminSettingsTab = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('');
    const user = useSelector(selectCurrentUser); 

    useEffect(() => {
        const currentTab = tabNames.find((tab) => pathname.includes(tab));
        setActiveTab(currentTab || 'account');
        if (activeTab === 'account') {
            navigate(`/Admin/settings/${activeTab}`);
        }
    }, [activeTab, navigate, pathname]);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        navigate(`/Admin/settings/${tab}`);
    };

    return (
        <Box>
            <Flex mb={10} gap={6} borderBottom={`2px solid #e2e8f0`}>
                <NavLink to="/Admin/settings/account" onClick={() => handleTabClick('account')}>
                    <Text fontSize={`sm`} py={3} px={3} style={activeTab === 'account' ? activeStateStyle : inactiveTabStyle}>
                        Account
                    </Text>
                </NavLink>

                {/* Conditionally render the "Admin" tab only if the user is not ADMIN or USER */}
                {user?.role !== 'ADMIN' && user?.role !== 'USER' && (
                    <NavLink to="/Admin/settings/addnewadmin" onClick={() => handleTabClick('addnewadmin')}>
                        <Text fontSize={`sm`} py={3} px={3} style={activeTab === 'addnewadmin' ? activeStateStyle : inactiveTabStyle}>
                            Admin
                        </Text>
                    </NavLink>
                )}

                {/* Other tabs can be added here */}
            </Flex>
            <Outlet />
        </Box>
    );
};
