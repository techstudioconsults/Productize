import { Box, Flex, Link, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { SharedButton } from '@productize/shared/ui';
import { useSelector } from 'react-redux';
import { selectEmailConfirmation } from '@productize/shared/redux';

interface emailProps {
  text?: string;
}

export function VerifyEmailTemplate({ text }: emailProps) {
  const emailConfirmation = useSelector(selectEmailConfirmation);

  const checkMail = () => {
    window.location.href = emailConfirmation.email;
  };

  return (
    <Box>
      <Text className="small-text" color={`green.200`} mb={2}>
        {text}
      </Text>
      <SharedButton
        btnExtras={{
          onClick: checkMail,
        }}
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
