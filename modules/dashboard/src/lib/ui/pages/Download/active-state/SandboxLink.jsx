import React from 'react';
import { Box, Text, VStack, HStack, Link, Heading, Stack, useColorModeValue } from '@chakra-ui/react';

const cardsData = [
    {
        title: 'Module One',
        description: 'Click to view this module',
        link: '#',
        icon: '🎉',
    },
    {
        title: 'Module Two',
        description: 'Click to view this module',
        link: '#',
        icon: '🎉',
    },
    {
        title: 'Module Three',
        description: 'Click to view this module',
        link: '#',
        icon: '🎉',
    },
    // Add more cards as needed
];

const NotificationCard = ({ title, description, link, icon }) => {
    const bg = useColorModeValue('white', 'gray.800');
    const hoverBg = useColorModeValue('gray.100', 'gray.700');

    return (
        <Link href={link} _hover={{ textDecoration: 'none' }}>
            <Box w={`100%`} p={4} bg={bg} borderRadius="md" boxShadow="md" _hover={{ bg: hoverBg }} transition="background-color 0.3s">
                <HStack spacing={4}>
                    <Box fontSize="2xl">{icon}</Box>
                    <VStack align="start" spacing={1}>
                        <Heading size="md">{title}</Heading>
                        <Text fontSize="sm" color="gray.500">
                            {description}
                        </Text>
                    </VStack>
                </HStack>
            </Box>
        </Link>
    );
};

const NotificationList = () => {
    return (
        <Stack spacing={4} p={4}>
            {cardsData.map((card, index) => (
                <NotificationCard key={index} title={card.title} description={card.description} link={card.link} icon={card.icon} />
            ))}
        </Stack>
    );
};

export default NotificationList;
