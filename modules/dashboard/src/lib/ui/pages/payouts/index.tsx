import { useSetPaymentPlan } from "@productize-v1.0.0/modules/shared/hooks";
import PayoutFreeView from "./free/PayoutFreeView";
import { Box } from "@chakra-ui/react";
import PremiumLayout from "./layout/PremiumLayout";

export const Payouts = () => {
    const isPremium = useSetPaymentPlan();

    const state = isPremium ? <PremiumLayout /> : <PayoutFreeView />;

    return <Box my={4}>{state}</Box>;
};
