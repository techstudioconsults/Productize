import { ToastFeedback, useToastAction } from './ToastFeedback';
import errorImg from '@icons/error.svg';
import { showAppError } from '@productize/redux';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

export const AppError = () => {
    const error = useSelector(showAppError);
    const { toast, toastIdRef, close } = useToastAction();
    const prevErrorRef = useRef(null); // Track the previous error

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
                        message={message}
                        title=""
                        icon={errorImg}
                        bgColor={undefined}
                        color={undefined}
                        handleClose={close}
                    />
                ),
            });
        }
    }, [error, toast, close, toastIdRef]);

    return null;
};
