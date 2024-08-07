import { Box, Card, Center, Flex, Image, Text, useToast } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import successNotice from '@icons/success-notice.png';
import React, { useRef } from 'react';

// Define the props interface for ToastFeedback component
interface ToastProps {
    title?: string;
    message: string;
    bgColor?: string;
    btnColor?: string;
    color?: string;
    icon?: string;
    iconFont?: boolean;
    handleClose?: () => void;
}

// ToastFeedback component
export const ToastFeedback: React.FC<ToastProps> = ({
    title = 'Congratulations!',
    message,
    icon = successNotice,
    bgColor = 'grey.100',
    color = 'grey.400',
    btnColor,
    handleClose,
    iconFont,
}) => {
    return (
        <Card display="flex" flexDir="row" justifyContent="space-between" alignItems="flex-end" w={{ base: '100%', lg: '702px' }} p={1} bg={bgColor}>
            <Flex justifyContent="space-between" alignItems="center">
                <Box borderRight="1px solid grey" p={2}>
                    {iconFont ? (
                        <Center color={`purple.300`}>
                            <Icon fontSize={`2rem`} icon={icon} />
                        </Center>
                    ) : (
                        <Image w="32px" h="32px" objectFit="cover" objectPosition="center" src={icon} alt="img" />
                    )}
                </Box>
                <Box p={2}>
                    <Text fontWeight={600}>{title}</Text>
                    <Text className="small-text" color={color}>
                        {message}
                    </Text>
                </Box>
            </Flex>
            <Text onClick={handleClose} color={btnColor} size="sm" cursor="pointer" mr={5} mb={2}>
                Close
            </Text>
        </Card>
    );
};

// Define the return type for useToastAction hook
interface ToastActionProps {
    toast: ReturnType<typeof useToast>;
    toastIdRef: React.MutableRefObject<string | number | undefined>;
    close: () => void;
    closeAll: () => void;
}

// useToastAction hook
export const useToastAction = (): ToastActionProps => {
    const toast = useToast();
    const toastIdRef = useRef<string | number>();

    const close = () => {
        if (toastIdRef.current) {
            toast.close(toastIdRef.current);
        }
    };

    const closeAll = () => {
        toast.closeAll();
    };

    return { toast, toastIdRef, close, closeAll };
};
