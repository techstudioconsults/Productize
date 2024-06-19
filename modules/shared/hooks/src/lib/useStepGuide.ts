import { selectCurrentUser } from '@productize/redux';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export const useStepGuide = () => {
    const user = useSelector(selectCurrentUser);
    const [totalStepsCompleted, setTotalStepsCompleted] = useState(0);

    useEffect(() => {
        const steps = [user?.email_verified, user?.profile_completed, user?.first_product_created, user?.payout_setup, user?.first_sale];

        setTotalStepsCompleted(steps.filter((step) => step).length);
    }, [user]);

    return totalStepsCompleted;
};
