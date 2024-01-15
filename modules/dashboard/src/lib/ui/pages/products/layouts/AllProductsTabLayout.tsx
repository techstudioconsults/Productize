import { useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { selectAllProducts, useGetAllProductsMutation } from "@productize-v1.0.0/modules/shared/redux";
import AllproductActive from "../premium/AllproductActive";
import AccountStatus from "../empty/AccountStatus";
import { Box, Flex } from "@chakra-ui/react";
import { ProductCards } from "../../../ProductCards";
import { useSetPaymentPlan } from "@productize-v1.0.0/modules/shared/hooks";

const AllProductsTabLayout = () => {
    // const [getAllProducts, getAllProductsStatus] = useGetAllProductsMutation();
    // const allProducts = useSelector(selectAllProducts);
    const isPremium = useSetPaymentPlan();

    // const showAllProducts = useCallback(async () => {
    //     try {
    //         await getAllProducts(null).unwrap();
    //     } catch (error) {
    //         return error;
    //     }
    // }, [getAllProducts]);

    // useEffect(() => {
    //     showAllProducts();
    // }, [showAllProducts]);

    /* display cards for asthetics */

    const display = isPremium ? (
        <AllproductActive products={[]} />
    ) : (
        <>
            <Flex gap={12} justifyContent={`space-between`}>
                <Box w={`100%`}>
                    <ProductCards
                        img={"https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951014/productize/21_pqfpr8_cia6fu.png"}
                        bgColor={"coral.200"}
                    />
                </Box>
                <Box w={`100%`} display={{ base: `none`, md: `initial` }}>
                    <ProductCards
                        img={"https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951019/productize/Clip_path_group_izpz73_qbclvq.png"}
                        bgColor={"coral.200"}
                    />
                </Box>
                <Box w={`100%`} display={{ base: `none`, md: `initial` }}>
                    <ProductCards
                        img={"https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951018/productize/Clip_path_group_1_xjfqpt_fckkav.png"}
                        bgColor={"coral.200"}
                    />
                </Box>
            </Flex>
            <AccountStatus />
        </>
    );

    return display;
};
export default AllProductsTabLayout;
