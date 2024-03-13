import { Box, Flex, IconButton } from '@chakra-ui/react';
import DateRangePicker from 'rsuite/esm/DateRangePicker';
import SelectPicker from 'rsuite/esm/SelectPicker';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import download from 'downloadjs';
import { DropdownAction } from '../../../../DropdownAction';
import { selectCurrentToken, useGetDraftProductsMutation } from '@productize/redux';
import { useDateRangeFormat } from '@productize/hooks';
import { SharedButton, SpinnerComponentSmall } from '@productize/ui';

const BASE_URL = import.meta.env['VITE_BASE_URL'];

export const DraftTableControl = ({ showRefreshBtn }) => {
    const [exportLoading, setExportLoading] = useState(false);
    const token = useSelector(selectCurrentToken);
    const [startDate, setStartDate] = useState(``);
    const [endDate, setEndDate] = useState(``);
    const [status, setStatus] = useState(``);
    const [getDraftProducts, getDraftProductsStatus] = useGetDraftProductsMutation();
    const formatDateRange = useDateRangeFormat();

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
            const res = await axios.get(
                `${BASE_URL}/products/download?status=${`draft`}&format=csv`,
                // `${BASE_URL}products/download?start_date=${startDate}&end_date=${endDate}&format=csv`,
                headersCredentials
            );
            if (res.status === 200) {
                setExportLoading(false);
                const blob = new Blob([res.data], { type: 'text/csv' });
                download(blob, `Draft Products.csv`);
            }
        } catch (error) {
            setExportLoading(false);
            console.log(error);
        }
    };

    const handleStatusChange = (value) => {
        setStatus(value.toLowerCase());
    };
    const handleDateRangeChange = (value) => {
        setStartDate(formatDateRange(value?.[0]));
        setEndDate(formatDateRange(value?.[1]));
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
            console.log(error);
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
                    {/* <SelectPicker
                        disabled
                        searchable={false}
                        onSelect={handleStatusChange}
                        style={{ width: `100%` }}
                        placeholder={`Status`}
                        size="lg"
                        data={data}
                    /> */}
                    <IconButton
                        color={`purple.200`}
                        bgColor={`purple.100`}
                        isLoading={getDraftProductsStatus.isLoading}
                        spinner={<SpinnerComponentSmall size="sm" />}
                        onClick={filterTable}
                        fontSize={`xl`}
                        // variant={`outline`}
                        aria-label="Filter table"
                        icon={<Icon icon={`system-uicons:filtering`} />}
                    />
                </Flex>
            </Flex>
            {/* dots and buttons */}
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
                            btnExtras={{
                                border: `1px solid #6D5DD3`,
                                leftIcon: `basil:refresh-outline`,
                                // onClick: () => setEmptyState((prevState) => !prevState),
                            }}
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
