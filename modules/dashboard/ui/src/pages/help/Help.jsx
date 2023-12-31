import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Flex,
    FormControl,
    FormLabel,
    Grid,
    GridItem,
    Input,
    Text,
    Textarea,
} from "@chakra-ui/react";
import { SharedButton } from "@productize-v1.0.0/modules/shared/ui";

export const Help = () => {
    return (
        <Box maxW={1200} my={10}>
            <FormControl as={`form`}>
                {/* grid one */}
                <Grid templateColumns="repeat(12, 1fr)" gap={6}>
                    <GridItem colSpan={{ base: 12, md: 5 }}>
                        <Text textAlign={{ base: `center`, md: `initial` }} color={`purple.300`} as={`h5`}>
                            Frequently Asked Questions
                        </Text>
                        <Text fontSize={`sm`} textAlign={{ base: `center`, md: `initial` }} color={`grey.300`}>
                            Check for frequently asked questions
                        </Text>
                    </GridItem>
                    <GridItem colSpan={{ base: 12, md: 7 }}>
                        <Accordion defaultIndex={[0]} allowMultiple>
                            {[1, 2, 3, 4, 5, 6].map((item) => {
                                return (
                                    <AccordionItem key={item} py={3}>
                                        <Text fontWeight={600}>
                                            <AccordionButton>
                                                <Box as="span" flex="1" textAlign="left">
                                                    Section {item} title
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </Text>
                                        <AccordionPanel pb={4}>
                                            <Text fontSize={`sm`}>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                                consequat.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                );
                            })}
                        </Accordion>
                    </GridItem>
                </Grid>
                {/* grid two*/}
                <Grid mt={20} templateColumns="repeat(12, 1fr)" gap={6}>
                    <GridItem colSpan={{ base: 12, md: 5 }}>
                        <Text textAlign={{ base: `center`, md: `initial` }} color={`purple.300`} as={`h5`}>
                            Contact Support
                        </Text>
                    </GridItem>
                    <GridItem mr={{ xxl: `15rem` }} colSpan={{ base: 12, md: 7 }}>
                        <Box mb={4}>
                            <FormControl>
                                <FormLabel color={`purple.300`} fontWeight={600}>
                                    Your Email
                                </FormLabel>
                                <Input
                                    // required
                                    // defaultValue={`user?.name`}
                                    bgColor={`grey.200`}
                                    _focus={{ bgColor: `grey.300`, color: `grey.800` }}
                                    _placeholder={{ color: `grey.400` }}
                                    placeholder="Enter email"
                                    variant={`filled`}
                                    size={`lg`}
                                    // {...register("full_name")}
                                />
                                <Text className={`tiny-text`} color={`red.200`}>
                                    {/* {errors?.full_name?.message} */}
                                </Text>
                            </FormControl>
                        </Box>
                        <Box mb={4}>
                            <FormControl>
                                <FormLabel color={`purple.300`} fontWeight={600}>
                                    Your Subject
                                </FormLabel>
                                <Input
                                    // required
                                    defaultValue={`user?.name`}
                                    bgColor={`grey.200`}
                                    _focus={{ bgColor: `grey.300`, color: `grey.800` }}
                                    _placeholder={{ color: `grey.400` }}
                                    placeholder="Type a subject for your message"
                                    variant={`filled`}
                                    size={`lg`}
                                    // {...register("full_name")}
                                />
                                <Text className={`tiny-text`} color={`red.200`}>
                                    {/* {errors?.full_name?.message} */}
                                </Text>
                            </FormControl>
                        </Box>
                        <Box mb={4}>
                            <FormControl>
                                <FormLabel color={`purple.300`} fontWeight={600}>
                                    Message
                                </FormLabel>
                                <Textarea
                                    // required
                                    // defaultValue={user?.bio}
                                    height={`10rem`}
                                    bgColor={`grey.200`}
                                    _focus={{ bgColor: `grey.300`, color: `grey.800` }}
                                    _placeholder={{ color: `grey.400` }}
                                    variant={`filled`}
                                    placeholder="Type your message"
                                    // {...register("bio")}
                                />
                            </FormControl>
                        </Box>
                        <Flex gap={4} mt={6}>
                            <SharedButton
                                btnExtras={{
                                    border: "1px solid #6D5DD3",
                                }}
                                text={"Cancel"}
                                width={"fit-content"}
                                height={"40px"}
                                bgColor={"transparent"}
                                textColor={"purple.200"}
                                borderRadius={"4px"}
                                fontSize={{ base: `sm`, md: `md` }}
                            />
                            <SharedButton
                                btnExtras={{
                                    // isLoading: profileStatus.isLoading,
                                    // isLoading: isLoading,
                                    loadingText: `Saving Profile...`,
                                    type: `submit`,
                                    // rightIcon: isPremium ? `` : `foundation:lock`,
                                }}
                                text={"Send Message"}
                                width={"fit-content"}
                                height={"40px"}
                                bgColor={"purple.200"}
                                textColor={"grey.100"}
                                borderRadius={"4px"}
                                fontSize={{ base: `sm`, md: `md` }}
                            />
                        </Flex>
                    </GridItem>
                </Grid>
            </FormControl>
        </Box>
    );
};
