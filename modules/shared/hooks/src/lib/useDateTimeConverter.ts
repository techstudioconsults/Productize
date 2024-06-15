import { useCallback } from 'react';

export const useTime = () => {
    const formatTime = useCallback((timestamp: number): string => {
        const dateObj = new Date(timestamp);
        const hours = dateObj.getHours();
        const minutes = dateObj.getMinutes().toString().padStart(2, '0');
        const period = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = (hours % 12 || 12).toString().padStart(2, '0');
        return `${formattedHours}:${minutes} ${period}`;
    }, []);

    return formatTime;
};

export const useDate = () => {
    const formatDate = useCallback((timestamp: number): string => {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const dateObj = new Date(timestamp);
        const day = dateObj.getDate();
        const month = months[dateObj.getMonth()];
        const year = dateObj.getFullYear();
        return `${day} ${month}, ${year}`;
    }, []);

    return formatDate;
};

export const useDateRangeFormat = () => {
    const convertDateFormat = useCallback((timestamp: number): string => {
        const dateObj = new Date(timestamp);
        const year = dateObj.getFullYear();
        const month = (dateObj.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
        const day = dateObj.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    }, []);

    return convertDateFormat;
};
