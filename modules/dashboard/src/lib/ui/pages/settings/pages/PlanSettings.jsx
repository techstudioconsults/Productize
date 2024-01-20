import { Box, Card, Center, Divider, Flex, Grid, GridItem, ModalCloseButton, Skeleton, Stack, Text, useDisclosure } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { SharedButton } from "@productize-v1.0.0/modules/shared/ui";

export const PlanSettings = () => {
    return (
        <Grid templateColumns="repeat(12, 1fr)" gap={6}>
            <GridItem colSpan={{ base: 12, md: 5 }}>
                <Text textAlign={{ base: `center`, md: `initial` }} color={`purple.300`} as={`h5`}>
                    Plan
                </Text>
                <Text textAlign={{ base: `center`, md: `initial` }} color={`grey.400`} fontSize={`sm`} mt={3}>
                    Select your default payout method
                </Text>
            </GridItem>
            <GridItem colSpan={{ base: 12, md: 7 }}>
                <Flex alignItems={`flex-end`} justifyContent={`space-between`}>
                    <Box>
                        <Text fontWeight={600} textAlign={{ base: `center`, md: `initial` }} color={`purple.300`} my={2}>
                            Plan Type
                        </Text>
                        <Text textAlign={{ base: `center`, md: `initial` }} color={`grey.400`} fontSize={`sm`}>
                            Select your default payment method
                        </Text>
                    </Box>
                    <Box>
                        <SharedButton
                            text={"Change Plan"}
                            width={`100%`}
                            height={"48px"}
                            bgColor={"purple.200"}
                            textColor={"white"}
                            borderRadius={"4px"}
                            fontSize={{ base: `sm`, lg: `md` }}
                        />
                    </Box>
                </Flex>
                <Divider my={5} />
                <Flex alignItems={`center`} justifyContent={`space-between`}>
                    <Box>
                        <Text fontWeight={600} textAlign={{ base: `center`, md: `initial` }} color={`purple.300`} my={2}>
                            Billing cycle
                        </Text>
                        <Text textAlign={{ base: `center`, md: `initial` }} color={`grey.400`} fontSize={`sm`}>
                            Every Month
                        </Text>
                    </Box>
                    <Box>
                        <Icon fontSize={`24px`} icon={`material-symbols:chevron-right`} />
                    </Box>
                </Flex>
                <Divider my={5} />
            </GridItem>
        </Grid>
    );
};

export default PlanSettings;
