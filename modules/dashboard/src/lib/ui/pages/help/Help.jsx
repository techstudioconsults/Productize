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
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import errorImg from "@icons/error.svg";
import toastImg from "@icons/star-notice.png";
import { useSendHelpMessageMutation } from "@productize/redux";
import { ErrorText, SharedButton, ToastFeedback, useToastAction } from "@productize/ui";

export const Help = () => {
    const [error, setError] = useState("");
    const [sendHelpMessage, sendHelpMessageStatus] = useSendHelpMessageMutation();
    const { toast, toastIdRef, close } = useToastAction();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        criteriaMode: "all",
        mode: "onChange",
        // resolver: yupResolver(helpSchema),
    });

    const onSubmit = async (data) => {
        try {
            console.log(data);
            const res = await sendHelpMessage(data).unwrap();
            console.log(res);
            if (res.message) {
                toastIdRef.current = toast({
                    position: "top",
                    render: () => (
                        <ToastFeedback
                            btnColor={`purple.200`}
                            message={res?.message}
                            title="Email sent successfully"
                            icon={toastImg}
                            bgColor={undefined}
                            color={undefined}
                            handleClose={close}
                        />
                    ),
                });
            }
        } catch (error) {
            setError(error.data.message);
            toastIdRef.current = toast({
                position: "top",
                render: () => (
                    <ToastFeedback
                        message={error?.data?.message}
                        title="Email not sent!"
                        icon={errorImg}
                        color={`red.600`}
                        btnColor={`red.600`}
                        bgColor={undefined}
                        handleClose={close}
                    />
                ),
            });
        }
    };

    return (
        <Box maxW={1200} my={10}>
            <FormControl>
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
                        <FormControl as={`form`} onSubmit={handleSubmit(onSubmit)}>
                            <Box mb={4}>
                                {null && <ErrorText error={error} />}
                                <FormControl>
                                    <FormLabel color={`purple.300`} fontWeight={600}>
                                        Your Email
                                    </FormLabel>
                                    <Input
                                        type={`email`}
                                        bgColor={`grey.200`}
                                        _focus={{ bgColor: `grey.300`, color: `grey.800` }}
                                        _placeholder={{ color: `grey.400` }}
                                        placeholder="Enter email"
                                        variant={`filled`}
                                        size={`lg`}
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
                                        bgColor={`grey.200`}
                                        _focus={{ bgColor: `grey.300`, color: `grey.800` }}
                                        _placeholder={{ color: `grey.400` }}
                                        placeholder="Type a subject for your message"
                                        variant={`filled`}
                                        size={`lg`}
                                        {...register("subject")}
                                    />
                                    <Text className={`tiny-text`} color={`red.200`}>
                                        {errors?.subject?.message}
                                    </Text>
                                </FormControl>
                            </Box>
                            <Box mb={4}>
                                <FormControl>
                                    <FormLabel color={`purple.300`} fontWeight={600}>
                                        Message
                                    </FormLabel>
                                    <Textarea
                                        height={`10rem`}
                                        bgColor={`grey.200`}
                                        _focus={{ bgColor: `grey.300`, color: `grey.800` }}
                                        _placeholder={{ color: `grey.400` }}
                                        variant={`filled`}
                                        placeholder="Type your message"
                                        {...register("message")}
                                    />
                                    <Text className={`tiny-text`} color={`red.200`}>
                                        {errors?.message?.message}
                                    </Text>
                                </FormControl>
                            </Box>
                            <Flex gap={4} mt={6}>
                                <SharedButton
                                    btnExtras={{
                                        border: "1px solid #6D5DD3",
                                        onClick: () => reset(),
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
                                        isLoading: sendHelpMessageStatus.isLoading,
                                        loadingText: `Sending message...`,
                                        type: `submit`,
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
                        </FormControl>
                    </GridItem>
                </Grid>
            </FormControl>
        </Box>
    );
};
