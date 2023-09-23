import {
  Box,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Link,
  LinkBox,
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

export function VerifyEmailTemplate() {
  return (
    <Box>
      <SharedButton
        text={'Open email'}
        width={'100%'}
        height={'48px'}
        bgColor={'purple.200'}
        textColor={'white'}
        borderRadius={'4px'}
        fontSize={{ base: `sm`, md: `md` }}
      />
      <Flex my={4} justifyContent={`space-between`}>
        <Link color={`purple.200`} as={RouterLink} fontSize={`sm`}>
          Try another email address
        </Link>
        <Link color={`purple.200`} as={RouterLink} fontSize={`sm`}>
          Skip, i'll confirm later
        </Link>
      </Flex>
    </Box>
  );
}
