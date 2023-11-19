import { useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { selectDeletedProducts, useGetDeletedProductsMutation } from '@productize-v1.0.0/modules/shared/redux';
import DeleteTabActive from '../active/DeleteTabActive';
import DeleteTab from '../empty/DeleteTab';

const DeleteTabLayout = () => {
	const [getDeletedProducts] = useGetDeletedProductsMutation();
	const deletedProducts = useSelector(selectDeletedProducts);

	const showDeletedProducts = useCallback(async () => {
		try {
			await getDeletedProducts(null).unwrap();
		} catch (error) {
			return error;
		}
	}, [getDeletedProducts]);

	useEffect(() => {
		showDeletedProducts();
	}, [showDeletedProducts]);

	return deletedProducts !== null ? (
		<DeleteTabActive products={deletedProducts} />
	) : (
		<DeleteTab />
	);
};

export default DeleteTabLayout;
