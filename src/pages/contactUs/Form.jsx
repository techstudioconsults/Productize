import React from 'react';
import { Box, Button, Flex, FormControl, Input, Stack, Textarea } from '@chakra-ui/react';

const CustomForm = () => {
    return (
        <Box p={6} bg="grey.100" borderRadius="md" boxShadow="3.9px 3.9px 0px 1px #0E0A2D">
            <Stack spacing={4}>
                <Flex justify="space-between">
                    <FormControl borderColor={`grey.800`} isRequired>
                        <Input size={`lg`} placeholder="First Name" />
                    </FormControl>
                    <FormControl borderColor={`grey.800`} isRequired ml={2}>
                        <Input size={`lg`} placeholder="Last Name" />
                    </FormControl>
                </Flex>
                <FormControl borderColor={`grey.800`} isRequired>
                    <Input size={`lg`} type="email" placeholder="Email Address" />
                </FormControl>
                <FormControl borderColor={`grey.800`} isRequired>
                    <Input size={`lg`} placeholder="Subject" />
                </FormControl>
                <FormControl borderColor={`grey.800`} isRequired>
                    <Textarea h={`10rem`} placeholder="Subject" />
                </FormControl>
                <Button colorScheme="yellow" width="full">
                    Get Started
                </Button>
            </Stack>
        </Box>
    );
};

export default CustomForm;
