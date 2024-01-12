import { DashboardEmptyState } from "../../../empty-states/DashboardEmptyState";
import PayoutPremiumView from "../premium/PayoutPremiumView";
import { Box } from "@chakra-ui/react";

const PremiumLayout = () => {
    const value = true;

    return value ? (
        <PayoutPremiumView />
    ) : (
        // empty state
        <Box>
            <DashboardEmptyState
                content={{
                    title: "",
                    desc: "You do not have any sales yet.",
                    img: `https://res.cloudinary.com/kingsleysolomon/image/upload/v1702763260/productize/Illustration_6_audoa8.png`,
                }}
                textAlign={{ base: `center` }}
                showImage
            />
        </Box>
    );
};

export default PremiumLayout;
