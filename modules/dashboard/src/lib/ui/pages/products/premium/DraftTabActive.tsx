import { Box } from '@chakra-ui/react';
import { DraftTable } from '../../../tables/DraftTable';
import { useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { ProductCards } from '../../../ProductCards';
import { EmptyState } from '../../../empty-states/EmptyState';
import { Link } from 'react-router-dom';
import { DraftTableControl } from './components/DraftTableControl';
import { useGetDraftProductsMutation, selectDraftProducts } from '@productize/redux';
import { OnBoardingLoader, SharedButton } from '@productize/ui';

const DraftTabActive = () => {
    const [getDraftProducts, getDraftProductsStatus] = useGetDraftProductsMutation();
    const draftProducts = useSelector(selectDraftProducts);
    const showAllProducts = useCallback(async () => {
        try {
            await getDraftProducts(null).unwrap();
        } catch (error) {
            return error;
        }
    }, [getDraftProducts]);

    useEffect(() => {
        showAllProducts();
    }, [showAllProducts]);

    if (getDraftProductsStatus.isLoading) {
        return <OnBoardingLoader />;
    }

    if (!draftProducts?.length) {
        return (
            <>
                <ProductCards
                    padding={20}
                    bgPos={{ base: `-30%`, md: `initial` }}
                    img={'https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951012/productize/Layer_1_m6pvyg_yz7oz1.png'}
                    bgColor={'purple.100'}
                    bgImg="https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951010/productize/Layer_1_1_uhdwlr_l8njgb.png"
                />
                <EmptyState
                    content={{
                        title: 'Oops! Your draft is empty.',
                        desc: 'Lorem ipsum dolor sit amet consectetur. Nec accumsan amet amet velit. Aliquam dictum id pellentesque aenean turpis nisl. Quam etiam.',
                    }}
                    textAlign={{ base: `center` }}
                    showImage={false}
                >
                    <Link to={`/dashboard/products/new#product-details`}>
                        <SharedButton
                            text={'Add New Product'}
                            btnExtras={{
                                leftIcon: `ei:plus`,
                            }}
                            width={'fit-content'}
                            height={'40px'}
                            bgColor={'purple.200'}
                            textColor={'white'}
                            borderRadius={'4px'}
                            fontSize={{ base: `sm`, md: `sm` }}
                        />
                    </Link>
                </EmptyState>
            </>
        );
    }

    return (
        <>
            <Box mb={4}>
                <DraftTableControl showRefreshBtn={false} />
            </Box>
            <DraftTable draft tableData={draftProducts} />
        </>
    );
};

export default DraftTabActive;
