import { Text, useToast } from "@chakra-ui/react";
import { useUpgradePlanMutation } from "@productize-v1.0.0/modules/shared/redux";
import { ToastFeedback, useToastAction } from "../../../ui/src/lib/ToastFeedback";
import errorImg from "@icons/error.svg";

export const usePlanUpgrade = () => {
    const [upgradePlan, upgradeStatus] = useUpgradePlanMutation();
    const { toast, toastIdRef, close } = useToastAction();

    const upgrade = async () => {
        try {
            const res = await upgradePlan(null).unwrap();
            // not returning a status code in few of the request responses
            if (res?.data) {
                window.location.href = res?.data?.authorization_url;
                // navigate(`https://checkout.paystack.com/${res?.data?.access_code}`, { state: { paystackMetadata: res.data } });
            }
        } catch (error) {
            toastIdRef.current = toast({
                position: "top",
                render: () => (
                    <ToastFeedback
                        handleClose={close}
                        btnColor={`red.600`}
                        message={error?.data?.message}
                        title={`Upgrade Plan failed!`}
                        icon={errorImg}
                        color={`red.600`}
                    />
                ),
            });
        }
    };

    return { upgrade, upgradeStatus };
};

// data: access_code: "go9igygy71fjy1i";
// authorization_url: "https://checkout.paystack.com/go9igygy71fjy1i";
// id: "9aa9f75d-074f-4ac4-8117-cab075d97daf";
// reference: "1u3dwoz0pc";
