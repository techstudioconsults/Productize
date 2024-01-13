import { Avatar, Box, Card, Radio, Text } from "@chakra-ui/react";

const BankCard = ({ account, src }) => {
    return (
        <Card w={{ base: `100%`, lg: `initial` }} borderRadius={`8px`} variant={`outline`} flexDir={`row`} gap={5} px={3} py={5}>
            <Box>
                <Avatar size={`sm`} src={src} />
            </Box>
            <Box>
                <Text fontWeight={600}>{account.bank_name}</Text>
                <Text fontSize={`sm`}>{account.account_number}</Text>
                <Text fontSize={`sm`}>{account.business_name}</Text>
            </Box>
            <Box>
                <Radio isChecked={account.active} value="1" size={`lg`} />
            </Box>
        </Card>
    );
};

export default BankCard;
