import { Box, Card, Center, Divider, Flex, Grid, GridItem, ModalCloseButton, SimpleGrid, Skeleton, Stack, Text, useDisclosure } from '@chakra-ui/react';
import { SetupPaymentForm } from '../../../../feature/settingsForm/SetupPaymentForm';
import { Icon } from '@iconify/react';
import { useCallback, useEffect } from 'react';
import BankCard from '../../payouts/components/BankCard';
import { useSelector } from 'react-redux';
import { selectAccountList, useRetrieveAllPayoutAccountMutation } from '@productize/redux';
import { ModalComp } from '@productize/ui';

export const PaymentSettings = () => {
    const { onOpen, onClose, isOpen } = useDisclosure();
    const payoutAccountList = useSelector(selectAccountList);
    const [retieveAllPayoutAccounts, retieveAllPayoutAccountsStatus] = useRetrieveAllPayoutAccountMutation();

    const retrivePayoutAcc = useCallback(async () => {
        try {
            await retieveAllPayoutAccounts(null).unwrap();
        } catch (error) {
            console.error(error);
        }
    }, [retieveAllPayoutAccounts]);

    useEffect(() => {
        retrivePayoutAcc();
    }, [retrivePayoutAcc]);

    const accountList = payoutAccountList?.map((account) => {
        return (
            <Skeleton isLoaded={!retieveAllPayoutAccountsStatus.isLoading} key={account.id} borderRadius={`8px`}>
                <BankCard key={account.id} account={account} src={null} />
            </Skeleton>
        );
    });
    return (
        <Grid templateColumns="repeat(12, 1fr)" gap={6}>
            <GridItem colSpan={{ base: 12, md: 5 }}>
                <Text textAlign={{ base: `center`, md: `initial` }} color={`purple.300`} as={`h5`}>
                    Payment method
                </Text>
                <Text textAlign={{ base: `center`, md: `initial` }} color={`grey.400`} fontSize={`sm`} mt={3}>
                    Select your default payment method
                </Text>
            </GridItem>
            <GridItem colSpan={{ base: 12, md: 7 }}>
                {/* paystack modal */}
                <Text fontWeight={600} textAlign={{ base: `center`, md: `initial` }} color={`purple.300`} my={2}>
                    Accounts
                </Text>
                <Stack>
                    <Card
                        onClick={onOpen}
                        cursor={`pointer`}
                        w={{ base: `100%` }}
                        h={`160px`}
                        borderRadius={`8px`}
                        as={Center}
                        variant={`outline`}
                        flexDir={`row`}
                        gap={5}
                        px={14}
                    >
                        <Icon fontSize={`1.2rem`} icon={`ei:plus`} />
                        <Text color={`purple.200`} fontWeight={600}>
                            Add Account
                        </Text>
                        <ModalComp modalSize={`lg`} openModal={isOpen} closeModal={onClose}>
                            <Box>
                                <Flex>
                                    <Text as={`h5`} fontSize={`xl`}>
                                        Add Bank Account
                                    </Text>
                                    <ModalCloseButton />
                                </Flex>
                                <Divider />
                            </Box>
                            <SetupPaymentForm closeModal={onClose} />
                        </ModalComp>
                    </Card>
                    <SimpleGrid columns={{ base: 1, sm: 2, md: 1, lg: 2 }} gridGap={5}>
                        {accountList}
                    </SimpleGrid>
                </Stack>
                <Divider my={5} />
            </GridItem>
        </Grid>
    );
};

export default PaymentSettings;
