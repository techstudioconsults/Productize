import { Flex, Text, useDisclosure } from '@chakra-ui/react';
import { ModalComp } from './Modal';
import { PricingCard } from './PricingCard';
import { SharedButton } from './SharedButton';

interface PricingModalProps {
    handleClose?: () => void;
    textColor?: string;
    bgColor?: string;
}

export const PricingModal: React.FC<PricingModalProps> = ({ handleClose, textColor, bgColor }) => {
    const { onClose, onOpen, isOpen } = useDisclosure();

    const close = () => {
        if (handleClose) {
            handleClose();
            onClose();
        } else {
            onClose();
        }
    };

    return (
        <>
            {bgColor && textColor ? (
                <Text
                    cursor="pointer"
                    onClick={onOpen}
                    width="fit-content"
                    height="40px"
                    fontSize={{ base: 'sm', md: 'md' }}
                    color={textColor}
                    bgColor={bgColor}
                >
                    Subscribe Now
                </Text>
            ) : (
                <SharedButton
                    width="100%"
                    text="Subscribe Now"
                    height="40px"
                    bgColor="purple.200"
                    textColor="grey.100"
                    borderRadius="4px"
                    fontSize={{ base: 'sm', md: 'md' }}
                    btnExtras={{
                        onClick: onOpen,
                    }}
                />
            )}

            <ModalComp modalSize="4xl" openModal={isOpen} closeModal={close}>
                <Flex
                    flexDir={{ base: 'column', lg: 'row' }}
                    p={{ base: 0, md: 5 }}
                    gap={10}
                    justifyContent="center"
                    alignItems="center"
                    mt={{ base: 10, md: 0 }}
                >
                    {/* SUBSCRIPTION PLAN CARD */}
                    <PricingCard
                        cardProps={{
                            bgColor: 'purple.100',
                            width: { base: '100%', xl: '25rem' },
                            height: '100%',
                            borderRadius: '8px',
                        }}
                        listItems={[
                            'Instantly accept payments',
                            'Access to existing features',
                            'Future releases each year',
                            'When can I withdraw from my wallet',
                            'When can I withdraw from my wallet',
                            'When can I withdraw from my wallet',
                        ]}
                        iconColor="black"
                        amount={5000}
                        textColor="yellow.300"
                        btnText="Start Creating"
                    />
                </Flex>
            </ModalComp>
        </>
    );
};
