/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Flex, IconButton } from '@chakra-ui/react';
import DateRangePicker from 'rsuite/esm/DateRangePicker';
// import SelectPicker from 'rsuite/esm/SelectPicker';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import errorImg from '@icons/error.svg';
import { useDateRangeFormat } from '@productize/hooks';
import { selectCurrentToken, useGetAllProductsMutation } from '@productize/redux';
import { useToastAction, ToastFeedback, SharedButton } from '@productize/ui';
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
    const [getAllProducts, getAllProductsStatus] = useGetAllProductsMutation();
    const formatDateRange = useDateRangeFormat();
    const { toast, toastIdRef, close } = useToastAction();

    const headersCredentials = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    // const data = [`All`, `Draft`, `Published`].map((item) => ({
    //     label: item,
    //     value: item,
    // }));

    const handleExport = async () => {
        try {
            setExportLoading(true);
            const res = await axios.get(`${BASE_URL}/products/download?page=1`, headersCredentials);
            if (res.status === 200) {
                setExportLoading(false);
                const blob = new Blob([res.data], { type: 'text/csv' });
                download(blob, `Products.csv`);
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

    // const handleStatusChange = (value: string) => {
    //     setStatus(value.toLowerCase());
    // };

    const handleDateRangeChange = async (value: any | null) => {
        if (value) {
            setStartDate(formatDateRange(value?.[0]));
            setEndDate(formatDateRange(value?.[1]));
        } else {
            setStartDate(``);
            setEndDate(``);
            await getAllProducts(null).unwrap();
        }
    };

    // const filterTable = async () => {
    //     if (status === `all`) {
    //         try {
    //             await getAllProducts(null).unwrap();
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     } else {
    //         try {
    //             await getAllProducts({
    //                 page: null,
    //                 startDate,
    //                 endDate,
    //                 status,
    //             }).unwrap();
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     }
    // };

    const handleRefresh = async () => {
        try {
            await getAllProducts(null).unwrap();
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
                </Flex>
                {/* <Flex w={{ base: `100%`, md: `fit-content` }} gap={4} alignItems={{ base: `flex-start`, md: `center` }}>
                    <SelectPicker searchable={false} onSelect={handleStatusChange} style={{ width: `100%` }} placeholder={`Status`} size="lg" data={data} />
                    <IconButton
                        color={`purple.200`}
                        bgColor={`purple.100`}
                        isLoading={getAllProductsStatus.isLoading}
                        spinner={<SpinnerComponentSmall size="sm" />}
                        onClick={filterTable}
                        fontSize={`xl`}
                        aria-label="Filter table"
                        icon={<Icon icon={`system-uicons:filtering`} />}
                    />
                </Flex> */}
                {/* {This is where i want to put the referesh button} */}
                <Flex alignItems="center">
                    <Box
                        as="button"
                        onClick={handleRefresh}
                        display="flex"
                        alignItems="center"
                        color="rgb(87, 87, 87)"
                        bgColor={'transparent'}
                        fontSize="xl"
                        cursor="pointer"
                        p={2}
                        borderRadius={'4px'}
                        border="1px solid rgb(226, 232, 240)"
                        _hover={{
                            borderColor: '#4299e1',
                        }}
                    >
                        <Box as="span" ml={2}>
                            Filter by product name
                        </Box>
                    </Box>
                </Flex>
            </Flex>
            <Box>
                <Flex display={{ base: `none`, md: `flex` }} gap={4} alignItems={`center`}>
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