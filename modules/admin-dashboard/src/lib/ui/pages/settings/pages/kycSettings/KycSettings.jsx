import { Box, Flex, FormControl, FormLabel, Grid, GridItem, Select, Stack, Text, useDisclosure } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { ModalComp, SharedButton } from '@productize/ui';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { DashboardEmptyState } from '../../../../empty-states/AdminDashboardEmptyState';

export const KycSettings = () => {
    const { isOpen, onClose, onOpen } = useDisclosure();
    const [countries, setCountries] = useState([]);
    const [isFormCompleted, setFormCompleted] = useState(false);

    const getCountry = async () => {
        const res = await axios.get('https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code');
        setCountries(res.data.countries);
    };

    useEffect(() => {
        getCountry();
    }, []);

    if (isFormCompleted) {
        return (
            <DashboardEmptyState
                showImage
                content={{
                    img: `https://res.cloudinary.com/kingsleysolomon/image/upload/v1716015379/productize/Frame_1171276417_lwjiib.png`,
                    desc: `You have completed your KYC verification successfully!`,
                }}
            />
        );
    }
    return (
        <Grid my={10} templateColumns="repeat(12, 1fr)" gap={6}>
            <GridItem colSpan={{ base: 12, md: 5 }}>
                <Text textAlign={{ base: `center`, md: `initial` }} color={`purple.300`} as={`h5`}>
                    Upload a proof of your Identity
                </Text>
                <Text textAlign={{ base: `center`, md: `initial` }} color={`grey.400`} fontSize={`sm`} mt={3}>
                    Productize requires a government valid ID
                </Text>
            </GridItem>
            <GridItem colSpan={{ base: 12, md: 7 }}>
                <FormControl as={`form`} maxW={500} mt={4}>
                    <Box>
                        {/* {changePasswordStatus.isError && <ErrorText error={error} />} */}
                        <FormControl>
                            <FormLabel color={`purple.300`} fontWeight={600}>
                                Country
                            </FormLabel>
                            <Select
                                bgColor={`grey.200`}
                                _focus={{ bgColor: `grey.300`, color: `grey.800` }}
                                _placeholder={{ color: `grey.400` }}
                                variant={`filled`}
                                size={`lg`}
                                placeholder="Select option"
                            >
                                {countries?.map((country) => {
                                    return (
                                        <option key={country?.value} value={country?.label}>
                                            {country?.label}
                                        </option>
                                    );
                                })}
                            </Select>
                        </FormControl>
                        <FormControl my={5}>
                            <FormLabel color={`purple.300`} fontWeight={600}>
                                Document Type
                            </FormLabel>
                            <Select
                                bgColor={`grey.200`}
                                _focus={{ bgColor: `grey.300`, color: `grey.800` }}
                                _placeholder={{ color: `grey.400` }}
                                variant={`filled`}
                                size={`lg`}
                                placeholder="Select option"
                            >
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <FormLabel color={`purple.300`} fontWeight={600}>
                                Document Image
                            </FormLabel>
                            <Flex
                                bgColor={`grey.200`}
                                _focus={{ bgColor: `grey.300`, color: `grey.800` }}
                                border={`1px dashed #6D5DD3`}
                                _placeholder={{ color: `grey.400` }}
                                alignItems={`center`}
                                gap={2}
                                p={3}
                                borderRadius={5}
                                color={`purple.200`}
                            >
                                <Icon icon="akar-icons:cloud-upload" />
                                <Text color={`initial`} fontSize={`sm`}>
                                    Drag and drop here or{' '}
                                    <Text fontSize={`sm`} color={`purple.200`} as={`span`}>
                                        browse files here
                                    </Text>
                                </Text>
                            </Flex>
                        </FormControl>
                        <Flex my={5} gap={2}>
                            <SharedButton
                                btnExtras={{
                                    border: '1px solid #6D5DD3',
                                }}
                                text={'Cancel'}
                                width={'fit-content'}
                                height={'40px'}
                                bgColor={'transparent'}
                                textColor={'purple.200'}
                                borderRadius={'4px'}
                                fontSize={{ base: `sm`, md: `md` }}
                            />
                            <SharedButton
                                btnExtras={{
                                    onClick: onOpen,
                                }}
                                text={'Submit'}
                                width={'fit-content'}
                                height={'40px'}
                                bgColor={'purple.200'}
                                textColor={'grey.200'}
                                borderRadius={'4px'}
                                fontSize={{ base: `sm`, md: `md` }}
                            />
                        </Flex>
                    </Box>
                </FormControl>
            </GridItem>
            <ModalComp modalSize={`2xl`} openModal={isOpen} closeModal={onClose}>
                <Stack justifyContent={`center`} alignItems={`center`} textAlign={`center`}>
                    <Box borderRadius={`100%`} p={9} bgColor={`green.100`} fontSize={`7xl`} color={`green.200`}>
                        <Icon icon="icon-park-solid:check-one" />
                    </Box>
                    <Box my={4}>
                        <Text color={`purple.300`} as={`h5`}>
                            Successfully Submitted
                        </Text>

                        <Text color={`grey.400`} fontSize={`sm`} mt={3}>
                            Your KYC information has been successfully submitted. Our team will review your submission and verify your details shortly. Thank
                            you for completing the KYC process.
                        </Text>
                    </Box>

                    <SharedButton
                        btnExtras={{
                            border: '1px solid #6D5DD3',
                            onClick: onClose,
                        }}
                        text={'Go Back'}
                        width={'50%'}
                        height={'40px'}
                        bgColor={'transparent'}
                        textColor={'purple.200'}
                        borderRadius={'4px'}
                        fontSize={{ base: `sm`, md: `md` }}
                    />
                </Stack>
            </ModalComp>
        </Grid>
    );
};
