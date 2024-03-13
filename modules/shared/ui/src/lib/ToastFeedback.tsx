import { Box, Card, Flex, Image, Text, useToast } from "@chakra-ui/react";
import successNotice from "@icons/success-notice.png";
import React, { useRef } from "react";

interface toastProps {
    title?: string;
    message: string;
    bgColor?: string;
    btnColor?: string;
    color?: string;
    icon?: string;
    handleClose?: () => void;
}

export const ToastFeedback = ({ title, message, icon, bgColor, color, btnColor, handleClose }: toastProps) => {
    return (
        <Card
            display={`flex`}
            flexDir={`row`}
            justifyContent={`space-between`}
            alignItems={`flex-end`}
            w={{ base: `100%`, lg: `702px` }}
            p={1}
            bg={bgColor || `grey.100`}
        >
            <Flex justifyContent={`space-between`} alignItems={`center`}>
                <Box borderRight={`1px solid grey`} p={2}>
                    <Image w={`32px`} h={`32px`} objectFit={`cover`} objectPosition={`center`} src={icon || successNotice} alt="img" />
                </Box>
                <Box p={2}>
                    <Text fontWeight={600}>{title || `Congratulations!`}</Text>
                    <Text className="small-text" color={color || `grey.400`}>
                        {message}
                    </Text>
                </Box>
            </Flex>
            <Text onClick={handleClose} color={btnColor} size={`sm`} cursor={`pointer`} mr={5} mb={2}>
                Close
            </Text>
        </Card>
    );
};

interface ToastActionProps {
    toast: ReturnType<typeof useToast>;
    toastIdRef: React.MutableRefObject<string | number | undefined>;
    close: () => void;
    closeAll: () => void;
}

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
