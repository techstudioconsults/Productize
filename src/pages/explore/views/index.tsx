import { Container } from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';
import { ExploreBanner } from '../components/ExploreBanner';
import { ExploreFeatures } from '../components/ExploreFeatures';
import { ExploreLayout } from '../../../layouts/ExploreLayout';
import { useGetFromCartMutation, useGetTopProductsMutation } from '@productize/redux';
import { ExploreTrending } from '../components/ExploreTrending';
import { useLocation } from 'react-router-dom';

export const Explore = () => {
    const { pathname } = useLocation();
    const [getFromCart] = useGetFromCartMutation();
    const [getTopProducts] = useGetTopProductsMutation();
    const [topProducts, setTopProducts] = useState<[]>([]);
    const [isTopProductLoading, setTopProuctLoading] = useState(true);
    // const [getProductsBasedOnSearch] = useGetProductsBasedOnSearchMutation();
    // const [searchedProducts, setSearchedProducts] = useState<[]>([]);
    // const [isSearchProductLoading, setSearchProuctLoading] = useState(true);

    const getExploreData = useCallback(async () => {
        if (pathname === `/explore`) {
            const res = await getTopProducts(null).unwrap();
            if (res.data) {
                setTopProducts(res.data);
                setTopProuctLoading(false);
            }
            // const searchRes = await getProductsBasedOnSearch(null).unwrap();
            // if (searchRes.data) {
            //     setSearchedProducts(searchRes.data);
            //     setSearchProuctLoading(false);
            // }
        } else {
            getFromCart(null).unwrap();
        }
    }, [getFromCart, getTopProducts, pathname]);

    useEffect(() => {
        getExploreData();
    }, [getExploreData]);
    return (
        <ExploreLayout>
            <Container px={{ base: 4, sm: 8, xl: 0 }} maxW={`70rem`} my={{ base: `3rem`, lg: `7rem` }}>
                <ExploreBanner />
            </Container>
            <Container my={{ base: `3rem`, lg: `7rem` }} px={{ base: 4, sm: 8, xl: 0 }} maxW={`70rem`}>
                <ExploreTrending loading={isTopProductLoading} products={topProducts} title={`Best Sellers`} />
            </Container>
            <Container my={{ base: `3rem`, lg: `7rem` }} px={{ base: 4, sm: 8, xl: 0 }} maxW={`70rem`}>
                <ExploreFeatures title={`Featured`} />
            </Container>
            {/* base on search */}
            {/* <Container my={{ base: `3rem`, lg: `7rem` }} px={{ base: 4, sm: 8, xl: 0 }} maxW={`70rem`}>
                <ExploreTrending loading={isSearchProductLoading} products={searchedProducts} title={`Based on your recent search`} />
            </Container> */}
        </ExploreLayout>
    );
};
