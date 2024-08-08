import { Box, Text } from '@chakra-ui/react';
import { AdminPayoutTable } from '../components/AdminPayoutTable';

const PayoutPremiumView = () => {
    return (
        <Box my={8}>
            {/* table */}
            <Box>
                <Text as={`h6`}>Payout History</Text>
                <Box mt={5}>
                    <AdminPayoutTable />
                </Box>
            </Box>
        </Box>
    );
};

export default PayoutPremiumView;
