import {
  Box,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Text,
  useToast,
} from '@chakra-ui/react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { SharedButton } from '@productize/shared/ui';
import { useEffect, useState } from 'react';
// import { ErrorMessage } from '@hookform/error-message';
import { useForm } from 'react-hook-form';
import axios from 'axios';

/* eslint-disable-next-line */
// export interface LoginFormProps {}

const validation = {
  required: 'This input is required.',
  minLength: {
    value: 4,
    message: 'This input must exceed 3 characters',
  },
};

export function ResetPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] =
    useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [authResponse, setAuthResponse] = useState<unknown>();
  const handlePasswordClick = () => setShowPassword(!showPassword);
  const handlePasswordConfirmationClick = () =>
    setShowPasswordConfirmation(!showPasswordConfirmation);
  const navigate = useNavigate();
  const toast = useToast();

  const {
    register,
    // reset,
    handleSubmit,
    // formState: { errors, isSubmitSuccessful },
  } = useForm({
    criteriaMode: 'all',
  });

  const onSubmit = async (data: unknown) => {
    try {
      setIsLoading(true);
      // Make multiple requests
      const [response] = await Promise.all([
        // axios.get(
        //   `https://productize-api.techstudio.academy/api/sanctum/csrf-cookie`
        // ),
        axios.post(
          `https://productize-api.techstudio.academy/api/auth/login`,
          data
        ),
      ]);
      if (response.status === 200) {
        setIsLoading(false);
        localStorage.setItem('token', response.data.token);
        console.log(response.data);
        navigate(`/explore`);
        setAuthResponse(response.data);
      }
    } catch (err: any) {
      setIsLoading(false);
      console.log(err.response.data.message);
      toast({
        title: 'Something went wrong',
        description: err.response.data.message,
        status: 'error',
        duration: 9000,
        isClosable: true,
        position: 'top',
        variant: 'top-accent',
      });
    }
  };

  return (
    <FormControl as={`form`} onSubmit={handleSubmit(onSubmit)}>
      <FormControl my={6}>
        <FormLabel fontWeight={600} className="btn-text">
          New Password
        </FormLabel>
        <InputGroup size="lg">
          <Input
            id="password"
            bgColor={`grey.200`}
            variant={`filled`}
            pr="4.5rem"
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter password"
            _placeholder={{ fontSize: { base: `xs`, lg: `sm` } }}
            {...register('password', validation)}
          />
          <InputRightElement onClick={handlePasswordClick} width="2.5rem">
            {!showPassword ? (
              <Icon icon={`ant-design:eye-twotone`} />
            ) : (
              <Icon icon={`ant-design:eye-invisible-twotone`} />
            )}
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl my={6}>
        <FormLabel fontWeight={600} className="btn-text">
          Confirm New Password
        </FormLabel>
        <InputGroup size="lg">
          <Input
            id="password_confirmation"
            bgColor={`grey.200`}
            variant={`filled`}
            pr="4.5rem"
            type={showPasswordConfirmation ? 'text' : 'password'}
            placeholder="Enter password confirmation"
            _placeholder={{ fontSize: { base: `xs`, lg: `sm` } }}
            {...register('password_confirmation', validation)}
          />
          <InputRightElement
            onClick={handlePasswordConfirmationClick}
            width="2.5rem"
          >
            {!showPasswordConfirmation ? (
              <Icon icon={`ant-design:eye-twotone`} />
            ) : (
              <Icon icon={`ant-design:eye-invisible-twotone`} />
            )}
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Box>
        <Box my={5}>
          <SharedButton
            loadingText="Changing Password"
            isLoading={isLoading}
            type={`submit`}
            text={'Reset password'}
            width={`100%`}
            height={'48px'}
            bgColor={'purple.200'}
            textColor={'white'}
            borderRadius={'4px'}
            fontSize={{ base: `sm`, lg: `md` }}
          />
        </Box>
      </Box>
    </FormControl>
  );
}
