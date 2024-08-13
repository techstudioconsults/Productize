import { Box, Flex, IconButton } from '@chakra-ui/react';
import DateRangePicker from 'rsuite/esm/DateRangePicker';
// import SelectPicker from 'rsuite/esm/SelectPicker';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import errorImg from '@icons/error.svg';
import { useDateRangeFormat } from '@productize/hooks';
import { selectCurrentToken, useGetAllProductsMutation, useGetAllRevenueMutation } from '@productize/redux';
import { useToastAction, ToastFeedback, SharedButton, SpinnerComponentSmall } from '@productize/ui';
import download from 'downloadjs';

const BASE_URL = import.meta.env['VITE_BASE_URL'];

interface controlsProp {
    showRefreshBtn?: boolean;
}

export const ProductsTableControl = ({ showRefreshBtn }: controlsProp) => {
    const [exportLoading, setExportLoading] = useState(false);
    const token = useSelector(selectCurrentToken);
    const [startDate, setStartDate] = useState(``);
    const [endDate, setEndDate] = useState(``);
    const [status, setStatus] = useState(``);
    const [getAllRevenue, getAllRevenueStatus] = useGetAllRevenueMutation();
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
            const res = await axios.get(`${BASE_URL}/revenues/download?page=1`, headersCredentials);
            if (res.status === 200) {
                setExportLoading(false);
                const blob = new Blob([res.data], { type: 'text/csv' });
                download(blob, `Homepage.csv`);
                toastIdRef.current = toast({
                    position: 'top',
                    render: () => (
                        <ToastFeedback
                            btnColor={`purple.200`}
                            message={`Check your download folder for product file`}
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
                        message={`Something went wrong, please try again later.`}
                        title="Download Error!"
                        icon={errorImg}
                        color={`red.600`}
                        btnColor={`red.600`}
                        bgColor={undefined}
                        handleClose={close}
                    />
                ),
            });
        }
    };

    const handleDateRangeChange = async (value: any | null) => {
        if (value) {
            setStartDate(formatDateRange(value?.[0]));
            setEndDate(formatDateRange(value?.[1]));
        } else {
            setStartDate(``);
            setEndDate(``);
            await getAllRevenue(null).unwrap();
        }
    };

    const filterTable = async () => {
        if (status === `all`) {
            try {
                await getAllRevenue(null).unwrap();
            } catch (error) {
                console.error(error);
            }
        } else {
            try {
                await getAllRevenue({
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

    const handleRefresh = () => {
        window.location.reload();
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
                </Flex>
                <Flex w={{ base: `100%`, md: `fit-content` }} gap={4} alignItems={{ base: `flex-start`, md: `center` }}>
                    <IconButton
                        color={`purple.200`}
                        bgColor={`purple.100`}
                        isLoading={getAllRevenueStatus.isLoading}
                        spinner={<SpinnerComponentSmall size="sm" />}
                        onClick={filterTable}
                        fontSize={`xl`}
                        // variant={`outline`}
                        aria-label="Filter table"
                        icon={<Icon icon={`system-uicons:filtering`} />}
                    />
                    {/* <SelectPicker searchable={false} onSelect={handleStatusChange} style={{ width: `100%` }} placeholder={`Status`} size="lg" data={data} /> */}
                </Flex>
                <Flex alignItems="center">
                    <Box
                        as="button"
                        onClick={handleRefresh}
                        display="flex"
                        alignItems="center"
                        color="purple.200"
                        bgColor={'transparent'}
                        fontSize="xl"
                        cursor="pointer"
                        p={2}
                        borderRadius={'4px'}
                        border="1px solid #6D5DD3"
                        _hover={{ bg: 'purple.200', color: 'white' }}
                    >
                        <Icon icon="basil:refresh-outline" />
                        <Box as="span" ml={2}>
                            Refresh
                        </Box>
                    </Box>
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
                            btnExtras={{
                                border: `1px solid #6D5DD3`,
                                leftIcon: `basil:refresh-outline`,
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
