import { Box, Card, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import arrowLeft from "@icons/Property_2_Arrow-left_kafkjg.svg";
import { useCurrency } from "@productize-v1.0.0/modules/shared/hooks";
import { useNavigate } from "react-router-dom";
import { BillingCycleTable } from "./BillingCycleTable";

export const BillingCycle = () => {
    const navigate = useNavigate();
    const formatCurrency = useCurrency();
    return (
        <Box my={5}>
            <Flex cursor={`pointer`} gap={8} w={`fit-content`} alignItems={`center`} onClick={() => navigate(-1)}>
                <Box>
                    <Image src={arrowLeft} />
                </Box>
                <Text as={`h6`}>Billing Cycle</Text>
            </Flex>
            {/* billing summary */}
            <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={5} my={5}>
                <Box>
                    <Card variant={`outline`} p={5} gap={3}>
                        <Text>Renewal Date</Text>
                        <Flex alignItems={`center`} justifyContent={`space-between`}>
                            <Text as={`h5`}>1 Sep, 2023</Text>
                            <Text color={`red.200`}>Deactivate Plan</Text>
                        </Flex>
                    </Card>
                </Box>
                <Box>
                    <Card variant={`outline`} p={5} gap={3}>
                        <Text>Currently</Text>
                        <Flex alignItems={`center`} justifyContent={`space-between`}>
                            <Text as={`h5`}>Free Plan</Text>
                            <Text color={`purple.200`}>Upgrade Plan</Text>
                        </Flex>
                    </Card>
                </Box>
                <Box>
                    <Card variant={`outline`} p={5} gap={3}>
                        <Text>Billing Total</Text>
                        <Flex alignItems={`center`} gap={1}>
                            <Text as={`h5`}>{formatCurrency(0)}</Text>
                            <Text color={`grey.300`}>/Per Month</Text>
                        </Flex>
                    </Card>
                </Box>
            </SimpleGrid>
            {/* billing table */}
            <Box my={10}>
                <BillingCycleTable />
            </Box>
        </Box>
    );
};

export default BillingCycle;
