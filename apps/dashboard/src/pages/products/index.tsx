import { Box } from '@chakra-ui/react';
import { DashboardTab } from './layouts/DashboardTab';
import {
  useGetAllProductsMutation,
  useGetDeletedProductsMutation,
  useGetDraftProductsMutation,
  useGetLiveProductsMutation,
  useGetProductAnalyticsMutation,
} from '@productize/shared/redux';

import { useEffect, useCallback } from 'react';
import { SpinnerComponent } from '@productize/shared/ui';

const Products = () => {
  const [getAllProducts, getAllProductsStatus] = useGetAllProductsMutation();
  const [getProductsAnalytics] = useGetProductAnalyticsMutation();
  const [getDraftProducts] = useGetDraftProductsMutation();
  const [getLiveProducts] = useGetLiveProductsMutation();
  const [getDeletedProducts] = useGetDeletedProductsMutation();

  const showAllProducts = useCallback(async () => {
    try {
      await getAllProducts(null).unwrap();
      await getDraftProducts(null).unwrap();
      await getLiveProducts(null).unwrap();
      await getDeletedProducts(null).unwrap();
      await getProductsAnalytics(null).unwrap();
    } catch (error) {
      return error;
    }
  }, [
    getAllProducts,
    getDeletedProducts,
    getDraftProducts,
    getLiveProducts,
    getProductsAnalytics,
  ]);

  useEffect(() => {
    showAllProducts();
  }, [showAllProducts]);

  // if (getAllProductsStatus.isError) {
  //   console.log(`something is wrong`);
  // }

  return (
    <Box mt={8}>
      {getAllProductsStatus.isLoading ? <SpinnerComponent /> : <DashboardTab />}
    </Box>
  );
};

export default Products;
