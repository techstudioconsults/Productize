import { Container } from '@chakra-ui/react';
import  { useCallback, useEffect } from 'react';
import { ExploreBanner } from '../components/ExploreBanner';
import { ExploreFeatures } from '../components/ExploreFeatures';
import { ExploreLayout } from '../../../layouts/ExploreLayout';
import { useGetFromCartMutation } from '@productize/redux';

export const Explore = () => {
     const [getFromCart] = useGetFromCartMutation();

     const getCartProduct = useCallback(async () => {
         await getFromCart(null).unwrap();
     }, [getFromCart]);

     useEffect(() => {
         getCartProduct();
     }, [getCartProduct]);
    return (
        <ExploreLayout>
            <Container px={{ base: 4, sm: 8, xl: 0 }} maxW={`70rem`} my={{ base: `3rem`, lg: `7rem` }}>
                <ExploreBanner />
            </Container>
            <Container my={{ base: `3rem`, lg: `7rem` }} px={{ base: 4, sm: 8, xl: 0 }} maxW={`70rem`}>
                <ExploreFeatures title={`Featured`} />
            </Container>
        </ExploreLayout>
    );
};
