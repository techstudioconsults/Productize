// src/components/ForgotPassword.tsx
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { AuthBackground } from '../../template-views/Auth-background';
import { AuthFormTemplateLogin } from '../../template-views/Auth-form-template';
import { ResetPassword } from '../../forms/forgotPassword/ResetPassword';
import { VerifyEmailTemplate } from '../../template-views/VerifyEmailTemplate';
import { selectEmailConfirmation } from '@productize/redux';
import { ForgotPasswordForm } from '../../forms/forgotPassword/ForgotPasswordForm';
import useQueryParams from './useQueryParams';

export const ForgotPassword = () => {
    const emailConfirmation = useSelector(selectEmailConfirmation);
    const { token, email } = useQueryParams();
    const [FPToken, setFPToken] = useState<string>('');
    const [emailState, setEmailState] = useState<string>('');

    useEffect(() => {
        if (token && email) {
            setEmailState(email);
            setFPToken(token);
        } else {
            console.log('Token or email parameter not found in the URL.');
        }
    }, [token, email]);

    return (
        <AuthBackground isLogin={true}>
            {!emailConfirmation.emailSent && !FPToken && (
                <AuthFormTemplateLogin title="Forgot password" subTitle="Enter your email address to reset your password.">
                    <ForgotPasswordForm />
                </AuthFormTemplateLogin>
            )}
            {emailConfirmation.emailSent && !FPToken && (
                <AuthFormTemplateLogin title="Check your mail" subTitle="We have sent password recovery instructions to your email.">
                    <VerifyEmailTemplate />
                </AuthFormTemplateLogin>
            )}
            {emailConfirmation.emailSent && FPToken && (
                <AuthFormTemplateLogin title="Reset Password" subTitle="Enter your new password.">
                    <ResetPassword email={emailState} token={FPToken} />
                </AuthFormTemplateLogin>
            )}
        </AuthBackground>
    );
};
