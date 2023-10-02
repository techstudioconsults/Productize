import { selectTaskCompletedCount } from '@productize/shared/redux';
import { useSelector } from 'react-redux';
import FirstSalePage from './FirstSalePage';
import OnBoardingPage from './OnBoardingPage';
import ActiveUserPage from './ActiveUserPage';

const Home = () => {
  const tashCount = useSelector(selectTaskCompletedCount);

  if (tashCount === 3) {
    return <FirstSalePage />;
  } else if (tashCount === 5) {
    return <ActiveUserPage />;
  }

  return <OnBoardingPage />;
};

export default Home;
