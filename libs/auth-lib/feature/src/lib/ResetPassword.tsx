import {
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  useToast,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { ErrorText, SharedButton } from '@productize/shared/ui';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useResetPasswordMutation } from '@productize/shared/redux';

/* eslint-disable-next-line */
// export interface LoginFormProps {}

const validation = {
  required: 'This input is required.',
  minLength: {
    value: 4,
    message: 'This input must exceed 3 characters',
  },
};

interface RPProps {
  email: string;
  token: string;
}

export function ResetPassword({ email, token }: RPProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [showPasswordConfirmation, setShowPasswordConfirmation] =
    useState(false);
  const handlePasswordClick = () => setShowPassword(!showPassword);
  const handlePasswordConfirmationClick = () =>
    setShowPasswordConfirmation(!showPasswordConfirmation);
  const navigate = useNavigate();
  const toast = useToast();

  // mutation
  const [resetPassword, resetPasswordStatus] = useResetPasswordMutation();

  const { register, handleSubmit } = useForm({
    criteriaMode: 'all',
  });

  const onSubmit = async (data: object) => {
    console.log(data);
    const formData = {
      token,
      email,
      ...data,
    };
    try {
      const res = await resetPassword(formData).unwrap();
      console.log(res);
      if (res.message) {
        toast({
          title: 'Successful',
          description: res.message,
          status: 'success',
          duration: 9000,
          isClosable: true,
          position: 'top',
          variant: 'top-accent',
        });
        navigate(`/auth/login`);
      }
    } catch (error: any) {
      setError(error.data.message);
    }
  };

  return (
    <FormControl as={`form`} onSubmit={handleSubmit(onSubmit)}>
      {resetPasswordStatus.isError && <ErrorText error={error} />}
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
            btnExtras={{
              loadingText: 'Changing Password...',
              isLoading: resetPasswordStatus.isLoading,
              type: `submit`,
            }}
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
