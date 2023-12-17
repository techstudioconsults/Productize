import { Box, Card, Image, Text } from "@chakra-ui/react";

interface toastProps {
    title?: string;
    message: string;
    bgColor?: string;
    color?: string;
    icon?: string;
}

export const ToastFeedback = ({ title, message, icon, bgColor, color }: toastProps) => {
    return (
        <Card display={`flex`} flexDir={`row`} alignItems={`center`} w={{ base: `100%`, lg: `702px` }} p={1} bg={bgColor || `grey.100`}>
            <Box borderRight={`1px solid green`} p={2}>
                <Image
                    objectFit={`cover`}
                    objectPosition={`center`}
                    src={icon || `https://res.cloudinary.com/kingsleysolomon/image/upload/v1700045717/productize/Rectangle_lohkyh.png`}
                    alt="img"
                />
            </Box>
            <Box p={2}>
                <Text fontWeight={600}>{title || `Congratulations!`}</Text>
                <Text className="small-text" color={color || `grey.400`}>
                    {message}
                </Text>
            </Box>
        </Card>
    );
};
