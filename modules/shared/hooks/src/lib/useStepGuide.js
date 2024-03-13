import { selectCurrentUser } from '@productize/redux';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export const useStepGuide = () => {
    const user = useSelector(selectCurrentUser);
    const [steps] = useState([user?.email_verified, user?.profile_completed, user?.first_product_created, user?.payout_setup, user?.first_sale]);
    const [totalStepsCompleted, setTotalStepsCompleted] = useState(0);

    useEffect(() => {
        setTotalStepsCompleted(steps.filter((value) => value !== false).length);
    }, [steps]);
    return totalStepsCompleted;
};
