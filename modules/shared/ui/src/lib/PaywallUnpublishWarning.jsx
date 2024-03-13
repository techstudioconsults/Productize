import { ModalComp } from './Modal';
import { Box, Center, Flex, Image, Text } from '@chakra-ui/react';
import { SharedButton } from './SharedButton';
import { ToastFeedback, useToastAction } from './ToastFeedback';
import { useGetAllProductsMutation, useGetDraftProductsMutation, useUpdateProductStatusMutation } from '@productize/redux';

export const PaywallUnpublishWarning = ({ onClose, isOpen, productID }) => {
    const { toast, toastIdRef, close } = useToastAction();
    const [updateProductStatus, { isLoading }] = useUpdateProductStatusMutation();
    const [getAllProducts] = useGetAllProductsMutation();
    const [getDraftProducts] = useGetDraftProductsMutation();

    const handleUnpublished = async () => {
        const res = await updateProductStatus({
            productID: productID,
        }).unwrap();

        if (res) {
            await getAllProducts(null).unwrap();
            // await getLiveProducts(null).unwrap();
            await getDraftProducts(null).unwrap();
            toastIdRef.current = toast({
                position: 'top',
                render: () => (
                    <ToastFeedback
                        btnColor={`purple.200`}
                        message={`Check draft to view product`}
                        title="Product Unpublished successfully!"
                        icon={undefined}
                        bgColor={undefined}
                        color={undefined}
                        handleClose={close}
                    />
                ),
            });
            onClose();
        }
    };
    return (
        <ModalComp modalSize={`4xl`} openModal={isOpen} closeModal={onClose}>
            <Center>
                <Image
                    width={`15rem`}
                    src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1709377717/productize/Wavy_Bus-09_Single-01_1_1_dtd83o.png`}
                />
            </Center>
            <Box textAlign={`center`} p={10}>
                <Text as={`h4`} color={`purple.300`} fontWeight={`600`}>
                    Are you sure you want to unpublish this product?
                </Text>
                <Text as={`h5`} color={`grey.500`} fontWeight={`300`} px={10}>
                    You have to subscribe to publish this product, although you can save to draft while waiting to subscribe
                </Text>
                <Flex justifyContent={`space-around`} mt={`3rem`} gap={5} px={32}>
                    <SharedButton
                        text={'Proceed to unpublish'}
                        width={`519px`}
                        height={'40px'}
                        bgColor={'purple.200'}
                        textColor={'grey.100'}
                        borderRadius={'4px'}
                        fontSize={{ base: `sm`, md: `md` }}
                        btnExtras={{
                            loadingText: `please wait...`,
                            isLoading: isLoading,
                            onClick: handleUnpublished,
                        }}
                    />
                    <SharedButton
                        btnExtras={{
                            border: `1px solid #DB3E3E`,
                            onClick: onClose,
                        }}
                        text={`cancel`}
                        width={`519px`}
                        height={'40px'}
                        bgColor={`transparent`}
                        textColor={'red.200'}
                        borderRadius={'4px'}
                        fontSize={{ base: `sm`, md: `md` }}
                    />
                </Flex>
            </Box>
        </ModalComp>
    );
};

// export default PaywallUnpublishWarning;
