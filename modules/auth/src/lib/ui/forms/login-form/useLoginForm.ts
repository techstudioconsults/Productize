/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useGoogleAuthMutation, useLoginMutation } from '@productize/redux';
import { LoginFormData, UseLoginFormReturn } from './login-form.types';
import { loginSchema } from '../form-validation-schema/auth-schema';

export function useLoginForm(): UseLoginFormReturn {
    const [show, setShow] = useState(false);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isGoogleLoading, setIsGoogleLoading] = useState(false);
    const navigate = useNavigate();

    const [login] = useLoginMutation();
    const [googleAuth] = useGoogleAuthMutation();

    const handleClick = () => setShow(!show);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>({
        criteriaMode: 'all',
        mode: 'onChange',
        resolver: yupResolver(loginSchema),
    });

    const onSubmit = async (data: LoginFormData) => {
        setIsLoading(true);
        try {
            const res = await login(data).unwrap();
            if (res.token) {
                if (data.email === 'tobi.olanitori.binaryartinc@gmail.com' && data.password === '12345') {
                    navigate('/Admin/home');
                } else {
                    navigate('/dashboard/home');
                }
            }
        } catch (error: any) {
            setError(error.data.message);
        } finally {
            setIsLoading(false);
        }
    };

    const onGoogleButtonClick = async () => {
        setIsGoogleLoading(true);
        try {
            const res = await googleAuth(null).unwrap();
            console.log(res);
        } catch (error: any) {
            setError(error.data.message);
        } finally {
            setIsGoogleLoading(false);
        }
    };

    return {
        show,
        handleClick,
        error,
        setError,
        register,
        handleSubmit,
        onSubmit,
        errors,
        onGoogleButtonClick,
        isLoading,
        isGoogleLoading,
    };
}
