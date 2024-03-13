import { Box, Flex, SimpleGrid, Skeleton, Stack } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { DataWidgetCard } from '../../../DataWidgetCard';
import { ProductTable } from '../../../tables/ProductTable';
import { useCallback, useEffect } from 'react';
import { useCurrency } from '@productize/hooks';
import { useGetProductAnalyticsMutation, selectProductAnalytics } from '@productize/redux';
import { ProductCards } from '../../../ProductCards';
import { EmptyState } from '../../../empty-states/EmptyState';
import { SharedButton } from '@productize/ui';
import { Link } from 'react-router-dom';

const AllproductActive = () => {
    const [getProductsAnalytics, getProductsAnalyticsStatus] = useGetProductAnalyticsMutation();
    const productsAnalyics = useSelector(selectProductAnalytics);
    const formatCurrency = useCurrency();

    const showAllProducts = useCallback(async () => {
        try {
            await getProductsAnalytics(null).unwrap();
        } catch (error) {
            console.error(error);
        }
    }, [getProductsAnalytics]);

    useEffect(() => {
        showAllProducts();
    }, [showAllProducts]);

    const emptyProductDisplay = (
        <>
            <Flex gap={12} justifyContent={`space-between`}>
                <Box w={`100%`}>
                    <ProductCards
                        img={'https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951014/productize/21_pqfpr8_cia6fu.png'}
                        bgColor={'coral.200'}
                    />
                </Box>
                <Box w={`100%`} display={{ base: `none`, md: `initial` }}>
                    <ProductCards
                        img={'https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951019/productize/Clip_path_group_izpz73_qbclvq.png'}
                        bgColor={'coral.200'}
                    />
                </Box>
                <Box w={`100%`} display={{ base: `none`, md: `initial` }}>
                    <ProductCards
                        img={'https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951018/productize/Clip_path_group_1_xjfqpt_fckkav.png'}
                        bgColor={'coral.200'}
                    />
                </Box>
            </Flex>
            <EmptyState
                content={{
                    title: 'Create your first product.',
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

    const containsProductDisplay = (
        <Box my={8}>
            {/* grid cards */}
            <Box>
                <SimpleGrid gap={4} my={4} columns={{ base: 1, sm: 2, lg: 4 }}>
                    <Skeleton isLoaded={!getProductsAnalyticsStatus.isLoading}>
                        <Box>
                            <DataWidgetCard showIcon={false} title={'Total Products'} value={productsAnalyics?.total_products} />
                        </Box>
                    </Skeleton>
                    <Skeleton isLoaded={!getProductsAnalyticsStatus.isLoading}>
                        <Box>
                            <DataWidgetCard showIcon={false} title={'Total Sales'} value={productsAnalyics?.total_sales} />
                        </Box>
                    </Skeleton>
                    <Skeleton isLoaded={!getProductsAnalyticsStatus.isLoading}>
                        <Box>
                            <DataWidgetCard showIcon={false} title={'Customers'} value={productsAnalyics?.total_customers} />
                        </Box>
                    </Skeleton>
                    <Skeleton isLoaded={!getProductsAnalyticsStatus.isLoading}>
                        <Box>
                            <DataWidgetCard showIcon={false} title={'Total Revenue'} value={formatCurrency(productsAnalyics?.total_revenues)} />
                        </Box>
                    </Skeleton>
                </SimpleGrid>
            </Box>
            {/* dropdown filters and buttons Controls */}
            <Stack mt={12} gap={4}>
                <ProductTable />
            </Stack>
        </Box>
    );

    const display = productsAnalyics?.total_products ? containsProductDisplay : emptyProductDisplay;

    return display;
};

export default AllproductActive;
