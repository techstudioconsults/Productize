import { useState } from 'react';
import axios from 'axios';
import download from 'downloadjs';
import { useSelector } from 'react-redux';
import { ToastFeedback, useToastAction } from '@productize/ui';
import { selectCurrentToken, useGetLiveProductsMutation } from '@productize/redux';
import { useDateRangeFormat } from '@productize/hooks';
import errorImg from '@icons/error.svg';

const BASE_URL = import.meta.env['VITE_BASE_URL'];

export const useLivetableControl = () => {
    const { toast, toastIdRef, close } = useToastAction();
    const [exportLoading, setExportLoading] = useState(false);
    const token = useSelector(selectCurrentToken);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [status] = useState('');
    const [getLiveProducts, getLiveProductsStatus] = useGetLiveProductsMutation();
    const formatDateRange = useDateRangeFormat();

    const headersCredentials = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const handleExport = async () => {
        try {
            setExportLoading(true);
            const res = await axios.get(`${BASE_URL}/products/download?status=published&format=csv`, headersCredentials);
            if (res.status === 200) {
                setExportLoading(false);
                const blob = new Blob([res.data], { type: 'text/csv' });
                download(blob, 'Products.csv');
                // toastIdRef.current = toast({
                //     position: 'top',
                //     render: () => (
                //         <ToastFeedback
                //             btnColor="purple.200"
                //             message="Check your download folder for product file"
                //             title="Downloaded successfully"
                //             handleClose={close}
                //         />
                //     ),
                // });
            }
        } catch (error) {
            setExportLoading(false);
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
        }
    };

    const handleDateRangeChange = async (value) => {
        if (value) {
            setStartDate(formatDateRange(value[0]));
            setEndDate(formatDateRange(value[1]));
        } else {
            setStartDate('');
            setEndDate('');
            await getLiveProducts(null).unwrap();
        }
    };

    const filterTable = async () => {
        try {
            await getLiveProducts({
                page: null,
                startDate,
                endDate,
                status,
            }).unwrap();
        } catch (error) {
            console.error(error);
        }
    };

    return {
        exportLoading,
        getLiveProductsStatus,
        handleExport,
        handleDateRangeChange,
        filterTable,
        startDate,
        endDate,
    };
};
