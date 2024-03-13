import { Box, Text } from '@chakra-ui/react';
import { PayoutTable } from '../components/PayoutTable';

const PayoutPremiumView = () => {
    return (
        <Box my={8}>
            {/* table */}
            <Box>
                <Text as={`h6`}>Payout History</Text>
                <Box mt={5}>
                    <PayoutTable />
                </Box>
            </Box>
        </Box>
    );
};

export default PayoutPremiumView;
