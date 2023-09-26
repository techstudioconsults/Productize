import {
  ForgotPassowrdForm,
  ResetPassword,
} from '@productize/auth-lib/feature';
import {
  AuthBackground,
  AuthFormTemplateLogin,
} from '@productize/auth-lib/ui';
import { selectEmailConfirmation } from '@productize/shared/redux';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const ForgotPassword = () => {
  const emailConfirmation = useSelector(selectEmailConfirmation);
  const [FPToken, setFPToken] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  // MAKE THIS A HOOK (USE IN PERLOADER AND HERE!)
  useEffect(() => {
    // Get the URL from the browser's address bar
    const url = window.location.href;
    // Use the URLSearchParams API to parse the query string
    const queryParams = new URLSearchParams(new URL(url).search);
    // Get the value of the 'code' parameter
    const token = queryParams.get('token');
    const email = queryParams.get('email');
    // Check if 'code' parameter exists and has a value
    if (token && email) {
      setEmail(email);
      setFPToken(token);
    } else {
      console.log('Code parameter not found in the URL.');
    }
  }, []);

  return (
    <AuthBackground isLogin={true}>
      {!emailConfirmation.emailSent && !FPToken && (
        <AuthFormTemplateLogin
          title="Forgot password"
          subTitle="Enter your email address to reset your password."
        >
          <ForgotPassowrdForm />
        </AuthFormTemplateLogin>
      )}

      {/* check email or varify email temlate
      {emailConfirmation.emailSent && !FPToken && (
        <AuthFormTemplateLogin
          title="Check your mail"
          subTitle="We have sent a password recovery instructions to your email."
        >
          <VerifyEmailTemplate />
        </AuthFormTemplateLogin>
      )} */}

      {/* change password or change forgot password */}
      {emailConfirmation.emailSent && (
        <AuthFormTemplateLogin
          title="Reset Password"
          subTitle="Enter your new password."
        >
          <ResetPassword email={email} token={FPToken} />
        </AuthFormTemplateLogin>
      )}
    </AuthBackground>
  );
};

export default ForgotPassword;
