import { Box, Flex, HStack, Skeleton, VStack } from '@chakra-ui/react';
import { ProductCards } from '../../../../ProductCards';
import { EmptyState } from '../../../../empty-states/EmptyState';
import { Link } from 'react-router-dom';
import { SharedButton } from '@productize/ui';
import { DraftTableControl } from './draftTableControl/DraftTableControl';
import { useDraftProducts } from './service';
import { DraftTable } from './DraftTable';

const DraftTabActive = () => {
    const { draftProducts, isLoading } = useDraftProducts();

    if (isLoading) {
        return <DraftSkeleton />;
    }

    return (
        <>
            <Box hidden={!draftProducts?.length} mb={4}>
                <DraftTableControl showRefreshBtn={false} />
            </Box>
            {!draftProducts?.length ? (
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
            ) : (
                <DraftTable draft tableData={draftProducts} />
            )}
        </>
    );
};

export default DraftTabActive;

export const DraftSkeleton = () => {
    return (
        <Box p={5}>
            <Flex display={{ base: `none`, sm: `flex` }} justify="space-between" mb={6}>
                <HStack spacing={4}>
                    <Skeleton borderRadius={8} height="40px" width="240px" />
                    <Skeleton borderRadius={8} height="40px" width="120px" />
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
