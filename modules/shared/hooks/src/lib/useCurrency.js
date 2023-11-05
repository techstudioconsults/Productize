import React from 'react';

export function useCurrency() {
  const formatter = React.useMemo(() => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
    });
  }, []);

  function formatCurrency(amount) {
    return formatter.format(amount || 0);
  }

  return formatCurrency;
}
