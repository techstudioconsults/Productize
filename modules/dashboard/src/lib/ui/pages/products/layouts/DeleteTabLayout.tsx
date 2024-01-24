import DeleteTabActive from "../premium/DeleteTabActive";
import { useSetPaymentPlan } from "@productize-v1.0.0/modules/shared/hooks";
import { EmptyState } from "../../../empty-states/EmptyState";
import { SharedButton, UpgradePlanModal } from "@productize-v1.0.0/modules/shared/ui";
import { useDisclosure } from "@chakra-ui/react";

const DeleteTabLayout = () => {
    const isPremium = useSetPaymentPlan();
    const { isOpen, onOpen, onClose } = useDisclosure();

    if (isPremium) {
        return <DeleteTabActive />;
    } else {
        return (
            <EmptyState
                content={{
                    title: "Upgrade your plan to create a plan",
                    desc: "Lorem ipsum dolor sit amet consectetur. Nec accumsan amet amet velit. Aliquam dictum id pellentesque aenean turpis nisl. Quam etiam.",
                    img: `https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951003/productize/Illustration_3_g5iwpj_gurtby.png`,
                }}
                textAlign={{ base: `center`, md: `start` }}
                showImage={true}
                maxW="100%"
            >
                <SharedButton
                    text={"Upgrade Plan"}
                    btnExtras={{
                        onClick: onOpen,
                    }}
                    width={"fit-content"}
                    height={"48px"}
                    bgColor={"purple.200"}
                    textColor={"white"}
                    borderRadius={"4px"}
                    fontSize={{ base: `sm`, md: `md` }}
                />
                <UpgradePlanModal onClose={onClose} isOpen={isOpen} />
            </EmptyState>
        );
    }
};

export default DeleteTabLayout;
