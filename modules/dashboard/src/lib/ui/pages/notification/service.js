import { useCallback, useEffect, useState } from 'react';
import Pusher from 'pusher-js';
import { useGetCountOfUnseenOrdersMutation } from '@productize/redux';
import { useSelector } from 'react-redux';
import { selectCurrentToken, selectCurrentUser } from '@productize/redux';

const APP_KEY = 'bb5f2a5342d24c39106c';
const APP_CLUSTER = 'mt1';

export const useNotifications = () => {
    const [getCountOfUnseenOrders] = useGetCountOfUnseenOrdersMutation();
    const token = useSelector(selectCurrentToken);
    const user = useSelector(selectCurrentUser);
    const [newOrder, setNewOrder] = useState([]);
    const [count, setCount] = useState(0);
    // const toast = useToast();

    const fetchUnseenCount = useCallback(async () => {
        try {
            const res = await getCountOfUnseenOrders(null).unwrap();
            setCount(res?.data?.count);
        } catch (error) {
            console.error('Error fetching unseen orders count:', error);
        }
    }, [getCountOfUnseenOrders]);

    useEffect(() => {
        if (user?.email_verified) {
            fetchUnseenCount();
        }

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

        const channel = pusher.subscribe(`private-order-created.${user?.id}`);

        channel.bind('order-created', (data) => {
            console.log(data);
            setCount((prev) => prev + 1);
            setNewOrder((prev) => [data, ...prev]);
            // toast({
            //     title: 'Order created.',
            //     description: `You have ${count + 1} notifications available`, // Increment the count here
            //     status: 'success',
            //     duration: 5000,
            //     isClosable: true,
            //     position: `bottom-right`,
            // });
        });

        return () => {
            pusher.unsubscribe(`private-order-created.${user?.id}`);
        };
    }, [fetchUnseenCount, token, user?.email_verified, user?.id]);

    return { newOrder, fetchUnseenCount, count };
};
