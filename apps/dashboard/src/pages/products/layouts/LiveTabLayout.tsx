import { useSelector } from 'react-redux';
import LiveTabActive from './active/LiveTabActive';
import LiveTab from './empty/LiveTab';
import { selectLiveProducts } from '@productize/shared/redux';

const LiveTabLayout = () => {
  const liveProducts = useSelector(selectLiveProducts);

  return liveProducts?.length ? (
    <LiveTabActive products={liveProducts} />
  ) : (
    <LiveTab />
  );
};

export default LiveTabLayout;
