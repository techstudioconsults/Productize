import { Box, Card, Flex, Image, SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import arrowLeft from "@icons/Property_2_Arrow-left_kafkjg.svg";
import { useCurrency, useDate, useTime } from "@productize-v1.0.0/modules/shared/hooks";
import { Link, useNavigate } from "react-router-dom";
import { BillingCycleTable } from "./BillingCycleTable";
import {
    selectBillingHistory,
    useBillingHistoryMutation,
    useEnableSubscriptionMutation,
    useManageSubscriptionMutation,
} from "@productize-v1.0.0/modules/shared/redux";
import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { OnBoardingLoader } from "@productize-v1.0.0/modules/shared/ui";

export const BillingCycle = () => {
    const navigate = useNavigate();
    const formatCurrency = useCurrency();
    const formatDate = useDate();
    const [billingHistory, billingHistoryStatus] = useBillingHistoryMutation();
    // const [enableSubscription] = useEnableSubscriptionMutation();
    const [manageSubscription] = useManageSubscriptionMutation();
    const billingHistoryData = useSelector(selectBillingHistory);

    const showBillingHistory = useCallback(async () => {
        try {
            await billingHistory(null).unwrap();
        } catch (error) {
            return error;
        }
    }, [billingHistory]);

    useEffect(() => {
        showBillingHistory();
    }, [showBillingHistory]);

    const handlePlanDeactivation = async () => {
        try {
            // await enableSubscription(null).unwrap();
            const res = await manageSubscription(null).unwrap();
            if (res) {
                window.location.href = res.data.link;
            }
        } catch (error) {
            return error;
        }
    };

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
                <Skeleton isLoaded={!billingHistoryStatus.isLoading}>
                    <Box>
                        <Card variant={`outline`} p={5} gap={3}>
                            <Text>Renewal Date</Text>
                            <Flex alignItems={`center`} justifyContent={`space-between`}>
                                <Text as={`h5`}>{formatDate(billingHistoryData?.renewal_date)}</Text>
                                <Text onClick={handlePlanDeactivation} color={`red.200`}>
                                    Deactivate Plan
                                </Text>
                            </Flex>
                        </Card>
                    </Box>
                </Skeleton>
                <Skeleton isLoaded={!billingHistoryStatus.isLoading}>
                    <Box>
                        <Card variant={`outline`} p={5} gap={3}>
                            <Text>Currently</Text>
                            <Flex alignItems={`center`} justifyContent={`space-between`}>
                                <Text as={`h5`}>{billingHistoryData?.plan}</Text>
                                <Link to={`/dashboard/settings/plans/change-plans`}>
                                    <Text color={`purple.200`}>Upgrade Plan</Text>
                                </Link>
                            </Flex>
                        </Card>
                    </Box>
                </Skeleton>
                <Skeleton isLoaded={!billingHistoryStatus.isLoading}>
                    <Box>
                        <Card variant={`outline`} p={5} gap={3}>
                            <Text>Billing Total</Text>
                            <Flex alignItems={`center`} gap={1}>
                                <Text as={`h5`}>{formatCurrency(billingHistoryData?.billing_total)}</Text>
                                <Text color={`grey.300`}>/Per Month</Text>
                            </Flex>
                        </Card>
                    </Box>
                </Skeleton>
            </SimpleGrid>
            {/* billing table */}
            <Box my={10}>{billingHistoryStatus.isLoading ? <OnBoardingLoader /> : <BillingCycleTable tableData={billingHistoryData?.plans} />}</Box>
        </Box>
    );
};

export default BillingCycle;
