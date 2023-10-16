
import { selectAllProducts } from '@productize/shared/redux';
import { useSelector } from 'react-redux';
import AllproductActive from './active/AllproductActive';
import Allproduct from './empty/Allproduct';

const AllProductsTabLayout = () => {
  const allProducts = useSelector(selectAllProducts);

  return allProducts?.length ? (
    <AllproductActive products={allProducts} />
  ) : (
    <Allproduct />
  );
};
export default AllProductsTabLayout;
