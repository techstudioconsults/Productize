import { Box, Divider, Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { selectBillingHistory, useBillingHistoryMutation } from '@productize/redux';
import { PricingModal } from '@productize/ui';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const PlanSettings = () => {
    const [billingHistory, billingHistoryStatus] = useBillingHistoryMutation();
    const [renewalDate, setRenewalDate] = useState();
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

    const renewalDateFormat = (targetDateString) => {
        // Convert target date string to Date object
        const targetDate = new Date(targetDateString);

        // Get the current date
        const currentDate = new Date();

        // Calculate the time difference in milliseconds
        const timeDiff = targetDate.getTime() - currentDate.getTime();

        // Convert milliseconds to days
        const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
        setRenewalDate(daysRemaining);
    };
    useEffect(() => {
        renewalDateFormat(billingHistoryData?.renewal_date);
    }, [billingHistoryData?.renewal_date]);

    return (
        <Grid templateColumns="repeat(12, 1fr)" gap={6}>
            <GridItem colSpan={{ base: 12, md: 5 }}>
                <Text textAlign={{ base: `center`, md: `initial` }} color={`purple.300`} as={`h5`}>
                    Plan
                </Text>
                <Text textAlign={{ base: `center`, md: `initial` }} color={`grey.400`} fontSize={`sm`} mt={3}>
                    Select your default payout method
                </Text>
            </GridItem>
            <GridItem colSpan={{ base: 12, md: 7 }}>
                <Flex alignItems={`flex-end`} justifyContent={{ base: `center`, md: `space-between` }}>
                    <Box display={{ base: `none`, md: `initial` }}>
                        <Text fontWeight={600} textAlign={{ base: `center`, md: `initial` }} color={`purple.300`} my={2}>
                            Plan Type
                        </Text>
                        <Text
                            display={toString(renewalDate).includes(`-`) ? `block` : `none`}
                            textAlign={{ base: `center`, md: `initial` }}
                            color={`grey.400`}
                            fontSize={`sm`}
                        >
                            You are currently on free trial with{' '}
                            <Text as={`span`} color={`red.200`}>
                                {renewalDate} days left.
                            </Text>
                        </Text>
                    </Box>
                    <Box>
                        <PricingModal />
                    </Box>
                </Flex>
                <Divider my={5} />

                <Flex as={Link} to={`/dashboard/settings/plans/billing-cycle`} alignItems={`center`} justifyContent={`space-between`}>
                    <Box>
                        <Text fontWeight={600} textAlign={{ base: `center`, md: `initial` }} color={`purple.300`} my={2}>
                            Billing cycle
                        </Text>
                        <Text textAlign={{ base: `center`, md: `initial` }} color={`grey.400`} fontSize={`sm`}>
                            Every Month
                        </Text>
                    </Box>
                    <Box>
                        <Icon fontSize={`24px`} icon={`material-symbols:chevron-right`} />
                    </Box>
                </Flex>
                <Divider my={5} />
            </GridItem>
        </Grid>
    );
};

export default PlanSettings;
