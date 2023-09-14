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
import { Link as RouterLink } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { SharedButton } from '@productize/shared/ui';
import { useState } from 'react';

/* eslint-disable-next-line */
export interface SignupFormProps {}

export function SignupForm(props: SignupFormProps) {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <FormControl>
      <FormControl mb={6}>
        <FormLabel fontWeight={600} className="btn-text">
          First Name
        </FormLabel>
        <Input
          size={`lg`}
          bgColor={`grey.200`}
          variant={`filled`}
          placeholder="Enter full name"
          _placeholder={{ fontSize: { base: `xs`, lg: `sm` } }}
        />
      </FormControl>
      <FormControl my={6}>
        <FormLabel fontWeight={600} className="btn-text">
          Email
        </FormLabel>
        <Input
          type="email"
          size={`lg`}
          bgColor={`grey.200`}
          variant={`filled`}
          placeholder="Enter email"
          _placeholder={{ fontSize: { base: `xs`, lg: `sm` } }}
        />
      </FormControl>
      <FormControl my={6}>
        <FormLabel fontWeight={600} className="btn-text">
          Password
        </FormLabel>
        <InputGroup size="lg">
          <Input
            bgColor={`grey.200`}
            variant={`filled`}
            pr="4.5rem"
            type={show ? 'text' : 'password'}
            placeholder="Enter password"
            _placeholder={{ fontSize: { base: `xs`, lg: `sm` } }}
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
            bgColor={`grey.200`}
            variant={`filled`}
            pr="4.5rem"
            type={show ? 'text' : 'password'}
            placeholder="Enter password"
            _placeholder={{ fontSize: { base: `xs`, lg: `sm` } }}
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
        <Box my={5}>
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
