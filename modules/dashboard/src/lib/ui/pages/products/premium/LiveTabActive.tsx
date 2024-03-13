import { Box } from '@chakra-ui/react';

import { LiveTable } from '../../../tables/LiveTable';
import { ProductCards } from '../../../ProductCards';
import { EmptyState } from '../../../empty-states/EmptyState';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { LivetableControl } from './components/LiveTableControl';
import { Link } from 'react-router-dom';
import { selectLiveProducts, useGetLiveProductsMutation } from '@productize/redux';
import { OnBoardingLoader, SharedButton } from '@productize/ui';

const LiveTabActive = () => {
    const [getLiveProducts, getLiveProductsStatus] = useGetLiveProductsMutation();
    const liveProducts: [] = useSelector(selectLiveProducts);

    const showAllProducts = useCallback(async () => {
        try {
            await getLiveProducts(null).unwrap();
        } catch (error) {
            return error;
        }
    }, [getLiveProducts]);

    useEffect(() => {
        showAllProducts();
    }, [showAllProducts]);

    if (getLiveProductsStatus.isLoading) {
        return <OnBoardingLoader />;
    }

    if (!liveProducts?.length) {
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
                        title: 'You’re yet to publish a product.',
                        desc: 'Lorem ipsum dolor sit amet consectetur. Nec accumsan amet amet velit. Aliquam dictum id pellentesque aenean turpis nisl. Quam etiam.',
                    }}
                    textAlign={{ base: `center` }}
                    showImage={false}
                >
                    <Link to={`/dashboard/products#draft`}>
                        <SharedButton
                            text={'Publish New Product'}
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
        <Box>
            <Box mb={4}>
                <LivetableControl showRefreshBtn={false} />
            </Box>
            <LiveTable live tableData={liveProducts} />
        </Box>
    );
};

export default LiveTabActive;
