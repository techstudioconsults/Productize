import { useToast } from "@chakra-ui/react";
import { useUpgradePlanMutation } from "@productize-v1.0.0/modules/shared/redux";
// import { ToastFeedback } from "@productize-v1.0.0/modules/shared/ui";

export const usePlanUpgrade = () => {
    // const navigate = useNavigate();
    const toast = useToast();
    // mutations
    const [upgradePlan, upgradeStatus] = useUpgradePlanMutation();

    const upgrade = async () => {
        try {
            const res = await upgradePlan(null).unwrap();
            // not returning a status code in few of the request responses
            if (res?.data) {
                window.location.href = res?.data?.authorization_url;
                // navigate(`https://checkout.paystack.com/${res?.data?.access_code}`, { state: { paystackMetadata: res.data } });
            }
        } catch (error) {
            if (error.status === 400) {
                toast({
                    position: `bottom-left`,
                    title: `Upgrade Plan`,
                    description: error?.data?.message,
                    status: `error`,
                    // render: () => <ToastFeedback bgColor={`yellow.100`} message={`Upgrade Plan`} title={error?.data?.message} />,
                });
            } else {
                console.log(error);
            }
        }
    };

    return { upgrade, upgradeStatus };
};

// data: access_code: "go9igygy71fjy1i";
// authorization_url: "https://checkout.paystack.com/go9igygy71fjy1i";
// id: "9aa9f75d-074f-4ac4-8117-cab075d97daf";
// reference: "1u3dwoz0pc";
