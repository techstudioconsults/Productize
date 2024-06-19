/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { Box, FormControl, FormLabel, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useForm } from 'react-hook-form';
import { useResetPasswordMutation } from '@productize/redux';
import { useToastAction, ToastFeedback, ErrorText, SharedButton } from '@productize/ui';
import { resetPasswordSchema } from '../form-validation-schema/auth-schema';
import { yupResolver } from '@hookform/resolvers/yup';

interface ResetPasswordProps {
    email: string;
    token: string;
}

interface FormData {
    password: string;
    password_confirmation: string;
}

export function ResetPassword({ email, token }: ResetPasswordProps) {
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);
    const [error, setError] = useState<string>('');
    const navigate = useNavigate();
    const { toast, toastIdRef, close } = useToastAction();
    const [resetPassword, resetPasswordStatus] = useResetPasswordMutation();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        criteriaMode: 'all',
        mode: 'onChange',
        resolver: yupResolver(resetPasswordSchema),
    });

    const handlePasswordClick = () => setShowPassword(!showPassword);
    const handlePasswordConfirmationClick = () => setShowPasswordConfirmation(!showPasswordConfirmation);

    const onSubmit = async (data: FormData) => {
        const formData = {
            token,
            email,
            ...data,
        };
        try {
            const res = await resetPassword(formData).unwrap();
            toastIdRef.current = toast({
                position: 'top',
                render: () => <ToastFeedback btnColor={`purple.200`} message={res.message} title="" handleClose={close} />,
            });
            navigate(`/auth/login`);
        } catch (error: any) {
            setError(error.data.message);
        }
    };

    return (
        <FormControl as="form" onSubmit={handleSubmit(onSubmit)}>
            {error && <ErrorText error={error} />}
            <FormControl my={6}>
                <FormLabel fontWeight={600} className="btn-text">
                    New Password
                </FormLabel>
                <InputGroup size="lg">
                    <Input
                        id="password"
                        bgColor={`gray.200`}
                        variant={`filled`}
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
                    {errors.password?.message}
                </Text>
            </FormControl>
            <FormControl my={6}>
                <FormLabel fontWeight={600} className="btn-text">
                    Confirm New Password
                </FormLabel>
                <InputGroup size="lg">
                    <Input
                        id="password_confirmation"
                        bgColor={`gray.200`}
                        variant={`filled`}
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
                    {errors.password_confirmation?.message}
                </Text>
            </FormControl>
            <Box my={5}>
                <SharedButton
                    btnExtras={{
                        loadingText: 'Changing Password...',
                        isLoading: resetPasswordStatus.isLoading,
                        type: 'submit',
                    }}
                    text="Reset Password"
                    width="100%"
                    height="48px"
                    bgColor="purple.200"
                    textColor="white"
                    borderRadius="4px"
                    fontSize={{ base: 'sm', lg: 'md' }}
                />
            </Box>
        </FormControl>
    );
}
