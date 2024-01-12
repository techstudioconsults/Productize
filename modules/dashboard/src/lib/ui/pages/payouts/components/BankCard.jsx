import { Avatar, Box, Card, Radio, Text } from "@chakra-ui/react";

const BankCard = ({ bankName, src }) => {
    return (
        <Card w={{ base: `100%` , lg:`initial`}} borderRadius={`8px`} variant={`outline`} flexDir={`row`} gap={5} px={3} py={5}>
            <Box>
                <Avatar size={`sm`} src={src} />
            </Box>
            <Box>
                <Text fontWeight={600}>{bankName}</Text>
                <Text fontSize={`sm`}>0123456789</Text>
                <Text fontSize={`sm`}>Temitope Shonde</Text>
            </Box>
            <Box>
                <Radio value="1" size={`lg`} />
            </Box>
        </Card>
    );
};

export default BankCard;
