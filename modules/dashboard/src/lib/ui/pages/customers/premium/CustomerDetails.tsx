import { Box, Card, Flex, Image, SimpleGrid, Skeleton, SkeletonText, Stack, Text, useToast } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { useDate, useCurrency } from "@productize-v1.0.0/modules/shared/hooks";
import { selectSingleCustomer, useGetSingleCustomerDetailsMutation } from "@productize-v1.0.0/modules/shared/redux";
import { OnBoardingLoader, SpinnerComponentSmall } from "@productize-v1.0.0/modules/shared/ui";
import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
// import rectangle from "@icons/Rectangle_ikpmwt.svg";
import arrowLeft from "@icons/Property_2_Arrow-left_kafkjg.svg";
import { DataWidgetCard } from "../../../DataWidgetCard";
import { CustomerDetailsTable } from "../../../tables/CustomerDetailsTable";

export const CustomersDetails = () => {
    const navigate = useNavigate();
    const toast = useToast();
    const [getSingleCustomerDetails, getSingleCustomerDetailsStatus] = useGetSingleCustomerDetailsMutation();
    const singleCustomer = useSelector(selectSingleCustomer);
    const formatDate = useDate();
    const formatCurrency = useCurrency();
    const { customerID } = useParams();

    const showSingleCustomer = useCallback(async () => {
        try {
            await getSingleCustomerDetails({ customerID }).unwrap();
        } catch (error) {
            return error;
        }
    }, [customerID, getSingleCustomerDetails]);

    useEffect(() => {
        showSingleCustomer();
    }, [showSingleCustomer]);

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
                        <SkeletonText isLoaded={!getSingleCustomerDetailsStatus.isLoading} noOfLines={1} w={`10rem`}>
                            <Text as={`h6`}>{singleCustomer?.name}</Text>
                        </SkeletonText>
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
                                <SkeletonText isLoaded={!getSingleCustomerDetailsStatus.isLoading} noOfLines={1} w={`10rem`}>
                                    <Flex gap={2} alignItems={`center`}>
                                        <Link target="_blank" to={singleCustomer?.email}>
                                            <Text>{singleCustomer?.email}</Text>
                                        </Link>
                                        <Box _hover={{ color: `purple.200` }}>
                                            <Icon cursor={`pointer`} onClick={copyTextToClipBoard} color="grey" icon={`ph:copy-simple-light`} />
                                        </Box>
                                    </Flex>
                                </SkeletonText>
                            </Stack>
                            <Stack gap={2}>
                                <Text fontWeight={600}>Joined</Text>
                                <SkeletonText isLoaded={!getSingleCustomerDetailsStatus.isLoading} noOfLines={1} w={`10rem`}>
                                    <Text>{formatDate(singleCustomer?.joined)}</Text>
                                </SkeletonText>
                            </Stack>
                        </Flex>
                        <SimpleGrid gap={4} columns={{ base: 1, md: 2 }}>
                            <Skeleton isLoaded={!getSingleCustomerDetailsStatus.isLoading}>
                                <Box>
                                    <DataWidgetCard showIcon={false} title={"Total Order"} value={singleCustomer.total_order} />
                                </Box>
                            </Skeleton>
                            <Skeleton isLoaded={!getSingleCustomerDetailsStatus.isLoading}>
                                <Box>
                                    <DataWidgetCard showIcon={false} title={"Total Transaction"} value={formatCurrency(singleCustomer.total_transactions)} />
                                </Box>
                            </Skeleton>
                            <Skeleton isLoaded={!getSingleCustomerDetailsStatus.isLoading}>
                                <Box>
                                    <DataWidgetCard showIcon={false} title={"Free Products"} value={singleCustomer.free_products} />
                                </Box>
                            </Skeleton>
                            <Skeleton isLoaded={!getSingleCustomerDetailsStatus.isLoading}>
                                <Box>
                                    <DataWidgetCard showIcon={false} title={"Sale Products"} value={singleCustomer.sale_products} />
                                </Box>
                            </Skeleton>
                        </SimpleGrid>
                    </Box>
                    <Box>
                        {getSingleCustomerDetailsStatus.isLoading ? (
                            <OnBoardingLoader />
                        ) : (
                            <CustomerDetailsTable tableData={singleCustomer?.latest_purchases} />
                        )}
                    </Box>
                </SimpleGrid>
            </Box>
            {/* row3 */}
            {/* grid cards */}
        </Box>
    );
};
