import { Box, Flex, IconButton } from '@chakra-ui/react';
import DateRangePicker from 'rsuite/esm/DateRangePicker';
import SelectPicker from 'rsuite/esm/SelectPicker';
import { DropdownAction } from '../../DropdownAction';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import errorImg from '@icons/error.svg';
import { useDateRangeFormat } from '@productize/hooks';
import { selectCurrentToken, useGetAllOrdersMutation } from '@productize/redux';
import { useToastAction, ToastFeedback, SpinnerComponentSmall, SharedButton, SearchComp } from '@productize/ui';
import axios from 'axios';
import download from 'downloadjs';
import { useSelector } from 'react-redux';

const BASE_URL = import.meta.env['VITE_BASE_URL'];

interface controlsProp {
    showRefreshBtn?: boolean;
}

export const OrdersTableControl = ({ showRefreshBtn }: controlsProp) => {
    const [exportLoading, setExportLoading] = useState(false);
    const { toast, toastIdRef, close } = useToastAction();
    const [startDate, setStartDate] = useState(``);
    const [endDate, setEndDate] = useState(``);
    const [status, setStatus] = useState(``);
    const [getAllOrders, getAllOrdersStatus] = useGetAllOrdersMutation();
    const formatDateRange = useDateRangeFormat();
    const token = useSelector(selectCurrentToken);

    const headersCredentials = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const data = [
        `All Products`,
        `UX Design Fundamentals`,
        `Practical UI - User interface design book`,
        `The Future of Design Systems Conference 2023`,
        `Graphics Guide to Residential Design`,
    ].map((item) => ({
        label: item,
        value: item,
    }));

    const handleExport = async () => {
        try {
            setExportLoading(true);
            const res = await axios.get(`${BASE_URL}/orders/download?format=csv`, headersCredentials);
            if (res.status === 200) {
                setExportLoading(false);
                const blob = new Blob([res.data], { type: 'text/csv' });
                download(blob, `Orders.csv`);
            }
        } catch (error) {
            setExportLoading(false);
            console.log(error);
        }
    };

    const handleStatusChange = (value: string) => {
        setStatus(value.toLowerCase());
    };
    const handleDateRangeChange = (value: any | null) => {
        setStartDate(formatDateRange(value?.[0]));
        setEndDate(formatDateRange(value?.[1]));
    };

    const filterTable = async () => {
        // if (status === `all`) {
        //     try {
        //         await getAllOrders(null).unwrap();
        //     } catch (error: any) {
        //         toastIdRef.current = toast({
        //             position: 'top',
        //             render: () => (
        //                 <ToastFeedback
        //                     message={error?.data?.message}
        //                     title="Error!"
        //                     icon={errorImg}
        //                     color={`red.600`}
        //                     btnColor={`red.600`}
        //                     bgColor={undefined}
        //                     handleClose={close}
        //                 />
        //             ),
        //         });
        //     }
        // } else {
        try {
            await getAllOrders({
                page: null,
                startDate,
                endDate,
                status,
            }).unwrap();
        } catch (error: any) {
            console.log(error);

            toastIdRef.current = toast({
                position: 'top',
                render: () => (
                    <ToastFeedback
                        message={error?.data?.message}
                        title="Error!"
                        icon={errorImg}
                        color={`red.600`}
                        btnColor={`red.600`}
                        bgColor={undefined}
                        handleClose={close}
                    />
                ),
            });
        }
        // }
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
                        placeholder={`Find by product name`}
                        size="lg"
                        data={data}
                    /> */}
                    <IconButton
                        // isDisabled
                        color={`purple.200`}
                        bgColor={`purple.100`}
                        isLoading={getAllOrdersStatus.isLoading}
                        spinner={<SpinnerComponentSmall size="sm" />}
                        onClick={filterTable}
                        fontSize={`xl`}
                        // variant={`outline`}
                        aria-label="Filter table"
                        icon={<Icon icon={`system-uicons:filtering`} />}
                    />
                    {/* <SearchComp color={`grey.200`} /> */}
                </Flex>
            </Flex>
            {/* dots and buttons */}
            <Box>
                <Flex display={{ base: `none`, md: `flex` }} gap={4} alignItems={`center`}>
                    <Box hidden={!showRefreshBtn}>
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
                    <Box display={{ base: `none`, md: `initial` }}>
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
                    </Box>
                </Flex>
            </Box>
        </Flex>
    );
};
