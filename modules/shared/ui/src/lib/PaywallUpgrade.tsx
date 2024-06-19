/* eslint-disable @typescript-eslint/no-empty-interface */
import { useEffect, useState } from 'react';
import { Box, Center, Flex, Image, Link, Text, useDisclosure } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { ModalComp } from './Modal';
import { SharedButton } from './SharedButton';
import { PricingModal } from './PricingModal';
import { selectPlanStatus } from '@productize/redux';

interface PaywallUpgradeProps {}

export const PaywallUpgrade: React.FC<PaywallUpgradeProps> = () => {
    const { onClose, onOpen, isOpen } = useDisclosure();
    const [message, setMessage] = useState<string | undefined>();
    const planStatus = useSelector(selectPlanStatus);
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch({
            type: 'User/FREE_PLAN_OVER_RESPONSE',
            payload: {
                planStatus: {
                    isPlanExpired: false,
                    apiDetails: null,
                },
            },
        });
        onClose();
    };

    useEffect(() => {
        if (planStatus?.isPlanExpired) {
            let newMessage;
            switch (planStatus?.apiDetails?.endpoint) {
                case 'getAllOrders':
                    newMessage = `You have to subscribe to view your customer's orders, sales will still be ongoing and it will be reflected on your dashboard, so don’t worry.`;
                    break;
                case 'getAllCustomers':
                    newMessage = `You have to subscribe to view your customers, sales will still be ongoing and it will be reflected on your dashboard, so don’t worry.`;
                    break;
                case 'getPayouts':
                    newMessage = `You have to subscribe to withdraw your earnings, sales will still be ongoing and it will be reflected on your dashboard, so don’t worry.`;
                    break;
                case 'retrieveAllPayoutAccount':
                    newMessage = `You have to subscribe to add payment method.`;
                    break;
                case 'updateProductStatus':
                    newMessage = `You have to subscribe to publish your product, save to draft instead if you can’t.`;
                    break;
                case 'billingHistory':
                    newMessage = `You have to subscribe to view your billing history, save to draft instead if you can’t.`;
                    break;
                default:
                    newMessage = `Your Free trial has expired, subscribe to continue accessing all Productize features.`;
                    break;
            }
            setMessage(newMessage);
            onOpen();
        }
    }, [onOpen, planStatus]);

    return (
        <ModalComp modalSize="4xl" openModal={isOpen} closeModal={handleClose}>
            <Center>
                <Image
                    width="15rem"
                    src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1709375037/productize/Wavy_Bus-09_Single-01_1_mtcxzs.png"
                />
            </Center>
            <Box textAlign="center" p={10}>
                <Text as="h4" color="purple.300" fontWeight="600">
                    Whoops! It looks like your free trial period has expired.
                </Text>
                <Text fontSize={{ base: 'md', md: 'xl' }} color="grey.500" fontWeight="300" px={{ md: 10 }}>
                    {message}
                </Text>
                <Flex justifyContent="space-around" mt="3rem" gap={5} px={32}>
                    <Box width="519px">
                        <PricingModal handleClose={handleClose} textColor={undefined} bgColor={undefined} />
                    </Box>
                    <Link
                        as={RouterLink}
                        to="/dashboard/products#draft"
                        onClick={handleClose}
                        width="519px"
                        display={planStatus?.apiDetails?.endpoint === 'updateProductStatus' ? 'block' : 'none'}
                    >
                        <SharedButton
                            width="100%"
                            btnExtras={{
                                border: '1px solid #6D5DD3',
                            }}
                            text="Go to Draft"
                            height="40px"
                            bgColor="transparent"
                            textColor="purple.200"
                            borderRadius="4px"
                            fontSize={{ base: 'sm', md: 'md' }}
                        />
                    </Link>
                    <Box width="519px" display={planStatus?.apiDetails?.endpoint !== 'updateProductStatus' ? 'block' : 'none'}>
                        <SharedButton
                            btnExtras={{
                                border: '1px solid #DB3E3E',
                                onClick: handleClose,
                            }}
                            width="100%"
                            text="Cancel"
                            height="40px"
                            bgColor="transparent"
                            textColor="red.200"
                            borderRadius="4px"
                            fontSize={{ base: 'sm', md: 'md' }}
                        />
                    </Box>
                </Flex>
            </Box>
        </ModalComp>
    );
};

PaywallUpgrade.displayName = 'PaywallUpgrade';
