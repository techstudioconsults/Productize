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
import { Link as RouterLink } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { SharedButton } from '@productize/shared/ui';
import { useState } from 'react';

/* eslint-disable-next-line */
export interface LoginFormProps {}

export function LoginForm(props: LoginFormProps) {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <FormControl>
      <FormControl mb={6}>
        <FormLabel fontWeight={600} className="btn-text">
          Email
        </FormLabel>
        <Input
          size={`lg`}
          bgColor={`grey.200`}
          variant={`filled`}
          placeholder="Enter email"
          _placeholder={{ fontSize: { base: `xs`, lg: `sm` } }}
        />
      </FormControl>
      <FormControl my={6}>
        <Flex mb={2} justifyContent={`space-between`} alignItems={`center`}>
          <FormLabel m={0} fontWeight={600} className="btn-text">
            Password
          </FormLabel>
          <Link
            to={`/forgot-password`}
            as={RouterLink}
            color={`purple.200`}
            fontSize={`12px`}
          >
            Forgot Password ?
          </Link>
        </Flex>
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
        <Box my={5}>
          <SharedButton
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
            to={`/`}
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
