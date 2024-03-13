import { Box, Flex, IconButton, Link } from '@chakra-ui/react';
import DateRangePicker from 'rsuite/esm/DateRangePicker';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import download from 'downloadjs';
import { DropdownAction } from '../../../DropdownAction';
import { selectCurrentToken, useGetPayoutsMutation } from '@productize/redux';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useDateRangeFormat } from '@productize/hooks';
import { SharedButton, SpinnerComponentSmall } from '@productize/ui';
import { Icon } from '@iconify/react';

const BASE_URL = import.meta.env['VITE_BASE_URL'];

export const PayoutTableControl = ({ showRefreshBtn, balance }) => {
    const [getPayouts, getPayoutsStatus] = useGetPayoutsMutation();
    const [exportLoading, setExportLoading] = useState(false);
    const token = useSelector(selectCurrentToken);
    const [startDate, setStartDate] = useState(``);
    const [endDate, setEndDate] = useState(``);
    const [status, setStatus] = useState(``);
    const formatDateRange = useDateRangeFormat();
    const navigate = useNavigate();

    const headersCredentials = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const data = [`All`, `Draft`, `Published`].map((item) => ({
        label: item,
        value: item,
    }));

    const handleExport = async () => {
        try {
            setExportLoading(true);
            const res = await axios.get(`${BASE_URL}/payments/payouts/download?format=csv`, headersCredentials);
            if (res.status === 200) {
                setExportLoading(false);
                const blob = new Blob([res.data], { type: 'text/csv' });
                download(blob, `Products.csv`);
            }
        } catch (error) {
            setExportLoading(false);
            console.log(error);
        }
    };

    const handleDateRangeChange = (value) => {
        setStartDate(formatDateRange(value?.[0]));
        setEndDate(formatDateRange(value?.[1]));
    };

    const filterTable = async () => {
        // if (status === `all`) {
        //     try {
        //         await getPayouts(null).unwrap();
        //     } catch (error) {
        //         console.log(error);
        //     }
        // } else {
        try {
            await getPayouts({
                page: null,
                startDate,
                endDate,
                status,
            }).unwrap();
        } catch (error) {
            console.log(error);
        }
        // }
    };

    return (
        <Flex alignItems={{ md: `center` }} justifyContent={`space-between`} gap={4}>
            <Flex w={{ base: `100%`, md: `fit-content` }} flexDir={{ base: `column`, md: `row` }} gap={4} alignItems={{ base: `flex-start`, md: `center` }}>
                <Box w={`100%`}>
                    <DateRangePicker
                        onChange={handleDateRangeChange}
                        placeholder={`15 Feb, 2023 - 22 Feb, 2023`}
                        size="lg"
                        character="-"
                        style={{ width: `100%` }}
                    />
                </Box>
                <Flex alignItems={`center`} gap={4}>
                    <IconButton
                        color={`purple.200`}
                        bgColor={`purple.100`}
                        isLoading={getPayoutsStatus.isLoading}
                        spinner={<SpinnerComponentSmall size="sm" />}
                        onClick={filterTable}
                        fontSize={`xl`}
                        aria-label="Filter table"
                        icon={<Icon icon={`system-uicons:filtering`} />}
                    />
                    <SharedButton
                        text={'Export'}
                        width={'fit-content'}
                        height={'40px'}
                        bgColor={'transparent'}
                        textColor={'purple.200'}
                        borderRadius={'4px'}
                        fontSize={{ base: `sm`, md: `md` }}
                        btnExtras={{
                            // disabled: true,
                            border: `1px solid #6D5DD3`,
                            leftIcon: `solar:export-line-duotone`,
                            onClick: handleExport,
                            isLoading: exportLoading,
                            loadingText: `downloading...`,
                        }}
                    />
                </Flex>
            </Flex>
            {/* dots and buttons */}
            <Box>
                <Flex display={{ base: `none`, md: `flex` }} gap={4} alignItems={`center`}>
                    <Box>
                        <SharedButton
                            text={'Withdraw Earnings'}
                            width={'fit-content'}
                            height={'48px'}
                            bgColor={'purple.200'}
                            textColor={'grey.100'}
                            borderRadius={'4px'}
                            fontSize={{ base: `sm`, md: `md` }}
                            btnExtras={{
                                disabled: !balance,
                                border: `1px solid #6D5DD3`,
                                leftIcon: `ei:plus`,
                                onClick: () => navigate(`/dashboard/payouts/${`38y23862938`}/withdraw-earnings`),
                            }}
                        />
                    </Box>
                </Flex>
                <Box display={{ md: `none` }}>
                    <DropdownAction handleExport={handleExport} icon={`zondicons:dots-horizontal-triple`} />
                </Box>
            </Box>
        </Flex>
    );
};
