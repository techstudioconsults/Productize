/* eslint-disable @nx/enforce-module-boundaries */
import notification from '@icons/Property_2_Notifications_1_w4v7g4.svg';
import { Icon } from '@productize/ui';
import { Icon as Iconify } from '@iconify/react';
import { Box, Center, IconButton, Popover, PopoverContent, PopoverTrigger, Text, VStack, Avatar, Divider, Stack, Button, HStack, Flex } from '@chakra-ui/react';
import { useNotifications } from './service';
import { useEffect, useRef } from 'react';
import { selectNotifications, useNotificationMutation, useReadAllNotificationMutation } from '@productize/redux';
import { useSelector } from 'react-redux';

const NotificationItem = ({ notice, onMarkAsSeen }) => {
    const { type, data, created_at } = notice;

    const renderContent = () => {
        switch (type) {
            case 'withdraw.successful':
                return (
                    <Text fontSize="xs" fontWeight="bold">
                        {data.message}
                    </Text>
                );

            case 'order.created':
                return (
                    <>
                        <Text fontSize="xs" fontWeight="bold">
                            {data.message}
                        </Text>
                        <Divider my={2} />
                        <Text fontSize="10px">Product: {data.product.title}</Text>
                        <Text fontSize="10px">Quantity: {data.order.quantity}</Text>
                        <Text fontSize="10px">Buyer: {data.buyer.full_name}</Text>
                    </>
                );

            case 'product.published':
            case 'product.created':
            case 'first.product.created':
                return (
                    <>
                        <Text fontSize="xs" fontWeight="bold">
                            {data.message}
                        </Text>
                        <Divider my={2} />
                        <Text fontSize="10px">Product: {data.product.title}</Text>
                    </>
                );

            case 'payout.card.added':
                return (
                    <>
                        <Text fontSize="xs" fontWeight="bold">
                            {data.message}
                        </Text>
                        <Divider my={2} />
                        <Text fontSize="10px">Account: {data.account.name}</Text>
                        <Text fontSize="10px">Bank: {data.account.bank_name}</Text>
                    </>
                );

            default:
                return (
                    <Text fontSize="xs" fontWeight="bold">
                        Unknown notification type
                    </Text>
                );
        }
    };

    return (
        <HStack p={2} bg="gray.50" borderRadius="md" boxShadow="sm" justifyContent="space-between">
            <Box w="100%" align="start">
                {data?.product?.thumbnail && <Avatar size="sm" src={data.product.thumbnail} />}
                <VStack align="start" spacing={0}>
                    {renderContent()}
                    <Text fontSize="10px" color="gray.500">
                        {new Date(created_at).toLocaleString()}
                    </Text>
                </VStack>
                <Flex color="purple.200" justifyContent="flex-end">
                    <Iconify cursor="pointer" onClick={() => onMarkAsSeen(notice)} icon="mdi:eye" />
                </Flex>
            </Box>
        </HStack>
    );
};

export function NotificationApp() {
    const [getNotice] = useNotificationMutation();
    const [readAllNotification, { isLoading: isReadingAll }] = useReadAllNotificationMutation();
    const newNotice = useSelector(selectNotifications);
    const audioRef = useRef(null);
    const playNotificationSound = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    };
    useNotifications(playNotificationSound);

    const readAllNotice = async () => {
        const res = await readAllNotification().unwrap();
        if (res) {
            getNotice();
        }
    };

    const readSingleNotification = async (notice) => {
        const res = await readAllNotification({ type: notice.type }).unwrap();
        if (res) {
            getNotice();
        }
    };

    useEffect(() => {
        getNotice();
    }, [getNotice]);

    return (
        <Popover>
            <audio ref={audioRef} src="../../../../../../../src/assets/slack-new-message-sound-ui-sounds.mp3" />
            <PopoverTrigger>
                <Center position="relative">
                    <IconButton size="sm" bg="transparent" icon={<Icon icon={notification} name="notification" />} />
                    {newNotice?.length > 0 && (
                        <Box border="2px solid #fff" position="absolute" bottom={2} right={1} borderRadius="100%" bg="green.200" boxSize=".7rem" />
                    )}
                </Center>
            </PopoverTrigger>

            <PopoverContent height="90vh" boxShadow="lg" borderRadius="md" p={4}>
                {newNotice?.length > 0 ? (
                    <Stack justifyContent="space-between" h="100%">
                        <Stack spacing={4} overflowY="auto">
                            {newNotice?.map((notice, index) => (
                                <NotificationItem key={index} notice={notice} onMarkAsSeen={readSingleNotification} />
                            ))}
                        </Stack>
                        <Button isLoading={isReadingAll} fontSize="xs" size="md" py={5} onClick={readAllNotice} color="purple.500">
                            Mark all as seen
                        </Button>
                    </Stack>
                ) : (
                    <Stack h={`100%`} alignItems={`center`} justifyContent={`center`} p={4} textAlign="center">
                        <Center mb={2} color={`purple.200`} fontSize="2xl">
                            <Iconify icon="nonicons:not-found-16" />
                        </Center>
                        <Text size="xs" fontWeight={500} color={`grey.400`}>
                            No new notifications at the moment. Check back later!
                        </Text>
                    </Stack>
                )}
            </PopoverContent>
        </Popover>
    );
}

export default NotificationApp;
