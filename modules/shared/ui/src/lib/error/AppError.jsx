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
    const prevErrorMessageRef = useRef(''); // Track the previous error message

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
            const message =
                error?.data?.message ||
                (error?.status === 500 || error?.originalStatus === 500
                    ? 'Server error...please try again'
                    : 'An error has occurred... please try again later, or check your internet connection');

            // Only show the toast if the error message is different from the previous one
            if (message !== prevErrorMessageRef.current) {
                prevErrorMessageRef.current = message;
                prevErrorRef.current = error; // Update the previous error

                toastIdRef.current = toast({
                    position: 'top',
                    render: () => (
                        <ToastFeedback
                            btnColor="purple.200"
                            message={message}
                            title={`Something went wrong`}
                            icon={errorImg}
                            bgColor={undefined}
                            color={undefined}
                            handleClose={close}
                        />
                    ),
                });
            }
        }
    }, [error, toast, close, toastIdRef]);

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
