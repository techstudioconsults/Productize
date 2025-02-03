import { Box, useDisclosure } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { EmptyState } from "../../../empty-states/EmptyState";
import { useSetPaymentPlan } from "@productize/hooks";
import { SharedButton, UpgradePlanModal } from "@productize/ui";

const AccountStatus = () => {
    const isPremium = useSetPaymentPlan();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const emptyState = isPremium ? (
        <EmptyState
            content={{
                title: "Create your first product.",
                desc: "Lorem ipsum dolor sit amet consectetur. Nec accumsan amet amet velit. Aliquam dictum id pellentesque aenean turpis nisl. Quam etiam.",
            }}
            textAlign={{ base: `center` }}
            showImage={false}
        >
            <Link to={`/dashboard/products/new`}>
                <SharedButton
                    text={"Add New Product"}
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
            </Link>
        </EmptyState>
    ) : (
        <EmptyState
            hasBorder
            content={{
                title: "Upgrade your plan to create product",
                desc: "Lorem ipsum dolor sit amet consectetur. Nec accumsan amet amet velit. Aliquam dictum id pellentesque aenean turpis nisl. Quam etiam.",
            }}
            textAlign={{ base: `center` }}
            showImage={false}
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

    return <Box my={4}>{emptyState}</Box>;
};

export default AccountStatus;
