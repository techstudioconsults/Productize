import { Box } from '@chakra-ui/react';
import { DashboardTab } from './layouts/DashboardTab';

import { useEffect, useCallback } from 'react';
import { useGetProductAnalyticsMutation } from '@productize-v1.0.0/modules/shared/redux';

export const Products = () => {
	const [getProductsAnalytics] = useGetProductAnalyticsMutation();

	const showAllProducts = useCallback(async () => {
		try {
			await getProductsAnalytics(null).unwrap();
		} catch (error) {
			return error;
		}
	}, [getProductsAnalytics]);

	useEffect(() => {
		showAllProducts();
	}, [showAllProducts]);

	return (
		<Box mt={8}>
			<DashboardTab />
		</Box>
	);
};
