import { Center } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { useSetPaymentPlan } from '@productize/hooks';

export const PaymentStatusTag = () => {
    const isPremium = useSetPaymentPlan();
    return (
        <Center fontSize={`xl`} color={`lightblue`} display={isPremium ? `block` : `none`}>
            {isPremium ? <Icon icon="fluent:premium-12-filled" /> : null}
        </Center>
    );
};
