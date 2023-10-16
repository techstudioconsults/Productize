import DraftTab from './empty/DraftTab';
import DraftTabActive from './active/DraftTabActive';
import { selectDraftProducts } from '@productize/shared/redux';
import { useSelector } from 'react-redux';

const DraftTabLayout = () => {
  const draftProducts = useSelector(selectDraftProducts);

  return draftProducts?.length ? (
    <DraftTabActive products={draftProducts} />
  ) : (
    <DraftTab />
  );
};

export default DraftTabLayout;
