import { useSelector } from 'react-redux';
import AllproductActive from './active/AllproductActive';
import Allproduct from './empty/Allproduct';
import { useCallback, useEffect } from 'react';
import { selectAllProducts, useGetAllProductsMutation } from '@productize-v1.0.0/modules/shared/redux';

const AllProductsTabLayout = () => {
	const [getAllProducts] = useGetAllProductsMutation();
	const allProducts = useSelector(selectAllProducts);

	const showAllProducts = useCallback(async () => {
		try {
			await getAllProducts(null).unwrap();
		} catch (error) {
			return error;
		}
	}, [getAllProducts]);

	useEffect(() => {
		showAllProducts();
	}, [showAllProducts]);

	return allProducts !== null ? (
		<AllproductActive products={allProducts} />
	) : (
		<Allproduct />
	);
};
export default AllProductsTabLayout;
