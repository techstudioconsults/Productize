import { Alert, AlertDescription, AlertIcon, AlertTitle, HStack } from '@chakra-ui/react';
import { ToastFeedback, useToastAction } from '../ToastFeedback';
import errorImg from '@icons/error.svg';
// import internetErrorImg from '@icons/internet-error.svg'; // Add an icon for internet error
import { showAppError } from '@productize/redux';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import './style.scss';

export const AppError = () => {
    const error = useSelector(showAppError);
    const { toast, toastIdRef, close } = useToastAction();
    const prevErrorRef = useRef(null); // Track the previous error
    const [isOnline, setIsOnline] = useState(navigator.onLine); // Track internet connection status
    const [showAlert, setShowAlert] = useState(!navigator.onLine); // State to control the alert visibility

    useEffect(() => {
        const handleOnline = () => {
            setIsOnline(true);
            window.location.reload(); // Refresh the page once online
        };

        const handleOffline = () => {
            setIsOnline(false);
            setShowAlert(true); // Show the alert when offline
        };

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    useEffect(() => {
        if (error && error !== prevErrorRef.current) {
            prevErrorRef.current = error; // Update the previous error

            let message = error?.data?.message;
            if (error?.status === 500 || error?.originalStatus === 500) {
                message = 'Server error...please try again';
            }

            toastIdRef.current = toast({
                position: 'top',
                render: () => (
                    <ToastFeedback
                        btnColor="purple.200"
                        message={message || `Something went wrong...please try again`}
                        title=""
                        icon={errorImg}
                        bgColor={undefined}
                        color={undefined}
                        handleClose={close}
                    />
                ),
            });
        }
    }, [error, toast, close, toastIdRef, isOnline]);

    useEffect(() => {
        if (isOnline) {
            setShowAlert(false); // Hide the alert when back online
        }
    }, [isOnline]);

    if (!isOnline || showAlert) {
        return (
            <div className={`slide-in ${showAlert ? 'active' : ''}`}>
                <Alert flexDir={{ base: `column`, md: `row` }} fontSize={{ base: `xs`, md: `sm` }} status="error">
                    <HStack gap={0}>
                        <AlertIcon boxSize={`16px`} />
                        <AlertTitle>No Internet Connection</AlertTitle>
                    </HStack>
                    <AlertDescription>Check your internet connection and try again.</AlertDescription>
                </Alert>
            </div>
        );
    }

    return null;
};
