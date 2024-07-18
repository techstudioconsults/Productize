/* eslint-disable @nx/enforce-module-boundaries */
import notification from '@icons/Property_2_Notifications_1_w4v7g4.svg';
import { Icon } from '@productize/ui';
import { Icon as Iconify } from '@iconify/react';
import {
    Box,
    Center,
    IconButton,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Text,
    VStack,
    Avatar,
    Divider,
    Stack,
    Button,
    HStack,
    useDisclosure,
    useBreakpointValue,
} from '@chakra-ui/react';
import { useNotifications } from './service';
import { useEffect, useRef } from 'react';
import { selectNotifications, useNotificationMutation, useReadAllNotificationMutation } from '@productize/redux';
import { useSelector } from 'react-redux';
import toastImg from '@icons/star-notice.png';

const NotificationItem = ({ notice, onMarkAsSeen }) => {
    const { type, data, created_at } = notice;

    const renderContent = () => {
        switch (type) {
            case 'withdraw.successful':
                return (
                    <Text fontSize="sm" fontWeight="bold">
                        {data.message}
                    </Text>
                );

            case 'order.created':
                return (
                    <>
                        <Text fontSize="sm" fontWeight="bold">
                            {data.message}
                        </Text>
                        <Text fontSize="xs" color="gray.500">
                            Product: {data.product.title}
                        </Text>
                    </>
                );

            case 'product.published':
            case 'product.created':
            case 'first.product.created':
                return (
                    <>
                        <Text fontSize="sm" fontWeight="bold">
                            {data.message}
                        </Text>
                        <Text fontSize="xs" color="gray.500">
                            Product: {data.product.title}
                        </Text>
                    </>
                );

            case 'payout.card.added':
                return (
                    <>
                        <Text fontSize="sm" fontWeight="bold">
                            {data.message}
                        </Text>
                        <Text fontSize="xs" color="gray.500">
                            Account: {data.account.name}
                        </Text>
                        <Text fontSize="xs" color="gray.500">
                            Bank: {data.account.bank_name}
                        </Text>
                    </>
                );

            default:
                return (
                    <Text fontSize="sm" fontWeight="bold">
                        Unknown notification type
                    </Text>
                );
        }
    };

    return (
        <HStack border={`1px solid #CFCFD0`} p={4} bg="white" borderRadius="md" justifyContent="space-between" alignItems="center">
            <Avatar size="sm" src={data?.product?.thumbnail || toastImg} />
            <VStack  borderLeft={`1px solid`} align="start" spacing={0} flex="1" pl={4}>
                {renderContent()}
                <Text fontSize="xs" color="gray.500">
                    {new Date(created_at).toLocaleString()}
                </Text>
            </VStack>
            <Button size="sm" variant="link" colorScheme="purple" onClick={() => onMarkAsSeen(notice)}>
                Seen
            </Button>
        </HStack>
    );
};

export function NotificationApp() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();
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

    const recentNotifications = newNotice.slice(0, 4); // assuming the first 4 are recent for example
    const olderNotifications = newNotice.slice(4); // the rest are older

    const drawerSize = useBreakpointValue({ base: 'full', md: 'md' });

    return (
        <>
            <audio ref={audioRef} src="../../../../../../../src/assets/slack-new-message-sound-ui-sounds.mp3" />
            <Center position="relative">
                <IconButton ref={btnRef} size="sm" bg="transparent" icon={<Icon icon={notification} name="notification" />} onClick={onOpen} />
                {newNotice?.length > 0 && (
                    <Box border="2px solid #fff" position="absolute" bottom={2} right={1} borderRadius="100%" bg="green.200" boxSize=".7rem" />
                )}
            </Center>

            <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef} size={drawerSize}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Notifications</DrawerHeader>

                    <DrawerBody>
                        {newNotice?.length > 0 ? (
                            <Stack spacing={4}>
                                <Box>
                                    <Text fontSize="lg" fontWeight="bold">
                                        Recent
                                    </Text>
                                    <Stack spacing={4} mt={2}>
                                        {recentNotifications?.map((notice, index) => (
                                            <NotificationItem key={index} notice={notice} onMarkAsSeen={readSingleNotification} />
                                        ))}
                                    </Stack>
                                </Box>
                                <Divider my={4} />
                                <Box>
                                    <Text fontSize="lg" fontWeight="bold">
                                        Older
                                    </Text>
                                    <Stack spacing={4} mt={2}>
                                        {olderNotifications?.map((notice, index) => (
                                            <NotificationItem key={index} notice={notice} onMarkAsSeen={readSingleNotification} />
                                        ))}
                                    </Stack>
                                </Box>
                            </Stack>
                        ) : (
                            <Stack h="100%" alignItems="center" justifyContent="center" textAlign="center">
                                <Center mb={2} color="purple.200" fontSize="2xl">
                                    <Iconify icon="nonicons:not-found-16" />
                                </Center>
                                <Text size="xs" fontWeight={500} color="grey.400">
                                    No new notifications at the moment. Check back later!
                                </Text>
                            </Stack>
                        )}
                    </DrawerBody>

                    <DrawerFooter>
                        <Button isLoading={isReadingAll} fontSize="xs" size="md" py={5} onClick={readAllNotice} color="purple.500">
                            Mark all as seen
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
}

export default NotificationApp;
