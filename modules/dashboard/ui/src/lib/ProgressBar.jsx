import { Progress, Text } from "@chakra-ui/react";
import { selectCurrentUser } from "@productize-v1.0.0/modules/shared/redux";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const ProgressBar = () => {
    const user = useSelector(selectCurrentUser);
    const [steps] = useState([user?.email_verified, user?.profile_completed, user?.first_product_created, user?.payout_setup, user?.first_sale]);
    const [totalStepsCompleted, setTotalStepsCompleted] = useState(0);

    useEffect(() => {
        setTotalStepsCompleted(steps.filter((value) => value !== false).length);
    }, [steps]);

    return (
        <>
            <Text color={`grey.300`} textAlign={`end`} fontSize={`xs`}>
                <Text color={`grey.500`} as={`span`} fontSize={`xs`}>
                    {totalStepsCompleted}
                </Text>
                of 5 tasks completed
            </Text>
            <Progress max={5} width={`13rem`} value={totalStepsCompleted} size="xs" colorScheme={`green`} />
        </>
    );
};
