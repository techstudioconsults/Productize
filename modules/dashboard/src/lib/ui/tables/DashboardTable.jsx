import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Flex, Avatar, Text, Skeleton, Center } from "@chakra-ui/react";
import { useCurrency, useDate } from "@productize-v1.0.0/modules/shared/hooks";
import { selectCurrentToken } from "@productize-v1.0.0/modules/shared/redux";
import { OnBoardingLoader } from "@productize-v1.0.0/modules/shared/ui";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { DashboardEmptyState } from "../empty-states/DashboardEmptyState";

// USE REDUX TO FETCH THE DATA -- DANIEL

export const DashboardTable = () => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);
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
                        <Avatar zIndex={-1} bgColor={`yellow.100`} src={content.product_thumbnail} borderRadius={`4px`} boxSize={`44px`} />
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
            setLoading(true);
            const res = await axios.get(`https://productize-api.techstudio.academy/api/orders`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                },
            });

            if (res.status === 200) {
                setLoading(false);
                setData(res.data);
            }
        } catch (error) {
            setLoading(false);
            console.error(error);
        }
    }, [token]);

    useEffect(() => {
        getTableData();
    }, [getTableData]);

    return (
        <TableContainer maxH={`25rem`} overflowY={`auto`}>
            {isLoading ? (
                <OnBoardingLoader />
            ) : data?.data?.length ? (
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
            ) : (
                <DashboardEmptyState
                    content={{
                        title: "",
                        desc: "You do not have any sales activities yet.",
                        img: `https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951005/productize/Illustration_oblvox_athyeh.png`,
                    }}
                    textAlign={{ base: `center` }}
                    showImage
                />
            )}
        </TableContainer>
    );
};
