import React from 'react';
import { Box, Flex, Grid, HStack, Skeleton, SkeletonText, VStack } from '@chakra-ui/react';
import { SimpleGrid, Stack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ProductCards } from '../../../../ProductCards';
import { EmptyState } from '../../../../empty-states/EmptyState';
import { SharedButton } from '@productize/ui';
import { DataWidgetCard } from '../../../../DataWidgetCard';
import { ProductTable } from '../../ProductTable';
import { useAllProducts } from './service';

const AllproductActive = () => {
    const { productsAnalytics, isLoading, formatCurrency } = useAllProducts();

    const emptyProductDisplay = (
        <>
            <Flex gap={12} justifyContent="space-between">
                <Box w="100%">
                    <ProductCards
                        img="https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951014/productize/21_pqfpr8_cia6fu.png"
                        bgColor="coral.200"
                    />
                </Box>
                <Box w="100%" display={{ base: 'none', md: 'initial' }}>
                    <ProductCards
                        img="https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951019/productize/Clip_path_group_izpz73_qbclvq.png"
                        bgColor="coral.200"
                    />
                </Box>
                <Box w="100%" display={{ base: 'none', md: 'initial' }}>
                    <ProductCards
                        img="https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951018/productize/Clip_path_group_1_xjfqpt_fckkav.png"
                        bgColor="coral.200"
                    />
                </Box>
            </Flex>
            <EmptyState
                content={{
                    title: 'Create your first product.',
                    desc: 'Lorem ipsum dolor sit amet consectetur. Nec accumsan amet amet velit. Aliquam dictum id pellentesque aenean turpis nisl. Quam etiam.',
                }}
                textAlign={{ base: 'center' }}
                showImage={false}
            >
                <Link to="/dashboard/products/new#product-details">
                    <SharedButton
                        text="Add New Product"
                        btnExtras={{ leftIcon: 'ei:plus' }}
                        width="fit-content"
                        height="40px"
                        bgColor="purple.200"
                        textColor="white"
                        borderRadius="4px"
                        fontSize={{ base: 'sm', md: 'sm' }}
                    />
                </Link>
            </EmptyState>
        </>
    );

    const containsProductDisplay = (
        <Box my={8}>
            <SimpleGrid gap={4} my={4} columns={{ base: 1, sm: 2, lg: 4 }}>
                <Box>
                    <DataWidgetCard showIcon={false} title="Total Products" value={productsAnalytics?.total_products} />
                </Box>

                <Box>
                    <DataWidgetCard showIcon={false} title="Total Sales" value={productsAnalytics?.total_sales} />
                </Box>

                <Box>
                    <DataWidgetCard showIcon={false} title="Customers" value={productsAnalytics?.total_customers} />
                </Box>

                <Box>
                    <DataWidgetCard showIcon={false} title="Total Revenue" value={formatCurrency(productsAnalytics?.total_revenues)} />
                </Box>
            </SimpleGrid>
            <Stack mt={12} gap={4}>
                <ProductTable />
            </Stack>
        </Box>
    );

    if (isLoading) {
        return <DashboardSkeleton />;
    }

    const display = productsAnalytics?.total_products ? containsProductDisplay : emptyProductDisplay;

    return display;
};

export default AllproductActive;

export const DashboardSkeleton = () => {
    return (
        <Box p={5}>
            <SimpleGrid columns={{ sm: 2, lg: 4 }} gap={6} mb={6}>
                <Skeleton borderRadius={8} p={5} height={`7rem`} borderWidth="1px" />
                <Skeleton borderRadius={8} p={5} height={`7rem`} borderWidth="1px" />
                <Skeleton borderRadius={8} p={5} height={`7rem`} borderWidth="1px" />
                <Skeleton borderRadius={8} p={5} height={`7rem`} borderWidth="1px" />
            </SimpleGrid>

            <Flex display={{ base: `none`, sm: `flex` }} mt={20} justify="space-between" mb={6}>
                <HStack spacing={4}>
                    <Skeleton borderRadius={8} height="40px" width="240px" />
                    <Skeleton borderRadius={8} height="40px" width="100px" />
                    <Skeleton borderRadius={8} height="40px" width="40px" />
                </HStack>
                <HStack spacing={4}>
                    <Skeleton borderRadius={8} height="40px" width="120px" />
                </HStack>
            </Flex>
            <VStack>
                <Skeleton borderRadius={8} height="40px" width="100%" />
                <Skeleton borderRadius={8} height="40px" width="100%" />
                <Skeleton borderRadius={8} height="40px" width="100%" />
                <Skeleton borderRadius={8} height="40px" width="100%" />
                <Skeleton borderRadius={8} height="40px" width="100%" />
                <Skeleton borderRadius={8} height="40px" width="100%" />
            </VStack>
        </Box>
    );
};
