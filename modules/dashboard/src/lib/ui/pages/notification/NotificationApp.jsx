// NotificationApp.js
/* eslint-disable @nx/enforce-module-boundaries */
import notification from '@icons/Property_2_Notifications_1_w4v7g4.svg';
import { Icon } from '@productize/ui';
import { Box, Center, IconButton, Popover, PopoverContent, PopoverTrigger, Text, VStack, HStack } from '@chakra-ui/react';
import { useNotifications } from './service';
import { Link } from 'react-router-dom';
import { Icon as Iconify } from '@iconify/react';
import { useLinks } from '../../utils/links';

export function NotificationApp() {
    const { newOrder } = useNotifications();
    const { count, makeunseenOrderSeen } = useLinks();

    const handleMarkAsSeen = () => {
        makeunseenOrderSeen();
    };

    return (
        <Popover placement={`top-start`}>
            <PopoverTrigger>
                <Center position="relative">
                    <IconButton size="sm" bg="transparent" _focus="transparent" icon={<Icon icon={notification} name="notification" />} />
                    {count > 0 && <Box border="2px solid #fff" position="absolute" bottom={2} right={1} borderRadius="100%" bg="green.200" boxSize=".7rem" />}
                </Center>
            </PopoverTrigger>

            {/* <PopoverContent width="320px" boxShadow="lg" borderRadius="md" p={4}>
                {newOrder.length > 0 ? (
                    <VStack spacing={4}>
                        {newOrder.map((order, index) => (
                            <Box key={index} p={3} borderBottom="1px solid #eee" width="100%">
                                <Text fontWeight="bold" fontSize="md">
                                    {order.product_title}
                                </Text>
                                <HStack justifyContent="space-between">
                                    <Text fontSize={`xs`}>Quantity: {order.quantity}</Text>
                                    <Text fontWeight="bold">${order.total_amount}</Text>
                                </HStack>
                            </Box>
                        ))}
                        <Link to={`/dashboard/orders`} onClick={handleMarkAsSeen}>
                            Mark All As Seen
                        </Link>
                    </VStack>
                ) : (
                    <Box p={4} textAlign="center">
                        <Center mb={2} color="gray.400" fontSize={`2xl`}>
                            <Iconify icon="nonicons:not-found-16" />
                        </Center>
                        <Text fontWeight={`bold`}>No new orders</Text>
                    </Box>
                )}
            </PopoverContent> */}
        </Popover>
    );
}

export default NotificationApp;
