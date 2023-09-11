import { ForgotPassowrdForm } from '@productize/auth-lib/feature';
import { AuthBackground, AuthFormTemplateLogin } from '@productize/auth-lib/ui';
import React from 'react';

const ForgotPassword = () => {
  return (
    <AuthBackground isLogin={true}>
      <AuthFormTemplateLogin
        title="Forgot password"
        subTitle="Enter your email address to rest your password."
      >
        <ForgotPassowrdForm />
      </AuthFormTemplateLogin>
    </AuthBackground>
  );
};

export default ForgotPassword;
