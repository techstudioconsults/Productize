import { Box, Stack, Text } from "@chakra-ui/react";
import { PayoutTable } from "../components/PayoutTable";
import { OrdersTableControl } from "../../../tables/tableControls/OrdersTableControl";

const PayoutPremiumView = () => {
    return (
        <Box my={8}>
            {/* table */}
            <Stack>
                <Box my={10}>
                    <OrdersTableControl />
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
