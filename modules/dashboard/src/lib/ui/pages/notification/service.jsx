import { useEffect, useState } from 'react';
import Pusher from 'pusher-js';
import { useSelector } from 'react-redux';
import { selectCurrentToken, selectCurrentUser } from '@productize/redux';
import { useToast } from '@chakra-ui/react';

const APP_KEY = 'bb5f2a5342d24c39106c';
const APP_CLUSTER = 'mt1';

export const useNotifications = (playNotificationSound) => {
    const toast = useToast();
    const token = useSelector(selectCurrentToken);
    const user = useSelector(selectCurrentUser);
    const [newOrder, setNewOrder] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        const pusher = new Pusher(APP_KEY, {
            cluster: APP_CLUSTER,
            forceTLS: false,
            authEndpoint: 'https://productize-api.techstudio.academy/broadcasting/auth',
            auth: {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            },
        });

        pusher.connection.bind('error', (err) => {
            console.log('Pusher connection error:', err);
        });

        pusher.connection.bind('connected', () => {
            console.log('Pusher connected!');
        });

        const channel = pusher.subscribe(`private-users.${user?.id}`);

        const eventHandler = (data) => {
            console.log(data);
            setCount((prev) => prev + 1);
            setNewOrder((prev) => [data, ...prev]);
            const res = playNotificationSound(); // Play sound on event
            if (res) {
                toast({
                    title: data?.type.replace('.', ' '),
                    description: data?.message,
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                    variant: `subtle`,
                });
            }
        };

        channel.bind('first.product.created', eventHandler);
        channel.bind('product.published', eventHandler);
        channel.bind('payout.card.added', eventHandler);
        channel.bind('free.trial.ended', eventHandler);
        channel.bind('order.created', eventHandler);
        channel.bind('product.purchased', eventHandler);
        channel.bind('subscription.cancelled', eventHandler);
        channel.bind('subscription.payment.failed', eventHandler);
        channel.bind('withdraw.reversed', eventHandler);
        channel.bind('withdraw.successful', eventHandler);

        return () => {
            pusher.unsubscribe(`private-users.${user?.id}`);
        };
    }, [playNotificationSound, toast, token, user.email_verified, user?.id]);

    return { newOrder, count };
};
