import * as yup from 'yup';

export const registrationSchema = yup.object().shape({
    full_name: yup.string().required('Full name is required').min(5, 'Full name must be at least 5 characters'),
    email: yup
        .string()
        .required('Email is required')
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email address'),

    password: yup
        .string()
        .required('Password is required')
        .matches(/^.{8,}$/, 'password should be at least 8 characters long')
        .matches(/^(?=.*[A-Z])/, 'Password should contain at least one uppercase letter')
        .matches(/^(?=.*\d)/, 'Password should contain at least one number')
        .matches(/^(?=.*[!@#$%^.&*])/, 'Password should contain at least one special character'),

    password_confirmation: yup
        .string()
        .required('Password confirmation is required')
        .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

export const loginSchema = yup.object().shape({
    email: yup
        .string()
        .required('Email is required')
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email address'),
    password: yup.string().required('Password is required'),
});

export const forgotPasswordSchema = yup.object().shape({
    email: yup
        .string()
        .required('Email is required')
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email address'),
});

export const resetPasswordSchema = yup.object().shape({
    password: yup.string().required('Password is required'),
    password_confirmation: yup
        .string()
        .required('Password confirmation is required')
        .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

export const changePasswordSchema = yup.object().shape({
    password: yup.string().required('Password is required'),
    new_password: yup.string().required('New password is required'),
    new_password_confirmation: yup
        .string()
        .required('Password confirmation is required')
        .oneOf([yup.ref('new_password'), null], 'Passwords must match'),
});

export const helpSchema = yup.object().shape({
    subject: yup.string().required('subject is required'),
    message: yup.string().required('message is required'),
});
