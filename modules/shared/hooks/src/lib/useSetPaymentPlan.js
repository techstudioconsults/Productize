import { selectCurrentUser } from '@productize/redux';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export const useSetPaymentPlan = () => {
  const user = useSelector(selectCurrentUser);
  const [isPremium, setPremium] = useState(false);

  useEffect(() => {
    if (user?.account_type === `premium`) {
      setPremium(true);
    } else {
      setPremium(false);
    }
  }, [user?.account_type]);

  return isPremium;
};
