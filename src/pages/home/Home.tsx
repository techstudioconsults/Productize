import { Box, CardBody, Container, Flex, Image, SimpleGrid, Stack, Text, Link } from '@chakra-ui/react';
import DefaultLayout from '../../layouts/Layout';
import { Link as RouterLink } from 'react-router-dom';
import { Hero } from '../../components/Hero';
import { SectionLayout } from '../../components/section-layout/SectionLayout';
import { DualSectionLayout } from '../../components/section-layout/DualSectionLayout';
import { SharedSection } from '../../components/section-layout/SharedSection';
import { CardLayout, SharedButton } from '@productize/ui';

export const Home = () => {
    return (
        <DefaultLayout>
            <Hero
                height={{ base: `39rem`, xl: `42.2rem` }}
                bgImg={'https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951030/productize/Group_6_jgbemc_kzeaf2.png'}
                bgColor={'purple.200'}
            >
                <Stack gap={10}>
                    <Container color={`white`} mt={`8rem`} textAlign={`center`} maxW={`46.3rem`}>
                        <Text lineHeight={`shorter`} as={`h1`}>
                            Monetize your skills with ease
                        </Text>
                        <Text fontWeight={300} as={`h5`} color={`purple.100`} mt={3}>
                            With Productize, selling your products online is hassle-free. You can showcase your work and let us handle the backend tasks,
                            allowing you to concentrate on what you do best.
                        </Text>
                    </Container>
                    <Container display={{ xl: `none` }} w={`fit-content`}>
                        <Link as={RouterLink} to={`/auth`}>
                            <SharedButton
                                fontSize={{ base: `sm`, md: `md` }}
                                text={'Get Started'}
                                width={'160px'}
                                height={'48px'}
                                bgColor={'yellow.200'}
                                textColor={'white'}
                                borderRadius={'4px'}
                            />
                        </Link>
                    </Container>
                    <Container zIndex={2} maxW={{ base: `90%` }}>
                        <Image
                            alt={`hero-illustration`}
                            src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951027/productize/Group_5_pximlf_m8bs3m.png`}
                        />
                    </Container>
                </Stack>
            </Hero>
            <SectionLayout height={'fit-content'} bgColor={'yellow.100'} bgImg={''}>
                <Container
                    maxW={`70rem`}
                    pt={{ base: `5rem`, sm: `10rem`, md: `15rem`, lg: `25rem` }}
                    pb={{ base: `5rem`, xl: `15rem` }}
                    px={{ base: 4, xl: 0 }}
                >
                    <Flex gap={{ sm: 20 }} flexDir={{ base: `column`, xl: `row` }}>
                        <Box flex={1} color={`yellow.300`}>
                            <Text as={`h1`} lineHeight={`shorter`} textAlign={{ base: `center`, xl: `initial` }}>
                                You can monetize everything
                            </Text>
                            <Text fontWeight={300} as={`h5`} my={`2rem`} textAlign={{ base: `center`, xl: `initial` }}>
                                Are you a digital artist, designer, writer, or developer looking to share your creations with the world and earn from your
                                passion? Look no further! Productize is the ultimate platform for creators like you.
                            </Text>
                            <Box display={{ base: `none`, xl: `block` }}>
                                <Link as={RouterLink} to={`/auth`}>
                                    <SharedButton
                                        text={'Get Started'}
                                        width={'22.5rem'}
                                        height={'48px'}
                                        bgColor={'purple.200'}
                                        textColor={'white'}
                                        borderRadius={'4px'}
                                        fontSize={{ base: `sm`, md: `md` }}
                                    />
                                </Link>
                            </Box>
                        </Box>
                        <SimpleGrid flex={2} columns={{ base: 1, sm: 2 }} spacing={10}>
                            {/* card 1 */}
                            <Box>
                                <CardLayout bgColor={'white'} width={'100%'} borderRadius={'16px'} height={`100%`}>
                                    <CardBody p={`23px`}>
                                        <Image
                                            src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951006/productize/Image_1_wc3l2p_a7lovq.png`}
                                            alt=""
                                        />
                                        <Text as={`h5`} my={2}>
                                            Digital Product
                                        </Text>
                                        <Text color={`grey.500`}>Any set of files to download or stream.</Text>
                                    </CardBody>
                                </CardLayout>
                            </Box>
                            {/* card 2 */}
                            <Box>
                                <CardLayout bgColor={'white'} width={'100%'} borderRadius={'16px'} height={`100%`}>
                                    <CardBody p={`23px`}>
                                        <Image
                                            src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951007/productize/Image_2_co17c3_xwfjxd.png`}
                                            alt=""
                                        />
                                        <Text as={`h5`} my={2}>
                                            Print On Demand
                                        </Text>
                                        <Text fontWeight={400} color={`grey.500`} as={`h6`}>
                                            Any set of files to download or stream.
                                        </Text>
                                    </CardBody>
                                </CardLayout>
                            </Box>
                            {/* card 3 */}
                            <Box>
                                <CardLayout bgColor={'white'} width={'100%'} borderRadius={'16px'} height={`100%`}>
                                    <CardBody p={`23px`}>
                                        <Image
                                            src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951008/productize/Image_3_l61xsx_qdgenv.png`}
                                            alt=""
                                        />
                                        <Text as={`h5`} my={2}>
                                            Video Streaming
                                        </Text>
                                        <Text fontWeight={400} color={`grey.500`} as={`h6`}>
                                            Let customers listen to your audio content.
                                        </Text>
                                    </CardBody>
                                </CardLayout>
                            </Box>
                            {/* card 4 */}
                            <Box>
                                <CardLayout bgColor={'white'} width={'100%'} borderRadius={'16px'} height={`100%`}>
                                    <CardBody p={`23px`}>
                                        <Image
                                            src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951009/productize/Image_4_hksvcm_ulhhl3.png`}
                                            alt=""
                                        />
                                        <Text as={`h5`} my={2}>
                                            Subscription
                                        </Text>
                                        <Text fontWeight={400} color={`grey.500`} as={`h6`}>
                                            Let customers subscribe to your contents.
                                        </Text>
                                    </CardBody>
                                </CardLayout>
                            </Box>
                        </SimpleGrid>
                    </Flex>
                </Container>
            </SectionLayout>
            <DualSectionLayout
                height={{ base: `40rem`, md: `20rem`, lg: `50rem`, xl: `40rem` }}
                img={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951011/productize/Layer_1_3_hn7gd9_kdxcwg.png`}
                flexDirection={{ base: `column`, xl: `row` }}
                textSectionBgColor={'purple.300'}
                imgSectionBgColor={'purple.200'}
                justifyContent={{ base: `center`, xl: `flex-end` }}
                imgPosition={{ base: `-3rem bottom`, xl: '-10rem bottom' }}
                imgFit={{ base: `contain` }}
            >
                <Flex alignItems={`center`} color={`purple.100`} height={`100%`}>
                    <Container textAlign={{ base: `center`, xl: `initial` }} maxW={`35rem`} px={{ base: 4, xl: 0 }}>
                        <Text as={`h1`} lineHeight={`shorter`}>
                            Everyone can Buy & Sell on Productize
                        </Text>
                        <Text fontWeight={300} as={`h5`} pr={{ xl: 20 }} mt={5}>
                            Not really tech-savvy or just looking for a way to share that knowledge you think will be valuable to others, Productize is here to
                            cater to whatever your needs may be.
                        </Text>
                    </Container>
                </Flex>
            </DualSectionLayout>
            <SectionLayout height={''} bgColor={'coral.200'} bgImg={''}>
                <Container textAlign={`center`} maxW={`52rem`} color={`grey.100`} pt={`5rem`}>
                    <Text lineHeight={`shorter`} mb={4} as={`h1`}>
                        Start monetizing in 4 simple steps
                    </Text>
                    <Text as={`h5`} fontWeight={`200`}>
                        You can easily reach a broader audience, increase your sales, and build your brand. Monetize everything with Productize and unleash your
                        full potential!
                    </Text>
                </Container>
                <Container maxW={`70rem`} px={{ base: 4, xl: 0 }} py={`5rem`}>
                    <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={10}>
                        {/* card 1 */}
                        <Box>
                            <CardLayout bgColor={'white'} width={'100%'} borderRadius={'16px'} height={`100%`}>
                                <CardBody p={`24px`} display={`flex`} flexDir={`column`} justifyContent={`space-between`}>
                                    <Box>
                                        <Text as={`h5`} my={2}>
                                            Customize your profile
                                        </Text>
                                        <Text color={`grey.500`}>Complete your profile to start getting your products published.</Text>
                                    </Box>
                                    <Flex justifyContent={`flex-end`}>
                                        <Image
                                            src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951004/productize/Illustration_jzxpjd_zawis9.png`}
                                            alt=""
                                        />
                                    </Flex>
                                </CardBody>
                            </CardLayout>
                        </Box>
                        {/* card 2 */}
                        <Box>
                            <CardLayout bgColor={'white'} width={'100%'} borderRadius={'16px'} height={`100%`}>
                                <CardBody p={`24px`} display={`flex`} flexDir={`column`} justifyContent={`space-between`}>
                                    <Box>
                                        <Text as={`h5`} my={2}>
                                            Set up your payout
                                        </Text>
                                        <Text color={`grey.500`}>Set up your payout, and start receiving payments for your products or services!</Text>
                                    </Box>
                                    <Flex justifyContent={`flex-end`}>
                                        <Image
                                            src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951033/productize/Illustration_1_wdmvgf_jpnhgm.png`}
                                            alt=""
                                        />
                                    </Flex>
                                </CardBody>
                            </CardLayout>
                        </Box>
                        {/* card 3 */}
                        <Box>
                            <CardLayout bgColor={'white'} width={'100%'} borderRadius={'16px'} height={`100%`}>
                                <CardBody p={`24px`} display={`flex`} flexDir={`column`} justifyContent={`space-between`}>
                                    <Box>
                                        <Text as={`h5`} my={2}>
                                            Create your first product
                                        </Text>
                                        <Text color={`grey.500`}>Create your first product , and start building your brand.</Text>
                                    </Box>
                                    <Flex justifyContent={`flex-end`}>
                                        <Image
                                            src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951002/productize/Illustration_2_zibmgb_aun5ux.png`}
                                            alt=""
                                        />
                                    </Flex>
                                </CardBody>
                            </CardLayout>
                        </Box>
                        {/* card 4 */}
                        <Box>
                            <CardLayout bgColor={'white'} width={'100%'} borderRadius={'16px'} height={`100%`}>
                                <CardBody p={`24px`} display={`flex`} flexDir={`column`} justifyContent={`space-between`}>
                                    <Box>
                                        <Text as={`h5`} my={2}>
                                            Make your first sale
                                        </Text>
                                        <Text color={`grey.500`}>
                                            Make your first sale and receive payments for your work through your connected bank account.
                                        </Text>
                                    </Box>
                                    <Flex justifyContent={`flex-end`}>
                                        <Image
                                            src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951025/productize/Frame_40446_y425kr_pcfgv4.png`}
                                            alt=""
                                        />
                                    </Flex>
                                </CardBody>
                            </CardLayout>
                        </Box>
                    </SimpleGrid>
                </Container>
            </SectionLayout>
            <SharedSection
                title={'Join Our Thriving Creator Community'}
                desc={`Are you ready to embark on a creative journey like no other? Productize is here to make it happen. Join our community of creators and buyers
                    today.`}
                btnText={'Join Now'}
            />
        </DefaultLayout>
    );
};
