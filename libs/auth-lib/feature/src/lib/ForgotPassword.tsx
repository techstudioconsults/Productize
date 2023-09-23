import {
  Box,
  Center,
  FormControl,
  FormLabel,
  Input,
  Link,
  useToast,
} from '@chakra-ui/react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { SharedButton } from '@productize/shared/ui';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const validation = {
  required: 'This input is required.',
  minLength: {
    value: 4,
    message: 'This input must exceed 3 characters',
  },
};

/* eslint-disable-next-line */
export interface ForgotPassowrdProps {}

export function ForgotPassowrdForm(props: ForgotPassowrdProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [authResponse, setAuthResponse] = useState<unknown>();
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
        axios.post(
          `https://productize-api.techstudio.academy/api/auth/forgot-password`,
          data
        ),
      ]);
      if (response.status === 200) {
        setIsLoading(false);
        console.log(response.data);
        toast({
          // title: '',
          description: response.data.message,
          status: 'success',
          duration: 9000,
          isClosable: true,
          position: 'top',
          variant: 'top-accent',
        });
        // navigate(`/auth/change-password`);
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
      <FormControl mb={5}>
        <FormLabel fontWeight={600} className="btn-text">
          Email
        </FormLabel>
        <Input
          type="email"
          bgColor={`grey.200`}
          variant={`filled`}
          placeholder="Enter email"
          _placeholder={{ fontSize: { base: `xs`, lg: `sm` } }}
          {...register('email', validation)}
        />
      </FormControl>

      <Box>
        <Box my={5}>
          <SharedButton
            type={`submit`}
            text={'Reset Password'}
            width={`100%`}
            height={'48px'}
            bgColor={'purple.200'}
            textColor={'white'}
            borderRadius={'4px'}
            fontSize={{ base: `sm`, lg: `md` }}
            loadingText="Loading..."
            isLoading={isLoading}
          />
        </Box>

        <Center my={5}>
          <Link as={RouterLink} w={`100%`} to={`/auth/login`}>
            <SharedButton
              leftIcon={`solar:arrow-left-line-duotone`}
              text={'Back to Sign In'}
              width={`100%`}
              height={'48px'}
              bgColor={'white'}
              textColor={'purple.200'}
              borderRadius={'4px'}
              fontSize={{ base: `sm` }}
            />
          </Link>
        </Center>
      </Box>
    </FormControl>
  );
}
