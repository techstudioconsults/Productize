import React from 'react';

export function useCurrency() {
  const formatter = React.useMemo(() => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
    });
  }, []);

  function formatCurrency(amount: number) {
    return formatter.format(amount);
  }

  return formatCurrency;
}
