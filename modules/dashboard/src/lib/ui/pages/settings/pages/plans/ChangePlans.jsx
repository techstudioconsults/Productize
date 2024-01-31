import { Box, Container, Flex, Image, Switch, Tag, Text } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import arrowLeft from "@icons/Property_2_Arrow-left_kafkjg.svg";
import { FreePricingCard, PremiumPricingCard } from "@productize-v1.0.0/modules/shared/ui";
import { useNavigate } from "react-router-dom";

export const ChangePlans = () => {
    const navigate = useNavigate();
    return (
        <Box my={5}>
            <Flex cursor={`pointer`} onClick={() => navigate(-1)} w={`fit-content`} gap={8} alignItems={`center`}>
                <Box>
                    <Image src={arrowLeft} />
                </Box>
                <Text as={`h6`}>Plan Details</Text>
            </Flex>
            <Box my={10}>
                <Text textAlign={{ base: `center`, md: `initial` }} color={`purple.300`} as={`h5`}>
                    Change your plan
                </Text>
                <Text textAlign={{ base: `center`, md: `initial` }} color={`grey.400`} fontSize={`sm`} mt={3}>
                    Manage you plan and choose what is best work for you and your team.
                </Text>
            </Box>
            <Flex justifyContent={`space-between`} alignItems={`center`} gap={5} flexDir={{ base: `column`, md: `row` }}>
                <Flex alignItems={`center`} gap={2}>
                    <Icon icon={`solar:calendar-bold-duotone`} />
                    <Text fontSize={`sm`}>Renewal date</Text>
                </Flex>
                <Flex gap={5} alignItems={`center`} flexDir={{ base: `column`, sm: `row` }}>
                    <Flex alignItems={`center`} gap={2}>
                        <Text>Bill Monthly</Text>
                        <Switch size="md" colorScheme="green" />
                    </Flex>
                    <Flex alignItems={`center`} gap={2}>
                        <Text color={`grey.300`}>Bill Anually</Text>
                        <Tag>Coming soon</Tag>
                    </Flex>
                </Flex>
            </Flex>
            <Container p={0} maxW={{ base: `400px`, md: `1200px` }}>
                <Flex my={5} flexDir={{ base: `column`, md: `row` }} justifyContent={`space-between`} alignItems={`center`} gap={`10`}>
                    <FreePricingCard
                        cardProps={{
                            bgColor: `purple.100`,
                            width: { base: `100%`, xl: `25rem` },
                            height: `556px`,
                            borderRadius: `8px`,
                        }}
                        listItems={[
                            `lorem lorem lorem lorem lorem lorem lorem lorem lorem`,
                            `lorem lorem lorem lorem lorem lorem lorem lorem lorem`,
                            `lorem lorem lorem lorem lorem lorem lorem lorem lorem`,
                            `lorem lorem lorem lorem lorem lorem lorem lorem lorem`,
                            `lorem lorem lorem lorem lorem lorem lorem lorem lorem`,
                        ]}
                        iconColor={"black"}
                        amount={0}
                        status={"Free"}
                        textColor={"yellow.300"}
                        statusColor={"yellow.300"}
                        tagProps={{
                            title: "Current Plan",
                            bgColor: "grey.800",
                            color: `white`,
                        }}
                    />
                    <PremiumPricingCard
                        cardProps={{
                            bgColor: `purple.300`,
                            width: { base: `100%`, xl: `25rem` },
                            height: `556px`,
                            borderRadius: `8px`,
                        }}
                        listItems={[
                            `lorem lorem lorem lorem lorem lorem lorem lorem lorem`,
                            `lorem lorem lorem lorem lorem lorem lorem lorem lorem`,
                            `lorem lorem lorem lorem lorem lorem lorem lorem lorem`,
                            `lorem lorem lorem lorem lorem lorem lorem lorem lorem`,
                            `lorem lorem lorem lorem lorem lorem lorem lorem lorem`,
                        ]}
                        iconColor={"gold"}
                        amount={5000}
                        status={"premium"}
                        textColor={"purple.100"}
                        statusColor={"yellow.100"}
                        tagProps={{
                            title: "Best Value",
                            bgColor: "yellow.100",
                            color: `yellow.300`,
                        }}
                    />
                </Flex>
            </Container>
        </Box>
    );
};

export default ChangePlans;
