/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Flex, Text, Stack, Box, Avatar, Tag } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { selectAllOrders, selectCurrentToken } from "@productize-v1.0.0/modules/shared/redux"
import { useCurrency, useDate, useTime } from "@productize-v1.0.0/modules/shared/hooks"
import { SharedButton } from "@productize-v1.0.0/modules/shared/ui"
import { DropdownActionLive } from "../../../DropdownAction"

export const PayoutTable = ( { tableData } ) => {
    // const token = useSelector(selectCurrentToken);
    const orders = useSelector( selectAllOrders )
    const formatCurrency = useCurrency()
    const formatDate = useDate()
    const formatTime = useTime()
    // const paginate = useSelector(selectearningsMetaData);
    // const dispatch = useDispatch();
    // const headersCredentials = {
    //     headers: {
    //         Authorization: `Bearer ${token}`,
    //     },
    // };

    function calculatePercentage ( percentage, baseValue ) {
        const percentageDecimal = percentage / 100
        const result = percentageDecimal * baseValue
        return result
    }

    const tableHeader = [ `Price`, `BAnk Account`, `Period`, `Commission ( % )`, `amount` ].map( ( title ) => {
        return (
            <Th py={ 3 } key={ title }>
                { title }
            </Th>
        )
    } )
    const withdrawEarnings = orders?.map( ( earning ) => {
        return (
            <Tr _hover={ { bgColor:`purple.100`, cursor:`pointer` } } key={ earning.id }>
                <Td>
                    <Flex alignItems={ `center` }>
                        <Text>{ formatCurrency( earning.product_price ) }</Text>
                    </Flex>
                </Td>
                <Td py={ 5 }>
                    <Flex alignItems={ `center` } gap={ 5 }>
                        <Avatar size={ `xs` } name={ earning.bank_name } src={ null }/>
                        <Text>{ `${ earning.bank_name } ${ earning.bank_account_number.slice( 0, 3 ) }****${ earning.bank_account_number.slice( 7 ) }` }</Text>
                    </Flex>
                </Td>
                <Td>
                    <Flex>{ `
                    ${ formatDate( earning?.date ) }
                    ${ formatTime( earning?.date ) }
                    ` }</Flex>
                </Td>
                <Td>
                    <Flex>
                        <Tag bg={ `grey.200` } color={ `green.300` } fontWeight={ 600 } size={ `lg` } fontSize={ `sm` }>
                            5%
                        </Tag>
                    </Flex>
                </Td>
                <Td>
                    <Flex>
                        <Tag bg={ `grey.200` } color={ `green.200` } fontWeight={ 600 } size={ `lg` } fontSize={ `sm` }>
                            { formatCurrency( calculatePercentage( 5, earning.product_price ) ) }
                        </Tag>
                    </Flex>
                </Td>
            </Tr>
        )
    } )

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
            <TableContainer display={ `flex` } flexDir={ `column` } justifyContent={ `space-between` } overflowY={ `auto` }>
                <Table size={ `sm` } variant="simple">
                    {/* head */ }
                    <Thead zIndex={ 1 } pos={ `sticky` } top={ 0 }>
                        <Tr bgColor={ `purple.100` } color={ `grey.300` }>
                            { tableHeader }
                        </Tr>
                    </Thead>
                    {/* body */ }
                    <Tbody color={ `purple.300` }>{ withdrawEarnings }</Tbody>
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
                </Box> */ }
            </TableContainer>
            {/* TABLE PAGINATION */ }
            {/* <Flex display={withdrawEarnings ? `flex` : `none`} mt={4} color={`grey.400`} alignItems={`center`} justifyContent={`space-between`}>
                <Box display={{ base: `none`, md: `initial` }}>
                    <Text>10 Entries per page </Text>
                </Box>
                <Box display={{ base: `none`, md: `initial` }}>
                    <Text>Page {paginate?.meta?.current_page} of {paginate?.meta?.last_page}</Text>
                </Box>
                <Stack direction={`row`}>
                    <SharedButton
                        btnExtras={{
                            leftIcon: `material-symbols:chevron-left`,
                            border: `1px solid #CFCFD0`,
                            onClick: null,
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
                            onClick: null,
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
            </Flex> */ }
        </>
    )
}
