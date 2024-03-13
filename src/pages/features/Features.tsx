import DefaultLayout from '../../layouts/Layout';
import { Box, Container, Image, Stack, Text, Highlight, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Hero } from '../../components/Hero';
import { SectionLayout } from '../../components/section-layout/SectionLayout';
import { DualSectionLayout, DualSectionLayoutList } from '../../components/section-layout/DualSectionLayout';
import { SharedSection } from '../../components/section-layout/SharedSection';
import { SharedButton } from '@productize/ui';

export const Features = () => {
    return (
        <DefaultLayout>
            <Hero height={{ base: `35rem`, xl: `39rem` }} bgImg={''} bgColor={'green.100'}>
                <Stack gap={10}>
                    <Container zIndex={3} color={`yellow.300`} mt={`10rem`} textAlign={`center`} maxW={`70rem`}>
                        <Text lineHeight={`shorter`} as={`h1`}>
                            <Highlight query="product." styles={{ color: 'purple.200' }}>
                                You customize your product.
                            </Highlight>
                        </Text>
                        <Text as={`h5`} maxW={`35rem`} margin={`auto`} mt={3} fontWeight={100}>
                            The opportunity to share knowledge with individuals and businesses of same passion.
                        </Text>
                    </Container>
                    <Container display={{ xl: `none` }} w={`fit-content`}>
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
                    <Text maxW={`50rem`} m={`auto`} as={`h5`} my={5} fontWeight={100}>
                        Explore our massive suite of design features and rich libraries of free visual content. They’re all customizable to make your site look
                        just right.
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
                            shouldShowButton={true}
                            iconColor={`#F6C21C`}
                            title={'Create products with ease'}
                            subTitle={'Receive money from anywhere, blah blah blah blah blah.'}
                            listItems={[`Receive money from anywhere, blah blah blah blah blah.`, `Receive money from anywhere, blah blah blah blah blah.`]}
                        />
                    </Container>
                </Flex>
            </DualSectionLayout>
            <SectionLayout height={''} bgColor={''} bgImg={''}>
                <Container maxW={`60rem`} textAlign={`center`} py={{ base: 10, sm: 20, lg: 40 }} color={`yellow.300`}>
                    <Text as={`h1`} lineHeight={`shorter`}>
                        Share your products.
                    </Text>
                    <Text as={`h5`} fontWeight={100} maxW={`50rem`} m={`auto`} my={5}>
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
                            title={'Raise an army of community.'}
                            subTitle={'Receive money from anywhere, blah blah blah blah blah.'}
                            listItems={[`Receive money from anywhere, blah blah blah blah blah.`, `Receive money from anywhere, blah blah blah blah blah.`]}
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
                            subTitle={'Receive money from anywhere, blah blah blah blah blah.'}
                            listItems={[
                                `Receive money from anywhere, blah blah blah blah blah.`,
                                `Receive money from anywhere, blah blah blah blah blah.`,
                                `Receive money from anywhere, blah blah blah blah blah.`,
                            ]}
                        />
                    </Container>
                </Flex>
            </DualSectionLayout>
            <SharedSection
                title={'Starting monetize on Productize'}
                desc={'With Productize, turn your creativity into a lucrative business venture by showcasing and selling your work online.'}
                btnText={'Create an Account'}
            />
        </DefaultLayout>
    );
};

// export default Features;
