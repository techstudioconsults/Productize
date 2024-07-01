/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Center, Container, Flex, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { useEffect, useCallback } from 'react';

import { useSelector } from 'react-redux';
import Card from './cards/Card';
import { useGetAllProducts_EXTERNALMutation, selectAllProducts_EXTERNAL, selectTags } from '@productize/redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { SharedButton, SpinnerComponentSmall } from '@productize/ui';
import { SelectPicker } from 'rsuite';
import { EmptyState } from '@productize/dashboard';

export interface slideProps {
    title: string;
}

export const ExploreFeatures = ({ title }: slideProps) => {
    const tags = useSelector(selectTags);
    const [getAllProducts_EXTERNAL, getAllProducts_EXTERNALStatus] = useGetAllProducts_EXTERNALMutation();
    const products = useSelector(selectAllProducts_EXTERNAL);
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const tag = queryParams.get('tag');

    const tagData = [{ name: `All`, category: null }, ...tags]?.map((item: any) => ({
        label: item?.name,
        value: item?.name,
    }));

    const fetchData = useCallback(async () => {
        try {
            await getAllProducts_EXTERNAL({ tag }).unwrap();
        } catch (error) {
            return;
        }
    }, [getAllProducts_EXTERNAL, tag]);

    const handleTagFilter = (tag: string) => {
        if (tag === `All`) {
            navigate(`/explore`);
        } else {
            navigate(`/explore?tag=${tag.toLowerCase()}`);
        }
    };

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    // Render product cards
    const renderCards = products.products
        ?.slice() // Create a shallow copy of the products array
        .sort((a: any, b: any) => new Date(b.created_at || b.createdAt).getTime() - new Date(a.created_at || a.createdAt).getTime()) // Sort by recency
        .map((product: any) => (
            <Card
                key={product?.slug}
                productID={product?.slug}
                image={product?.thumbnail}
                heading={product?.title}
                price={product?.price}
                publisher={product?.publisher}
            />
        ));

    const handlePrevButton = async () => {
        try {
            await getAllProducts_EXTERNAL({ link: products.productsMetaData?.links?.prev }).unwrap();
        } catch (error) {
            return;
        }
    };

    const handleNextButton = async () => {
        try {
            await getAllProducts_EXTERNAL({ link: products.productsMetaData?.links?.next }).unwrap();
        } catch (error) {
            return;
        }
    };

    if (getAllProducts_EXTERNALStatus?.isLoading) {
        return (
            <Center p={10}>
                <SpinnerComponentSmall />
            </Center>
        );
    }

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
                    {renderCards}
                </SimpleGrid>
                {!products.products?.length && !getAllProducts_EXTERNALStatus?.isLoading && (
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
                {/* TABLE PAGINATION */}
                <Flex mt={4} gap={5} color={`grey.400`} alignItems={`center`} justifyContent={`center`} flexDir={{ base: `column-reverse`, lg: `row` }}>
                    <Stack my={10} w={{ base: `100%`, lg: `initial` }} justifyContent={`space-between`} alignItems={`center`} direction={`row`} gap={5}>
                        <SharedButton
                            btnExtras={{
                                leftIcon: `material-symbols:chevron-left`,
                                border: `1px solid #CFCFD0`,
                                onClick: handlePrevButton,
                                disabled: !products.productsMetaData?.links?.prev,
                            }}
                            text={''}
                            width={'fit-content'}
                            height={'40px'}
                            bgColor={'transparent'}
                            textColor={'grey.400'}
                            borderRadius={'4px'}
                            fontSize={{ base: `sm`, md: `md` }}
                        />
                        <Text fontSize={`xs`}>
                            Page {products.productsMetaData?.meta?.current_page} of {products.productsMetaData?.meta?.last_page}
                        </Text>
                        <SharedButton
                            btnExtras={{
                                leftIcon: `material-symbols:chevron-right`,
                                border: `1px solid #CFCFD0`,
                                onClick: handleNextButton,
                                disabled: !products.productsMetaData?.links?.next,
                            }}
                            text={''}
                            width={'fit-content'}
                            height={'40px'}
                            bgColor={'transparent'}
                            textColor={'grey.400'}
                            borderRadius={'4px'}
                            fontSize={{ base: `sm`, md: `md` }}
                        />
                    </Stack>
                </Flex>
            </Container>
        </Flex>
    );
};
