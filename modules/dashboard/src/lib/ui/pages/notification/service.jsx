import { useEffect, useState } from 'react';
import Pusher from 'pusher-js';
import { useSelector } from 'react-redux';
import { selectCurrentToken, selectCurrentUser, useNotificationMutation } from '@productize/redux';
import { useToast } from '@chakra-ui/react';

const APP_KEY = 'bb5f2a5342d24c39106c';
const APP_CLUSTER = 'mt1';

export const useNotifications = (playNotificationSound) => {
    const [hasNotice, setNotice] = useState(false);
    const toast = useToast();
    const token = useSelector(selectCurrentToken);
    const user = useSelector(selectCurrentUser);
    const [getNotice] = useNotificationMutation();

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
            setNotice(true);
            toast({
                title: data?.type.replace('.', ' '),
                description: data?.message,
                status: 'success',
                duration: 5000,
                isClosable: true,
                variant: 'subtle',
            });
            getNotice().unwrap();
            playNotificationSound();
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
    }, [getNotice, playNotificationSound, toast, token, user?.id]);

    return { hasNotice };
};
