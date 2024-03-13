import { Progress, Text } from '@chakra-ui/react';
import { useStepGuide } from '@productize/hooks';

const ProgressBar = () => {
    const totalSteps = useStepGuide();
    return (
        <>
            <Text color={`grey.300`} textAlign={`end`} fontSize={`xs`}>
                <Text color={`grey.500`} as={`span`} fontSize={`xs`}>
                    {totalSteps}
                </Text>{' '}
                of 5 tasks completed
            </Text>
            <Progress max={5} width={`13rem`} value={totalSteps} size="xs" colorScheme={`green`} />
        </>
    );
};

export default ProgressBar;
