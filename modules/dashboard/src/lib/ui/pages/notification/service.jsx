/* eslint-disable @nx/enforce-module-boundaries */
import { useEffect, useState } from 'react';
import Pusher from 'pusher-js';
import { useSelector } from 'react-redux';
import { selectCurrentToken, selectCurrentUser, useNotificationMutation } from '@productize/redux';
import { ToastFeedback, useToastAction } from '@productize/ui';

const APP_KEY = import.meta.env.VITE_PUSHER_APP_KEY;
const APP_CLUSTER = import.meta.env.VITE_PUSHER_CLUSTER;



export const useNotifications = (playNotificationSound) => {
    const { toast, toastIdRef, close } = useToastAction();
    const [hasNotice, setNotice] = useState(false);
    const token = useSelector(selectCurrentToken);
    const user = useSelector(selectCurrentUser);
    const [getNotice] = useNotificationMutation();

    useEffect(() => {
        const pusher = new Pusher(APP_KEY, {
            cluster: APP_CLUSTER,
            forceTLS: false,
            authEndpoint: `${import.meta.env.VITE_BASE_URL}/broadcasting/auth`,
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
            toastIdRef.current = toast({
                position: 'top',
                render: () => (
                    <ToastFeedback
                        btnColor={`purple.200`}
                        title={data?.type.replace('.', ' ')}
                        message={data?.message}
                        icon={`iconamoon:notification-fill`}
                        iconFont={true}
                        bgColor={undefined}
                        color={undefined}
                        handleClose={close}
                    />
                ),
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
    }, [close, getNotice, playNotificationSound, toast, toastIdRef, token, user?.id]);

    return { hasNotice };
};
