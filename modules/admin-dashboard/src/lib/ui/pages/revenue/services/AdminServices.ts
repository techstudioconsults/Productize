import { useEffect, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import {
    useGetUserMutation,
    selectCurrentUser,
    useGetRevenueAnalyticsMutation,
    selectRevenueAnalytics,
    useGetAllOrdersMutation,
    selectAllOrders,
    useGetAllProductsMutation,
} from '@productize/redux';
import { useDateRangeFormat } from '@productize/hooks';

export const useUser = () => {
    const [getUser, { error, isError }] = useGetUserMutation();
    const user = useSelector(selectCurrentUser);

    useEffect(() => {
        const fetchUser = async () => {
            await getUser(null).unwrap();
        };
        fetchUser();
    }, [getUser]);
    console.log(isError);

    // if (isError) {
    // }

    const refreshUser = useCallback(async () => {
        await getUser(null).unwrap();
    }, [getUser]);

    return { user, refreshUser };
};

export const useProductAnalytics = () => {
    const [isLoading, setLoading] = useState(true);
    const [getRevenueAnalytics] = useGetRevenueAnalyticsMutation();
    const revenueAnalytics = useSelector(selectRevenueAnalytics);

    const fetchProductAnalytics = useCallback(async () => {
        try {
            const res = await getRevenueAnalytics(null).unwrap();
            if (res.data) {
                setLoading(false);
            }
        } catch (error) {
            console.error('Error fetching product analytics:', error);
            setLoading(false);
        }
    }, [getRevenueAnalytics]);

    useEffect(() => {
        fetchProductAnalytics();
    }, [fetchProductAnalytics]);

    return { revenueAnalytics, isLoading };
};

export const useOrders = () => {
    const [isLoading, setLoading] = useState(true);
    const [getAllOrders] = useGetAllOrdersMutation();
    const orders = useSelector(selectAllOrders);

    const fetchAllOrders = useCallback(async () => {
        try {
            const res = await getAllOrders(null).unwrap();

            if (res.data) {
                setLoading(false);
            }
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    }, [getAllOrders]);

    useEffect(() => {
        fetchAllOrders();
    }, [fetchAllOrders]);

    return { orders, isLoading, fetchAllOrders };
};

export const useExport = () => {
    const [exportLoading, setExportLoading] = useState(false);

    const handleExport = useCallback(async () => {
        setExportLoading(true);
        try {
            console.log(`Export functionality`);
            // Add your export logic here
        } catch (error) {
            console.error('Error exporting data:', error);
        } finally {
            setExportLoading(false);
        }
    }, []);

    return { handleExport, exportLoading };
};

export const useFilter = () => {
    const [startDate, setStartDate] = useState(``);
    const [endDate, setEndDate] = useState(``);
    const [status, setStatus] = useState(``);
    const formatDateRange = useDateRangeFormat();

    const handleStatusChange = useCallback((value: string) => {
        setStatus(value.toLowerCase());
    }, []);

    const handleDateRangeChange = useCallback(
        (value: [Date, Date]) => {
            if (value) {
                setStartDate(formatDateRange(value[0].getTime()));
                setEndDate(formatDateRange(value[1].getTime()));
            } else {
                setStartDate(``);
                setEndDate(``);
            }
        },
        [formatDateRange]
    );

    return { startDate, endDate, status, handleStatusChange, handleDateRangeChange };
};

export const useProducts = () => {
    const [getAllProducts, getAllProductsStatus] = useGetAllProductsMutation();

    const filterTable = useCallback(async () => {
        try {
            await getAllProducts(null).unwrap();
            console.log('Filter functionality');
        } catch (error) {
            console.error('Error filtering products:', error);
        }
    }, [getAllProducts]);

    return { getAllProductsStatus, filterTable };
};
