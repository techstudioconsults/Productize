import {FieldErrors} from 'react-hook-form';

export interface SignupFormInputs {
    full_name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

export interface SignupFormProps {
    onSubmit: (data: SignupFormInputs) => void;
    onGoogleButtonClick: () => void;
    errors: FieldErrors<SignupFormInputs>;
    getValues: (field: keyof SignupFormInputs) => string;
    isValid: boolean;
    signupStatus: {
        isLoading: boolean;
        isError: boolean;
    };
    googleSiginStatus: {
        isLoading: boolean;
        isError: boolean;
    };
    error: string;
}
