import { Box, Center, FormControl, FormLabel, Input, Link, Text, useToast } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
// import { useForgotPasswordMutation } from "@productize-v1.0.0/modules/shared/redux";
import { ErrorText, SharedButton, ToastFeedback } from "@productize-v1.0.0/modules/shared/ui";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthenticationService } from "./AuthenticationService";
import { forgotPasswordSchema } from "./form-validation-schema/auth-schema";

export function ForgotPassowrdForm() {
    const { forgotPasswordService } = AuthenticationService();
    const [error, setError] = useState<string>("");
    const toast = useToast();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        criteriaMode: "all",
        mode: "onChange",
        resolver: yupResolver(forgotPasswordSchema),
    });

    const onSubmit = async (data: unknown) => {
        try {
            const res = await forgotPasswordService.forgotPassword(data).unwrap();
            toast({
                position: "top",
                render: () => <ToastFeedback message={res.message} title="" />,
            });
        } catch (error: any) {
            console.log(error);
            setError(error.data.message);
        }
        // try {
        //     const res = await forgotPassword(data).unwrap();
        //     console.log(res);
        // } catch (error: any) {
        //     console.log(error);
        //     setError(error.data.message);
        // }
    };

    return (
        <FormControl as={`form`} onSubmit={handleSubmit(onSubmit)}>
            {forgotPasswordService.forgotPasswordStatus.isError && <ErrorText error={error} />}
            <FormControl mb={5}>
                <FormLabel fontWeight={600} className="btn-text">
                    Email
                </FormLabel>
                <Input
                    type="email"
                    bgColor={`grey.200`}
                    variant={`filled`}
                    placeholder="Enter email"
                    _placeholder={{ fontSize: { base: `xs`, lg: `sm` } }}
                    {...register("email")}
                />
                <Text className={`tiny-text`} color={`red.200`}>
                    {errors?.email?.message}
                </Text>
            </FormControl>

            <Box>
                <Box my={5}>
                    <SharedButton
                        text={"Reset Password"}
                        width={`100%`}
                        height={"48px"}
                        bgColor={"purple.200"}
                        textColor={"white"}
                        borderRadius={"4px"}
                        fontSize={{ base: `sm`, lg: `md` }}
                        btnExtras={{
                            loadingText: "Loading...",
                            type: `submit`,
                            isLoading: forgotPasswordService.forgotPasswordStatus.isLoading,
                        }}
                    />
                </Box>

                <Center my={5}>
                    <Link as={RouterLink} w={`100%`} to={`/auth/login`}>
                        <SharedButton
                            text={"Back to Sign In"}
                            width={`100%`}
                            height={"48px"}
                            bgColor={"white"}
                            textColor={"purple.200"}
                            borderRadius={"4px"}
                            fontSize={{ base: `sm` }}
                            btnExtras={{
                                leftIcon: `solar:arrow-left-line-duotone`,
                            }}
                        />
                    </Link>
                </Center>
            </Box>
        </FormControl>
    );
}
