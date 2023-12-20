import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Flex, Avatar, Text } from "@chakra-ui/react";
import { useCurrency, useDate, useTime } from "@productize-v1.0.0/modules/shared/hooks";
import { selectCurrentToken } from "@productize-v1.0.0/modules/shared/redux";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

// USE REDUX TO FETCH THE DATA -- DANIEL

export const ProductCustomerTable = () => {
    const [data, setData] = useState([]);
    const token = useSelector(selectCurrentToken);
    // const formatCurrrency = useCurrency();
    const formatDate = useDate();
    const formatTime = useTime();
    const { productID } = useParams();

    const tableHeader = [`Customer name`, `Customer Email`, `Quantity`, `Date`].map((title) => {
        return (
            <Th py={3} key={title}>
                {title}
            </Th>
        );
    });
    const tableContent = data?.map((content) => {
        return (
            <Tr key={content.id}>
                <Td>
                    <Flex gap={2} alignItems={`center`}>
                        {/* <Avatar zIndex={-1} bgColor={`yellow.100`} src={content.product_thumbnail} borderRadius={`4px`} boxSize={`44px`} /> */}
                        <Text>{content?.customer_name}</Text>
                    </Flex>
                </Td>
                <Td>
                    <Flex my={5}>{content?.customer_email}</Flex>
                </Td>
                <Td>
                    <Flex>{content?.quantity}</Flex>
                </Td>
                <Td>
                    <Flex>{`
                    ${formatDate(content?.date)}
                    ${formatTime(content?.date)}
                    `}</Flex>
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
                const filteredCustomer = res.data.data.filter((customer) => {
                    return customer.product_id === productID;
                });
                setData(filteredCustomer);
            }
        } catch (error) {
            console.error(error);
        }
    }, [productID, token]);

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
