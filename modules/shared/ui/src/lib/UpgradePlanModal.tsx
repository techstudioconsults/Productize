import { Center, Flex, Modal, ModalContent, ModalOverlay, Text } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { PricingCard } from './PricingCard';

interface modalProp {
    onClose: () => void;
    isOpen: boolean;
}

export const UpgradePlanModal = ({ isOpen, onClose }: modalProp) => {
    return (
        <Modal size={{ base: `full`, md: `3xl` }} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent borderRadius={`1rem`} py={10} px={{ base: 4, md: 20 }}>
                <Flex flexDir={{ base: `column`, md: `row` }} justifyContent={`space-between`} alignItems={`center`} gap={`10`}>
                    {/* SUBSCRIPTION PLAN CARD */}
                    <PricingCard
                        cardProps={{
                            bgColor: `purple.100`,
                            width: { base: `100%`, xl: `25rem` },
                            height: `540px`,
                            borderRadius: `8px`,
                        }}
                        listItems={[
                            `Instantly accept payments`,
                            `Access to existing features + future releases each year`,
                            `When can I withdraw from my wallet`,
                            `When can I withdraw from my wallet`,
                            `When can I withdraw from my wallet`,
                        ]}
                        iconColor={'black'}
                        amount={5000}
                        textColor={'yellow.300'}
                        btnText={'Proceed to Subscribe'}
                    />
                </Flex>
                <Flex p={5} justifyContent={`center`} alignItems={`center`}>
                    <Center cursor={`pointer`} onClick={onClose}>
                        <Icon fontSize={`2rem`} icon={'system-uicons:chevron-left'} />
                        <Text fontWeight={600}>Go Back</Text>
                    </Center>
                </Flex>
            </ModalContent>
        </Modal>
    );
};
