import {
  ForgotPassowrdForm,
  ResetPassword,
} from '@productize/auth-lib/feature';
import {
  AuthBackground,
  AuthFormTemplateLogin,
  VerifyEmailTemplate,
} from '@productize/auth-lib/ui';
import React from 'react';

const ForgotPassword = () => {
  return (
    <AuthBackground isLogin={true}>
      <AuthFormTemplateLogin
        title="Forgot password"
        subTitle="Enter your email address to reset your password."
      >
        <ForgotPassowrdForm />
      </AuthFormTemplateLogin>

      {/* check email or varify email temlate */}
      <AuthFormTemplateLogin
        title="Check your mail"
        subTitle="We have sent a password recovery instructions to your email."
      >
        <VerifyEmailTemplate />
      </AuthFormTemplateLogin>

      {/* change password or change forgot password */}
      {/* <AuthFormTemplateLogin
        title="Reset Password"
        subTitle="Enter your new password."
      >
        <ResetPassword />
      </AuthFormTemplateLogin> */}
    </AuthBackground>
  );
};

export default ForgotPassword;
