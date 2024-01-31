import { Avatar, Box, Card, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, Radio, Text } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

const BankCard = ({ account, src }) => {
    return (
        <Card w={{ base: `100%` }} borderRadius={`8px`} variant={`outline`} p={5} bgColor={`purple.100`}>
            <Flex justifyContent={`space-between`}>
                <Flex alignItems={`center`} gap={2}>
                    <Avatar name={account?.bank_name} size={`sm`} src={src} />
                    <Text fontWeight={600}>{account.bank_name}</Text>
                </Flex>
                <Radio isChecked={account.active} value="1" size={`lg`} />
            </Flex>
            <Box mt={3}>
                <Text fontSize={`sm`}>{account.account_number}</Text>
                <Text fontSize={`sm`}>{account.business_name}</Text>
            </Box>

            <Flex justifyContent={`flex-end`}>
                <Menu>
                    <MenuButton
                        isDisabled
                        size={`sm`}
                        onClick={(e) => e.stopPropagation()}
                        border={`none`}
                        as={IconButton}
                        aria-label="Options"
                        icon={<Icon icon={`pepicons-pop:dots-y`} />}
                        variant="outlined"
                    />
                    <MenuList zIndex={999}>
                        <MenuItem justifyContent={`flex-start`}>Edit</MenuItem>
                        <MenuItem color={`red.200`} justifyContent={`flex-start`}>
                            Delete Card
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
        </Card>
    );
};

export default BankCard;
