import { useState } from 'react';
import DefaultLayout from '../../layouts/Layout';
import { Box, CardBody, Container, Flex, Image, SimpleGrid, Stack, Text, Link, Heading, Center } from '@chakra-ui/react';
import { SharedSection } from '../../components/section-layout/SharedSection';
import { DualSectionLayout, DualSectionLayoutList } from '../../components/section-layout/DualSectionLayout';
import { Hero } from '../../components/Hero';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { CardLayout, SharedButton } from '@productize/ui';

export const About = ({ btnColor, shouldShowButton }: any) => {
    const navigate = useNavigate();
    return (
        <DefaultLayout>
            <Hero height={{ base: `23.5rem`, xl: `29.5rem` }} bgImg={''} bgColor={'yellow.100'}>
                <Stack gap={10}>
                    <Container zIndex={3} color={`yellow.300`} mt={`10rem`} textAlign={`center`} maxW={`70rem`}>
                        <Box>
                            <Text lineHeight={`shorter`} as={`h1`}>
                            About Us
                            </Text>
                        </Box>
                        <Text as={`h5`} fontWeight={300} maxW={`70rem`} margin={`auto`} mt={3}>
                        ByteAlley looks out for a better life with a money making system, no monthly charges. Just for you
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
                imgFit={{ base: `cover` }}
            >
                <Flex alignItems={`center`} color={`purple.300`} height={`100%`} py={10}>
                    <Container maxW={`35rem`} px={{ base: 4, xl: 0 }} pr={{ base: 4, xl: 16 }}>
                        <Text as="h1" py={'0.7rem'} textAlign={{ base: 'center', xl: 'left' }}>
                            Our Story
                        </Text>
                        <Flex flexDirection={`column`} gap={`0.9rem`}>
                            <Text textAlign={{ base: 'center', xl: 'left' }} fontSize={{ base: '1.2rem', xl: '1.5rem' }}>
                            ByteAlley began with a simple idea: to create a platform where digital creators could easily share their products with the
                                world.
                            </Text>
                            <Text textAlign={{ base: 'center', xl: 'left' }} pb={'0.7rem'} fontSize={{ base: '1.2rem', xl: '1.5rem' }}>
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
            <Container py={'1.5rem'} maxW={'70rem'} margin={'auto'}>
                <SimpleGrid flex={2} alignItems={'center'} columns={{ base: 2, md: 3 }} spacing={10}>
                    <Flex alignItems={'center'} justifyContent={'center'}>
                        <Text as={`h1`}>
                        30k+
                        </Text>
                        <Box>
                      <Text as={`p`}>
                        Digital
                        </Text>
                        <Text>
                        Creators
                        </Text>
                      </Box>
                    </Flex>
                    <Flex flex={2} alignItems={'center'} justifyContent={'center'}>
                    <Text as={`h1`}>
                        100k+
                        </Text>
                      <Box>
                      <Text as={`p`}>
                        Digital
                        </Text>
                        <Text>
                        Creators
                        </Text>
                      </Box>
                    </Flex>
                    <Flex flex={2} alignItems={'center'} justifyContent={'center'}>
                    <Text as={`h1`}>
                        45k+
                        </Text>
                        <Box>
                      <Text as={`p`}>
                        Digital
                        </Text>
                        <Text>
                        Creators
                        </Text>
                      </Box>
                    </Flex>
                </SimpleGrid>
            </Container>
            <DualSectionLayout
                height={{ base: ``, xl: `40rem` }}
                img={`https://res.cloudinary.com/doejcrfso/image/upload/v1720797096/productize/OBJECTS_bkppl2.png`}
                flexDirection={{ base: `column-reverse`, xl: `row-reverse` }}
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
                                'At ByteAlley, our mission is to empower creators and entrepreneurs to transform their ideas into successful digital products.'
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
            <Container maxW={'71rem'} py={'3.5rem'} px={{base: '1rem', lg: '1rem'}} >
                <Text as={`h1`} pb={'2rem'} textAlign={'center'}>Why Choose ByteAlley</Text>
                <SimpleGrid flex={2} columns={{ base: 1, sm: 2 }} spacing={10}>
                            {/* card 1 */}
                            <Box>
                                <CardLayout border={'2px'} bgColor={'white'} width={'100%'} borderRadius={'16px'} height={`100%`}>
                                    <CardBody p={`23px`}>

                                        <Text as={`h5`} my={2}>
                                        Flexible Product Options
                                        </Text>
                                        <Text color={`grey.500`}>Sell a variety of digital products, including courses, eBooks, software, music, and more. Customize your product pages with detailed descriptions, multimedia, and personalized settings.</Text>
                                    </CardBody>
                                </CardLayout>
                            </Box>
                            {/* card 2 */}
                            <Box>
                                <CardLayout border={'2px'} bgColor={'white'} width={'100%'} borderRadius={'16px'} height={`100%`}>
                                    <CardBody p={`23px`}>

                                        <Text as={`h5`} my={2}>
                                        Affiliate Programs
                                        </Text>
                                        <Text fontWeight={400} color={`grey.500`} as={`h6`}>
                                        Leverage our built-in affiliate marketing features to expand your product reach. Collaborate with affiliates who promote your products in exchange for commissions.
                                        </Text>
                                    </CardBody>
                                </CardLayout>
                            </Box>
                            {/* card 3 */}
                            <Box>
                                <CardLayout border={'2px'} bgColor={'white'} width={'100%'} borderRadius={'16px'} height={`100%`}>
                                    <CardBody p={`23px`}>

                                        <Text as={`h5`} my={2}>
                                        Secure Transactions
                                        </Text>
                                        <Text fontWeight={400} color={`grey.500`} as={`h6`}>
                                        Our platform ensures secure and seamless transactions, giving both sellers and buyers peace of mind. Our commitment to security extends to regular audits and compliance with industry standards
                                        </Text>
                                    </CardBody>
                                </CardLayout>
                            </Box>
                            {/* card 4 */}
                            <Box>
                                <CardLayout border={'2px'} bgColor={'white'} width={'100%'} borderRadius={'16px'} height={`100%`}>
                                    <CardBody p={`23px`}>
                                        <Text as={`h5`} my={2}>
                                        Community Engagement
                                        </Text>
                                        <Text fontWeight={400} color={`grey.500`} as={`h6`}>
                                        Join a vibrant community of creators and entrepreneurs. Share insights and learn from others’ experiences. Our platform fosters an environment of innovation, where you can network with like-minded individuals
                                        </Text>
                                    </CardBody>
                                </CardLayout>
                            </Box>
                        </SimpleGrid>

            </Container>
            <SharedSection
                title={'Join Our Thriving Creator Community'}
                desc={`Are you ready to embark on a creative journey like no other? ByteAlley is here to make it happen. Join our community of creators and buyers
                    today.`}
                btnText={'Join Now'}
            />
        </DefaultLayout>
    );
};

export default About;
