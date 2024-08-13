import { Box, Flex, IconButton } from '@chakra-ui/react';
import DateRangePicker from 'rsuite/esm/DateRangePicker';
import { DropdownAction } from '../../AdminDropdownAction';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import errorImg from '@icons/error.svg';
import { useDateRangeFormat } from '@productize/hooks';
import { selectCurrentToken, useGetAllUserMutation } from '@productize/redux';
import { useToastAction, ToastFeedback, SpinnerComponentSmall, SharedButton } from '@productize/ui';
import download from 'downloadjs';

const BASE_URL = import.meta.env['VITE_BASE_URL'];

interface controlsProp {
    showRefreshBtn?: boolean;
}

export const CustomersTableControl = ({ showRefreshBtn }: controlsProp) => {
    const [exportLoading, setExportLoading] = useState(false);
    const token = useSelector(selectCurrentToken);
    const [startDate, setStartDate] = useState(``);
    const [endDate, setEndDate] = useState(``);
    const [status, setStatus] = useState(``);
    const [getAllUser, getAllUserStatus] = useGetAllUserMutation();
    const formatDateRange = useDateRangeFormat();
    const { toast, toastIdRef, close } = useToastAction();

    const headersCredentials = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const handleExport = async () => {
        try {
            setExportLoading(true);
            const res = await axios.get(`${BASE_URL}/users/download?page=1`, headersCredentials);
            if (res.status === 200) {
                setExportLoading(false);
                const blob = new Blob([res.data], { type: 'text/csv' });
                download(blob, `Users.csv`);
                toastIdRef.current = toast({
                    position: 'top',
                    render: () => (
                        <ToastFeedback
                            btnColor={`purple.200`}
                            message={`Check your download folder for product file`}
                            title="Downloaded successfully"
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
                        message={`Something went wrong, please try again later.`}
                        title="Download Error!"
                        icon={errorImg}
                        color={`red.600`}
                        btnColor={`red.600`}
                        handleClose={close}
                    />
                ),
            });
        }
    };

    const handleStatusChange = (value: string) => {
        setStatus(value.toLowerCase());
    };

    const handleDateRangeChange = async (value: any | null) => {
        if (value) {
            const formattedStartDate = formatDateRange(value?.[0]);
            const formattedEndDate = formatDateRange(value?.[1]);
            setStartDate(formattedStartDate);
            setEndDate(formattedEndDate);
            console.log('Date range changed:', { startDate: formattedStartDate, endDate: formattedEndDate });
        } else {
            setStartDate(``);
            setEndDate(``);
            await getAllUser(null).unwrap();
        }
    };

    const filterTable = async () => {
        console.log('Filtering with:', { startDate, endDate, status });
        try {
            const result = await getAllUser({
                page: null,
                startDate,
                endDate,
                status,
            }).unwrap();
            console.log('Filtered data:', result);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Flex alignItems={{ md: `center` }} justifyContent={`space-between`}>
            <Flex w={{ base: `100%`, md: `fit-content` }} flexDir={{ base: `column`, md: `row` }} gap={4} alignItems={{ base: `flex-start`, md: `center` }}>
                <Flex w={{ base: `100%`, md: `fit-content` }} gap={4} alignItems={{ base: `flex-start`, md: `center` }}>
                    <DateRangePicker
                        onChange={handleDateRangeChange}
                        placeholder={`15 Feb, 2023 - 22 Feb, 2023`}
                        size="lg"
                        character="-"
                        style={{ width: `100%` }}
                    />
                    <Box display={{ md: `none` }}>
                        <DropdownAction handleExport={handleExport} icon={`zondicons:dots-horizontal-triple`} />
                    </Box>
                </Flex>
                <Flex w={{ base: `100%`, md: `fit-content` }} gap={4} alignItems={{ base: `flex-start`, md: `center` }}>
                    <IconButton
                        color={`purple.200`}
                        bgColor={`purple.100`}
                        isLoading={getAllUserStatus.isLoading}
                        spinner={<SpinnerComponentSmall size="sm" />}
                        onClick={filterTable}
                        fontSize={`xl`}
                        aria-label="Filter table"
                        icon={<Icon icon={`system-uicons:filtering`} />}
                    />
                </Flex>
            </Flex>
            <Box>
                <Flex display={{ base: `none`, md: `flex` }} gap={4} alignItems={`center`}>
                    <Box hidden={showRefreshBtn ? false : true}>
                        <SharedButton
                            text={'Refresh'}
                            width={'fit-content'}
                            height={'40px'}
                            bgColor={'transparent'}
                            textColor={'purple.200'}
                            borderRadius={'4px'}
                            fontSize={{ base: `sm`, md: `md` }}
                        />
                    </Box>
                    <Box>
                        <SharedButton
                            text={'Export'}
                            width={'fit-content'}
                            height={'40px'}
                            bgColor={'transparent'}
                            textColor={'purple.200'}
                            borderRadius={'4px'}
                            fontSize={{ base: `sm`, md: `md` }}
                            btnExtras={{
                                border: `1px solid #6D5DD3`,
                                leftIcon: `solar:export-line-duotone`,
                                onClick: handleExport,
                                isLoading: exportLoading,
                                loadingText: `downloading...`,
                            }}
                        />
                    </Box>
                </Flex>
            </Box>
        </Flex>
    );
};
