import { Box, Flex, FormControl, FormLabel, Input, Select, Text } from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Divider } from 'rsuite';
import errorImg from '@icons/error.svg';
import { SharedButton, ToastFeedback, useToastAction } from '@productize/ui';
import { useGetBankListMutation, useGetUserMutation, useRetrieveAllPayoutAccountMutation, useSetupPaymentAccountMutation } from '@productize/redux';

export const SetupPaymentForm = ({ closeModal }) => {
    const { toast, toastIdRef, close } = useToastAction();
    const [getBankList] = useGetBankListMutation();
    const [getUser] = useGetUserMutation();
    const [setUpPayment, paymentStatus] = useSetupPaymentAccountMutation();
    const [retieveAllPayoutAccounts] = useRetrieveAllPayoutAccountMutation();
    const [bankList, setBankList] = useState([]);
    const [selectedOption, setSelectedOption] = useState({ value: '', text: '' });
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        criteriaMode: 'all',
        mode: 'onChange',
        // resolver: yupResolver(null),
    });

    const handleGetBankList = useCallback(async () => {
        const res = await getBankList(null).unwrap();
        setBankList(res);
    }, [getBankList]);

    const addBankListToDropdown = bankList.map((bank, index) => {
        return (
            <option key={index} value={bank.code} title={bank.name}>
                {bank.name}
            </option>
        );
    });

    const handleDropdownChange = (e) => {
        const selectedValue = e.target.value;
        const selectedText = e.target.options[e.target.selectedIndex].text;
        setSelectedOption({ value: selectedValue, text: selectedText });
    };

    const onSubmit = async (data) => {
        const paymentDetails = {
            ...data,
            bank_name: selectedOption.text,
            bank_code: selectedOption.value,
        };
        try {
            const res = await setUpPayment(paymentDetails).unwrap();
            if (res.data) {
                toastIdRef.current = toast({
                    position: 'top',
                    render: () => (
                        <ToastFeedback
                            btnColor={`purple.200`}
                            message={res.data?.message || `Payment account setup successfully`}
                            title="Paystack Setup"
                            icon={undefined}
                            bgColor={undefined}
                            color={undefined}
                            handleClose={close}
                        />
                    ),
                });
                closeModal();
                await getUser(null).unwrap();
                await retieveAllPayoutAccounts(null).unwrap();
                // close modal
            }
        } catch (error) {
            toastIdRef.current = toast({
                position: 'top',
                render: () => (
                    <ToastFeedback
                        message={error.data.message}
                        title="Paystack Setup"
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

    useEffect(() => {
        handleGetBankList();
    }, [handleGetBankList]);

    return (
        <FormControl as={`form`} onSubmit={handleSubmit(onSubmit)}>
            {/* {(loginStatus.isError || googleLoginStatus.isError) && <ErrorText error={error} />} */}
            <FormControl mt={6}>
                <FormLabel fontWeight={600} className="btn-text">
                    Account Name
                </FormLabel>
                <Input
                    id="accountName"
                    size={`lg`}
                    bgColor={`grey.200`}
                    variant={`filled`}
                    placeholder="Enter account name"
                    _placeholder={{ fontSize: { base: `xs`, lg: `sm` } }}
                    {...register('name')}
                />
                <Text className={`tiny-text`} color={`red.200`}>
                    {/* {errors?.email?.message} */}
                </Text>
            </FormControl>
            <FormControl mt={6}>
                <FormLabel fontWeight={600} className="btn-text">
                    Bank
                </FormLabel>
                <Select
                    onChange={handleDropdownChange}
                    size={`lg`}
                    bgColor={`grey.200`}
                    variant={`filled`}
                    placeholder="Select bank"
                    _placeholder={{ fontSize: { base: `xs`, lg: `sm` } }}
                >
                    {addBankListToDropdown}
                </Select>
                <Text className={`tiny-text`} color={`red.200`}>
                    {/* {errors?.email?.message} */}
                </Text>
            </FormControl>
            <FormControl mt={6}>
                <FormLabel fontWeight={600} className="btn-text">
                    Account Number
                </FormLabel>
                <Input
                    id="accountNumber"
                    size={`lg`}
                    bgColor={`grey.200`}
                    variant={`filled`}
                    placeholder="Enter account name"
                    _placeholder={{ fontSize: { base: `xs`, lg: `sm` } }}
                    {...register('account_number')}
                />
                <Text className={`tiny-text`} color={`red.200`}>
                    {/* {errors?.email?.message} */}
                </Text>
            </FormControl>
            <Divider />
            <Flex gap={4}>
                <Box flex={1}>
                    <SharedButton
                        btnExtras={{
                            border: `1px solid #6D5DD3`,
                            onClick: () => reset(),
                        }}
                        text={'Cancel'}
                        width={`100%`}
                        height={'48px'}
                        bgColor={'transparent'}
                        textColor={'purple.200'}
                        borderRadius={'4px'}
                        fontSize={{ base: `sm`, lg: `md` }}
                    />
                </Box>
                <Box flex={1}>
                    <SharedButton
                        btnExtras={{
                            loadingText: ' please wait...',
                            isLoading: paymentStatus.isLoading,
                            type: `submit`,
                        }}
                        text={'Save changes'}
                        width={`100%`}
                        height={'48px'}
                        bgColor={'purple.200'}
                        textColor={'white'}
                        borderRadius={'4px'}
                        fontSize={{ base: `sm`, lg: `md` }}
                    />
                </Box>
            </Flex>
        </FormControl>
    );
};
