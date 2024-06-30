/* eslint-disable @nx/enforce-module-boundaries */
import { useCallback } from 'react';
import { useUpgradePlanMutation } from '@productize/redux';

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

    const upgrade = useCallback(async () => {
        try {
            const res = await upgradePlan(null).unwrap();
            if (res?.data) {
                window.location.href = res.data.authorization_url;
            }
        } catch (err) {
            return;
            // const errorMessage = (err as UpgradePlanError)?.data?.message || 'An unexpected error occurred.';
            // toastIdRef.current = toast({
            //     position: 'top',
            //     render: () => (
            //         <ToastFeedback handleClose={close} btnColor="red.600" message={errorMessage} title="Upgrade Plan failed!" icon={errorImg} color="red.600" />
            //     ),
            // });
        }
    }, [upgradePlan]);

    return { upgrade, upgradeStatus: { isLoading, isError, isSuccess, data, error } };
};
