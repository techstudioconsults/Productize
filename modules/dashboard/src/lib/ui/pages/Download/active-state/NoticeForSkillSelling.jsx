/* eslint-disable @nx/enforce-module-boundaries */
import React from 'react';
import { Box, Text, VStack, HStack, Link, Heading, Flex } from '@chakra-ui/react';
import { Icon } from '@productize/ui';

export const NotificationCard = ({ title, description, link, icon }) => {
    return (
        <Link h={`fit-content`} href={link} _hover={{ textDecoration: 'none' }}>
            <Flex bg={`#FFFFFF`} w={`351px`} h={`99px`} p={4} borderRadius="lg" _hover={{ boxShadow: 'md' }} transition="box-shadow 0.3s">
                <HStack spacing={7}>
                    <Box fontSize="3xl" color="red.500">
                        <Icon size={`4rem`} icon={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951009/productize/Image_4_hksvcm_ulhhl3.png`} />
                    </Box>
                    <VStack align="start" spacing={3}>
                        <Heading size="md" color="black">
                            {title}
                        </Heading>
                        <Text fontSize="sm" color="blue.500">
                            {`Click here to view`}
                        </Text>
                    </VStack>
                </HStack>
            </Flex>
        </Link>
    );
};
