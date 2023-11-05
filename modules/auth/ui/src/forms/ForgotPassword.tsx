import { Box, Center, FormControl, FormLabel, Input, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useForgotPasswordMutation } from "@productize-v1.0.0/modules/shared/redux";
import { ErrorText, SharedButton } from "@productize-v1.0.0/modules/shared/ui";
import { AuthenticationService } from "@productize-v1.0.0/modules/auth/services";

const validation = {
    required: "This input is required.",
    minLength: {
        value: 4,
        message: "This input must exceed 3 characters",
    },
};

/* eslint-disable-next-line */
export interface ForgotPassowrdProps {}

export function ForgotPassowrdForm(props: ForgotPassowrdProps) {
    const { forgotPasswordService } = AuthenticationService();
    const [error, setError] = useState<string>("");

    const { register, handleSubmit } = useForm({
        criteriaMode: "all",
    });

    const onSubmit = async (data: unknown) => {
        try {
            const res = await forgotPasswordService.forgotPassword(data).unwrap();
            console.log(res);
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
                    {...register("email", validation)}
                />
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
