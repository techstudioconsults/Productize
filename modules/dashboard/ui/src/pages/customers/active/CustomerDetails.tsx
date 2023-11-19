import { Box, Card, Flex, Image, SimpleGrid, Stack, Tag, Text, useToast } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { useDate, useCurrency } from "@productize-v1.0.0/modules/shared/hooks";
import { useGetSingleProductDetailsMutation, selectSingleProduct, selectAllCustomers } from "@productize-v1.0.0/modules/shared/redux";
import { SpinnerComponentSmall } from "@productize-v1.0.0/modules/shared/ui";
import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
// import rectangle from "@icons/Rectangle_ikpmwt.svg";
import arrowLeft from "@icons/Property_2_Arrow-left_kafkjg.svg";
import { CustomerTable } from "../../../lib/tables/CustomerTable";
import { CustomerDetailsTable } from "../../../lib/tables/CustomerDetailsTable";
import { DataWidgetCard } from "../../../lib/DataWidgetCard";

export const CustomersDetails = () => {
    const { productID } = useParams();
    const navigate = useNavigate();
    const toast = useToast();
    const allCustomers = useSelector(selectAllCustomers);
    const [getSingleProduct, singleProductStatus] = useGetSingleProductDetailsMutation();
    const product = useSelector(selectSingleProduct);
    const formatDate = useDate();
    const formatCurrency = useCurrency();

    // copy test to clipboard
    const copyTextToClipBoard = () => {
        const textToCopy = product?.data?.[0];
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
                        <Text as={`h6`}>{product?.title}</Text>
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
                                        <Link target="_blank" to={product?.data?.[0]}>
                                            <Text>{product?.data?.[0].slice(0, 20)}...</Text>
                                        </Link>
                                        <Box _hover={{ color: `purple.200` }}>
                                            <Icon cursor={`pointer`} onClick={copyTextToClipBoard} color="grey" icon={`ph:copy-simple-light`} />
                                        </Box>
                                    </Flex>
                                )}
                            </Stack>
                            <Stack gap={2}>
                                <Text fontWeight={600}>Joined</Text>
                                {singleProductStatus.isLoading ? <SpinnerComponentSmall size="sm" /> : <Text>{formatDate(product?.created_at)}</Text>}
                            </Stack>
                        </Flex>
                        <SimpleGrid gap={4} columns={{ base: 1, md: 2 }}>
                            <Box>
                                <DataWidgetCard showIcon={false} title={"Total Order"} value={3} />
                            </Box>
                            <Box>
                                <DataWidgetCard showIcon={false} title={"Total Transaction"} value={`NGN 8,700.00`} />
                            </Box>
                            <Box>
                                <DataWidgetCard showIcon={false} title={"Free Products"} value={`2`} />
                            </Box>
                            <Box>
                                <DataWidgetCard showIcon={false} title={"Sale Products"} value={`1`} />
                            </Box>
                        </SimpleGrid>
                    </Box>
                    <Box>
                        <CustomerDetailsTable tableData={allCustomers} />
                    </Box>
                </SimpleGrid>
            </Box>
            {/* row3 */}
            {/* grid cards */}
        </Box>
    );
};
