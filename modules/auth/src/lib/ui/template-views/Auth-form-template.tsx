import {Card, CardBody, CardHeader, Center, Link, Text} from "@chakra-ui/react";
import React, {ReactNode, useState} from "react";
import {Link as RouterLink} from "react-router-dom";

interface AuthFormTamplateProps {
    children: ReactNode;
    title?: string;
    subTitle?: string;
}

export const AuthFormTemplateSignup = ({children}: AuthFormTamplateProps) => {
    return (
        <Card mt={40} py={8} maxW={`547px`} w={`100%`}>
            <CardHeader px={{lg: 12}}>
                <Center>
                    <Link as={RouterLink} to={`/`}>
                        <img src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951023/productize/Frame_14220_ogchl8_chcxzu.png`}
                             alt="logo"/>
                    </Link>
                </Center>
                <Text as={`h5`} textAlign={`left`} my={5}>
                    Join creators today to sell your product and upskill your community.
                </Text>
            </CardHeader>
            <CardBody px={{lg: 12}}>{children}</CardBody>
        </Card>
    );
};

export const AuthFormTemplateLogin = ({children, title, subTitle}: AuthFormTamplateProps) => {
    return (
        <Card bgColor={`transparent`} py={8} maxW={`444px`} w={`100%`}>
            <CardHeader p={12}>
                <Center>
                    <Link as={RouterLink} to={`/`}>
                        <img src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951023/productize/Frame_14220_ogchl8_chcxzu.png`}
                             alt="logo"/>
                    </Link>
                </Center>
            </CardHeader>
            <CardBody borderRadius={`8px`} bgColor={`white`} px={{lg: 12}}>
                <CardHeader color={`grey.600`} px={0}>
                    <Text as={`h4`}>{title}</Text>
                    <Text mt={4}>{subTitle}</Text>
                </CardHeader>
                {children}
            </CardBody>
        </Card>
    );
};

// import {InputGroup, Input, InputRightElement, Icon} from '@chakra-ui/react';
// import {useController} from 'react-hook-form';
//
// export function PasswordInput({control}) {
//     const {
//         field: {ref, ...inputProps},
//         fieldState: {invalid, error},
//     } = useController({
//         name: 'password',
//         control,
//         defaultValue: '',
//         rules: {
//             required: 'Password is required',
//             minLength: {
//                 value: 8,
//                 message: 'Password should be at least 8 characters long',
//             },
//             pattern: {
//                 value: /^(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/,
//                 message: 'Password should contain one uppercase letter and one special character',
//             },
//         },
//     });
//
//     const [showPassword, setShowPassword] = React.useState(false);
//
//     const handlePasswordClick = () => {
//         setShowPassword(!showPassword);
//     };
//
//     return (
//         <InputGroup size="lg">
//             <Input
//                 ref={ref}
//                 id="password"
//                 bgColor={`grey.200`}
//                 variant={`filled`}
//                 pr="4.5rem"
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Enter password"
//                 _placeholder={{fontSize: {base: `xs`, lg: `sm`}}}
//                 isInvalid={invalid}
//                 {...inputProps}
//             />
//             <InputRightElement onClick={handlePasswordClick} width="2.5rem">
//                 {!showPassword ? <Icon icon={`ant-design:eye-twotone`}/> : <Icon icon={`ant-design:eye-invisible-twotone`}/>}
//             </InputRightElement>
//             {invalid && (
//                 <span style={{color: 'red', fontSize: '12px'}}>{error.message}</span>
//             )}
//         </InputGroup>
//     );
// }





