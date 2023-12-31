import * as yup from "yup";

export const registrationSchema = yup.object().shape({
    full_name: yup.string().min(5, "Full name must be at least 5 characters").required("Full name is required"),
    email: yup
        .string()
        .required("Email is required")
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email address"),
    password: yup.string().required("Password is required"),
    password_confirmation: yup
        .string()
        .required("Password confirmation is required")
        .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export const loginSchema = yup.object().shape({
    email: yup
        .string()
        .required("Email is required")
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email address"),
    password: yup.string().required("Password is required"),
});

export const forgotPasswordSchema = yup.object().shape({
    email: yup
        .string()
        .required("Email is required")
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email address"),
});

export const resetPasswordSchema = yup.object().shape({
    password: yup.string().required("Password is required"),
    password_confirmation: yup
        .string()
        .required("Password confirmation is required")
        .oneOf([yup.ref("password"), null], "Passwords must match"),
});
