/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Center, Container, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import React, { useState, useEffect, useCallback } from 'react';

import { useSelector } from 'react-redux';

import Card from './cards/Card';
import { useGetAllProducts_EXTERNALMutation, selectAllProducts_EXTERNAL, selectTags } from '@productize/redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { SpinnerComponentSmall } from '@productize/ui';
import { SelectPicker } from 'rsuite';
import { EmptyState } from '@productize/dashboard';

export interface slideProps {
    title: string;
}

export const ExploreFeatures = ({ title }: slideProps) => {
    const tags = useSelector(selectTags);
    const [error] = useState<string | null>(null);
    const [getAllProducts_EXTERNAL, getAllProducts_EXTERNALStatus] = useGetAllProducts_EXTERNALMutation();
    const products = useSelector(selectAllProducts_EXTERNAL);
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const tag = queryParams.get('tag');

    const tagData = [`All`, ...tags]?.map((item: string) => ({
        label: item,
        value: item,
    }));

    const fetchData = useCallback(async () => {
        try {
            await getAllProducts_EXTERNAL({ tag }).unwrap();
        } catch (error) {
            console.error(error);
        }
    }, [getAllProducts_EXTERNAL, tag]);

    const handleTagFilter = (tag: string) => {
        if (tag === `All`) {
            navigate(`/explore`);
        } else {
            navigate(`/explore?tag=${tag.toLowerCase()}`);
        }
        console.log(tag);
    };

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    // Render product cards
    const renderCards = products?.map((product: any) => (
        <Card
            key={product?.slug}
            productID={product?.slug}
            image={product?.thumbnail}
            heading={product?.title}
            price={product.price}
            publisher={product?.publisher}
        />
    ));

    return (
        <Flex>
            <Container p={0} maxW={`70rem`}>
                <Flex mb={5} justifyContent={`space-between`} alignItems={`center`}>
                    <Text as={`h4`}>{title}</Text>
                    <Box display={{ lg: `none` }}>
                        <SelectPicker searchable={false} onSelect={handleTagFilter} style={{ width: `100%` }} placeholder={`Tags`} size="sm" data={tagData} />
                    </Box>
                </Flex>

                <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} justifyContent={`space-between`} gap={`1.64rem`}>
                    {getAllProducts_EXTERNALStatus.isLoading ? (
                        <Center p={10}>
                            <SpinnerComponentSmall />
                        </Center>
                    ) : (
                        renderCards
                    )}
                </SimpleGrid>
                {!products?.length && !getAllProducts_EXTERNALStatus.isLoading && (
                    <EmptyState
                        content={{
                            title: `No content in ${tag} tag`,
                            desc: '',
                            img: undefined,
                        }}
                        textAlign={{ base: `center` }}
                        showImage={false}
                    />
                )}
            </Container>
        </Flex>
    );
};
