import { Box, Text } from '@chakra-ui/react';
interface emailProps {
    text?: string;
}

export function VerifyEmailTemplate({ text }: emailProps) {
    return (
        <Box>
            <Text textAlign={`center`} className="small-text" color={`green.200`} mb={2}>
                {text}
            </Text>
        </Box>
    );
}
