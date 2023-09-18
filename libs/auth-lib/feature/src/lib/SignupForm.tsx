import {
  Box,
  Center,
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
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

/* eslint-disable-next-line */
export interface SignupFormProps {}

const validation = {
  required: 'This input is required.',
  minLength: {
    value: 4,
    message: 'This input must exceed 3 characters',
  },
};

export function SignupForm(props: SignupFormProps) {
  const [show, setShow] = useState(false);
  const [authResponse, setAuthResponse] = useState<unknown>();
  const handleClick = () => setShow(!show);
  const navigate = useNavigate();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    criteriaMode: 'all',
  });

  const onSubmit = async (data: unknown) => {
    console.log(data);
    // Make first two requests
    const [response] = await Promise.all([
      axios.post(
        `https://productize-api.techstudio.academy/api/auth/register`,
        data
      ),
    ]);
    if (response.status === 200) {
      console.log(response.data);
      // navigate(`/explore`);
      // setAuthResponse(response.data);
    }
  };

  return (
    <FormControl as={`form`} onSubmit={handleSubmit(onSubmit)}>
      <FormControl mb={6}>
        <FormLabel fontWeight={600} className="btn-text">
          First Name
        </FormLabel>
        <Input
          size={`lg`}
          bgColor={`grey.200`}
          variant={`filled`}
          id="fullName"
          placeholder="Enter full name"
          _placeholder={{ fontSize: { base: `xs`, lg: `sm` } }}
          {...register('full_name', validation)}
        />
      </FormControl>
      <FormControl my={6}>
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
        <FormLabel fontWeight={600} className="btn-text">
          Password
        </FormLabel>
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
      <FormControl my={6}>
        <FormLabel fontWeight={600} className="btn-text">
          Confirm Password
        </FormLabel>
        <InputGroup size="lg">
          <Input
            id="password_confirmation"
            bgColor={`grey.200`}
            variant={`filled`}
            pr="4.5rem"
            type={show ? 'text' : 'password'}
            placeholder="Enter password"
            _placeholder={{ fontSize: { base: `xs`, lg: `sm` } }}
            {...register('password_confirmation', validation)}
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
        <Text className="small-text" textAlign={`center`}>
          You agree to our{' '}
          <Link color={`purple.200`} as={`span`}>
            Terms Of Use
          </Link>{' '}
          and{' '}
          <Link color={`purple.200`} as={`span`}>
            Privacy Policy
          </Link>
          .
        </Text>
        <Box as={`button`} type="submit" w={`100%`} my={5}>
          <SharedButton
            text={'Create Account'}
            width={`100%`}
            height={'46px'}
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
            height={'46px'}
            bgColor={'white'}
            textColor={'purple.200'}
            borderRadius={'4px'}
            fontSize={{ base: `sm`, lg: `md` }}
          />
        </Box>
        <Text className="small-text" textAlign={`center`}>
          Have an account already ?{' '}
          <Link
            display={`inline`}
            to={`/auth/login`}
            color={`purple.200`}
            as={RouterLink}
          >
            Sign in
          </Link>
        </Text>
      </Box>
    </FormControl>
  );
}
