import { Box, Card, Center, Flex, FormControl, FormLabel, Input, InputGroup, InputLeftElement, InputRightElement, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useCurrency } from "@productize-v1.0.0/modules/shared/hooks";
import { SharedButton } from "@productize-v1.0.0/modules/shared/ui";
import BankCard from "../components/BankCard";
import { Icon } from "@iconify/react";
import { DataWidgetCard } from "../../../DataWidgetCard";

export const WithdrawalEarnings = () => {
    const formatCurrency = useCurrency();
    return (
        <Stack my={10}>
            <Flex alignItems={`center`} justifyContent={`space-between`}>
                <Text as={`h5`}>Withdraw Earnings</Text>
                <SharedButton
                    btnExtras={{
                        border: `1px solid red`,
                        onClick: null,
                    }}
                    text={"Cancel"}
                    width={"fit-content"}
                    height={"40px"}
                    bgColor={"transparent"}
                    textColor={"red"}
                    borderRadius={"4px"}
                    fontSize={{ base: `sm`, md: `sm` }}
                />
            </Flex>
            <Box maxW={750} my={10}>
                <DataWidgetCard
                    tmy={2}
                    bmt={4}
                    showIcon
                    bgImg="https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951020/productize/Data_widget_1_bqcsji_dvrrm5.png"
                    title={"Available Earnings"}
                    value={formatCurrency(155000)}
                />
            </Box>
            {/* select bank */}
            <Box maxW={750} mb={10}>
                <Text as={`h6`} my={5}>
                    Bank Accounts
                </Text>
                <Flex gap={5} justifyContent={`space-between`} wrap={`wrap`}>
                    <BankCard
                        bankName={`First Bank`}
                        src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1702765305/productize/Bank_Logo_f98woi.png`}
                    />
                    <BankCard
                        bankName={`Kuda Bank`}
                        src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1702770522/productize/Bank_Logo_1_evkvcm.png`}
                    />
                    <Card w={{ base: `100%`, lg: `initial` }} h={`7rem`} borderRadius={`8px`} as={Center} variant={`outline`} flexDir={`row`} gap={5} px={14}>
                        <Icon fontSize={`1.2rem`} icon={`ei:plus`} />
                        <Text color={`purple.200`} fontWeight={600}>
                            Add Bank
                        </Text>
                    </Card>
                </Flex>
            </Box>
            {/* withdrawal Details */}
            <Box maxW={750} mb={10}>
                <Text as={`h6`} my={5}>
                    Withdrawal Details
                </Text>
                <FormControl>
                    <FormLabel>Amount</FormLabel>
                    <InputGroup size={`lg`}>
                        <InputLeftElement pointerEvents="none" color="gray.300" fontSize="1.2em" children="N" />
                        <Input
                            bgColor={`grey.200`}
                            _focus={{ bgColor: `grey.200`, color: `grey.800` }}
                            _placeholder={{ color: `grey.400` }}
                            variant={`filled`}
                            placeholder="Enter amount"
                        />

                        <InputRightElement pointerEvents="none" color="gray.400" fontSize="14px" children="Max" />
                    </InputGroup>
                    <Box my={5}>
                        <SharedButton
                            btnExtras={{
                                onClick: null,
                            }}
                            text={"Initiate Withdrawal"}
                            width={"100%"}
                            height={"48px"}
                            bgColor={"purple.200"}
                            textColor={"grey.200"}
                            borderRadius={"4px"}
                            fontSize={{ base: `sm`, md: `sm` }}
                        />
                    </Box>
                </FormControl>
            </Box>
        </Stack>
    );
};
