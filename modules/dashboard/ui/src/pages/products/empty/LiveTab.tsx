import { Box, useDisclosure } from "@chakra-ui/react";
import { useSetPaymentPlan } from "@productize-v1.0.0/modules/shared/hooks";
import { SharedButton, UpgradePlanModal } from "@productize-v1.0.0/modules/shared/ui";
import { ProductCards } from "../../../lib/ProductCards";
import { EmptyState } from "../../../lib/empty-states/EmptyState";

const LiveTab = () => {
    const isPremium = useSetPaymentPlan();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const emptyState = isPremium ? (
        <>
            <ProductCards
                padding={20}
                bgPos={{ base: `-30%`, md: `initial` }}
                img={"https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951012/productize/Layer_1_m6pvyg_yz7oz1.png"}
                bgColor={"purple.100"}
                bgImg="https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951010/productize/Layer_1_1_uhdwlr_l8njgb.png"
            />
            <EmptyState
                content={{
                    title: "You’re yet to publish a product.",
                    desc: "Lorem ipsum dolor sit amet consectetur. Nec accumsan amet amet velit. Aliquam dictum id pellentesque aenean turpis nisl. Quam etiam.",
                }}
                textAlign={{ base: `center` }}
                showImage={false}
            >
                <SharedButton
                    text={"Publish New Product"}
                    btnExtras={{
                        leftIcon: `ei:plus`,
                    }}
                    width={"fit-content"}
                    height={"40px"}
                    bgColor={"purple.200"}
                    textColor={"white"}
                    borderRadius={"4px"}
                    fontSize={{ base: `sm`, md: `sm` }}
                />
            </EmptyState>
        </>
    ) : (
        <EmptyState
            content={{
                title: "You’re yet to publish a product.",
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
    return <Box>{emptyState}</Box>;
};

export default LiveTab;
