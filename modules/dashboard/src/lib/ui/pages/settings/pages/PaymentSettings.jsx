import { Box, Card, Center, Divider, Flex, Grid, GridItem, ModalCloseButton, Skeleton, Stack, Text, useDisclosure } from "@chakra-ui/react";
import { ModalComp } from "@productize-v1.0.0/modules/shared/ui";
import { SetupPaymentForm } from "../../../../feature/settingsForm/SetupPaymentForm";
import { Icon } from "@iconify/react";
import { useCallback, useEffect, useState } from "react";
import { useRetrieveAllPayoutAccountMutation } from "@productize-v1.0.0/modules/shared/redux";
import BankCard from "../../payouts/components/BankCard";

const PaymentSettings = () => {
    const { onOpen, onClose, isOpen } = useDisclosure();
    const [payoutAccountList, setPayoutAccountList] = useState([]);
    const [retieveAllPayoutAccounts, retieveAllPayoutAccountsStatus] = useRetrieveAllPayoutAccountMutation();

    const retrivePayoutAcc = useCallback(async () => {
        try {
            const res = await retieveAllPayoutAccounts(null).unwrap();
            console.log(res);
            if (res.data) {
                setPayoutAccountList(res.data);
            }
        } catch (error) {
            // setError(error.data.message);
            console.log(error);
        }
    }, [retieveAllPayoutAccounts]);

    useEffect(() => {
        retrivePayoutAcc();
    }, [retrivePayoutAcc]);

    const accountList = payoutAccountList?.map((account) => {
        return (
            <Skeleton isLoaded={!retieveAllPayoutAccountsStatus.isLoading} key={account.id} borderRadius={`8px`}>
                <BankCard
                    key={account.id}
                    account={account}
                    src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1702765305/productize/Bank_Logo_f98woi.png`}
                />
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
                    Gateway
                </Text>
                <Stack flexDir={`row`}>
                    <Flex>{accountList}</Flex>
                    <Card
                        onClick={onOpen}
                        cursor={`pointer`}
                        w={{ base: `fit-content` }}
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
                            Add Gateway
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
                </Stack>
                <Divider my={5} />
            </GridItem>
        </Grid>
    );
};

export default PaymentSettings;
