/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import axios from 'axios';
import download from 'downloadjs';
import { useSelector } from 'react-redux';
import { selectCurrentToken, useGetDeletedProductsMutation } from '@productize/redux';
import { useDateRangeFormat } from '@productize/hooks';
// import { useToastAction } from '@productize/ui';

const BASE_URL = import.meta.env['VITE_BASE_URL'];

export const useExportProducts = () => {
    const [exportLoading, setExportLoading] = useState(false);
    const token = useSelector(selectCurrentToken);
    // const { toast, toastIdRef, close } = useToastAction();

    const handleExport = async () => {
        setExportLoading(true);
        try {
            const res = await axios.get(`${BASE_URL}/products/download?status=deleted&format=csv`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (res.status === 200) {
                const blob = new Blob([res.data], { type: 'text/csv' });
                download(blob, 'Products.csv');
                // Uncomment to show toast notification
                // toastIdRef.current = toast({
                //     position: 'top',
                //     render: () => (
                //         <ToastFeedback
                //             btnColor="purple.200"
                //             message="Check your download folder for Order file"
                //             title="Downloaded successfully"
                //             handleClose={close}
                //         />
                //     ),
                // });
            }
        } catch (error) {
            console.error('Error downloading the file:', error);
            // Uncomment to show toast notification
            // toastIdRef.current = toast({
            //     position: 'top',
            //     render: () => (
            //         <ToastFeedback
            //             message="Something went wrong, please try again later."
            //             title="Download Error!"
            //             icon={errorImg}
            //             color="red.600"
            //             btnColor="red.600"
            //             handleClose={close}
            //         />
            //     ),
            // });
        } finally {
            setExportLoading(false);
        }
    };

    return { handleExport, exportLoading };
};

export const useFilterProducts = () => {
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [status] = useState();
    const [getDeletedProducts, getDeletedProductsStatus] = useGetDeletedProductsMutation();
    const formatDateRange = useDateRangeFormat();

    const handleDateRangeChange = async (value) => {
        if (value) {
            const [start, end] = value;
            setStartDate(formatDateRange(start.getTime())); // Convert to timestamp if needed
            setEndDate(formatDateRange(end.getTime())); // Convert to timestamp if needed
        } else {
            setStartDate('');
            setEndDate('');
            await getDeletedProducts(null).unwrap();
        }
    };

    const filterTable = async () => {
        try {
            await getDeletedProducts({
                page: null,
                startDate,
                endDate,
                status,
            }).unwrap();
        } catch (error) {
            console.error('Error filtering the table:', error);
        }
    };

    return {
        startDate,
        endDate,
        status,
        handleDateRangeChange,
        filterTable,
        getDeletedProductsStatus,
    };
};
