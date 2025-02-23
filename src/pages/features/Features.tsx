import DefaultLayout from '../../layouts/Layout';
import { Box, Container, Image, Stack, Text, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Hero } from '../../components/Hero';
import { SectionLayout } from '../../components/section-layout/SectionLayout';
import { DualSectionLayout, DualSectionLayoutList } from '../../components/section-layout/DualSectionLayout';
import { SharedSection } from '../../components/section-layout/SharedSection';
import { SharedButton } from '@productize/ui';
import { useTokenExists } from '@productize/hooks';

export const Features = () => {
    const isAuth = useTokenExists();
    return (
        <DefaultLayout>
            <Hero height={{ base: `35rem`, xl: `39rem` }} bgImg={''} bgColor={'green.100'}>
                <Stack gap={10}>
                    <Container zIndex={3} color={`yellow.300`} mt={`10rem`} textAlign={`center`} maxW={`70rem`}>
                        <Box>
                            <Text lineHeight={`shorter`} as={`h1`}>
                                You customize your
                            </Text>
                            <Text lineHeight={`shorter`} as={`h1`} color={`purple.200`}>
                                product.
                            </Text>
                        </Box>
                        <Text as={`h5`} fontWeight={300} maxW={`70rem`} margin={`auto`} mt={3}>
                            It is entirely up to you to determine how you want your products to look like to visitors, we only help you show it to them.
                        </Text>
                    </Container>
                    <Container hidden={isAuth} display={{ xl: `none` }} w={`fit-content`}>
                        <Link to={`/auth`}>
                            <SharedButton
                                fontSize={{ base: `sm`, md: `md` }}
                                text={'Get Started'}
                                width={'160px'}
                                height={'48px'}
                                bgColor={'purple.200'}
                                textColor={'white'}
                                borderRadius={'4px'}
                            />
                        </Link>
                    </Container>
                    <Box mt={{ base: `-4rem`, md: `-10rem`, lg: `-15rem`, xl: `-20rem` }}>
                        <Image
                            alt={`hero-illustration`}
                            src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1700125298/productize/shopping_box_tshirt_hat_wristwatch_stickers_sticker_2_bxbocb.png`}
                        />
                    </Box>
                </Stack>
            </Hero>
            <SectionLayout height={''} bgColor={''} bgImg={''}>
                <Container maxW={`60rem`} textAlign={`center`} py={{ base: 10, sm: 20, lg: 40 }} color={`yellow.300`}>
                    <Text as={`h1`} lineHeight={`shorter`}>
                        Grab visitors attention with detailed products.
                    </Text>
                    <Text fontWeight={300} maxW={`50rem`} m={`auto`} as={`h5`} my={5}>
                        Create a detailed product description that allows visitors learn more about what you’re offering and get to know the process behind that
                        product.
                    </Text>
                </Container>
            </SectionLayout>
            <DualSectionLayout
                height={{ base: ``, xl: `40rem` }}
                img={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951031/productize/Group_7_osmkqe_ojsekq.png`}
                flexDirection={{ base: `column`, xl: `row` }}
                textSectionBgColor={'purple.100'}
                imgSectionBgColor={'coral.300'}
                justifyContent={{ base: `center`, xl: `flex-end` }}
                imgPosition={`center`}
                imgFit={{ base: `contain` }}
            >
                <Flex alignItems={`center`} color={`purple.300`} height={`100%`} py={10}>
                    <Container maxW={`35rem`} px={{ base: 4, xl: 0 }} pr={{ base: 4, xl: 16 }}>
                        <DualSectionLayoutList
                            shouldShowButton={!isAuth}
                            iconColor={`#F6C21C`}
                            title={'Create products with ease'}
                            subTitle={'Products can be easily created on our platform without stress no matter what it is and how tech savvy or not you are.'}
                            listItems={[`Receive money from anywhere.`]}
                        />
                    </Container>
                </Flex>
            </DualSectionLayout>
            <SectionLayout height={''} bgColor={''} bgImg={''}>
                <Container maxW={`60rem`} textAlign={`center`} py={{ base: 10, sm: 20, lg: 40 }} color={`yellow.300`}>
                    <Text as={`h1`} lineHeight={`shorter`}>
                        Share your products.
                    </Text>
                    <Text as={`h5`} fontWeight={400} maxW={`50rem`} m={`auto`} my={5}>
                        Explore our massive suite of design features and rich libraries of free visual content. They’re all customizable to make your site look
                        just right.
                    </Text>
                </Container>
            </SectionLayout>
            <DualSectionLayout
                height={{ base: ``, xl: `40rem` }}
                img={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951031/productize/Group_7_osmkqe_ojsekq.png`}
                flexDirection={{ base: `column`, xl: `row` }}
                textSectionBgColor={'yellow.200'}
                imgSectionBgColor={'purple.100'}
                justifyContent={{ base: `center`, xl: `flex-end` }}
                imgPosition={`center`}
                imgFit={{ base: `contain` }}
            >
                <Flex alignItems={`center`} color={`purple.300`} height={`100%`} py={10}>
                    <Container maxW={`35rem`} px={{ base: 4, xl: 0 }} pr={{ base: 4, xl: 16 }}>
                        <DualSectionLayoutList
                            shouldShowButton={false}
                            iconColor={`white`}
                            title={'Helpful Information at your fingertips'}
                            subTitle={`You can find out your best customers and what products sell better from your dashboard with ease. This can help you plan better
`}
                            listItems={[]}
                        />
                    </Container>
                </Flex>
            </DualSectionLayout>
            <DualSectionLayout
                height={{ base: ``, xl: `40rem` }}
                img={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951026/productize/Frame_40549_ca4y8f_a9zhjw.png`}
                flexDirection={{ base: `column`, xl: `row-reverse` }}
                textSectionBgColor={'purple.300'}
                imgSectionBgColor={'purple.100'}
                justifyContent={{ base: `center`, xl: `flex-start` }}
                imgPosition={`center`}
                imgFit={{ base: `contain` }}
            >
                <Flex alignItems={`center`} color={`purple.100`} height={`100%`} py={10}>
                    <Container maxW={`35rem`} px={{ base: 4, xl: 0 }} pl={{ base: 4, xl: 16 }}>
                        <DualSectionLayoutList
                            shouldShowButton={false}
                            iconColor={`#F6C21C`}
                            title={'Making Money'}
                            subTitle={`Make money with those genius ideas of yours by letting your products reach multitude of buyers without the hassle of marketing. Just list it on ByteAlley and get paid when they shop.
`}
                            listItems={[]}
                        />
                    </Container>
                </Flex>
            </DualSectionLayout>
            <SharedSection
                title={'Get Monetized on ByteAlley'}
                desc={'With ByteAlley, turn your creativity into a lucrative business venture by showcasing and selling your work online.'}
                btnText={'Create an Account'}
            />
        </DefaultLayout>
    );
};

// export default Features;
