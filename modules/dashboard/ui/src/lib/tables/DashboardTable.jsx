import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Flex, Avatar, Text } from "@chakra-ui/react";
import { useCurrency, useDate } from "@productize-v1.0.0/modules/shared/hooks";
import { selectCurrentToken } from "@productize-v1.0.0/modules/shared/redux";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";


// USE REDUX TO FETCH THE DATA -- DANIEL

export const DashboardTable = () => {
    const [data, setData] = useState([]);
    const token = useSelector(selectCurrentToken);
    const formatCurrrency = useCurrency();
    const formatDate = useDate();

    const tableHeader = [`Product`, `Price`, `Customer's Email`, `Date`].map((title) => {
        return (
            <Th py={3} key={title}>
                {title}
            </Th>
        );
    });
    const tableContent = data?.data?.map((content) => {
        return (
            <Tr key={content.id}>
                <Td>
                    <Flex gap={2} alignItems={`center`}>
                        <Avatar
                            zIndex={-1}
                            bgColor={`yellow.100`}
                            src={content.product_thumbnail}
                            borderRadius={`4px`}
                            boxSize={`44px`}
                        />
                        <Text>{content?.product_title}</Text>
                    </Flex>
                </Td>
                <Td>
                    <Flex>{formatCurrrency(content?.product_price)}</Flex>
                </Td>
                <Td>
                    <Flex>{content?.customer_email}</Flex>
                </Td>
                <Td>
                    <Flex>{formatDate(content?.date)}</Flex>
                </Td>
            </Tr>
        );
    });

    const getTableData = useCallback(async () => {
        try {
            const res = await axios.get(`https://productize-api.techstudio.academy/api/orders`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                },
            });
            console.log(res.data);
            if (res.status === 200) {
                setData(res.data);
            }
        } catch (error) {
            console.error(error);
        }
    }, [token]);

    useEffect(() => {
        getTableData();
    }, [getTableData]);

    return (
        <TableContainer maxH={`25rem`} overflowY={`auto`}>
            <Table size={`sm`} variant="simple">
                {/* head */}
                <Thead pos={`sticky`} top={0}>
                    <Tr bgColor={`purple.100`} color={`grey.300`}>
                        {tableHeader}
                    </Tr>
                </Thead>
                {/* body */}
                <Tbody color={`purple.300`}>{tableContent}</Tbody>
            </Table>
        </TableContainer>
    );
};
