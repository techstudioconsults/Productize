import { Box, Center, Flex, FormControl, FormLabel, Input, InputGroup, InputRightElement, Link, Text } from '@chakra-ui/react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from './form-validation-schema/auth-schema';
import { useGoogleAuthMutation, useLoginMutation } from '@productize/redux';
import { ErrorText, SharedButton } from '@productize/ui';

export function LoginForm() {
    const [show, setShow] = useState(false);
    const [error, setError] = useState('');
    const handleClick = () => setShow(!show);
    const navigate = useNavigate();

    // mutations
    const [login, loginStatus] = useLoginMutation();
    const [googleAuth, googleLoginStatus] = useGoogleAuthMutation();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        criteriaMode: 'all',
        mode: 'onChange',
        resolver: yupResolver(loginSchema),
    });

    const onSubmit = async (data: unknown) => {
        try {
            const res = await login(data).unwrap();
            if (res.token) {
                navigate(`/dashboard/home`);
            }
        } catch (error: any) {
            setError(error.data.message);
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
            {(loginStatus.isError || googleLoginStatus.isError) && <ErrorText error={error} />}
            <FormControl data-test={`email-input`} mb={6}>
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
                    {...register('email')}
                />
                <Text className={`tiny-text`} color={`red.200`}>
                    {errors?.email?.message}
                </Text>
            </FormControl>
            <FormControl data-test={`password-input`} my={6}>
                <Flex mb={2} justifyContent={`space-between`} alignItems={`center`}>
                    <FormLabel m={0} fontWeight={600} className="btn-text">
                        Password
                    </FormLabel>
                    <Link to={`/auth/forgot-password`} as={RouterLink} color={`purple.200`} fontSize={`12px`}>
                        Forgot Password ?
                    </Link>
                </Flex>
                <InputGroup size="lg">
                    <Input
                        id="password"
                        bgColor={`grey.200`}
                        variant={`filled`}
                        pr="4.5rem"
                        type={show ? 'text' : 'password'}
                        placeholder="Enter password"
                        _placeholder={{ fontSize: { base: `xs`, lg: `sm` } }}
                        {...register('password')}
                    />
                    <InputRightElement onClick={handleClick} width="2.5rem">
                        {!show ? <Icon icon={`ant-design:eye-twotone`} /> : <Icon icon={`ant-design:eye-invisible-twotone`} />}
                    </InputRightElement>
                </InputGroup>
                <Text className={`tiny-text`} color={`red.200`}>
                    {errors?.password?.message}
                </Text>
            </FormControl>
            <Box>
                <Box my={5}>
                    <SharedButton
                        TEST_ID={`login-btn`}
                        btnExtras={{
                            loadingText: 'Logging in...',
                            isLoading: loginStatus.isLoading,
                            type: `submit`,
                        }}
                        text={'Sign In'}
                        width={`100%`}
                        height={'48px'}
                        bgColor={'purple.200'}
                        textColor={'white'}
                        borderRadius={'4px'}
                        fontSize={{ base: `sm`, lg: `md` }}
                    />
                </Box>
                <Center>
                    <Text color={`grey.300`}>--------- Or ---------</Text>
                </Center>
                <Box my={5}>
                    <SharedButton
                        btnExtras={{
                            loadingText: 'Logging in...',
                            isLoading: googleLoginStatus.isLoading,
                            onClick: onGoogleButtonClick,
                            rightIcon: `flat-color-icons:google`,
                            border: `1px solid #6D5DD3`,
                        }}
                        text={'Continue with Google'}
                        width={`100%`}
                        height={'48px'}
                        bgColor={'transparent'}
                        textColor={'purple.200'}
                        borderRadius={'4px'}
                        fontSize={{ base: `sm`, lg: `md` }}
                    />
                </Box>
                <Text mb={4} color={`grey.400`} className="small-text" textAlign={`center`}>
                    Don’t have an account ?{' '}
                    <Link display={`inline`} to={`/auth`} as={RouterLink} color={`purple.200`}>
                        Create Account
                    </Link>
                </Text>
            </Box>
        </FormControl>
    );
}
