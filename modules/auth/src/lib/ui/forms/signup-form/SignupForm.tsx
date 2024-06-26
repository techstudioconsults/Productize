import React from 'react';
import { Box, Center, Checkbox, Flex, FormControl, FormLabel, Input, InputGroup, InputRightElement, Link, Stack, Text } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { Link as RouterLink } from 'react-router-dom';
import { ErrorText, SharedButton } from '@productize/ui';
import { useSignupForm } from './useSignupForm';

export function SignupForm() {
    const {
        register,
        handleSubmit,
        getValues,
        errors,
        isValid,
        onGoogleButtonClick,
        signupStatus,
        googleSiginStatus,
        error,
        showPassword,
        setShowPassword,
        showPasswordConfirmation,
        setShowPasswordConfirmation,
    } = useSignupForm();

    const handlePasswordClick = () => setShowPassword(!showPassword);
    const handlePasswordConfirmationClick = () => setShowPasswordConfirmation(!showPasswordConfirmation);

    const checkValidation = (pattern: RegExp) => {
        const password = getValues('password');
        return pattern.test(password);
    };

    return (
        <FormControl as="form" onSubmit={handleSubmit}>
            {(signupStatus.isError || googleSiginStatus.isError) && <ErrorText error={error} />}
            <FormControl mb={6}>
                <FormLabel fontWeight={600} className="btn-text">
                    Full Name
                </FormLabel>
                <Input
                    size="lg"
                    bgColor="grey.200"
                    variant="filled"
                    id="fullName"
                    placeholder="Enter full name"
                    _placeholder={{ fontSize: { base: 'xs', lg: 'sm' } }}
                    {...register('full_name')}
                />
                <Text className="tiny-text" color="red.200">
                    {errors?.full_name?.message}
                </Text>
            </FormControl>
            <FormControl my={6}>
                <FormLabel fontWeight={600} className="btn-text">
                    Email
                </FormLabel>
                <Input
                    type="email"
                    id="email"
                    size="lg"
                    bgColor="grey.200"
                    variant="filled"
                    placeholder="Enter email"
                    _placeholder={{ fontSize: { base: 'xs', lg: 'sm' } }}
                    {...register('email')}
                />
                <Text className="tiny-text" color="red.200">
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
                        bgColor="grey.200"
                        variant="filled"
                        pr="4.5rem"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter password"
                        _placeholder={{ fontSize: { base: 'xs', lg: 'sm' } }}
                        {...register('password')}
                    />
                    <InputRightElement onClick={handlePasswordClick} width="2.5rem">
                        {!showPassword ? <Icon icon="ant-design:eye-twotone" /> : <Icon icon="ant-design:eye-invisible-twotone" />}
                    </InputRightElement>
                </InputGroup>
                <Text className="tiny-text" color="red.200">
                    {errors?.password?.message?.toString().includes('required') ? errors?.password?.message : ''}
                </Text>
                <Flex hidden={!getValues('password')} mt={1} color="grey.400" alignItems="flex-start" gap={2}>
                    <Stack spacing={2} direction="column" py={2}>
                        <Checkbox id="1" isChecked={checkValidation(/^.{8,}$/)} colorScheme="green" size="sm">
                            <Text fontSize="xs">Password should be at least 8 characters long</Text>
                        </Checkbox>
                        <Checkbox id="2" isChecked={checkValidation(/^(?=.*[A-Z])/)} colorScheme="green" size="sm">
                            <Text fontSize="xs">Password should contain at least one uppercase letter</Text>
                        </Checkbox>
                        <Checkbox id="3" isChecked={checkValidation(/^(?=.*\d)/)} colorScheme="green" size="sm">
                            <Text fontSize="xs">Password should contain at least one number</Text>
                        </Checkbox>
                        <Checkbox id="4" isChecked={checkValidation(/^(?=.*[!@#$%^.&*])/)} colorScheme="green" size="sm">
                            <Text fontSize="xs">Password should contain at least one special character (!@#$%^.&*)</Text>
                        </Checkbox>
                    </Stack>
                </Flex>
            </FormControl>
            <FormControl my={6}>
                <FormLabel fontWeight={600} className="btn-text">
                    Confirm Password
                </FormLabel>
                <InputGroup size="lg">
                    <Input
                        id="password_confirmation"
                        bgColor="grey.200"
                        variant="filled"
                        pr="4.5rem"
                        type={showPasswordConfirmation ? 'text' : 'password'}
                        placeholder="Enter password confirmation"
                        _placeholder={{ fontSize: { base: 'xs', lg: 'sm' } }}
                        {...register('password_confirmation')}
                    />
                    <InputRightElement onClick={handlePasswordConfirmationClick} width="2.5rem">
                        {!showPasswordConfirmation ? <Icon icon="ant-design:eye-twotone" /> : <Icon icon="ant-design:eye-invisible-twotone" />}
                    </InputRightElement>
                </InputGroup>
                <Text className="tiny-text" color="red.200">
                    {errors?.password_confirmation?.message}
                </Text>
            </FormControl>
            <Box>
                <Text className="small-text" textAlign="center">
                    You agree to our{' '}
                    <Link color="purple.200" as="span">
                        Terms Of Use
                    </Link>{' '}
                    and{' '}
                    <Link color="purple.200" as="span">
                        Privacy Policy
                    </Link>
                    .
                </Text>
                <Box my={5}>
                    <SharedButton
                        btnExtras={{
                            loadingText: 'Creating Account...',
                            isLoading: signupStatus.isLoading,
                            type: 'submit',
                            disabled: !isValid,
                        }}
                        text="Create Account"
                        width="100%"
                        height="46px"
                        bgColor="purple.200"
                        textColor="white"
                        borderRadius="4px"
                        fontSize={{ base: 'sm', lg: 'md' }}
                    />
                </Box>
                <Center>
                    <Text color="grey.300">--------- Or ---------</Text>
                </Center>
                <Box my={5}>
                    <SharedButton
                        btnExtras={{
                            rightIcon: 'flat-color-icons:google',
                            loadingText: 'Creating Account...',
                            isLoading: googleSiginStatus.isLoading,
                            onClick: onGoogleButtonClick,
                            border: '1px solid #6D5DD3',
                        }}
                        text="Continue with Google"
                        width="100%"
                        height="46px"
                        bgColor="white"
                        textColor="purple.200"
                        borderRadius="4px"
                        fontSize={{ base: 'sm', lg: 'md' }}
                    />
                </Box>
                <Text className="small-text" textAlign="center">
                    Have an account already?{' '}
                    <Link display="inline" to="/auth/login" color="purple.200" as={RouterLink}>
                        Sign in
                    </Link>
                </Text>
            </Box>
        </FormControl>
    );
}
