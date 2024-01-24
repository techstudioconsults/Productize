import { Box, Flex, IconButton } from "@chakra-ui/react";
import DateRangePicker from "rsuite/esm/DateRangePicker";
import SelectPicker from "rsuite/esm/SelectPicker";
import { DropdownAction } from "../../DropdownAction";
import axios from "axios";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { useDateRangeFormat } from "@productize-v1.0.0/modules/shared/hooks";
import { selectCurrentToken, useGetAllProductsMutation } from "@productize-v1.0.0/modules/shared/redux";
import { SpinnerComponentSmall, SharedButton } from "@productize-v1.0.0/modules/shared/ui";
import download from "downloadjs";

const BASE_URL = import.meta.env["VITE_BASE_URL"];

interface controlsProp {
    showRefreshBtn?: boolean;
}

export const CustomersTableControl = ({ showRefreshBtn }: controlsProp) => {
    const [exportLoading, setExportLoading] = useState(false);
    const token = useSelector(selectCurrentToken);
    const [startDate, setStartDate] = useState(``);
    const [endDate, setEndDate] = useState(``);
    const [status, setStatus] = useState(``);
    const [getAllProducts, getAllProductsStatus] = useGetAllProductsMutation();
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
        // if (status === `all`) {
        //     try {
        //         await getAllProducts(null).unwrap();
        //     } catch (error) {
        //         console.log(error);
        //     }
        // } else {
        //     try {
        //         await getAllProducts({
        //             page: null,
        //             startDate,
        //             endDate,
        //             status,
        //         }).unwrap();
        //     } catch (error) {
        //         console.log(error);
        //     }
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
                <Box w={`100%`}>
                    <SelectPicker searchable={false} onSelect={handleStatusChange} style={{ width: `100%` }} placeholder={`Status`} size="lg" data={data} />
                </Box>
                <IconButton
                    isDisabled
                    color={`purple.200`}
                    bgColor={`purple.100`}
                    isLoading={getAllProductsStatus.isLoading}
                    spinner={<SpinnerComponentSmall size="sm" />}
                    onClick={filterTable}
                    fontSize={`xl`}
                    // variant={`outline`}
                    aria-label="Filter table"
                    icon={<Icon icon={`system-uicons:filtering`} />}
                />
            </Flex>
            {/* dots and buttons */}
            <Box>
                <Flex display={{ base: `none`, md: `flex` }} gap={4} alignItems={`center`}>
                    <Box hidden={showRefreshBtn ? false : true}>
                        <SharedButton
                            text={"Refresh"}
                            width={"fit-content"}
                            height={"40px"}
                            bgColor={"transparent"}
                            textColor={"purple.200"}
                            borderRadius={"4px"}
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
                            text={"Export"}
                            width={"fit-content"}
                            height={"40px"}
                            bgColor={"transparent"}
                            textColor={"purple.200"}
                            borderRadius={"4px"}
                            fontSize={{ base: `sm`, md: `md` }}
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
                <Box display={{ md: `none` }}>
                    <DropdownAction handleExport={handleExport} icon={`zondicons:dots-horizontal-triple`} />
                </Box>
            </Box>
        </Flex>
    );
};
