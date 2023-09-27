import { SignupForm } from '@productize/auth-lib/feature';
import {
  AuthBackground,
  AuthFormTemplateSignup,
} from '@productize/auth-lib/ui';
import React from 'react';

const Signup = () => {
  return (
    <AuthBackground isLogin={false}>
      <AuthFormTemplateSignup>
        <SignupForm />
      </AuthFormTemplateSignup>
    </AuthBackground>
  );
};

export default Signup;
