import { Box, Center, FormControl, FormLabel, Input, InputGroup, InputRightElement, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSignupMutation, useGoogleAuthMutation } from "@productize-v1.0.0/modules/shared/redux";
import { ErrorText, SharedButton } from "@productize-v1.0.0/modules/shared/ui";
import { registrationSchema } from "@productize-v1.0.0/modules/auth/services";
import { yupResolver } from "@hookform/resolvers/yup";

export function SignupForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);
    const [error, setError] = useState("");
    const handlePasswordClick = () => setShowPassword(!showPassword);
    const handlePasswordConfirmationClick = () => setShowPasswordConfirmation(!showPasswordConfirmation);
    const navigate = useNavigate();

    // mutations
    const [signup, signupStatus] = useSignupMutation();
    const [googleAuth, googleSiginStatus] = useGoogleAuthMutation();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        criteriaMode: "all",
        mode: "onChange",
        resolver: yupResolver(registrationSchema),
    });

    const onSubmit = async (data: any) => {
        try {
            const res = await signup(data).unwrap();
            if (res.token) {
                navigate(`/dashboard/home`);
            }
        } catch (error: any) {
            setError(error.data.message);
            console.log(error);
        }
    };

    const onGoogleButtonClick = async () => {
        try {
            const res = await googleAuth(null).unwrap();
            console.log(res);
        } catch (error: any) {
            setError(error.data.message);
        }
    };

    return (
        <FormControl as={`form`} onSubmit={handleSubmit(onSubmit)}>
            {(signupStatus.isError || googleSiginStatus.isError) && <ErrorText error={error} />}
            <FormControl mb={6}>
                <FormLabel fontWeight={600} className="btn-text">
                    First Name
                </FormLabel>
                <Input
                    size={`lg`}
                    bgColor={`grey.200`}
                    variant={`filled`}
                    id="fullName"
                    placeholder="Enter full name"
                    _placeholder={{ fontSize: { base: `xs`, lg: `sm` } }}
                    {...register("full_name")}
                />
                <Text className={`tiny-text`} color={`red.200`}>
                    {errors?.full_name?.message}
                </Text>
            </FormControl>
            {/* <FormControl mb={6}>
        <FormLabel fontWeight={600} className="btn-text">
          Last Name
        </FormLabel>
        <Input
          size={`lg`}
          bgColor={`grey.200`}
          variant={`filled`}
          id="fullName"
          placeholder="Enter full name"
          _placeholder={{ fontSize: { base: `xs`, lg: `sm` } }}
          {...register('full_name', validation)}
        />
      </FormControl> */}
            <FormControl my={6}>
                <FormLabel fontWeight={600} className="btn-text">
                    Email
                </FormLabel>
                <Input
                    type="email"
                    id="email"
                    size={`lg`}
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
            <FormControl my={6}>
                <FormLabel fontWeight={600} className="btn-text">
                    Password
                </FormLabel>
                <InputGroup size="lg">
                    <Input
                        id="password"
                        bgColor={`grey.200`}
                        variant={`filled`}
                        pr="4.5rem"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter password"
                        _placeholder={{ fontSize: { base: `xs`, lg: `sm` } }}
                        {...register("password")}
                    />
                    <InputRightElement onClick={handlePasswordClick} width="2.5rem">
                        {!showPassword ? <Icon icon={`ant-design:eye-twotone`} /> : <Icon icon={`ant-design:eye-invisible-twotone`} />}
                    </InputRightElement>
                </InputGroup>
                <Text className={`tiny-text`} color={`red.200`}>
                    {errors?.password?.message}
                </Text>
            </FormControl>
            <FormControl my={6}>
                <FormLabel fontWeight={600} className="btn-text">
                    Confirm Password
                </FormLabel>
                <InputGroup size="lg">
                    <Input
                        id="password_confirmation"
                        bgColor={`grey.200`}
                        variant={`filled`}
                        pr="4.5rem"
                        type={showPasswordConfirmation ? "text" : "password"}
                        placeholder="Enter password confirmation"
                        _placeholder={{ fontSize: { base: `xs`, lg: `sm` } }}
                        {...register("password_confirmation")}
                    />
                    <InputRightElement onClick={handlePasswordConfirmationClick} width="2.5rem">
                        {!showPasswordConfirmation ? <Icon icon={`ant-design:eye-twotone`} /> : <Icon icon={`ant-design:eye-invisible-twotone`} />}
                    </InputRightElement>
                </InputGroup>
                <Text className={`tiny-text`} color={`red.200`}>
                    {errors?.password_confirmation?.message}
                </Text>
            </FormControl>
            <Box>
                <Text className="small-text" textAlign={`center`}>
                    You agree to our{" "}
                    <Link color={`purple.200`} as={`span`}>
                        Terms Of Use
                    </Link>{" "}
                    and{" "}
                    <Link color={`purple.200`} as={`span`}>
                        Privacy Policy
                    </Link>
                    .
                </Text>
                <Box my={5}>
                    <SharedButton
                        btnExtras={{
                            loadingText: "Creating Account...",
                            isLoading: signupStatus.isLoading,
                            type: `submit`,
                        }}
                        text={"Create Account"}
                        width={`100%`}
                        height={"46px"}
                        bgColor={"purple.200"}
                        textColor={"white"}
                        borderRadius={"4px"}
                        fontSize={{ base: `sm`, lg: `md` }}
                    />
                </Box>
                <Center>
                    <Text color={`grey.300`}>--------- Or ---------</Text>
                </Center>
                <Box my={5}>
                    <SharedButton
                        btnExtras={{
                            rightIcon: `flat-color-icons:google`,
                            loadingText: "Creating Account...",
                            isLoading: googleSiginStatus.isLoading,
                            onClick: onGoogleButtonClick,
                            border: `1px solid #6D5DD3`,
                        }}
                        text={"Continue with Google"}
                        width={`100%`}
                        height={"46px"}
                        bgColor={"white"}
                        textColor={"purple.200"}
                        borderRadius={"4px"}
                        fontSize={{ base: `sm`, lg: `md` }}
                    />
                </Box>
                <Text className="small-text" textAlign={`center`}>
                    Have an account already ?{" "}
                    <Link display={`inline`} to={`/auth/login`} color={`purple.200`} as={RouterLink}>
                        Sign in
                    </Link>
                </Text>
            </Box>
        </FormControl>
    );
}
