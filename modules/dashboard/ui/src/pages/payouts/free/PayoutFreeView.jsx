import { Box } from "@chakra-ui/react";
import { EmptyState } from "../../../lib/empty-states/EmptyState";
import { DashboardBanner } from "../../../lib/DashboardBanner";

const PayoutFreeView = () => {
    return (
        <Box>
            <Box my={8}>
                <DashboardBanner
                    padding={{ base: 4, md: 8 }}
                    img={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951011/productize/Layer_1_3_hn7gd9_kdxcwg.png`}
                    bgImg={``}
                    title={"Grow communities and get paid."}
                    desc={"Make as much as ₦10,000 sale for your first withdraw"}
                    px={8}
                />
            </Box>
            <Box>
                <EmptyState
                    content={{
                        title: "Upgrade your plan to create a plan",
                        desc: "Lorem ipsum dolor sit amet consectetur. Nec accumsan amet amet velit. Aliquam dictum id pellentesque aenean turpis nisl. Quam etiam.",
                        img: `https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951003/productize/Illustration_3_g5iwpj_gurtby.png`,
                    }}
                    textAlign={{ base: `center`, md: `start` }}
                    showImage={true}
                    maxW="100%"
                />
            </Box>
        </Box>
    );
};

export default PayoutFreeView;
