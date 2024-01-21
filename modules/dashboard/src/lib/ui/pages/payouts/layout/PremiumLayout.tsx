import { OnBoardingLoader } from "@productize-v1.0.0/modules/shared/ui";
import { DashboardBanner } from "../../../DashboardBanner";
import { DashboardEmptyState } from "../../../empty-states/DashboardEmptyState";
import PayoutPremiumView from "../premium/PayoutPremiumView";
import { Box } from "@chakra-ui/react";
import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectAllOrders, useGetAllOrdersMutation } from "@productize-v1.0.0/modules/shared/redux";

const PremiumLayout = () => {
    const [getAllOrders, getLiveProductsStatus] = useGetAllOrdersMutation();
    const orders = useSelector(selectAllOrders);

    const showAllOrders = useCallback(async () => {
        try {
            await getAllOrders(null).unwrap();
        } catch (error) {
            return error;
        }
    }, [getAllOrders]);

    useEffect(() => {
        showAllOrders();
    }, [showAllOrders]);

    if (getLiveProductsStatus.isLoading) {
        return <OnBoardingLoader />;
    }

    return (
        <Box my={8}>
            <DashboardBanner
                padding={{ base: 4, md: 8 }}
                img={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951011/productize/Layer_1_3_hn7gd9_kdxcwg.png`}
                bgImg={``}
                title={"Grow communities and get paid."}
                desc={"Make as much as ₦10,000 sale for your first withdraw"}
                px={8}
            />
            <Box my={8}>
                {orders?.length ? (
                    <PayoutPremiumView />
                ) : (
                    <DashboardEmptyState
                        content={{
                            title: "",
                            desc: "You do not have any sales yet.",
                            img: `https://res.cloudinary.com/kingsleysolomon/image/upload/v1702763260/productize/Illustration_6_audoa8.png`,
                        }}
                        textAlign={{ base: `center` }}
                        showImage
                    />
                )}
            </Box>
        </Box>
    );
};

export default PremiumLayout;
