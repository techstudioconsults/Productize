export const useDiscountCalculator = () => {
    const calculateDiscountPercentage = (originalPrice, discountPrice) => {
        if (originalPrice > 0) {
            const discount = ((originalPrice - discountPrice) / originalPrice) * 100;
            const remaining = (discountPrice / originalPrice) * 100;
            return { discount, remaining };
        } else {
            return 0;
        }
    };

    return {
        calculateDiscountPercentage,
    };
};
