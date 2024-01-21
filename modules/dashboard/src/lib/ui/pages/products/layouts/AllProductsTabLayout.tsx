import AllproductActive from "../premium/AllproductActive";
import AccountStatus from "../empty/AccountStatus";
import { Box, Flex } from "@chakra-ui/react";
import { ProductCards } from "../../../ProductCards";
import { useSetPaymentPlan } from "@productize-v1.0.0/modules/shared/hooks";

const AllProductsTabLayout = () => {
    const isPremium = useSetPaymentPlan();

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
