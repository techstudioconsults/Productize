import { Box, Center, Container, Flex, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import DefaultLayout from '../../layouts/Layout';
import { Hero } from '../../components/Hero';
import { Icon } from '@iconify/react';
import CustomForm from './Form';
import { SharedSection } from '../../components/section-layout/SharedSection';

export const ContactUs = () => {
    return (
        <DefaultLayout>
            <Hero height={{ base: `25rem`, xl: `420` }} bgImg={''} bgColor={'green.100'}>
                <Stack gap={10}>
                    <Container zIndex={3} color={`yellow.300`} mt={`10rem`} textAlign={`center`} maxW={`70rem`}>
                        <Box>
                            <Text lineHeight={`shorter`} as={`h1`}>
                                Contact Us
                            </Text>
                        </Box>
                        <Text as={`h5`} fontWeight={300} maxW={`70rem`} margin={`auto`} mt={3}>
                            If you have any questions or need further assistance, please reach out to our support team.
                        </Text>
                    </Container>
                </Stack>
            </Hero>
            <Box bgColor={`yellow.100`} py={20}>
                <Container maxW={`70rem`}>
                    <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
                        <Stack my={`auto`}>
                            <Text lineHeight={`shorter`} as={`h2`}>
                                Reach Out To Us
                            </Text>
                            <Text fontSize={`2xl`}>
                                Reach out to us for any queries or support. Our team is here to help you with your shopping experience and ensure your
                                satisfaction.
                            </Text>
                            <Stack gap={6}>
                                <Flex fontWeight={600} alignItems={`center`} gap={4}>
                                    <Center fontSize={`40`} boxSize={`68`} bgColor={`grey.800`} color={`grey.100`} borderRadius={`100%`}>
                                        <Icon icon="material-symbols:mail" />
                                    </Center>
                                    <Text fontSize={`2xl`}>support@productize.com</Text>
                                </Flex>
                                <Flex fontWeight={600} alignItems={`center`} gap={4}>
                                    <Center fontSize={`40`} boxSize={`68`} bgColor={`grey.800`} color={`grey.100`} borderRadius={`100%`}>
                                        <Icon icon="f7:phone-circle-fill" />
                                    </Center>
                                    <Box>
                                        <Text fontSize={`2xl`}>+2347012345678</Text>
                                        <Text fontSize={`2xl`}>+2347012345678</Text>
                                    </Box>
                                </Flex>
                            </Stack>
                        </Stack>
                        <Stack>
                            <CustomForm />
                        </Stack>
                    </SimpleGrid>
                </Container>
            </Box>
            <SharedSection
                title={'Ready To Explore Our Marketplace?'}
                desc={`With Productize, turn your creativity into a lucrative business venture by showcasing and selling your work online.`}
                btnText={'Start Selling'}
            />
        </DefaultLayout>
    );
};

export default ContactUs;
