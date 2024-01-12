import { Box } from "@chakra-ui/react";
import { useSetPaymentPlan } from "@productize-v1.0.0/modules/shared/hooks";
import PremiumLayout from "./layout/PremiumLayout";
import { EmptyState } from "../../empty-states/EmptyState";

export const Customers = () => {
    const isPremium = useSetPaymentPlan();

    const state = isPremium ? (
        <PremiumLayout />
    ) : (
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
    );

    return <Box my={4}>{state}</Box>;
};
