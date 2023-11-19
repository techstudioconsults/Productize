import { useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { selectAllProducts, useGetAllProductsMutation } from '@productize-v1.0.0/modules/shared/redux';
import AllproductActive from '../active/AllproductActive';
import Allproduct from '../empty/Allproduct';

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
		// empty state
		<Allproduct />
	);
};
export default AllProductsTabLayout;
