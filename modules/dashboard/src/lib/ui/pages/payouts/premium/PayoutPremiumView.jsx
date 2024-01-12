import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import { PayoutTableControl } from "../components/PayoutTableControls";
import { PayoutTable } from "../components/PayoutTable";
import { DashboardBanner } from "../../../DashboardBanner";

const PayoutPremiumView = () => {
    return (
        <Box my={8}>
            <DashboardBanner
                padding={{ base: 4, md: 8 }}
                img={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951011/productize/Layer_1_3_hn7gd9_kdxcwg.png`}
                bgImg={``}
                title={"Grow communities and get paid."}
                desc={"Make as much as ₦10,000 sale for your first withdraw"}
                px={8}
            />
            {/* table */}
            <Stack>
                <Box my={10}>
                    <PayoutTableControl />
                </Box>
                <Box>
                    <Text as={`h6`}>Earnings List</Text>
                    <Box mt={5}>
                        <PayoutTable />
                    </Box>
                </Box>
            </Stack>
        </Box>
    );
};

export default PayoutPremiumView;
