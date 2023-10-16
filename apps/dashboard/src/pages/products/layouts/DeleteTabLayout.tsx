import { useSelector } from 'react-redux';
import DeleteTabActive from './active/DeleteTabActive';
import DeleteTab from './empty/DeleteTab';
import { selectDeletedProducts } from '@productize/shared/redux';

const DeleteTabLayout = () => {
  const deletedProducts = useSelector(selectDeletedProducts);

  return deletedProducts?.length ? (
    <DeleteTabActive products={deletedProducts} />
  ) : (
    <DeleteTab />
  );
};

export default DeleteTabLayout;
