import { useState } from 'react';
import DefaultLayout from '../../layouts/Layout';
import { Box, CardBody, Container, Flex, Image, SimpleGrid, Stack, Text, Link, Heading } from '@chakra-ui/react';
import { SharedSection } from '../../components/section-layout/SharedSection';
import { DualSectionLayout, DualSectionLayoutList } from '../../components/section-layout/DualSectionLayout';
import { Hero } from '../../components/Hero';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { CardLayout, SharedButton } from '@productize/ui';

const About = ({ btnColor, shouldShowButton }: any) => {
    const navigate = useNavigate();
    return (
        <DefaultLayout>
            <Hero height={{ base: `32rem`, xl: `32rem` }} bgImg={''} bgColor={'yellow.100'}>
                <Stack gap={10}>
                    <Container zIndex={3} color={`yellow.300`} mt={`10rem`} textAlign={`center`} maxW={`70rem`}>
                        <Box>
                            <Text lineHeight={`shorter`} as={`h1`}>
                            About Us
                            </Text>
                        </Box>
                        <Text as={`h5`} fontWeight={300} maxW={`70rem`} margin={`auto`} mt={3}>
                        Productize looks out for a better life with a money making system, no monthly charges. Just for you
                        </Text>
                    </Container>
                    <Box mb={{ base: `-4rem`, md: `-10rem`, lg: `-15rem`, xl: `-20rem` }}>
                        <Image
                            alt={`hero-illustration`}
                            src={`https://res.cloudinary.com/doejcrfso/image/upload/v1720800272/productize/Lines_mel92h.png`}
                        />
                    </Box>
                </Stack>
            </Hero>


            <DualSectionLayout
                height={{ base: ``, xl: `40rem` }}
                img={`https://res.cloudinary.com/doejcrfso/image/upload/v1720793196/productize/about_us_grouped_img_w53wue.svg`}
                flexDirection={{ base: `column-reverse`, xl: `row` }}
                textSectionBgColor={'purple.100'}
                imgSectionBgColor={'#C9E7D3'}
                justifyContent={{ base: `center`, xl: `flex-end` }}
                imgPosition={`center`}
                imgFit={{ base: `contain` }}
            >
                <Flex alignItems={`center`} color={`purple.300`} height={`100%`} py={10}>
                    <Container maxW={`35rem`} px={{ base: 4, xl: 0 }} pr={{ base: 4, xl: 16 }}>
                        <Heading as="h1" textAlign={{ base: 'center', xl: 'left' }}>
                            Our Story
                        </Heading>
                        <Flex flexDirection={`column`} gap={`0.8rem`}>
                            <Text textAlign={{ base: 'center', xl: 'left' }} fontSize={{ base: '1.2rem', xl: '1.5rem' }}>
                                Productize began with a simple idea: to create a platform where digital creators could easily share their products with the
                                world.
                            </Text>
                            <Text textAlign={{ base: 'center', xl: 'left' }} fontSize={{ base: '1.2rem', xl: '1.5rem' }}>
                                Founded by a team of tech enthusiasts and digital innovators, we set out to empower individuals to turn their creative ideas
                                into successful digital businesses.
                            </Text>

                            <Box display={`block`} width={'100%'} maxWidth={'18rem'} margin={{ base: 'auto', xl: '0px' }}>
                                <SharedButton
                                    text={'Get Started'}
                                    width={{ base: `100%`, lg: ' 15rem', xl: '18rem' }}
                                    height={'48px'}
                                    bgColor={'yellow.200'}
                                    textColor={'black'}
                                    borderRadius={'4px'}
                                    fontSize={{ base: `sm`, md: `md` }}
                                    btnExtras={{
                                        onClick: () => navigate(`/auth`),
                                    }}
                                />
                            </Box>
                        </Flex>
                    </Container>
                </Flex>
            </DualSectionLayout>
            <DualSectionLayout
                height={{ base: ``, xl: `40rem` }}
                img={`https://res.cloudinary.com/doejcrfso/image/upload/v1720797096/productize/OBJECTS_bkppl2.png`}
                flexDirection={{ base: `column`, xl: `row-reverse` }}
                textSectionBgColor={'#1E2323'}
                imgSectionBgColor={'#17B6BA'}
                justifyContent={{ base: `center`, xl: `flex-start` }}
                imgPosition={`center`}
                imgFit={{ base: `contain` }}
            >
                <Flex alignItems={`center`} color={`purple.100`} height={`100%`} py={10}>
                    <Container maxW={`35rem`} px={{ base: 4, xl: 0 }} pl={{ base: 4, xl: 16 }}>
                        <DualSectionLayoutList
                            shouldShowButton={false}
                            iconColor={`#F6C21C`}
                            title={'Our Mission'}
                            subTitle={
                                'At Productize, our mission is to empower creators and entrepreneurs to transform their ideas into successful digital products.'
                            }
                            listItems={[
                                `Continuously enhancing our platform with cutting-edge features.`,
                                `Offering intuitive tools and resources that make it easy for anyone to create, market, and sell digital product`,
                                ` Empowering our users with the knowledge and tools to grow their businesses and expand their reach.`,
                            ]}
                        />
                    </Container>
                </Flex>
            </DualSectionLayout>
            <Container maxW={'71rem'}>
                <Heading>Why Choose Productize</Heading>
                <SimpleGrid flex={2} columns={{ base: 1, sm: 2 }} spacing={10}>
                            {/* card 1 */}
                            <Box>
                                <CardLayout border={'2px'} bgColor={'white'} width={'100%'} borderRadius={'16px'} height={`100%`}>
                                    <CardBody p={`23px`}>
                                       
                                        <Text as={`h5`} my={2}>
                                            Digital Product
                                        </Text>
                                        <Text color={`grey.500`}>Any set of files to download or stream.</Text>
                                    </CardBody>
                                </CardLayout>
                            </Box>
                            {/* card 2 */}
                            <Box>
                                <CardLayout border={'2px'} bgColor={'white'} width={'100%'} borderRadius={'16px'} height={`100%`}>
                                    <CardBody p={`23px`}>
                                       
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
                                <CardLayout border={'2px'} bgColor={'white'} width={'100%'} borderRadius={'16px'} height={`100%`}>
                                    <CardBody p={`23px`}>
                                      
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
                                <CardLayout border={'2px'} bgColor={'white'} width={'100%'} borderRadius={'16px'} height={`100%`}>
                                    <CardBody p={`23px`}>
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

            </Container>
            <SharedSection
                title={'Join Our Thriving Creator Community'}
                desc={`Are you ready to embark on a creative journey like no other? Productize is here to make it happen. Join our community of creators and buyers
                    today.`}
                btnText={'Join Now'}
            />
        </DefaultLayout>
    );
};

export default About;
