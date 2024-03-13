import { Tag } from '@chakra-ui/react';
import { useSetPaymentPlan } from '@productize/hooks';

export const PaymentStatusTag = () => {
    const isPremium = useSetPaymentPlan();
    return (
        <Tag
            size={`sm`}
            fontSize={`xs`}
            bgColor={isPremium ? `yellow.100` : `coral.100`}
            border={isPremium ? `1px solid #F6C21C` : `1px solid #17B6BA`}
            color={`coral.300`}
            display={isPremium ? `block` : `none`}
        >
            {isPremium ? `Premium` : null}
        </Tag>
    );
};
