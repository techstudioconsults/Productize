import { Box, Flex, FormHelperText, Text } from "@chakra-ui/react";

export const Heading = ({ title, tip }) => {
    return (
        <Flex mb={4} justifyContent="space-between" alignItems="flex-end">
            <Box>
                <Text color="purple.300" fontWeight={600}>
                    {title}
                </Text>
                <FormHelperText color="gray.400" fontSize={{ base: 'xs', md: 'sm' }}>
                    {tip}
                </FormHelperText>
            </Box>
        </Flex>
    );
};
