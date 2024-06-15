import { Box } from '@chakra-ui/react';
import { ProductCards } from '../../../../ProductCards';
import { EmptyState } from '../../../../empty-states/EmptyState';
import { OnBoardingLoader } from '@productize/ui';
import DeletedTableControl from './deleteTableControl/DeletedTableControl';
import { useDeletedProducts } from './service';
import { DeletedTable } from './DeletedTable';

const DeleteTabActive = () => {
    const { deletedProducts, getDeletedProductsStatus } = useDeletedProducts();

    if (getDeletedProductsStatus.isLoading) {
        return <OnBoardingLoader />;
    }

    return (
        <Box>
            <Box mb={4}>
                <DeletedTableControl showRefreshBtn={false} />
            </Box>
            {!deletedProducts?.length ? (
                <>
                    <ProductCards
                        padding={20}
                        bgPos={{ base: '-30%', md: 'initial' }}
                        img="https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951012/productize/Layer_1_m6pvyg_yz7oz1.png"
                        bgColor="purple.100"
                        bgImg="https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951010/productize/Layer_1_1_uhdwlr_l8njgb.png"
                    />
                    <EmptyState
                        content={{
                            title: 'No deleted products yet.',
                            desc: 'Lorem ipsum dolor sit amet consectetur. Nec accumsan amet amet velit. Aliquam dictum id pellentesque aenean turpis nisl. Quam etiam.',
                        }}
                        textAlign={{ base: 'center' }}
                        showImage={false}
                    />
                </>
            ) : (
                <DeletedTable deleted tableData={deletedProducts} />
            )}
        </Box>
    );
};

export default DeleteTabActive;