import { useDisclosure } from "@chakra-ui/react";
// import { EmptyState } from "../../lib/empty-states/EmptyState";
import { useSetPaymentPlan } from "@productize-v1.0.0/modules/shared/hooks";
import OrderActive from "./premium/OrderActive";
import { EmptyState } from "../../empty-states/EmptyState";
import { SharedButton, UpgradePlanModal } from "@productize-v1.0.0/modules/shared/ui";

export const Orders = () => {
    const isPremium = useSetPaymentPlan();
    const { isOpen, onOpen, onClose } = useDisclosure();
    // CHALLE'S CODE BLOCK================
    // const token = useSelector(selectCurrentToken);
    // const { error, data: orders, loading } = useFetch("https://productize-api.techstudio.academy/api/orders", token);
    // console.log("orders", orders);
    // return <Box my="24px">{orders && orders?.data?.length > 0 ? <ActiveOrders orders={orders} /> : <NoOrders />}</Box>;
    //         desc: "Lorem ipsum dolor sit amet consectetur. Nec accumsan amet amet velit. Aliquam dictum id pellentesque aenean turpis nisl. Quam etiam.",
    //         img: `https://res.cloudinary.com/dkszgtapy/image/upload/v1696068934/productize/Illustration_3_g5iwpj.png`,
    //     }}
    //     textAlign={{ base: `center`, md: `start` }}
    //     showImage={true}
    //     maxW="100%"
    // /> */}
    // END CHALLE'S CODE BLOCK================

    if (isPremium) {
        return <OrderActive />;
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
