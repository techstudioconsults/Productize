import {
  Box,
  Center,
  FormControl,
  FormLabel,
  Input,
  Link,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { SharedButton } from '@productize/shared/ui';

/* eslint-disable-next-line */
export interface ForgotPassowrdProps {}

export function ForgotPassowrdForm(props: ForgotPassowrdProps) {
  return (
    <FormControl>
      <FormControl mb={5}>
        <FormLabel fontWeight={600} className="btn-text">
          Email
        </FormLabel>
        <Input
          bgColor={`grey.200`}
          variant={`filled`}
          placeholder="Enter email"
          _placeholder={{ fontSize: { base: `xs`, lg: `sm` } }}
        />
      </FormControl>

      <Box>
        <Box my={5}>
          <SharedButton
            text={'Reset Password'}
            width={`100%`}
            height={'48px'}
            bgColor={'purple.200'}
            textColor={'white'}
            borderRadius={'4px'}
            fontSize={{ base: `sm`, lg: `md` }}
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
