import { Box, Flex, Text, Image, Button } from '@chakra-ui/react';

export default function NoOrders() {
    return (
        <Box maxW="full" mt={8}>
            <Flex justify="center" align="center" bg="grey.200" rounded="md" h="297px">
                <Flex gap={4} direction="column" justify="center">
                    <Image
                        src="https://res.cloudinary.com/ceenobi/image/upload/v1697714644/icons/Chart_znlfld.png"
                        alt="Empty order"
                        w="147px"
                        h="121px"
                        mx="auto"
                    />
                    <Text color="purple.300" fontWeight="medium" fontSize="lg" lineHeight="base" align="center">
                        You do not have any active order yet.
                    </Text>
                    <Button
                        rounded="4px"
                        bg="purple.200"
                        color="purple.100"
                        h="48px"
                        fontWeight="medium"
                        fontSize="md"
                        lineHeight="base"
                        w="fit-content"
                        mx="auto"
                    >
                        Create your first product
                    </Button>
                </Flex>
            </Flex>
        </Box>
    );
}
