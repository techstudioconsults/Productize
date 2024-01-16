import { Box } from "@chakra-ui/react";
import { ProductsTableControl } from "../../../tables/tableControls/ProductsTableControl";
import { DeletedTable } from "../../../tables/DeletedTable";
import { useSelector } from "react-redux";
import { selectDeletedProducts, useGetDeletedProductsMutation } from "@productize-v1.0.0/modules/shared/redux";
import { ProductCards } from "../../../ProductCards";
import { EmptyState } from "../../../empty-states/EmptyState";
import { useCallback, useEffect } from "react";

const DeleteTabActive = () => {
    const [getDeletedProducts, getDeletedProductsStatus] = useGetDeletedProductsMutation();
    const deletedProducts: [] = useSelector(selectDeletedProducts);

    const showAllProducts = useCallback(async () => {
        try {
            await getDeletedProducts(null).unwrap();
        } catch (error) {
            return error;
        }
    }, [getDeletedProducts]);

    useEffect(() => {
        showAllProducts();
    }, [showAllProducts]);

    if (!deletedProducts?.length) {
        return (
            <>
                <ProductCards
                    padding={20}
                    bgPos={{ base: `-30%`, md: `initial` }}
                    img={"https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951012/productize/Layer_1_m6pvyg_yz7oz1.png"}
                    bgColor={"purple.100"}
                    bgImg="https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951010/productize/Layer_1_1_uhdwlr_l8njgb.png"
                />
                <EmptyState
                    content={{
                        title: "No deleted products yet.",
                        desc: "Lorem ipsum dolor sit amet consectetur. Nec accumsan amet amet velit. Aliquam dictum id pellentesque aenean turpis nisl. Quam etiam.",
                    }}
                    textAlign={{ base: `center` }}
                    showImage={false}
                />
            </>
        );
    }

    return (
        <Box>
            <Box mb={4}>
                <ProductsTableControl />
            </Box>
            <DeletedTable deleted tableData={deletedProducts} />
        </Box>
    );
};

export default DeleteTabActive;
