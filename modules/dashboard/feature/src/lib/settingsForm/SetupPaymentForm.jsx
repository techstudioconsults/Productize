import { Box, Flex, FormControl, FormLabel, Input, Select, Text } from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { SharedButton } from "@productize-v1.0.0/modules/shared/ui";
import { Divider } from "rsuite";
import { useGetBankListMutation, useSetupPaymentAccountMutation } from "@productize-v1.0.0/modules/shared/redux";

export const SetupPaymentForm = () => {
    const [getBankList] = useGetBankListMutation();
    const [setUpPayment] = useSetupPaymentAccountMutation();
    const [bankList, setBankList] = useState([]);
    const [selectedOption, setSelectedOption] = useState({ value: "", text: "" });
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        criteriaMode: "all",
        mode: "onChange",
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
        console.log(paymentDetails);
        try {
            const res = await setUpPayment(paymentDetails).unwrap();
            if (res.status === 200) {
                console.log(res);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        handleGetBankList();
    }, [handleGetBankList]);

    return (
        <FormControl as={`form`} onSubmit={handleSubmit(onSubmit)}>
            {/* {(loginStatus.isError || googleLoginStatus.isError) && <ErrorText error={error} />} */}
            <FormControl mb={6}>
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
                    {...register("business_name")}
                />
                <Text className={`tiny-text`} color={`red.200`}>
                    {/* {errors?.email?.message} */}
                </Text>
            </FormControl>
            <FormControl mb={6}>
                <FormLabel fontWeight={600} className="btn-text">
                    Bankai
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
            <FormControl mb={6}>
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
                    {...register("account_number")}
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
                            loadingText: "Logging in...",
                            // isLoading: loginStatus.isLoading,
                            border: `1px solid #6D5DD3`,
                        }}
                        text={"Cancel"}
                        width={`100%`}
                        height={"48px"}
                        bgColor={"transparent"}
                        textColor={"purple.200"}
                        borderRadius={"4px"}
                        fontSize={{ base: `sm`, lg: `md` }}
                    />
                </Box>
                <Box flex={1}>
                    <SharedButton
                        btnExtras={{
                            loadingText: "Logging in...",
                            // isLoading: loginStatus.isLoading,
                            type: `submit`,
                        }}
                        text={"Save changes"}
                        width={`100%`}
                        height={"48px"}
                        bgColor={"purple.200"}
                        textColor={"white"}
                        borderRadius={"4px"}
                        fontSize={{ base: `sm`, lg: `md` }}
                    />
                </Box>
            </Flex>
        </FormControl>
    );
};
