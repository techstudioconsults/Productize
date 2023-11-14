import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Center,
  Link,
  Text,
} from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import { Link as RouterLink } from 'react-router-dom';

interface AuthFormTamplateProps {
  children: ReactNode;
  title?: string;
  subTitle?: string;
}

export const AuthFormTemplateSignup = ({ children }: AuthFormTamplateProps) => {
  return (
      <Card mt={40} py={8} maxW={`547px`} w={`100%`}>
          <CardHeader px={{ lg: 12 }}>
              <Center>
                  <Link as={RouterLink} to={`/`}>
                      <img src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951023/productize/Frame_14220_ogchl8_chcxzu.png`} alt="logo" />
                  </Link>
              </Center>
              <Text as={`h5`} textAlign={`left`} my={5}>
                  Join creators today to sell your product and upskill your community.
              </Text>
          </CardHeader>
          <CardBody px={{ lg: 12 }}>{children}</CardBody>
      </Card>
  );
};

export const AuthFormTemplateLogin = ({
  children,
  title,
  subTitle,
}: AuthFormTamplateProps) => {
  return (
      <Card bgColor={`transparent`} py={8} maxW={`444px`} w={`100%`}>
          <CardHeader p={12}>
              <Center>
                  <Link as={RouterLink} to={`/`}>
                      <img src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951023/productize/Frame_14220_ogchl8_chcxzu.png`} alt="logo" />
                  </Link>
              </Center>
          </CardHeader>
          <CardBody borderRadius={`8px`} bgColor={`white`} px={{ lg: 12 }}>
              <CardHeader color={`grey.600`} px={0}>
                  <Text as={`h4`}>{title}</Text>
                  <Text mt={4}>{subTitle}</Text>
              </CardHeader>
              {children}
          </CardBody>
      </Card>
  );
};
