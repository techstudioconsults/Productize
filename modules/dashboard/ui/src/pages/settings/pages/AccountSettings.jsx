import { Box, Divider, Flex, FormControl, FormLabel, Grid, GridItem, Input, Radio, Switch, Text } from "@chakra-ui/react";
import { SharedButton } from "@productize-v1.0.0/modules/shared/ui";
import { useState } from "react";

const AccountSettings = () => {
    const [showResetPasswordView, setShowResetPassword] = useState(true);

    const handleShowResetPasswordView = () => {
        setShowResetPassword((prevState) => {
            prevState = !prevState;
        });
        console.log(showResetPasswordView);
    };
    return (
        <div>
            <FormControl as={`form`}>
                {/* grid one */}
                <Grid templateColumns="repeat(12, 1fr)" gap={6}>
                    <GridItem colSpan={{ base: 12, md: 5 }}>
                        <Text textAlign={{ base: `center`, md: `initial` }} color={`purple.300`} as={`h5`}>
                            Email notification
                        </Text>
                    </GridItem>
                    <GridItem colSpan={{ base: 12, md: 7 }}>
                        <FormControl mt={4}>
                            <Flex justifyContent={`space-between`} alignItems={`center`}>
                                <FormLabel className="small-text">
                                    <Text fontWeight={600}>Purchase</Text>
                                    <Text color={`grey.400`} fontSize={`sm`}>
                                        Lorem ipsum dolor sit amet.
                                    </Text>
                                </FormLabel>
                                <Switch size="lg" colorScheme="green" />
                            </Flex>
                        </FormControl>
                        <Divider my={4} />
                        <FormControl mt={4}>
                            <Flex justifyContent={`space-between`} alignItems={`center`}>
                                <FormLabel className="small-text">
                                    <Text fontWeight={600}>News & Updates</Text>
                                    <Text color={`grey.400`} fontSize={`sm`}>
                                        Lorem ipsum dolor sit amet.
                                    </Text>
                                </FormLabel>
                                <Switch size="lg" colorScheme="green" />
                            </Flex>
                        </FormControl>
                        <Divider my={4} />
                        <FormControl mt={4}>
                            <Flex justifyContent={`space-between`} alignItems={`center`}>
                                <FormLabel className="small-text">
                                    <Text fontWeight={600}>Product Creation</Text>
                                    <Text color={`grey.400`} fontSize={`sm`}>
                                        Lorem ipsum dolor sit amet.
                                    </Text>
                                </FormLabel>
                                <Switch size="lg" colorScheme="green" />
                            </Flex>
                        </FormControl>
                        <Divider my={4} />
                        <FormControl mt={4}>
                            <Flex justifyContent={`space-between`} alignItems={`center`}>
                                <FormLabel className="small-text">
                                    <Text fontWeight={600}>Payout</Text>
                                    <Text color={`grey.400`} fontSize={`sm`}>
                                        Lorem ipsum dolor sit amet.
                                    </Text>
                                </FormLabel>
                                <Switch size="lg" colorScheme="green" />
                            </Flex>
                        </FormControl>
                    </GridItem>
                </Grid>
                {/* grid two */}
                <Grid my={10} templateColumns="repeat(12, 1fr)" gap={6}>
                    <GridItem colSpan={{ base: 12, md: 5 }}>
                        <Text textAlign={{ base: `center`, md: `initial` }} color={`purple.300`} as={`h5`}>
                            Security
                        </Text>
                    </GridItem>
                    <GridItem display={showResetPasswordView ? `grid` : `none`} colSpan={{ base: 12, md: 7 }}>
                        <FormControl mt={4}>
                            <Box>
                                <FormLabel display={`flex`} alignItems={`center`} justifyContent={`space-between`} className="small-text">
                                    <Text fontWeight={600}>Password</Text>
                                    <Text onClick={() => setShowResetPassword(false)} color={`purple.200`} fontSize={`sm`}>
                                        Change password
                                    </Text>
                                </FormLabel>
                                <Input size={`lg`} placeholder={`***************`} variant={`unstyled`} type={`password`} />
                                <Text mt={4} color={`grey.400`} fontSize={`sm`}>
                                    Last changed
                                </Text>
                            </Box>
                        </FormControl>
                        <Divider my={4} />
                    </GridItem>
                    <GridItem display={showResetPasswordView ? `none` : `grid`} colSpan={{ base: 12, md: 7 }}>
                        <FormControl maxW={500} mt={4}>
                            <Box>
                                <FormControl>
                                    <FormLabel color={`purple.300`} fontWeight={600}>
                                        Current Password
                                    </FormLabel>
                                    <Input
                                        // required
                                        // defaultValue={`user?.name`}
                                        bgColor={`grey.200`}
                                        _focus={{ bgColor: `grey.300`, color: `grey.800` }}
                                        _placeholder={{ color: `grey.400` }}
                                        placeholder="Enter current password"
                                        variant={`filled`}
                                        size={`lg`}
                                        // {...register("full_name")}
                                    />
                                    <Text className={`tiny-text`} color={`red.200`}>
                                        {/* {errors?.full_name?.message} */}
                                    </Text>
                                </FormControl>
                                <FormControl my={5}>
                                    <FormLabel color={`purple.300`} fontWeight={600}>
                                        New Password
                                    </FormLabel>
                                    <Input
                                        // required
                                        // defaultValue={`user?.name`}
                                        bgColor={`grey.200`}
                                        _focus={{ bgColor: `grey.300`, color: `grey.800` }}
                                        _placeholder={{ color: `grey.400` }}
                                        placeholder="Enter current password"
                                        variant={`filled`}
                                        size={`lg`}
                                        // {...register("full_name")}
                                    />
                                    <Text className={`tiny-text`} color={`red.200`}>
                                        {/* {errors?.full_name?.message} */}
                                    </Text>
                                </FormControl>
                                <FormControl>
                                    <FormLabel color={`purple.300`} fontWeight={600}>
                                        Confirm New Password
                                    </FormLabel>
                                    <Input
                                        // required
                                        // defaultValue={`user?.name`}
                                        bgColor={`grey.200`}
                                        _focus={{ bgColor: `grey.300`, color: `grey.800` }}
                                        _placeholder={{ color: `grey.400` }}
                                        placeholder="Enter current password"
                                        variant={`filled`}
                                        size={`lg`}
                                        // {...register("full_name")}
                                    />
                                    <Text className={`tiny-text`} color={`red.200`}>
                                        {/* {errors?.full_name?.message} */}
                                    </Text>
                                </FormControl>
                                <Flex my={5} gap={2}>
                                    <SharedButton
                                        btnExtras={{
                                            border: "1px solid #6D5DD3",
                                            onClick: () => setShowResetPassword(false),
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
                                        text={"Save Changes"}
                                        width={"fit-content"}
                                        height={"40px"}
                                        bgColor={"purple.200"}
                                        textColor={"grey.200"}
                                        borderRadius={"4px"}
                                        fontSize={{ base: `sm`, md: `md` }}
                                    />
                                </Flex>
                            </Box>
                        </FormControl>
                        <Divider my={4} />
                    </GridItem>
                </Grid>
                {/* grid three */}
                <Grid my={10} templateColumns="repeat(12, 1fr)" gap={6}>
                    <GridItem colSpan={{ base: 12, md: 5 }}>
                        <Text textAlign={{ base: `center`, md: `initial` }} color={`purple.300`} as={`h5`}>
                            Contact Email
                        </Text>
                        <Text textAlign={{ base: `center`, md: `initial` }} color={`grey.400`}>
                            Provide your contact email for your payout invoices.
                        </Text>
                    </GridItem>
                    <GridItem colSpan={{ base: 12, md: 7 }}>
                        <FormControl maxW={550} mt={4}>
                            <Box>
                                <FormControl>
                                    <FormLabel color={`purple.300`} fontWeight={600}>
                                        Account Email
                                    </FormLabel>
                                    <Flex gap={10}>
                                        <Input
                                            // required
                                            bgColor={`grey.200`}
                                            _focus={{ bgColor: `grey.300`, color: `grey.800` }}
                                            _placeholder={{ color: `grey.400` }}
                                            placeholder="sandrawilliams@gmail.com"
                                            variant={`filled`}
                                            size={`lg`}
                                        />
                                        <Radio size={`lg`} />
                                    </Flex>
                                </FormControl>
                            </Box>
                            <Box my={5}>
                                <FormControl>
                                    <FormLabel color={`purple.300`} fontWeight={600}>
                                        Alternative email
                                    </FormLabel>
                                    <Flex gap={10}>
                                        <Input
                                            // required
                                            bgColor={`grey.200`}
                                            _focus={{ bgColor: `grey.300`, color: `grey.800` }}
                                            _placeholder={{ color: `grey.400` }}
                                            placeholder="Enter email"
                                            variant={`filled`}
                                            size={`lg`}
                                        />
                                        <Radio size={`lg`} />
                                    </Flex>
                                </FormControl>
                            </Box>
                        </FormControl>
                        <Divider my={4} />
                    </GridItem>
                </Grid>
                {/* grid four */}
                <Grid my={10} templateColumns="repeat(12, 1fr)" gap={6}>
                    <GridItem colSpan={{ base: 12, md: 5 }}>
                        <Text textAlign={{ base: `center`, md: `initial` }} color={`purple.300`} as={`h5`}>
                            Delete Account
                        </Text>
                    </GridItem>
                    <GridItem colSpan={{ base: 12, md: 7 }}>
                        <Flex alignItems={`center`} mt={4}>
                            <Box>
                                <Text fontSize={`lg`} fontWeight={600}>
                                    Current Account
                                </Text>
                                <Text fontSize={`xs`} color={`grey.400`}>
                                    Disabling your account mean you can recover it at any time after taking this action
                                </Text>
                            </Box>
                            <Flex gap={2}>
                                <SharedButton
                                    text={"Disable Account"}
                                    width={"fit-content"}
                                    height={"40px"}
                                    bgColor={"purple.200"}
                                    textColor={"grey.200"}
                                    borderRadius={"4px"}
                                    fontSize={{ base: `sm`, md: `md` }}
                                />
                                <SharedButton
                                    btnExtras={{
                                        border: "1px solid #6D5DD3",
                                    }}
                                    text={"Delete Account"}
                                    width={"fit-content"}
                                    height={"40px"}
                                    bgColor={"transparent"}
                                    textColor={"purple.200"}
                                    borderRadius={"4px"}
                                    fontSize={{ base: `sm`, md: `md` }}
                                />
                            </Flex>
                        </Flex>
                        <Divider my={4} />
                    </GridItem>
                </Grid>
            </FormControl>
        </div>
    );
};

export default AccountSettings;
