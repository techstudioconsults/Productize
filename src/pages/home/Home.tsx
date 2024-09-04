import { Box, CardBody, Container, Flex, Image, SimpleGrid, Stack, Text, Link } from '@chakra-ui/react';
import DefaultLayout from '../../layouts/Layout';
import { Link as RouterLink } from 'react-router-dom';
import { Hero } from '../../components/Hero';
import { SectionLayout } from '../../components/section-layout/SectionLayout';
import { DualSectionLayout } from '../../components/section-layout/DualSectionLayout';
import { SharedSection } from '../../components/section-layout/SharedSection';
import { CardLayout, SharedButton } from '@productize/ui';
import { useTokenExists } from '@productize/hooks';

export const Home = () => {
    const isAuth = useTokenExists();

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
                            With ByteAlley, selling your products online is hassle-free. You can showcase your work and let us handle the backend tasks,
                            allowing you to concentrate on what you do best.
                        </Text>
                    </Container>
                    <Container hidden={isAuth} display={{ xl: `none` }} w={`fit-content`}>
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
                                passion? Look no further! ByteAlley is the ultimate platform for creators like you.
                            </Text>
                            <Box hidden={isAuth} display={{ base: `none`, xl: `block` }}>
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
                                <CardLayout border={'0px'} bgColor={'white'} width={'100%'} borderRadius={'16px'} height={`100%`}>
                                    <CardBody p={`23px`}>
                                        <Image
                                            src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951006/productize/Image_1_wc3l2p_a7lovq.png`}
                                            alt=""
                                        />
                                        <Text as={`h5`} my={2}>
                                            Digital Product
                                        </Text>
                                        <Text color={`grey.500`}>Ebooks, video content, digital art/graphics, online courses or stock photos.</Text>
                                    </CardBody>
                                </CardLayout>
                            </Box>
                            {/* card 2 */}
                            <Box>
                                <CardLayout border={'0px'} bgColor={'white'} width={'100%'} borderRadius={'16px'} height={`100%`}>
                                    <CardBody p={`23px`}>
                                        <Image
                                            src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1721286358/productize/gkw6ietvs5asmzsqlkkk.png`}
                                            alt=""
                                        />
                                        <Text as={`h5`} my={2}>
                                            Sales Dashboard
                                        </Text>
                                        <Text fontWeight={400} color={`grey.500`} as={`h6`}>
                                            Monitor real-time sales data, track trends, and optimize your business.
                                        </Text>
                                    </CardBody>
                                </CardLayout>
                            </Box>
                            {/* card 3 */}
                            <Box>
                                <CardLayout border={'0px'} bgColor={'white'} width={'100%'} borderRadius={'16px'} height={`100%`}>
                                    <CardBody p={`23px`}>
                                        <Image
                                            src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1721286358/productize/obodmkoin4emt8vhncll.png`}
                                            alt=""
                                        />
                                        <Text as={`h5`} my={2}>
                                            Product Analytics
                                        </Text>
                                        <Text fontWeight={400} color={`grey.500`} as={`h6`}>
                                            Gain valuable insights into your product performance and understand user engagement.
                                        </Text>
                                    </CardBody>
                                </CardLayout>
                            </Box>
                            {/* card 4 */}
                            <Box>
                                <CardLayout border={'0px'} bgColor={'white'} width={'100%'} borderRadius={'16px'} height={`100%`}>
                                    <CardBody p={`23px`}>
                                        <Image
                                            src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1721286358/productize/wl8tu0t12l1fse6gm8tw.png`}
                                            alt=""
                                        />
                                        <Text as={`h5`} my={2}>
                                            Branded Profiles
                                        </Text>
                                        <Text fontWeight={400} color={`grey.500`} as={`h6`}>
                                            Showcase your unique identity with a personalized profile and connect with your audience.
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
                            Everyone can Buy & Sell on ByteAlley
                        </Text>
                        <Text fontWeight={300} as={`h5`} pr={{ xl: 20 }} mt={5}>
                            Not really tech-savvy or just looking for a way to share that knowledge you think will be valuable to others, ByteAlley is here to
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
                        You can easily reach a broader audience, increase your sales, and build your brand. Monetize everything with ByteAlley and unleash your
                        full potential!
                    </Text>
                </Container>
                <Container maxW={`70rem`} px={{ base: 4, xl: 0 }} py={`5rem`}>
                    <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={10}>
                        {/* card 1 */}
                        <Box>
                            <CardLayout border={'0px'} bgColor={'white'} width={'100%'} borderRadius={'16px'} height={`100%`}>
                                <CardBody p={`24px`} display={`flex`} flexDir={`column`} justifyContent={`space-between`}>
                                    <Box>
                                        <Text as={`h4`} w={`60%`} my={2}>
                                            Customize your profile
                                        </Text>
                                        <Text color={`grey.500`}>
                                            Start off by putting in your details and customizing what you want your profile to look like.
                                        </Text>
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
                            <CardLayout border={'0px'} bgColor={'white'} width={'100%'} borderRadius={'16px'} height={`100%`}>
                                <CardBody p={`24px`} display={`flex`} flexDir={`column`} justifyContent={`space-between`}>
                                    <Box>
                                        <Text as={`h4`} w={`60%`} my={2}>
                                            Set up your payout
                                        </Text>
                                        <Text color={`grey.500`}>Put in your payment details and get ready to receive payments from all over the world.</Text>
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
                            <CardLayout border={'0px'} bgColor={'white'} width={'100%'} borderRadius={'16px'} height={`100%`}>
                                <CardBody p={`24px`} display={`flex`} flexDir={`column`} justifyContent={`space-between`}>
                                    <Box>
                                        <Text as={`h4`} w={`60%`} my={2}>
                                            Create your first product
                                        </Text>
                                        <Text color={`grey.500`}>
                                            Upload your first product on our platform and put in the necessary details to ensure customers can get a feel of
                                            what you’re selling.
                                        </Text>
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
                            <CardLayout border={'0px'} bgColor={'white'} width={'100%'} borderRadius={'16px'} height={`100%`}>
                                <CardBody p={`24px`} display={`flex`} flexDir={`column`} justifyContent={`space-between`}>
                                    <Box>
                                        <Text as={`h4`} w={`60%`} my={2}>
                                            Make your first sale
                                        </Text>
                                        <Text color={`grey.500`}>Patiently await your first customer and make your first sale.</Text>
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
                desc={`Are you ready to embark on a creative journey like no other? ByteAlley is here to make it happen. Join our community of creators and buyers
                    today.`}
                btnText={'Join Now'}
            />
        </DefaultLayout>
    );
};
