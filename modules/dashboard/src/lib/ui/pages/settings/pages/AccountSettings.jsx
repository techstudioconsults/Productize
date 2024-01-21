import { Box, Divider, Flex, FormControl, FormLabel, Grid, GridItem, Input, Radio, Switch, Text, useToast } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { changePasswordSchema } from "@productize-v1.0.0/auth";
import { useAxiosInstance } from "@productize-v1.0.0/modules/shared/hooks";
import { selectCurrentUser, useChangePasswordMutation, useGetUserMutation } from "@productize-v1.0.0/modules/shared/redux";
import { ErrorText, SharedButton, ToastFeedback } from "@productize-v1.0.0/modules/shared/ui";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

export const AccountSettings = () => {
    const user = useSelector(selectCurrentUser);
    const { query } = useAxiosInstance({ MIME_TYPE: "application/json" });
    const [getUser] = useGetUserMutation();
    const [showResetPasswordView, setShowResetPassword] = useState();
    const [error, setError] = useState("");
    const toast = useToast();
    const [changePassword, changePasswordStatus] = useChangePasswordMutation();

    const handleShowResetPasswordView = () => {
        if (showResetPasswordView) {
            setShowResetPassword(false);
        } else {
            setShowResetPassword(true);
        }
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        criteriaMode: "all",
        mode: "onChange",
        resolver: yupResolver(changePasswordSchema),
    });

    const handlePasswordChange = async (data) => {
        try {
            console.log(data);
            const res = await changePassword(data).unwrap();
            if (res) {
                toast({
                    position: "top",
                    render: () => <ToastFeedback message={``} bgColor="green.100" title="Password changed successfully" />,
                });
            }
        } catch (error) {
            setError(error.data.message);
            console.log(error);
        }
    };

    const [purchaseNotice, setPurchaseNotice] = useState(false);
    const handlePurchaseNotice = async () => {
        setPurchaseNotice(!purchaseNotice);
        try {
            const res = await query(`post`, `/users/me`, { purchase_notification: purchaseNotice });
            if (res?.status === 200) {
                // toast({
                //     position: "top",
                //     render: () => <ToastFeedback message={``} bgColor="green.100" title="Profile updated successfully" />,
                // });
                await getUser(null).unwrap();
            }
        } catch (error) {
            console.log(error);
        }
    };

    const [newsAndUpdate, setNewsAndUpdateNotice] = useState(false);
    const handleNewsAndUpdateNotice = async () => {
        setNewsAndUpdateNotice(!newsAndUpdate);
        try {
            const res = await query(`post`, `/users/me`, { news_and_update_notification: newsAndUpdate });
            if (res?.status === 200) {
                // toast({
                //     position: "top",
                //     render: () => <ToastFeedback message={``} bgColor="green.100" title="Profile updated successfully" />,
                // });
                await getUser(null).unwrap();
            }
        } catch (error) {
            console.log(error);
        }
    };

    const [productCreationNotice, setProductCreationNotice] = useState(false);
    const handleProductCreationNotice = async () => {
        setProductCreationNotice(!productCreationNotice);
        try {
            const res = await query(`post`, `/users/me`, { product_creation_notification: productCreationNotice });
            if (res?.status === 200) {
                // toast({
                //     position: "top",
                //     render: () => <ToastFeedback message={``} bgColor="green.100" title="Profile updated successfully" />,
                // });
                await getUser(null).unwrap();
            }
        } catch (error) {
            console.log(error);
        }
    };

    const [payoutNotice, setPayoutNotice] = useState(false);
    const handlePayoutNotice = async () => {
        setPayoutNotice(!payoutNotice);
        try {
            const res = await query(`post`, `/users/me`, { payout_notification: payoutNotice });
            if (res?.status === 200) {
                // toast({
                //     position: "top",
                //     render: () => <ToastFeedback message={``} bgColor="green.100" title="Profile updated successfully" />,
                // });
                await getUser(null).unwrap();
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <FormControl>
                {/* grid one */}
                <Grid templateColumns="repeat(12, 1fr)" gap={6}>
                    <GridItem colSpan={{ base: 12, md: 5 }}>
                        <Text textAlign={{ base: `center`, md: `initial` }} color={`purple.300`} as={`h5`}>
                            Email notification
                        </Text>
                    </GridItem>
                    <GridItem colSpan={{ base: 12, md: 7 }}>
                        <FormControl mt={4}>
                            <Flex justifyContent={`space-between`} alignItems={`center`}>
                                <FormLabel className="small-text">
                                    <Text fontWeight={600}>Purchase</Text>
                                    <Text color={`grey.400`} fontSize={`sm`}>
                                        Lorem ipsum dolor sit amet.
                                    </Text>
                                </FormLabel>
                                <Switch onChange={handlePurchaseNotice} size="lg" colorScheme="green" isChecked={user?.purchase_notification} />
                            </Flex>
                        </FormControl>
                        <Divider my={4} />
                        <FormControl mt={4}>
                            <Flex justifyContent={`space-between`} alignItems={`center`}>
                                <FormLabel className="small-text">
                                    <Text fontWeight={600}>News & Updates</Text>
                                    <Text color={`grey.400`} fontSize={`sm`}>
                                        Lorem ipsum dolor sit amet.
                                    </Text>
                                </FormLabel>
                                <Switch onChange={handleNewsAndUpdateNotice} size="lg" colorScheme="green" isChecked={user?.news_and_update_notification} />
                            </Flex>
                        </FormControl>
                        <Divider my={4} />
                        <FormControl mt={4}>
                            <Flex justifyContent={`space-between`} alignItems={`center`}>
                                <FormLabel className="small-text">
                                    <Text fontWeight={600}>Product Creation</Text>
                                    <Text color={`grey.400`} fontSize={`sm`}>
                                        Lorem ipsum dolor sit amet.
                                    </Text>
                                </FormLabel>
                                <Switch onChange={handleProductCreationNotice} size="lg" colorScheme="green" isChecked={user?.product_creation_notification} />
                            </Flex>
                        </FormControl>
                        <Divider my={4} />
                        <FormControl mt={4}>
                            <Flex justifyContent={`space-between`} alignItems={`center`}>
                                <FormLabel className="small-text">
                                    <Text fontWeight={600}>Payout</Text>
                                    <Text color={`grey.400`} fontSize={`sm`}>
                                        Lorem ipsum dolor sit amet.
                                    </Text>
                                </FormLabel>
                                <Switch onChange={handlePayoutNotice} isChecked={user?.payout_notification} size="lg" colorScheme="green" />
                            </Flex>
                        </FormControl>
                        <Divider my={4} />
                    </GridItem>
                </Grid>
                {/* grid two */}
                <Grid my={10} templateColumns="repeat(12, 1fr)" gap={6}>
                    <GridItem colSpan={{ base: 12, md: 5 }}>
                        <Text textAlign={{ base: `center`, md: `initial` }} color={`purple.300`} as={`h5`}>
                            Security
                        </Text>
                    </GridItem>
                    <GridItem display={showResetPasswordView ? `grid` : `none`} colSpan={{ base: 12, md: 7 }}>
                        <FormControl mt={4}>
                            <Box>
                                <FormLabel display={`flex`} alignItems={`center`} justifyContent={`space-between`} className="small-text">
                                    <Text fontWeight={600}>Password</Text>
                                    <Text onClick={handleShowResetPasswordView} color={`purple.200`} fontSize={`sm`}>
                                        Change password
                                    </Text>
                                </FormLabel>
                                <Input size={`lg`} placeholder={`***************`} variant={`unstyled`} type={`password`} />
                                <Text mt={4} color={`grey.400`} fontSize={`sm`}>
                                    Last changed
                                </Text>
                            </Box>
                        </FormControl>
                        <Divider my={4} />
                    </GridItem>
                    <GridItem display={showResetPasswordView ? `none` : `grid`} colSpan={{ base: 12, md: 7 }}>
                        <FormControl as={`form`} onSubmit={handleSubmit(handlePasswordChange)} maxW={500} mt={4}>
                            <Box>
                                {changePasswordStatus.isError && <ErrorText error={error} />}
                                <FormControl>
                                    <FormLabel color={`purple.300`} fontWeight={600}>
                                        Current Password
                                    </FormLabel>
                                    <Input
                                        type={`password`}
                                        bgColor={`grey.200`}
                                        _focus={{ bgColor: `grey.300`, color: `grey.800` }}
                                        _placeholder={{ color: `grey.400` }}
                                        placeholder="Enter current password"
                                        variant={`filled`}
                                        size={`lg`}
                                        {...register("password")}
                                    />
                                    <Text className={`tiny-text`} color={`red.200`}>
                                        {errors?.password?.message}
                                    </Text>
                                </FormControl>
                                <FormControl my={5}>
                                    <FormLabel color={`purple.300`} fontWeight={600}>
                                        New Password
                                    </FormLabel>
                                    <Input
                                        type={`password`}
                                        bgColor={`grey.200`}
                                        _focus={{ bgColor: `grey.300`, color: `grey.800` }}
                                        _placeholder={{ color: `grey.400` }}
                                        placeholder="Enter current password"
                                        variant={`filled`}
                                        size={`lg`}
                                        {...register("new_password")}
                                    />
                                    <Text className={`tiny-text`} color={`red.200`}>
                                        {errors?.new_password?.message}
                                    </Text>
                                </FormControl>
                                <FormControl>
                                    <FormLabel color={`purple.300`} fontWeight={600}>
                                        Confirm New Password
                                    </FormLabel>
                                    <Input
                                        type={`password`}
                                        bgColor={`grey.200`}
                                        _focus={{ bgColor: `grey.300`, color: `grey.800` }}
                                        _placeholder={{ color: `grey.400` }}
                                        placeholder="Enter current password"
                                        variant={`filled`}
                                        size={`lg`}
                                        {...register("new_password_confirmation")}
                                    />
                                    <Text className={`tiny-text`} color={`red.200`}>
                                        {errors?.new_password_confirmation?.message}
                                    </Text>
                                </FormControl>
                                <Flex my={5} gap={2}>
                                    <SharedButton
                                        btnExtras={{
                                            border: "1px solid #6D5DD3",
                                            onClick: handleShowResetPasswordView,
                                        }}
                                        text={"Cancel"}
                                        width={"fit-content"}
                                        height={"40px"}
                                        bgColor={"transparent"}
                                        textColor={"purple.200"}
                                        borderRadius={"4px"}
                                        fontSize={{ base: `sm`, md: `md` }}
                                    />
                                    <SharedButton
                                        btnExtras={{
                                            loadingText: "Changing password...",
                                            isLoading: changePasswordStatus.isLoading,
                                            type: `submit`,
                                        }}
                                        text={"Save Changes"}
                                        width={"fit-content"}
                                        height={"40px"}
                                        bgColor={"purple.200"}
                                        textColor={"grey.200"}
                                        borderRadius={"4px"}
                                        fontSize={{ base: `sm`, md: `md` }}
                                    />
                                </Flex>
                            </Box>
                        </FormControl>
                        <Divider my={4} />
                    </GridItem>
                </Grid>
                {/* grid three */}
                <Grid my={10} templateColumns="repeat(12, 1fr)" gap={6}>
                    <GridItem colSpan={{ base: 12, md: 5 }}>
                        <Text textAlign={{ base: `center`, md: `initial` }} color={`purple.300`} as={`h5`}>
                            Contact Email
                        </Text>
                        <Text textAlign={{ base: `center`, md: `initial` }} color={`grey.400`}>
                            Provide your contact email for your payout invoices.
                        </Text>
                    </GridItem>
                    <GridItem colSpan={{ base: 12, md: 7 }}>
                        <FormControl maxW={550} mt={4}>
                            <Box>
                                <FormControl>
                                    <FormLabel color={`purple.300`} fontWeight={600}>
                                        Account Email
                                    </FormLabel>
                                    <Flex gap={10}>
                                        <Input
                                            disabled
                                            id={`email`}
                                            bgColor={`grey.200`}
                                            _focus={{ bgColor: `grey.300`, color: `grey.800` }}
                                            _placeholder={{ color: `grey.400` }}
                                            placeholder="sandrawilliams@gmail.com"
                                            variant={`filled`}
                                            size={`lg`}
                                        />
                                        <Radio disabled size={`lg`} />
                                    </Flex>
                                </FormControl>
                            </Box>
                            <Box my={5}>
                                <FormControl>
                                    <FormLabel color={`purple.300`} fontWeight={600}>
                                        Alternative email
                                    </FormLabel>
                                    <Flex gap={10}>
                                        <Input
                                            disabled
                                            id={`alt-email`}
                                            bgColor={`grey.200`}
                                            _focus={{ bgColor: `grey.300`, color: `grey.800` }}
                                            _placeholder={{ color: `grey.400` }}
                                            placeholder="Enter email"
                                            variant={`filled`}
                                            size={`lg`}
                                        />
                                        <Radio disabled size={`lg`} />
                                    </Flex>
                                </FormControl>
                            </Box>
                        </FormControl>
                        <Divider my={4} />
                    </GridItem>
                </Grid>
                {/* grid four */}
                <Grid my={10} templateColumns="repeat(12, 1fr)" gap={6}>
                    <GridItem colSpan={{ base: 12, md: 5 }}>
                        <Text textAlign={{ base: `center`, md: `initial` }} color={`purple.300`} as={`h5`}>
                            Delete Account
                        </Text>
                    </GridItem>
                    <GridItem colSpan={{ base: 12, md: 7 }}>
                        <Flex flexDir={{ base: `column`, lg: `row` }} alignItems={`center`} mt={4}>
                            <Box>
                                <Text fontSize={`lg`} fontWeight={600}>
                                    Current Account
                                </Text>
                                <Text fontSize={`xs`} color={`grey.400`}>
                                    Disabling your account mean you can recover it at any time after taking this action
                                </Text>
                            </Box>
                            <Flex gap={2}>
                                <SharedButton
                                    btnExtras={{
                                        disabled: true,
                                    }}
                                    text={"Disable Account"}
                                    width={"fit-content"}
                                    height={"40px"}
                                    bgColor={"purple.200"}
                                    textColor={"grey.200"}
                                    borderRadius={"4px"}
                                    fontSize={{ base: `sm`, md: `md` }}
                                />
                                <SharedButton
                                    btnExtras={{
                                        border: "1px solid #6D5DD3",
                                        disabled: true,
                                    }}
                                    text={"Delete Account"}
                                    width={"fit-content"}
                                    height={"40px"}
                                    bgColor={"transparent"}
                                    textColor={"purple.200"}
                                    borderRadius={"4px"}
                                    fontSize={{ base: `sm`, md: `md` }}
                                />
                            </Flex>
                        </Flex>
                        <Divider my={4} />
                    </GridItem>
                </Grid>
            </FormControl>
        </div>
    );
};

export default AccountSettings;
