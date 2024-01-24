import { Box, Card, Center, Container, Flex, Image, Stack, Text, useToast } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { useCurrency } from "@productize-v1.0.0/modules/shared/hooks";
import { Link, useLocation } from "react-router-dom";
import { DashboardEmptyState } from "../../../empty-states/DashboardEmptyState";
// import rectangle from "@icons/Rectangle_ikpmwt.svg";

const ShareLayout = () => {
    const toast = useToast();
    const { state } = useLocation();
    const formatCurrency = useCurrency();

    const copyTextToClipBoard = () => {
        // const textToCopy = product?.data?.data?.[0];
        navigator.clipboard
            .writeText(state?.product?.link)
            .then(() => {
                toast({
                    position: "top",
                    render: () => (
                        <Card display={`flex`} flexDir={`row`} alignItems={`center`} w={{ base: `100%`, lg: `702px` }} p={1} bg="grey.100">
                            <Box borderRight={`1px solid green`} p={2}>
                                <Image objectFit={`cover`} objectPosition={`center`} src={`rectangle`} alt="img" />
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
        <Container mt={`5rem`} textAlign={`center`} p={0} maxW={`542px`}>
            {state ? (
                <>
                    <Card variant={`unstyled`} border={`1px solid #CFCFD0`} p={2}>
                        <Box h={`197px`}>
                            <Image objectFit={`cover`} w={`100%`} h={`100%`} src={state?.product?.data?.cover_photos?.[0]} alt="img" />
                        </Box>
                        <Stack mt={4} alignItems={`center`}>
                            <Text fontWeight={600}></Text>
                            <Text fontWeight={600}>{formatCurrency(state?.product?.data?.price)}</Text>
                        </Stack>
                    </Card>
                    <Stack alignItems={`center`} mt={`4rem`}>
                        <Text as={`h5`}>Product Published Successfully!</Text>
                        <Text color={`grey.500`} my={4}>
                            Copy and send this link to someone and they’ll be able to get your product
                        </Text>
                        <Flex w={`100%`} p={`8px`} borderRadius={5} bgColor={`grey.200`} gap={2} alignItems={`center`} justifyContent={`space-around`}>
                            <Link target="_blank" to={`product?.data?.data?.[0]`}>
                                <Text>
                                    {state?.product?.link}
                                    {/* https://aishat-akinwumi.productize.store/product/product-title */}
                                </Text>
                            </Link>

                            <Icon fontSize={`24px`} cursor={`pointer`} onClick={copyTextToClipBoard} icon={`ph:copy-simple-light`} />
                        </Flex>
                        <Flex gap={4} my={4}>
                            <Center fontSize={`24px`} borderRadius={`100%`} bgColor={`grey.200`} p={2}>
                                <Icon cursor={`pointer`} icon={`mdi:twitter`} />
                            </Center>
                            <Center fontSize={`24px`} borderRadius={`100%`} bgColor={`grey.200`} p={2}>
                                <Icon cursor={`pointer`} icon={`gg:facebook`} />
                            </Center>
                            <Center fontSize={`24px`} borderRadius={`100%`} bgColor={`grey.200`} p={2}>
                                <Icon cursor={`pointer`} icon={`ri:linkedin-fill`} />
                            </Center>
                        </Flex>
                    </Stack>
                </>
            ) : (
                <DashboardEmptyState
                    content={{
                        title: "",
                        desc: "Nothing to Share at this time",
                        img: ``,
                    }}
                    textAlign={{ base: `center` }}
                    showImage={false}
                />
            )}
        </Container>
    );
};

export default ShareLayout;
