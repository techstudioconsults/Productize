import { useMemo } from 'react';

export function useCurrency() {
    const formatter = useMemo(() => {
        return new Intl.NumberFormat('en-NG', {
            style: 'currency',
            currency: 'NGN',
        });
    }, []);

    const formatCurrency = (amount: number): string => {
        return formatter.format(amount || 0);
    };

    return formatCurrency;
}
