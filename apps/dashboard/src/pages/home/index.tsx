import { selectTaskCompletedCount } from '@productize/shared/redux';
import { useSelector } from 'react-redux';
import FirstSalePage from './FirstSalePage';
import OnBoardingPage from './OnBoardingPage';

const Home = () => {
  const tashCount = useSelector(selectTaskCompletedCount);

  if (tashCount >= 3) {
    return <FirstSalePage />;
  }

  return <OnBoardingPage />;
};

export default Home;
