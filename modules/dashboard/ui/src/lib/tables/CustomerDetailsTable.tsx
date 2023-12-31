/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Flex, Avatar, Text, Stack, Checkbox, Box, Tag } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { DropdownActionDelete, DropdownActionDraft, DropdownActionLive } from "../DropdownAction";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useCurrency, useDate, useTime } from "@productize-v1.0.0/modules/shared/hooks";
import { selectCurrentToken, selectCustomersMetaData } from "@productize-v1.0.0/modules/shared/redux";
import { SharedButton } from "@productize-v1.0.0/modules/shared/ui";

interface tableProps {
    draft?: boolean;
    live?: boolean;
    deleted?: boolean;
    tableData: [];
}

export const CustomerDetailsTable = ({ draft, live, deleted, tableData }: tableProps) => {
    const token = useSelector(selectCurrentToken);
    const navigate = useNavigate();
    const formatCurrency = useCurrency();
    const formatDate = useDate();
    const formatTime = useTime();
    const paginate = useSelector(selectCustomersMetaData);
    const dispatch = useDispatch();
    const headersCredentials = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const tableHeader = [`Latest Purchase`, `Price`, `Date`].map((title) => {
        return (
            <Th py={3} key={title}>
                {title}
            </Th>
        );
    });
    const tableCustomer = tableData?.map((customer: any) => {
        return (
            <Tr _hover={{ bgColor: `purple.100`, cursor: `pointer` }} onClick={() => navigate(`/dashboard/customers/${customer.id}`)} key={customer.id}>
                <Td>
                    {/* use navigate to tap into all row */}
                    <Flex gap={2} alignItems={`center`}>
                        <Avatar
                            bgColor={`yellow.100`}
                            src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951031/productize/Group_7_osmkqe_ojsekq.png`}
                            borderRadius={`8px`}
                            w={`100px`}
                            h={`64px`}
                        />
                        <Stack>
                            <Text>{`title`}</Text>
                            <Flex alignItems={`center`} color={`grey.400`}>
                                <Text className="tiny-text">PDF - 5.5MB</Text>
                                {/* <Icon className="large-text" icon={`mdi:dot`} /> */}
                                {/* <Text className="tiny-text">{formatDate(null)}</Text>
                                <Icon className="large-text" icon={`mdi:dot`} />
                                <Text className="tiny-text">{formatTime(null)}</Text> */}
                            </Flex>
                        </Stack>
                    </Flex>
                </Td>
                <Td>
                    <Flex>{formatCurrency(customer.product_price)}</Flex>
                </Td>
                <Td>
                    <Flex>{`
                    ${formatDate(customer?.created_at)}
                    ${formatTime(customer?.created_at)}
                    `}</Flex>
                </Td>
            </Tr>
        );
    });

    const handlePrevButton = async () => {
        try {
            const res = await axios.get(paginate?.links?.prev, headersCredentials);
            if (res.status === 200) {
                dispatch({
                    type: `Customers/setAllCustomers`,
                    payload: {
                        customers: res.data.data,
                        customersMetaData: {
                            links: res.data.links,
                            meta: res.data.meta,
                        },
                    },
                });
            }
        } catch (error) {
            console.log(error);
        }
    };
    const handleNextButton = async () => {
        try {
            const res = await axios.get(paginate?.links?.next, headersCredentials);
            if (res.status === 200) {
                dispatch({
                    type: `Customers/setAllCustomers`,
                    payload: {
                        customers: res.data.data,
                        customersMetaData: {
                            links: res.data.links,
                            meta: res.data.meta,
                        },
                    },
                });
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <TableContainer display={`flex`} flexDir={`column`} height={`40rem`} justifyContent={`space-between`} overflowY={`auto`}>
                <Table size={`sm`} variant="simple">
                    {/* head */}
                    <Thead zIndex={1} pos={`sticky`} top={0}>
                        <Tr bgColor={`purple.100`} color={`grey.300`}>
                            {tableHeader}
                        </Tr>
                    </Thead>
                    {/* body */}
                    <Tbody color={`purple.300`}>{tableCustomer}</Tbody>
                </Table>
            </TableContainer>
            {/* TABLE PAGINATION */}
            {/* <Flex mt={4} color={`grey.400`} alignItems={`center`} justifyContent={`space-between`}>
                <Box display={{ base: `none`, md: `initial` }}>
                    <Text>10 Entries per page </Text>
                </Box>
                <Box display={{ base: `none`, md: `initial` }}>
                    <Text>
                        Page {paginate?.meta?.current_page} of {paginate?.meta?.last_page}
                    </Text>
                </Box>
                <Stack direction={`row`}>
                    <SharedButton
                        btnExtras={{
                            leftIcon: `material-symbols:chevron-left`,
                            border: `1px solid #CFCFD0`,
                            onClick: handlePrevButton,
                            disabled: !paginate?.links?.prev,
                        }}
                        text={"Previous"}
                        width={"137px"}
                        height={"40px"}
                        bgColor={"transparent"}
                        textColor={"grey.400"}
                        borderRadius={"4px"}
                        fontSize={{ base: `sm`, md: `md` }}
                    />
                    <SharedButton
                        btnExtras={{
                            leftIcon: `material-symbols:chevron-right`,
                            border: `1px solid #CFCFD0`,
                            onClick: handleNextButton,
                            disabled: !paginate?.links?.next,
                        }}
                        text={"Next"}
                        width={"137px"}
                        height={"40px"}
                        bgColor={"transparent"}
                        textColor={"grey.400"}
                        borderRadius={"4px"}
                        fontSize={{ base: `sm`, md: `md` }}
                    />
                </Stack>
            </Flex> */}
        </>
    );
};
