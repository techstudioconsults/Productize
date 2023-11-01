
import { useSelector } from 'react-redux';
import FirstSalePage from './FirstSalePage';
import OnBoardingPage from './OnBoardingPage';
import ActiveUserPage from './ActiveUserPage';
import { selectTaskCompletedCount } from '@productize-v1.0.0/modules/shared/redux';

export const Home = () => {
  const taskCount = useSelector(selectTaskCompletedCount);

  if (taskCount >= 3 && taskCount !== 5) {
    return <FirstSalePage />;
  } else if (taskCount < 3) {
    return <OnBoardingPage />;
  }

  return <ActiveUserPage />;
};
