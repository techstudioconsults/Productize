import { Box } from '@chakra-ui/react';
// import { DashboardTab } from './layouts/dashboardTab/AdminDashboardTab';
import { ComplaintTable } from './ComplaintsTable';

export const AdminComplaints = () => {
    return (
        <Box mt={8}>
            <ComplaintTable/>
        </Box>
    );
};
