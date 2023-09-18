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

export function LoginForm() {
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [authResponse, setAuthResponse] = useState<unknown>();
  const handleClick = () => setShow(!show);
  const navigate = useNavigate();

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
        console.log(response.data);
        navigate(`/explore`);
        setAuthResponse(response.data);
      }
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  };

  return (
    <FormControl as={`form`} onSubmit={handleSubmit(onSubmit)}>
      <FormControl mb={6}>
        <FormLabel fontWeight={600} className="btn-text">
          Email
        </FormLabel>
        <Input
          type="email"
          id="email"
          size={`lg`}
          bgColor={`grey.200`}
          variant={`filled`}
          placeholder="Enter email"
          _placeholder={{ fontSize: { base: `xs`, lg: `sm` } }}
          {...register('email', validation)}
        />
      </FormControl>
      <FormControl my={6}>
        <Flex mb={2} justifyContent={`space-between`} alignItems={`center`}>
          <FormLabel m={0} fontWeight={600} className="btn-text">
            Password
          </FormLabel>
          <Link
            to={`/auth/forgot-password`}
            as={RouterLink}
            color={`purple.200`}
            fontSize={`12px`}
          >
            Forgot Password ?
          </Link>
        </Flex>
        <InputGroup size="lg">
          <Input
            id="password"
            bgColor={`grey.200`}
            variant={`filled`}
            pr="4.5rem"
            type={show ? 'text' : 'password'}
            placeholder="Enter password"
            _placeholder={{ fontSize: { base: `xs`, lg: `sm` } }}
            {...register('password', validation)}
          />
          <InputRightElement onClick={handleClick} width="2.5rem">
            {!show ? (
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
            loadingText="Logging in..."
            isLoading={isLoading}
            type={`submit`}
            text={'Sign In'}
            width={`100%`}
            height={'48px'}
            bgColor={'purple.200'}
            textColor={'white'}
            borderRadius={'4px'}
            fontSize={{ base: `sm`, lg: `md` }}
          />
        </Box>
        <Center>
          <Text color={`grey.300`}>--------- Or ---------</Text>
        </Center>
        <Box my={5}>
          <SharedButton
            border={`1px solid #6D5DD3`}
            text={'Continue with Google'}
            width={`100%`}
            height={'48px'}
            bgColor={'white'}
            textColor={'purple.200'}
            borderRadius={'4px'}
            fontSize={{ base: `sm`, lg: `md` }}
          />
        </Box>
        <Text
          mb={4}
          color={`grey.400`}
          className="small-text"
          textAlign={`center`}
        >
          Don’t have an account ?{' '}
          <Link
            display={`inline`}
            to={`/auth/signup`}
            as={RouterLink}
            color={`purple.200`}
          >
            Create Account
          </Link>
        </Text>
      </Box>
    </FormControl>
  );
}
