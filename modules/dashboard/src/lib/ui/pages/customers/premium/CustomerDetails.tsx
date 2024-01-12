import { Box, Card, Flex, Image, SimpleGrid, Stack, Tag, Text, useToast } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { useDate, useCurrency } from "@productize-v1.0.0/modules/shared/hooks";
import { useGetSingleProductDetailsMutation, selectAllCustomers, selectCurrentToken } from "@productize-v1.0.0/modules/shared/redux";
import { SpinnerComponentSmall } from "@productize-v1.0.0/modules/shared/ui";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
// import rectangle from "@icons/Rectangle_ikpmwt.svg";
import arrowLeft from "@icons/Property_2_Arrow-left_kafkjg.svg";
import axios from "axios";
import { DataWidgetCard } from "../../../DataWidgetCard";
import { CustomerDetailsTable } from "../../../tables/CustomerDetailsTable";

export const CustomersDetails = () => {
    const { productID } = useParams();
    const navigate = useNavigate();
    const toast = useToast();
    const [getSingleProduct, singleProductStatus] = useGetSingleProductDetailsMutation();
    // const product = useSelector(selectSingleProduct);
    const formatDate = useDate();
    const formatCurrency = useCurrency();
    const { customerID } = useParams();
    const token = useSelector(selectCurrentToken);
    const [singleCustomer, setSingleCustomer] = useState({});

    const getSingleOrder = useCallback(async () => {
        try {
            const res = await axios.get(`https://productize-api.techstudio.academy/api/customers/${customerID}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(res);
            if (res.status === 200) {
                setSingleCustomer(res.data.data);
            }
        } catch (error) {
            console.log(error);
        }
    }, [customerID, token]);

    useEffect(() => {
        getSingleOrder();
    }, [getSingleOrder]);

    // copy test to clipboard
    const copyTextToClipBoard = () => {
        const textToCopy = singleCustomer?.email;
        navigator.clipboard
            .writeText(textToCopy)
            .then(() => {
                toast({
                    position: "top",
                    render: () => (
                        <Card display={`flex`} flexDir={`row`} alignItems={`center`} w={{ base: `100%`, lg: `702px` }} p={1} bg="grey.100">
                            <Box borderRight={`1px solid green`} p={2}>
                                <Image src={``} alt="img" />
                            </Box>
                            <Box p={2}>
                                <Text fontWeight={600}>Product link Copied!</Text>
                                <Text className="small-text" color={`grey.400`}>
                                    You have successfully your product link
                                </Text>
                            </Box>
                        </Card>
                    ),
                });
            })
            .catch((error) => {
                console.error("Failed to copy text: ", error);
            });
    };

    const showSingleProduct = useCallback(async () => {
        try {
            await getSingleProduct({ productID }).unwrap();
        } catch (error) {
            return error;
        }
    }, [getSingleProduct, productID]);

    useEffect(() => {
        showSingleProduct();
    }, [showSingleProduct]);

    return (
        <Box my={8}>
            {/* row 1 */}
            <Flex flexDir={{ base: `column`, md: `row` }} justifyContent={`space-between`} alignItems={{ base: `flex-start`, md: `center` }} gap={4}>
                <Flex w={`100%`} gap={8} alignItems={`center`}>
                    <Box cursor={`pointer`} onClick={() => navigate(-1)}>
                        <Image src={arrowLeft} />
                    </Box>
                    <Text as={`h6`}>Customer Details</Text>
                </Flex>
            </Flex>
            {/* row 2 */}
            <Box mt={8} mb={4} color={`purple.300`}>
                <SimpleGrid columns={{ base: 1, xl: 2 }} gap={5}>
                    <Box mt={8} mb={4} color={`purple.300`}>
                        <Text as={`h6`}>{singleCustomer?.title}</Text>
                        <Flex
                            flexDir={{ base: `column`, xl: `row` }}
                            borderBlock={`1px solid #EFEFEF`}
                            gap={{ base: 8, xl: 32 }}
                            py={8}
                            alignItems={{ base: `flex-start`, xl: `center` }}
                            my={2}
                        >
                            <Stack gap={2}>
                                <Text fontWeight={600}>Email Address</Text>
                                {singleProductStatus.isLoading ? (
                                    <SpinnerComponentSmall size="sm" />
                                ) : (
                                    <Flex gap={2} alignItems={`center`}>
                                        <Link target="_blank" to={singleCustomer?.email}>
                                            <Text>{singleCustomer?.email}</Text>
                                        </Link>
                                        <Box _hover={{ color: `purple.200` }}>
                                            <Icon cursor={`pointer`} onClick={copyTextToClipBoard} color="grey" icon={`ph:copy-simple-light`} />
                                        </Box>
                                    </Flex>
                                )}
                            </Stack>
                            <Stack gap={2}>
                                <Text fontWeight={600}>Joined</Text>
                                {singleProductStatus.isLoading ? <SpinnerComponentSmall size="sm" /> : <Text>{formatDate(singleCustomer?.joined)}</Text>}
                            </Stack>
                        </Flex>
                        <SimpleGrid gap={4} columns={{ base: 1, md: 2 }}>
                            <Box>
                                <DataWidgetCard showIcon={false} title={"Total Order"} value={singleCustomer.total_order} />
                            </Box>
                            <Box>
                                <DataWidgetCard showIcon={false} title={"Total Transaction"} value={formatCurrency(singleCustomer.total_transactions)} />
                            </Box>
                            <Box>
                                <DataWidgetCard showIcon={false} title={"Free Products"} value={singleCustomer.free_products} />
                            </Box>
                            <Box>
                                <DataWidgetCard showIcon={false} title={"Sale Products"} value={singleCustomer.sale_products} />
                            </Box>
                        </SimpleGrid>
                    </Box>
                    <Box>
                        <CustomerDetailsTable tableData={singleCustomer?.latest_purchases} />
                    </Box>
                </SimpleGrid>
            </Box>
            {/* row3 */}
            {/* grid cards */}
        </Box>
    );
};
