import {Box, Flex, IconButton} from "@chakra-ui/react";
import DateRangePicker from "rsuite/esm/DateRangePicker";
import SelectPicker from "rsuite/esm/SelectPicker";
import {DropdownAction} from "../../DropdownAction";
import axios from "axios";
import {useSelector} from "react-redux";
import {useState} from "react";
import {Icon} from "@iconify/react";
import {useDateRangeFormat} from "@productize-v1.0.0/modules/shared/hooks";
import {selectCurrentToken, useGetAllOrdersMutation} from "@productize-v1.0.0/modules/shared/redux";
import {SpinnerComponentSmall, SharedButton, useToastAction, ToastFeedback} from "@productize-v1.0.0/modules/shared/ui";
import download from "downloadjs";
import errorImg from "@icons/error.svg";

const BASE_URL = import.meta.env["VITE_BASE_URL"];

interface controlsProp {
    showRefreshBtn?: boolean;
}

export const OrdersTableControl = ({showRefreshBtn}: controlsProp) => {
    const [exportLoading, setExportLoading] = useState(false);
    const {toast, toastIdRef, close} = useToastAction();
    const token = useSelector(selectCurrentToken);
    const [startDate, setStartDate] = useState(``);
    const [endDate, setEndDate] = useState(``);
    const [status, setStatus] = useState(``);
    const [getAllOrders, getAllOrdersStatus] = useGetAllOrdersMutation();
    const formatDateRange = useDateRangeFormat();

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
        console.log(`export funtion`);
    };

    const handleStatusChange = (value: string) => {
        setStatus(value.toLowerCase());
    };
    const handleDateRangeChange = (value: any | null) => {
        setStartDate(formatDateRange(value?.[0]));
        setEndDate(formatDateRange(value?.[1]));
    };

    const filterTable = async () => {
        if (status === `all`) {
            try {
                await getAllOrders(null).unwrap();
            } catch (error: any) {
                toastIdRef.current = toast({
                    position: "top",
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
        } else {
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
                    position: "top",
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
        }
    };

    return (
        <Flex alignItems={{md: `center`}} justifyContent={`space-between`} >
            <Flex w={{base: `100%`, md: `fit-content`}} flexDir={{base: `column`, md: `row`}} gap={4} alignItems={{base: `flex-start`, md: `center`}}>
                <Flex w={{base: `100%`, md: `fit-content`}} gap={4} alignItems={{base: `flex-start`, md: `center`}}>
                    <DateRangePicker
                        onChange={handleDateRangeChange}
                        placeholder={`15 Feb, 2023 - 22 Feb, 2023`}
                        size="lg"
                        character="-"
                        style={{width: `100%`}}
                    />
                    <Box display={{md: `none`}}>
                        <DropdownAction handleExport={handleExport} icon={`zondicons:dots-horizontal-triple`}/>
                    </Box>
                </Flex>
                <Flex w={{base: `100%`, md: `fit-content`}} gap={4} alignItems={{base: `flex-start`, md: `center`}}>
                    <SelectPicker
                        disabled
                        searchable={false}
                        onSelect={handleStatusChange}
                        style={{width: `100%`}}
                        placeholder={`Find by product name`}
                        size="lg"
                        data={data}
                    />
                    <IconButton
                        // isDisabled
                        color={`purple.200`}
                        bgColor={`purple.100`}
                        isLoading={getAllOrdersStatus.isLoading}
                        spinner={<SpinnerComponentSmall size="sm"/>}
                        onClick={filterTable}
                        fontSize={`xl`}
                        // variant={`outline`}
                        aria-label="Filter table"
                        icon={<Icon icon={`system-uicons:filtering`}/>}
                    />
                </Flex>
            </Flex>
            {/* dots and buttons */}
            <Box>
                <Flex display={{base: `none`, md: `flex`}} gap={4} alignItems={`center`}>
                    <Box hidden={!showRefreshBtn}>
                        <SharedButton
                            text={"Refresh"}
                            width={"fit-content"}
                            height={"40px"}
                            bgColor={"transparent"}
                            textColor={"purple.200"}
                            borderRadius={"4px"}
                            fontSize={{base: `sm`, md: `md`}}
                            btnExtras={{
                                border: `1px solid #6D5DD3`,
                                leftIcon: `basil:refresh-outline`,
                                // onClick: () => setEmptyState((prevState) => !prevState),
                            }}
                        />
                    </Box>
                    <Box display={{base: `none`, md: `initial`}}>
                        <SharedButton
                            text={"Export"}
                            width={"fit-content"}
                            height={"40px"}
                            bgColor={"transparent"}
                            textColor={"purple.200"}
                            borderRadius={"4px"}
                            fontSize={{base: `sm`, md: `md`}}
                            btnExtras={{
                                disabled: true,
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
