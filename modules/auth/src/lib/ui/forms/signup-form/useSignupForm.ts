import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { registrationSchema } from '@productize/auth';
import { useSignupMutation, useGoogleAuthMutation } from '@productize/redux';
import { SignupFormInputs } from './signupForm.types';

export const useSignupForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [signup, signupStatus] = useSignupMutation();
    const [googleAuth, googleSiginStatus] = useGoogleAuthMutation();

    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors, isValid },
    } = useForm<SignupFormInputs>({
        criteriaMode: 'all',
        mode: 'onChange',
        resolver: yupResolver(registrationSchema),
    });

    const onSubmit: SubmitHandler<SignupFormInputs> = async (data) => {
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

    return {
        register,
        handleSubmit: handleSubmit(onSubmit),
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
    };
};
