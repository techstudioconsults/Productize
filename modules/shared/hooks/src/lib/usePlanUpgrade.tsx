import { useCallback } from 'react';
import errorImg from '@icons/bad-notice.png';
import { useUpgradePlanMutation } from '@productize/redux';
import { ToastFeedback, useToastAction } from '@productize/ui';

interface UpgradePlanResponse {
    data?: {
        authorization_url: string;
        access_code: string;
    };
}

interface UpgradePlanError {
    data?: {
        message: string;
    };
}

export const usePlanUpgrade = () => {
    const [upgradePlan, { isLoading, isError, isSuccess, data, error }] = useUpgradePlanMutation<UpgradePlanResponse, UpgradePlanError>();
    const { toast, toastIdRef, close } = useToastAction();

    const upgrade = useCallback(async () => {
        try {
            const res = await upgradePlan(null).unwrap();
            if (res?.data) {
                window.location.href = res.data.authorization_url;
            }
        } catch (err) {
            const errorMessage = (err as UpgradePlanError)?.data?.message || 'An unexpected error occurred.';
            toastIdRef.current = toast({
                position: 'top',
                render: () => (
                    <ToastFeedback handleClose={close} btnColor="red.600" message={errorMessage} title="Upgrade Plan failed!" icon={errorImg} color="red.600" />
                ),
            });
        }
    }, [upgradePlan, toast, toastIdRef, close]);

    return { upgrade, upgradeStatus: { isLoading, isError, isSuccess, data, error } };
};
