import DraftTab from './empty/DraftTab';
import DraftTabActive from './active/DraftTabActive';
import { useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { selectDraftProducts, useGetDraftProductsMutation } from '@productize-v1.0.0/modules/shared/redux';

const DraftTabLayout = () => {
	const [getDraftProducts] = useGetDraftProductsMutation();
	const draftProducts = useSelector(selectDraftProducts);

	const showDraftProducts = useCallback(async () => {
		try {
			await getDraftProducts(null).unwrap();
		} catch (error) {
			return error;
		}
	}, [getDraftProducts]);

	useEffect(() => {
		showDraftProducts();
	}, [showDraftProducts]);

	return draftProducts !== null ? (
		<DraftTabActive products={draftProducts} />
	) : (
		<DraftTab />
	);
};

export default DraftTabLayout;
