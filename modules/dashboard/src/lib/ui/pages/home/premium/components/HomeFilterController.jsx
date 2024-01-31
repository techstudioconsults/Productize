import { Box, Flex, IconButton } from "@chakra-ui/react";
import DateRangePicker from "rsuite/esm/DateRangePicker";
import SelectPicker from "rsuite/esm/SelectPicker";
import axios from "axios";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { useDateRangeFormat } from "@productize-v1.0.0/modules/shared/hooks";
import { selectCurrentToken, useGetAllProductsMutation } from "@productize-v1.0.0/modules/shared/redux";
import { SpinnerComponentSmall, SharedButton } from "@productize-v1.0.0/modules/shared/ui";
import download from "downloadjs";

const BASE_URL = import.meta.env["VITE_BASE_URL"];

export const HomeFilterController = ({ showRefreshBtn }) => {
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

    const data = [`Digital Products`, `Print on Demand`, `Video Streaming`, `Subscription`].map((item) => ({
        label: item,
        value: item,
    }));

    const handleExport = async () => {
        console.log(`export funtionality`);
    };

    const handleStatusChange = (value) => {
        setStatus(value.toLowerCase());
    };
    const handleDateRangeChange = (value) => {
        setStartDate(formatDateRange(value?.[0]));
        setEndDate(formatDateRange(value?.[1]));
    };

    const filterTable = async () => {
        console.log(`filter funtionality`);
    };

    return (
        <Flex alignItems={{ md: `center` }} justifyContent={`space-between`} gap={4}>
            <Flex w={{ base: `100%`, md: `fit-content` }} flexDir={{ base: `column`, md: `row` }} gap={4} alignItems={{ base: `flex-start`, md: `center` }}>
                <Box w={`100%`}>
                    <DateRangePicker
                        disabled
                        onChange={handleDateRangeChange}
                        placeholder={`15 Feb, 2023 - 22 Feb, 2023`}
                        size="lg"
                        character="-"
                        style={{ width: `100%` }}
                    />
                </Box>
                <Flex w={{ base: `100%`, md: `fit-content` }} gap={4} alignItems={{ base: `flex-start`, md: `center` }}>
                    <SelectPicker
                        disabled
                        searchable={false}
                        onSelect={handleStatusChange}
                        style={{ width: `100%` }}
                        placeholder={`All Products`}
                        size="lg"
                        data={data}
                    />
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
                                disabled: true,
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
                <Box display={{ md: `none` }}>{/* <DropdownAction handleExport={handleExport} icon={`zondicons:dots-horizontal-triple`} /> */}</Box>
            </Box>
        </Flex>
    );
};
