import { FieldErrors, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';

export interface LoginFormData {
    email: string;
    password: string;
}

export interface UseLoginFormReturn {
    show: boolean;
    handleClick: () => void;
    error: string;
    setError: React.Dispatch<React.SetStateAction<string>>;
    register: UseFormRegister<LoginFormData>;
    handleSubmit: UseFormHandleSubmit<LoginFormData>;
    onSubmit: (data: LoginFormData) => Promise<void>;
    errors: FieldErrors<LoginFormData>;
    isLoading: boolean;
    isGoogleLoading: boolean;
    onGoogleButtonClick: () => Promise<void>;
}
