/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Container, Flex, SimpleGrid, Skeleton, Text } from '@chakra-ui/react';
import React, { useState, useEffect, useCallback } from 'react';
import { Icon } from '@iconify/react';
import { useSelector } from 'react-redux';

import Card from './cards/Card';
import { useGetAllProducts_EXTERNALMutation, selectAllProducts_EXTERNAL } from '@productize/redux';
import { useLocation, useParams } from 'react-router-dom';

export interface slideProps {
    title: string;
}

export const ExploreFeatures = ({ title }: slideProps) => {
    const [error] = useState<string | null>(null);
    const [getAllProducts_EXTERNAL, getAllProducts_EXTERNALStatus] = useGetAllProducts_EXTERNALMutation();
    const products = useSelector(selectAllProducts_EXTERNAL);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const tag = queryParams.get('tag');

    const fetchData = useCallback(async () => {
        try {
            await getAllProducts_EXTERNAL({ tag }).unwrap();
        } catch (error) {
            console.error(error);
        }
    }, [getAllProducts_EXTERNAL, tag]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    // Render product cards
    const renderCards = products?.map((product: any) => (
        <Skeleton isLoaded={!getAllProducts_EXTERNALStatus.isLoading} key={product?.slug}>
            <Card productID={product?.slug} image={product?.thumbnail} heading={product?.title} price={product.price} publisher={product?.publisher} />
        </Skeleton>
    ));

    return (
        <Flex>
            <Container p={0} maxW={`70rem`}>
                <Flex mb={5} justifyContent={`space-between`} alignItems={`center`}>
                    <Text as={`h4`}>{title}</Text>
                    <Flex>
                        <Icon fontSize={`1.5rem`} icon={`solar:arrow-right-bold-duotone`} />
                    </Flex>
                </Flex>

                {/* Conditional rendering based on error state */}
                {error ? (
                    <Box>Error: {error}</Box>
                ) : (
                    <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} justifyContent={`space-between`} gap={`1.64rem`}>
                        {renderCards}
                    </SimpleGrid>
                )}
            </Container>
        </Flex>
    );
};
