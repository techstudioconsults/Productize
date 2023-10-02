import { Progress, Text } from '@chakra-ui/react';
import {
  // selectCurrentUser,
  selectTaskCompletedCount,
} from '@productize/shared/redux';
import { useSelector } from 'react-redux';

export const ProgressBar = () => {
  const taskCompletedCount = useSelector(selectTaskCompletedCount);
  // const user = useSelector(selectCurrentUser);
  // const count = taskCompletedCount || user?.email_verified ? 1 : 0;
  return (
    <>
      <Text color={`grey.300`} textAlign={`end`} fontSize={`xs`}>
        <Text color={`grey.500`} as={`span`} fontSize={`xs`}>
          {taskCompletedCount}
        </Text>{' '}
        of 5 tasks completed
      </Text>
      <Progress
        max={5}
        width={`13rem`}
        value={taskCompletedCount}
        size="xs"
        colorScheme={`green`}
      />
    </>
  );
};
