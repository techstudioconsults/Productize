import {
    Box,
    Card,
    Center,
    Divider,
    Flex,
    FormControl,
    FormLabel,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    ModalCloseButton,
    SimpleGrid,
    Stack,
    Text,
    useDisclosure,
} from '@chakra-ui/react';
import React, { useCallback, useEffect, useState } from 'react';
import BankCard from '../components/BankCard';
import { Icon } from '@iconify/react';
import { DataWidgetCard } from '../../../DataWidgetCard';
import { selectAccountList, selectPayoutStats, useInitiateWithdrawalMutation, useRetrieveAllPayoutAccountMutation } from '@productize/redux';
import { useCurrency } from '@productize/hooks';
import { ModalComp, SharedButton, ToastFeedback, useToastAction } from '@productize/ui';
import { SetupPaymentForm } from '@productize/dashboard';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
// import errorImg from '@icons/error.svg';

export const WithdrawalEarnings = () => {
    const { toast, toastIdRef, close } = useToastAction();
    const { onOpen, onClose, isOpen } = useDisclosure();
    const formatCurrency = useCurrency();
    const payoutAccountList = useSelector(selectAccountList);
    const [retieveAllPayoutAccounts] = useRetrieveAllPayoutAccountMutation();
    const [initiateWithdrawal, initiateWithdrawalStatus] = useInitiateWithdrawalMutation();
    const { register, handleSubmit, setValue } = useForm();
    const payouts = useSelector(selectPayoutStats);

    const retrivePayoutAcc = useCallback(async () => {
        try {
            await retieveAllPayoutAccounts(null).unwrap();
        } catch (error) {
            // setError(error.data.message);
            console.error(error);
        }
    }, [retieveAllPayoutAccounts]);

    const accountList = payoutAccountList.map((account) => {
        return <BankCard width={`300px`} key={account?.id} account={account} src={null} />;
    });

    useEffect(() => {
        retrivePayoutAcc();
    }, [retrivePayoutAcc]);

    const setMaxAmount = () => {
        console.log(`click max`);
        setValue(`amount`, 5000);
    };

    const handleWithdrawalForm = async (data) => {
        console.log(data);
        try {
            const res = await initiateWithdrawal(data).unwrap();
            if (res.data) {
                toastIdRef.current = toast({
                    position: 'top',
                    render: () => (
                        <ToastFeedback
                            message={res.data}
                            title="Withdraw status"
                            icon={null}
                            color={`grey.600`}
                            btnColor={`grey.600`}
                            bgColor={undefined}
                            handleClose={close}
                        />
                    ),
                });
            }
        } catch (error) {
            toastIdRef.current = toast({
                position: 'top',
                render: () => (
                    <ToastFeedback
                        message={error.data.message}
                        title="Withdraw error"
                        icon={errorImg}
                        color={`red.600`}
                        btnColor={`red.600`}
                        bgColor={undefined}
                        handleClose={close}
                    />
                ),
            });
        }
    };

    return (
        <Stack my={10}>
            <Flex alignItems={`center`} justifyContent={`space-between`}>
                <Text as={`h5`}>Withdraw Earnings</Text>
                <SharedButton
                    btnExtras={{
                        border: `1px solid red`,
                        onClick: null,
                    }}
                    text={'Cancel'}
                    width={'fit-content'}
                    height={'40px'}
                    bgColor={'transparent'}
                    textColor={'red'}
                    borderRadius={'4px'}
                    fontSize={{ base: `sm`, md: `sm` }}
                />
            </Flex>
            <Box my={10}>
                <DataWidgetCard
                    tmy={2}
                    bmt={4}
                    showIcon
                    bgImg="https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951020/productize/Data_widget_1_bqcsji_dvrrm5.png"
                    title={'Available Earnings'}
                    value={formatCurrency(payouts?.available_earnings)}
                />
            </Box>
            {/* select bank */}
            <Box mb={10}>
                <Text as={`h6`} my={5}>
                    Bank Accounts
                </Text>
                <Flex justifyContent={`flex-start`} gap={5} flexDir={{ base: `column`, md: `row` }}>
                    {accountList}
                    <Card
                        onClick={onOpen}
                        cursor={`pointer`}
                        w={{ base: `100%`, lg: `initial` }}
                        h={`140px`}
                        borderRadius={`8px`}
                        as={Center}
                        variant={`outline`}
                        flexDir={`row`}
                        gap={5}
                        px={14}
                    >
                        <Icon fontSize={`1.2rem`} icon={`ei:plus`} />
                        <Text color={`purple.200`} fontWeight={600}>
                            Add Bank
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
                            <SetupPaymentForm />
                        </ModalComp>
                    </Card>
                </Flex>
            </Box>
            {/* withdrawal Details */}
            <Box mb={10}>
                <Text as={`h6`} my={5}>
                    Withdrawal Details
                </Text>
                <FormControl as={`form`} onSubmit={handleSubmit(handleWithdrawalForm)}>
                    <FormLabel>Amount</FormLabel>
                    <InputGroup size={`lg`}>
                        <InputLeftElement pointerEvents="none" color="gray.500" fontSize="1.2em" children="N" />
                        <Input
                            type={`number`}
                            bgColor={`grey.200`}
                            _focus={{ bgColor: `grey.200`, color: `grey.800` }}
                            _placeholder={{ color: `grey.400` }}
                            variant={`filled`}
                            placeholder="Enter amount"
                            {...register(`amount`)}
                        />

                        <InputRightElement color="gray.500" fontSize="14px" onClick={setMaxAmount}>
                            Max
                        </InputRightElement>
                    </InputGroup>
                    <Box my={5}>
                        <SharedButton
                            btnExtras={{
                                onClick: null,
                                type: `submit`,
                                loadingText: `Intializing withdrawal...`,
                                isLoading: initiateWithdrawalStatus.isLoading,
                            }}
                            text={'Initiate Withdrawal'}
                            width={'100%'}
                            height={'48px'}
                            bgColor={'purple.200'}
                            textColor={'grey.200'}
                            borderRadius={'4px'}
                            fontSize={{ base: `sm`, md: `sm` }}
                        />
                    </Box>
                </FormControl>
            </Box>
        </Stack>
    );
};
