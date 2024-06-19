import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { selectCurrentUser } from '@productize/redux';

export const useSetPaymentPlan = () => {
    const user = useSelector(selectCurrentUser);
    const accountType = user?.account_type;

    const isPremium = useMemo(() => accountType === 'premium', [accountType]);

    return isPremium;
};
