import { Progress, Text } from '@chakra-ui/react';

export const ProgressBar = () => {
  return (
    <>
      <Text color={`grey.300`} textAlign={`end`} fontSize={`xs`}>
        <Text color={`grey.500`} as={`span`} fontSize={`xs`}>
          0
        </Text>{' '}
        of 5 tasks completed
      </Text>
      <Progress width={`13rem`} value={10} size="xs" colorScheme={`green`} />
    </>
  );
};
