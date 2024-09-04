import { Card, CardBody, CardHeader, Center, Link, Text } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import { Link as RouterLink } from 'react-router-dom';

interface AuthFormTemplateProps {
    children: ReactNode;
    title?: string;
    subTitle?: string;
}

export const AuthFormTemplateSignup = ({ children }: AuthFormTemplateProps) => {
    return (
        <Card p={{ base: 5, sm: 8 }} maxW="548px" w="100%" h="fit-content">
            <CardHeader>
                <Center>
                    <Link as={RouterLink} to="/">
                        <img src="https://res.cloudinary.com/doejcrfso/image/upload/v1725356813/productize/ByteAAlley-Logo_ue2hqr.svg" alt="logo" />
                    </Link>
                </Center>
                <Text as="h5" textAlign="left" my={5}>
                    Discover a world of creativity and innovation on ByteAlley.
                </Text>
            </CardHeader>
            <CardBody borderRadius="8px" bgColor="white">
                {children}
            </CardBody>
        </Card>
    );
};

export const AuthFormTemplateLogin = ({ children, title, subTitle }: AuthFormTemplateProps) => {
    return (
        <Card bgColor={{ base: 'white', sm: 'transparent' }} maxW={{ base: '100%', sm: '444px' }} py={{ sm: '5rem' }} h={{ base: '100vh', sm: 'fit-content' }}>
            <CardHeader>
                <Center>
                    <Link as={RouterLink} to="/">
                        <img src="https://res.cloudinary.com/doejcrfso/image/upload/v1725356813/productize/ByteAAlley-Logo_ue2hqr.svg" alt="logo" />
                    </Link>
                </Center>
            </CardHeader>
            <CardBody borderRadius="8px" bgColor="white" p={{ base: 8, sm: 12 }}>
                <CardHeader color="grey.600" p={0} mb={5}>
                    <Text as="h4">{title}</Text>
                    <Text mt={4}>{subTitle}</Text>
                </CardHeader>
                {children}
            </CardBody>
        </Card>
    );
};
