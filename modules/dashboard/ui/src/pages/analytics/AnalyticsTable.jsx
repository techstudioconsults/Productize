import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Flex, Avatar, Text, Box } from "@chakra-ui/react";
import { selectCurrentToken } from "@productize-v1.0.0/modules/shared/redux";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { DashboardEmptyState } from "../../lib/empty-states/DashboardEmptyState";

export const AnalyticsTable = () => {
    const [data, setData] = useState([]);
    const token = useSelector(selectCurrentToken);

    const tableHeader = [`Latest Purchase`, `View`, `Price`, `Purchases`, `Revenuce`].map((title) => {
        return (
            <Th py={3} key={title}>
                {title}
            </Th>
        );
    });
    const tableContent = [1].map((content) => {
        return (
            <Tr key={content}>
                {/* <Td>
                    <Flex gap={2} alignItems={`center`}>
                        <Avatar
                            zIndex={-1}
                            bgColor={`yellow.100`}
                            src="https://res.cloudinary.com/dkszgtapy/image/upload/v1692269980/learning_atvahc.gif"
                            borderRadius={`4px`}
                            boxSize={`44px`}
                        />
                        <Text>UX Design Fundamentals</Text>
                    </Flex>
                </Td>
                <Td>
                    <Flex>NGN 5.500</Flex>
                </Td>
                <Td>
                    <Flex>example@gmail.com</Flex>
                </Td>
                <Td>
                    <Flex>15 May 2023 8:00 am</Flex>
                </Td> */}
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
            <Box my={10}>
                <DashboardEmptyState
                    content={{
                        title: "",
                        desc: "You do not have Customers activities yet.",
                        img: `https://res.cloudinary.com/kingsleysolomon/image/upload/v1700317427/productize/Illustration_4_pujumv.png`,
                    }}
                    textAlign={{ base: `center` }}
                    showImage
                />
            </Box>
        </TableContainer>
    );
};
