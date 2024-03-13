import { Card, CardBody, CardHeader, Center, Link, Text} from "@chakra-ui/react";
import React, {ReactNode} from "react";
import {Link as RouterLink} from "react-router-dom";

interface AuthFormTamplateProps {
    children: ReactNode;
    title?: string;
    subTitle?: string;
}

export const AuthFormTemplateSignup = ({children}: AuthFormTamplateProps) => {
    return (
        <Card p={{base: 5, sm: 8}} maxW={`548px`} w={`100%`} h={`fit-content`}>
            <CardHeader>
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
            <CardBody borderRadius={`8px`} bgColor={`white`}>{children}</CardBody>
        </Card>
    );
};

export const AuthFormTemplateLogin = ({children, title, subTitle}: AuthFormTamplateProps) => {
    return (
        <Card bgColor={{base: `white`, sm: `transparent`}} maxW={{base: `100%`, sm: `444px`}} py={{sm: `5rem`}}
              h={{base: `100vh`, sm: `fit-content`}}>
            <CardHeader>
                <Center>
                    <Link as={RouterLink} to={`/`}>
                        <img src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951023/productize/Frame_14220_ogchl8_chcxzu.png`}
                             alt="logo"/>
                    </Link>
                </Center>
            </CardHeader>
            <CardBody borderRadius={`8px`} bgColor={`white`} p={{base: 8, sm: 12}}>
                <CardHeader color={`grey.600`} p={0} mb={5}>
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





