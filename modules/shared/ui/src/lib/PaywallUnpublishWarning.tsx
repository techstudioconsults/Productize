import { Box, Center, Flex, Image, Text } from '@chakra-ui/react';
import React, { memo } from 'react';
import { ModalComp } from './Modal';
import { SharedButton } from './SharedButton';
import { ToastFeedback, useToastAction } from './ToastFeedback';
import { useGetAllProductsMutation, useGetDraftProductsMutation, useUpdateProductStatusMutation } from '@productize/redux';

interface PaywallUnpublishWarningProps {
    onClose: () => void;
    isOpen: boolean;
    productID: string | undefined | null;
}

export const PaywallUnpublishWarning: React.FC<PaywallUnpublishWarningProps> = memo(({ onClose, isOpen, productID }) => {
    const { toast, toastIdRef, close } = useToastAction();
    const [updateProductStatus, { isLoading }] = useUpdateProductStatusMutation();
    const [getAllProducts] = useGetAllProductsMutation();
    const [getDraftProducts] = useGetDraftProductsMutation();

    const handleUnpublished = async () => {
        try {
            const res = await updateProductStatus({ productID }).unwrap();

            if (res) {
                await getAllProducts(null).unwrap();
                await getDraftProducts(null).unwrap();
                toastIdRef.current = toast({
                    position: 'top',
                    render: () => (
                        <ToastFeedback
                            btnColor="purple.200"
                            message="Check draft to view product"
                            title="Product Unpublished successfully!"
                            handleClose={close}
                        />
                    ),
                });
                onClose();
            }
        } catch (error) {
            console.error('Failed to unpublish product:', error);
        }
    };

    return (
        <ModalComp modalSize="4xl" openModal={isOpen} closeModal={onClose}>
            <Center>
                <Image
                    width="15rem"
                    src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1709377717/productize/Wavy_Bus-09_Single-01_1_1_dtd83o.png"
                />
            </Center>
            <Box textAlign="center" p={10}>
                <Text as="h4" color="purple.300" fontWeight="600">
                    Are you sure you want to unpublish this product?
                </Text>
                <Text as="h5" color="grey.500" fontWeight="300" px={10}>
                    You have to subscribe to publish this product, although you can save to draft while waiting to subscribe.
                </Text>
                <Flex justifyContent="space-around" mt="3rem" gap={5} px={32}>
                    <SharedButton
                        text="Proceed to unpublish"
                        width="519px"
                        height="40px"
                        bgColor="purple.200"
                        textColor="grey.100"
                        borderRadius="4px"
                        fontSize={{ base: 'sm', md: 'md' }}
                        btnExtras={{
                            loadingText: 'please wait...',
                            isLoading: isLoading,
                            onClick: handleUnpublished,
                        }}
                    />
                    <SharedButton
                        text="cancel"
                        width="519px"
                        height="40px"
                        bgColor="transparent"
                        textColor="red.200"
                        borderRadius="4px"
                        fontSize={{ base: 'sm', md: 'md' }}
                        btnExtras={{
                            border: '1px solid #DB3E3E',
                            onClick: onClose,
                        }}
                    />
                </Flex>
            </Box>
        </ModalComp>
    );
});

PaywallUnpublishWarning.displayName = 'PaywallUnpublishWarning';
