import { Box, Flex, IconButton } from '@chakra-ui/react';
import DateRangePicker from 'rsuite/esm/DateRangePicker';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import download from 'downloadjs';
import { selectCurrentToken, useGetAllPayoutHistoryMutation } from '@productize/redux';
import { useNavigate } from 'react-router-dom';
import { useDateRangeFormat } from '@productize/hooks';
import { SharedButton, SpinnerComponentSmall, ToastFeedback, useToastAction } from '@productize/ui';
import { Icon } from '@iconify/react';
import errorImg from '@icons/error.svg';

const BASE_URL = import.meta.env['VITE_BASE_URL'];

export const PayoutTableControl = ({ showRefreshBtn, balance }) => {
    const { toast, toastIdRef, close } = useToastAction();
    const [getAllPayoutHistory, getAllPayoutHistoryStatus] = useGetAllPayoutHistoryMutation();
    const [exportLoading, setExportLoading] = useState(false);
    const token = useSelector(selectCurrentToken);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [status, setStatus] = useState('');
    const formatDateRange = useDateRangeFormat();
    const navigate = useNavigate();

    const headersCredentials = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const data = ['All', 'Draft', 'Published'].map((item) => ({
        label: item,
        value: item,
    }));

    const handleExport = async () => {
        try {
            setExportLoading(true);
            const res = await axios.get(`${BASE_URL}/payouts/download/superadmin?format=csv`, headersCredentials);
            if (res.status === 200) {
                setExportLoading(false);
                const blob = new Blob([res.data], { type: 'text/csv' });
                download(blob, 'Payout.csv');
                toastIdRef.current = toast({
                    position: 'top',
                    render: () => (
                        <ToastFeedback
                            btnColor="purple.200"
                            message="Check your download folder for payout file"
                            title="Downloaded successfully"
                            icon={undefined}
                            bgColor={undefined}
                            color={undefined}
                            handleClose={close}
                        />
                    ),
                });
            }
        } catch (error) {
            setExportLoading(false);
            toastIdRef.current = toast({
                position: 'top',
                render: () => (
                    <ToastFeedback
                        message="Something went wrong, please try again later."
                        title="Download Error!"
                        icon={errorImg}
                        color="red.600"
                        btnColor="red.600"
                        bgColor={undefined}
                        handleClose={close}
                    />
                ),
            });
        }
    };

    const handleDateRangeChange = async (value) => {
        if (value) {
            setStartDate(formatDateRange(value[0]));
            setEndDate(formatDateRange(value[1]));
        } else {
            setStartDate('');
            setEndDate('');
            await getAllPayoutHistory(null).unwrap();
        }
    };

    const filterTable = async () => {
        if (status === 'all') {
            try {
                await getAllPayoutHistory(null).unwrap();
            } catch (error) {
                console.error(error);
            }
        } else {
            try {
                await getAllPayoutHistory({
                    page: null,
                    startDate,
                    endDate,
                    status,
                }).unwrap();
            } catch (error) {
                console.error(error);
            }
        }
    };

    return (
        <Flex alignItems={{ md: 'center' }} justifyContent="space-between" gap={4}>
            <Flex w={{ base: '100%', md: 'fit-content' }} flexDir={{ base: 'column', md: 'row' }} gap={4} alignItems={{ base: 'flex-start', md: 'center' }}>
                <Flex gap={2} alignItems="center" w="100%">
                    <DateRangePicker
                        onChange={handleDateRangeChange}
                        placeholder="15 Feb, 2023 - 22 Feb, 2023"
                        size="lg"
                        character="-"
                        style={{ width: '100%' }}
                    />
                    <IconButton
                        color="purple.200"
                        bgColor="purple.100"
                        isLoading={getAllPayoutHistoryStatus.isLoading}
                        spinner={<SpinnerComponentSmall size="sm" />}
                        onClick={filterTable}
                        fontSize="xl"
                        aria-label="Filter table"
                        icon={<Icon icon="system-uicons:filtering" />}
                    />
                </Flex>
                <Flex alignItems="center" gap={4}>
                    <Box display={{ base: 'flex', md: 'none' }}>
                        <SharedButton
                            text="Withdraw Earnings"
                            width="fit-content"
                            height="40px"
                            bgColor="purple.200"
                            textColor="grey.100"
                            borderRadius="4px"
                            fontSize={{ base: 'sm', md: 'md' }}
                            btnExtras={{
                                disabled: !balance,
                                border: '1px solid #6D5DD3',
                                leftIcon: 'ei:plus',
                                onClick: () => navigate(`/Admin/payouts/${'38y23862938'}/withdraw-earnings`),
                            }}
                        />
                    </Box>

                    <SharedButton
                        text="Export"
                        width="fit-content"
                        height="40px"
                        bgColor="transparent"
                        textColor="purple.200"
                        borderRadius="4px"
                        fontSize={{ base: 'sm', md: 'md' }}
                        btnExtras={{
                            border: '1px solid #6D5DD3',
                            leftIcon: 'solar:export-line-duotone',
                            onClick: handleExport,
                            isLoading: exportLoading,
                            loadingText: 'downloading...',
                        }}
                    />
                </Flex>
            </Flex>
            <Box>
                <Flex display={{ base: 'none', md: 'flex' }} gap={4} alignItems="center">
                    <Box>
                        <SharedButton
                            text="Withdraw Earnings"
                            width="fit-content"
                            height="48px"
                            bgColor="purple.200"
                            textColor="grey.100"
                            borderRadius="4px"
                            fontSize={{ base: 'sm', md: 'md' }}
                            btnExtras={{
                                disabled: !balance,
                                border: '1px solid #6D5DD3',
                                leftIcon: 'ei:plus',
                                onClick: () => navigate(`/Admin/payouts/${'38y23862938'}/withdraw-earnings`),
                            }}
                        />
                    </Box>
                </Flex>
            </Box>
        </Flex>
    );
};
