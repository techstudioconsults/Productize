import { Avatar, Box, Card, CardBody, CardFooter, Center, Divider, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { SharedButton } from "@productize-v1.0.0/modules/shared/ui";
import React from "react";

export const ProductCard = () => {
    return (
        <Card direction={{ base: "column", sm: "row" }} overflow="hidden" variant="none">
            <Image
                objectFit="cover"
                maxW={{ base: "100%", sm: "200px" }}
                src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                alt="Caffe Latte"
            />

            <Stack w={`100%`}>
                <CardBody>
                    <Flex justifyContent={`space-between`} fontWeight={600}>
                        <Text size="md">UI Design Systems Mastery</Text>
                        <Text>₦3,000</Text>
                    </Flex>
                    <Flex mt={3} gap={2} alignItems={`center`}>
                        <Avatar size={`sm`} name="Christian Nwamba" src="https://bit.ly/code-beast" />
                        <Text fontWeight={`500`}>Temilade Openiyi</Text>
                    </Flex>
                </CardBody>

                <CardFooter py={0} justifyContent={`space-between`}>
                    <Text>Qty: 1</Text>
                    <Center color={`red.200`}>
                        <Icon icon={`mdi:trash`} />
                    </Center>
                </CardFooter>
            </Stack>
        </Card>
    );
};

export const ProductCards = () => {
    return (
        <Box borderRadius={`8px`} border={`1px solid #CFCFD0`} p={5}>
            <ProductCard />
            <Divider my={4} />
            <ProductCard />
            <Divider my={4} />
            <ProductCard />
            <Divider my={4} />
            <Flex fontWeight={600} justifyContent={`space-between`}>
                <Text>Total</Text>
                <Text>₦9,000</Text>
            </Flex>
            <Divider my={4} />
            <Stack gap={4}>
                <SharedButton
                    text={"Proceed to pay"}
                    width={"100%"}
                    height={"48px"}
                    bgColor={"purple.200"}
                    textColor={"grey.100"}
                    borderRadius={"4px"}
                    fontSize={{ base: `sm`, md: `md` }}
                />
                <Text textAlign={`center`} color={`grey.400`} textDecor={`underline`}>Give As Gift</Text>
            </Stack>
        </Box>
    );
};
