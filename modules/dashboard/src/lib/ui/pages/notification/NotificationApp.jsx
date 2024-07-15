/* eslint-disable @nx/enforce-module-boundaries */
import notification from '@icons/Property_2_Notifications_1_w4v7g4.svg';
import { Icon } from '@productize/ui';
import { Icon as Iconify } from '@iconify/react';
import { Box, Center, HStack, IconButton, Popover, PopoverContent, PopoverTrigger, Text, VStack, Avatar, Divider, Link, Stack } from '@chakra-ui/react';
import { useNotifications } from './service';
import { useEffect, useRef, useState } from 'react';
import { useNotificationMutation } from '@productize/redux';

export function NotificationApp() {
    const [getNotice] = useNotificationMutation();
    const [newOrder, setNewOrder] = useState([]);
    const audioRef = useRef(null);
    const playNotificationSound = () => {
        if (audioRef.current) {
            return audioRef.current.play();
        }
    };
    const { count } = useNotifications(playNotificationSound);

    useEffect(() => {
        const getNotification = async () => {
            const res = await getNotice().unwrap();
            setNewOrder(res.data);
            console.log(res);
        };
        getNotification();
    }, [getNotice]);

    return (
        <Popover>
            <audio ref={audioRef} src="/path-to-your-notification-sound.mp3" />
            <PopoverTrigger>
                <Center position="relative">
                    <IconButton size="sm" bg="transparent" icon={<Icon icon={notification} name="notification" />} />
                    {count > 0 && <Box border="2px solid #fff" position="absolute" bottom={2} right={1} borderRadius="100%" bg="green.200" boxSize=".7rem" />}
                </Center>
            </PopoverTrigger>

            <PopoverContent wisth height={`30rem`} overflowY={`auto`} boxShadow="lg" borderRadius="md" p={4}>
                {newOrder?.length > 0 ? (
                    <Stack spacing={4}>
                        {newOrder?.map((notice, index) => (
                            <Box key={index} p={2} bg="gray.50" borderRadius="md" boxShadow="sm">
                                <Box align="start">
                                    <Avatar size="sm" src={notice?.data?.product?.thumbnail} />
                                    <VStack align="start" spacing={0}>
                                        <Text fontWeight="bold">{notice?.data?.message}</Text>
                                        <Text fontSize="sm" color="gray.500">
                                            {new Date(notice?.created_at).toLocaleString()}
                                        </Text>
                                    </VStack>
                                </Box>
                                <Divider my={2} />
                                <Box justify="space-between">
                                    <Text fontSize="sm">Product: {notice?.data?.product?.title}</Text>
                                    <Text fontSize="sm">Quantity: {notice?.data?.order?.quantity}</Text>
                                </Box>
                                <Text fontSize="sm">Buyer: {notice?.data?.buyer?.full_name}</Text>
                            </Box>
                        ))}
                        <Link href={`/dashboard/orders`} color="blue.500">
                            Mark All As Seen
                        </Link>
                    </Stack>
                ) : (
                    <Box p={4} textAlign="center">
                        <Center mb={2} color="gray.400" fontSize={`2xl`}>
                            <Iconify icon="nonicons:not-found-16" />
                        </Center>
                        <Text fontWeight={`bold`}>No new orders</Text>
                    </Box>
                )}
            </PopoverContent>
        </Popover>
    );
}

export default NotificationApp;
