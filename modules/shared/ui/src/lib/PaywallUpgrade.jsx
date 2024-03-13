import { useEffect, useState } from 'react';
import { ModalComp } from './Modal';
import { Box, Center, Flex, Image, Link, Text, useDisclosure } from '@chakra-ui/react';
import { SharedButton } from './SharedButton';
import { useDispatch, useSelector } from 'react-redux';
import { selectPlanStatus } from '@productize/redux';
import { Link as RouterLink } from 'react-router-dom';
import { PricingModal } from './PricingModal';

export const PaywallUpgrade = () => {
    const { onClose, onOpen, isOpen } = useDisclosure();
    const [message, setMessage] = useState();
    const planStatus = useSelector(selectPlanStatus);
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch({
            type: `User/FREE_PLAN_OVER_RESPONSE`,
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
            switch (planStatus?.apiDetails?.endpoint) {
                case `getAllOrders`:
                    setMessage(
                        `You have to subscribe to view your customer's orders, sales will still be ongoing and it will be reflected on your dashboard, so don’t worry.`
                    );
                    break;
                case `getAllCustomers`:
                    setMessage(
                        `You have to subscribe to view your customers, sales will still be ongoing and it will be reflected on your dashboard, so don’t worry.`
                    );
                    break;
                case `getPayouts`:
                    setMessage(
                        `You have to subscribe to withdraw your earnings, sales will still be ongoing and it will be reflected on your dashboard, so don’t worry.`
                    );
                    break;
                case `retrieveAllPayoutAccount`:
                    setMessage(`You have to subscribe to add payment method.`);
                    break;
                case `updateProductStatus`:
                    setMessage(`You have to subscribe to publish your product, save to draft instead if you can’t.`);
                    break;
                case `billingHistory`:
                    setMessage(`You have to subscribe to view your billing history, save to draft instead if you can’t.`);
                    break;

                default:
                    setMessage(`Your Free trial has expired, subscribe to continue accessing all Productize features.`);
                    break;
            }
            onOpen();
        }
    }, [onOpen, planStatus?.apiDetails, planStatus?.isPlanExpired]);

    return (
        <ModalComp modalSize={`4xl`} openModal={isOpen} closeModal={handleClose}>
            <Center>
                <Image
                    width={`15rem`}
                    src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1709375037/productize/Wavy_Bus-09_Single-01_1_mtcxzs.png`}
                />
            </Center>
            <Box textAlign={`center`} p={10}>
                <Text as={`h4`} color={`purple.300`} fontWeight={`600`}>
                    Whoops! It looks like your free trial period has expired.
                </Text>
                <Text fontSize={{ base: `md`, md: `xl` }} color={`grey.500`} fontWeight={`300`} px={{ md: 10 }}>
                    {message}
                </Text>
                <Flex justifyContent={`space-around`} mt={`3rem`} gap={5} px={32}>
                    <Box width={`519px`}>
                        <PricingModal handleClose={handleClose} />
                    </Box>
                    <Link
                        as={RouterLink}
                        to={`http://localhost:4200/dashboard/products#draft`}
                        onClick={handleClose}
                        width={`519px`}
                        display={planStatus?.apiDetails?.endpoint === `updateProductStatus` ? `block` : `none`}
                    >
                        <SharedButton
                            width={`100%`}
                            btnExtras={{
                                border: `1px solid #6D5DD3`,
                            }}
                            text={`Go to Draft`}
                            height={'40px'}
                            bgColor={`transparent`}
                            textColor={'purple.200'}
                            borderRadius={'4px'}
                            fontSize={{ base: `sm`, md: `md` }}
                        />
                    </Link>
                    <Box width={`519px`} display={planStatus?.apiDetails?.endpoint !== `updateProductStatus` ? `block` : `none`}>
                        <SharedButton
                            btnExtras={{
                                border: `1px solid #DB3E3E`,
                                onClick: handleClose,
                            }}
                            width={`100%`}
                            text={`Cancel`}
                            height={'40px'}
                            bgColor={`transparent`}
                            textColor={'red.200'}
                            borderRadius={'4px'}
                            fontSize={{ base: `sm`, md: `md` }}
                        />
                    </Box>
                </Flex>
            </Box>
        </ModalComp>
    );
};

// export default PaywallUpgrade;
