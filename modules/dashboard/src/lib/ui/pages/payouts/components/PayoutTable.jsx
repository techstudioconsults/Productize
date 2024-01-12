/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Flex, Text, Stack, Box, Avatar, Tag } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { selectCurrentToken } from "@productize-v1.0.0/modules/shared/redux";
import { useCurrency, useDate, useTime } from "@productize-v1.0.0/modules/shared/hooks";
import { SharedButton } from "@productize-v1.0.0/modules/shared/ui";
import { DropdownActionLive } from "../../../DropdownAction";

export const PayoutTable = ({ tableData }) => {
    const token = useSelector(selectCurrentToken);
    const navigate = useNavigate();
    const formatCurrency = useCurrency();
    const formatDate = useDate();
    const formatTime = useTime();
    // const paginate = useSelector(selectearningsMetaData);
    const dispatch = useDispatch();
    const headersCredentials = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const tableHeader = [`Price`, `BAnk Account`, `Period`, `Status`, ``].map((title) => {
        return (
            <Th py={3} key={title}>
                {title}
            </Th>
        );
    });
    const withdrawEarnings = [1, 2, 3, 4, 5]?.map((earning) => {
        return (
            <Tr _hover={{ bgColor: `purple.100`, cursor: `pointer` }} onClick={() => navigate(`/dashboard/payouts/${earning.id}`)} key={earning}>
                <Td>
                    <Flex alignItems={`center`}>
                        <Text>{formatCurrency(120000)}</Text>
                    </Flex>
                </Td>
                <Td py={5}>
                    <Flex alignItems={`center`} gap={5}>
                        <Avatar size={`xs`} src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1702765305/productize/Bank_Logo_f98woi.png`} />
                        <Text>First Bank 366****234</Text>
                    </Flex>
                </Td>
                <Td>
                    <Flex>15 May 2020 8:00 am</Flex>
                </Td>
                <Td>
                    <Flex>
                        <Tag bg={`yellow.200`} color={`yellow.300`} size={`lg`} fontSize={`sm`}>
                            Pending
                        </Tag>
                    </Flex>
                </Td>
                <Td>
                    {/* there is a status bug here...call tobi later 🤒 */}
                    {/* {earning?.status === `draft` && !earning?.deleted_at ? (
                        <DropdownActionDraft earning={earning} icon={`tabler:dots`} />
                    ) : earning?.status === `published` ? (
                        <DropdownActionLive earning={earning} icon={`tabler:dots`} />
                    ) : earning?.status === `deleted` || earning?.deleted_at ? (
                        <DropdownActionDelete earning={earning} icon={`tabler:dots`} />
                    ) : null} */}
                    <DropdownActionLive earning={earning} icon={`tabler:dots`} />
                </Td>
            </Tr>
        );
    });

    // const handlePrevButton = async () => {
    //     try {
    //         const res = await axios.get(paginate?.links?.prev, headersCredentials);
    //         if (res.status === 200) {
    //             dispatch({
    //                 type: `earnings/setAllearnings`,
    //                 payload: {
    //                     earnings: res.data.data,
    //                     earningsMetaData: {
    //                         links: res.data.links,
    //                         meta: res.data.meta,
    //                     },
    //                 },
    //             });
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };
    // const handleNextButton = async () => {
    //     try {
    //         const res = await axios.get(paginate?.links?.next, headersCredentials);
    //         if (res.status === 200) {
    //             dispatch({
    //                 type: `earnings/setAllearnings`,
    //                 payload: {
    //                     earnings: res.data.data,
    //                     earningsMetaData: {
    //                         links: res.data.links,
    //                         meta: res.data.meta,
    //                     },
    //                 },
    //             });
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    return (
        <>
            <TableContainer display={`flex`} flexDir={`column`} justifyContent={`space-between`} overflowY={`auto`}>
                <Table size={`sm`} variant="simple">
                    {/* head */}
                    <Thead zIndex={1} pos={`sticky`} top={0}>
                        <Tr bgColor={`purple.100`} color={`grey.300`}>
                            {tableHeader}
                        </Tr>
                    </Thead>
                    {/* body */}
                    <Tbody color={`purple.300`}>{withdrawEarnings}</Tbody>
                </Table>
                {/* <Box my={5}>
                    <DashboardEmptyState
                        content={{
                            title: "",
                            desc: "You do not have any sales yet.",
                            img: `https://res.cloudinary.com/kingsleysolomon/image/upload/v1702763260/earningize/Illustration_6_audoa8.png`,
                        }}
                        textAlign={{ base: `center` }}
                        showImage
                    />
                </Box> */}
            </TableContainer>
            {/* TABLE PAGINATION */}
            <Flex display={withdrawEarnings ? `flex` : `none`} mt={4} color={`grey.400`} alignItems={`center`} justifyContent={`space-between`}>
                <Box display={{ base: `none`, md: `initial` }}>
                    <Text>10 Entries per page </Text>
                </Box>
                <Box display={{ base: `none`, md: `initial` }}>
                    <Text>{/* Page {paginate?.meta?.current_page} of {paginate?.meta?.last_page} */}</Text>
                </Box>
                <Stack direction={`row`}>
                    <SharedButton
                        btnExtras={{
                            leftIcon: `material-symbols:chevron-left`,
                            border: `1px solid #CFCFD0`,
                            onClick: null,
                            // disabled: !paginate?.links?.prev,
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
                            onClick: null,
                            // disabled: !paginate?.links?.next,
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
            </Flex>
        </>
    );
};
