import { Box, Container, Flex, Grid, Skeleton, Text } from "@chakra-ui/react";
import React, { useState, useEffect, useCallback } from "react";
import { Icon } from "@iconify/react";
import { useSelector } from "react-redux";
import { selectAllProducts_EXTERNAL, useGetAllProducts_EXTERNALMutation } from "@productize-v1.0.0/modules/shared/redux";
import Card from "./cards/Card";
import { EmptyState } from "modules/dashboard/src/lib/ui/empty-states/EmptyState";
// import Container from '../shared-ui/Container';

// Define the type for a product
// interface Product {
//     id: number;
//     image: string;
//     title: string;
//     rating: {
//         rate: number;
//         count: number;
//     };
//     price: number;
// }

export interface slideProps {
    title: string;
}

export const ExploreFeatures = ({ title }: slideProps) => {
    // State to hold the products and error message
    // const [products, setProducts] = useState<Product[]>([]); // Change type to Product[]
    const [error] = useState<string | null>(null);
    const [getAllProducts_EXTERNAL, getAllProducts_EXTERNALStatus] = useGetAllProducts_EXTERNALMutation();
    const products = useSelector(selectAllProducts_EXTERNAL);

    const fetchData = useCallback(async () => {
        try {
            await getAllProducts_EXTERNAL(null).unwrap();
        } catch (error) {
            console.error(error);
        }
    }, [getAllProducts_EXTERNAL]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    // Render product cards
    const renderCards = () => {
        return products.map((product: any) => (
            <Skeleton isLoaded={!getAllProducts_EXTERNALStatus.isLoading} key={product?.slug}>
                <Card productID={product?.slug} image={product?.thumbnail} heading={product?.title} price={product.price} publisher={product?.publisher} />
            </Skeleton>
        ));
    };

    return (
        <Flex>
            <Container p={0} maxW={`70rem`}>
                <Flex mb={5} justifyContent={`space-between`} alignItems={`center`}>
                    <Text as={`h4`}>{title}</Text>
                    <Flex>
                        <Icon fontSize={`1.5rem`} icon={`solar:arrow-right-bold-duotone`} />
                    </Flex>
                </Flex>

                <Flex py={2} w={`100%`} overflow={`auto`}>
                    {/* Conditional rendering based on error state */}
                    {error ? (
                        <Box>Error: {error}</Box>
                    ) : (
                        <Grid
                            templateColumns={{
                                base: `repeat(4, 1fr)`,
                            }}
                            w={`100%`}
                            justifyContent={`space-between`}
                            // templateColumns={{
                            //   base: `repeat(1, 1fr)`,
                            //   md: `repeat(2, 1fr)`,
                            //   lg: `repeat(4, 1fr)`,
                            // }}
                            gap={`1.64rem`}
                        >
                            {renderCards()}
                        </Grid>
                    )}
                </Flex>
            </Container>
        </Flex>
    );
};
