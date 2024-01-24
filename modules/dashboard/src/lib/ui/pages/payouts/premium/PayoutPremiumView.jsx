import { Box, Stack, Text } from "@chakra-ui/react";
import { PayoutTableControl } from "../components/PayoutTableControls";
import { PayoutTable } from "../components/PayoutTable";

const PayoutPremiumView = () => {
    return (
        <Box my={8}>
            {/* table */}
            <Stack>
                <Box my={10}>
                    <PayoutTableControl />
                </Box>
                <Box>
                    <Text as={`h6`}>Withdraw Earnings</Text>
                    <Box mt={5}>
                        <PayoutTable />
                    </Box>
                </Box>
            </Stack>
        </Box>
    );
};

export default PayoutPremiumView;
