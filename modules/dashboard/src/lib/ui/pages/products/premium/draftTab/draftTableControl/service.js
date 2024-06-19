import { useState } from 'react';
import axios from 'axios';
import download from 'downloadjs';
import { useSelector } from 'react-redux';
import { selectCurrentToken, useGetDraftProductsMutation } from '@productize/redux';
import { useDateRangeFormat } from '@productize/hooks';
// import { useToastAction } from '@productize/ui';
// import errorImg from '@icons/error.svg';

const BASE_URL = import.meta.env['VITE_BASE_URL'];

export const useDraftTableControl = () => {
    // const { toast, toastIdRef, close } = useToastAction();
    const [exportLoading, setExportLoading] = useState(false);
    const token = useSelector(selectCurrentToken);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [status] = useState('');
    const [getDraftProducts, getDraftProductsStatus] = useGetDraftProductsMutation();
    const formatDateRange = useDateRangeFormat();

    const headersCredentials = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const handleExport = async () => {
        try {
            setExportLoading(true);
            const res = await axios.get(`${BASE_URL}/products/download?status=draft&format=csv`, headersCredentials);
            if (res.status === 200) {
                const blob = new Blob([res.data], { type: 'text/csv' });
                download(blob, 'Products.csv');
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
            console.log(error);
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

    const handleDateRangeChange = async (value) => {
        if (value) {
            setStartDate(formatDateRange(value[0]));
            setEndDate(formatDateRange(value[1]));
        } else {
            setStartDate('');
            setEndDate('');
            await getDraftProducts(null).unwrap();
        }
    };

    const filterTable = async () => {
        try {
            await getDraftProducts({
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
        getDraftProductsStatus,
        handleExport,
        handleDateRangeChange,
        filterTable,
        startDate,
        endDate,
    };
};
