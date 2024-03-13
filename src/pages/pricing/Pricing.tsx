import DefaultLayout from '../../layouts/Layout';
import { Box, Container, Flex, Image, Link as CLink, Stack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Hero } from '../../components/Hero';
import { SectionLayout } from '../../components/section-layout/SectionLayout';
import { AccordionComponent } from '../../components/Accordion';
import { SharedSection } from '../../components/section-layout/SharedSection';
import { PricingCard, SharedButton } from '@productize/ui';
import diamond from '@icons/diamond.png';
import lines from '@icons/Lines.png';

export const Pricing = () => {
    return (
        <DefaultLayout>
            <Hero height={{ base: `fit-content`, xl: '60rem' }} bgImg={lines} bgColor={'yellow.100'}>
                <Stack gap={10}>
                    <Container pos={`relative`} color={`yellow.300`} mt={`8rem`} textAlign={`center`} maxW={`46.3rem`}>
                        <Image pos={`absolute`} top={`12rem`} left={`-8rem`} src={diamond} />
                        <Text lineHeight={`shorter`} as={`h1`}>
                            Access All Features With Our{' '}
                        </Text>
                        <Text as={`h1`} color={`purple.200`}>
                            30 Days Free Trial
                        </Text>
                        <Text fontWeight={100} as={`h5`} mt={3}>
                            Productize looks out for a better life with a money making system, no monthly charges. Just for you
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
                    <Flex display={{ base: `none`, lg: `flex` }} flexDir={{ base: `column`, lg: `row` }} p={5} gap={10} mt={`0`} alignItems={`center`}>
                        {/* SUBSCRIPTION PLAN CARD */}
                        <PricingCard
                            cardProps={{
                                bgColor: `purple.100`,
                                width: { base: `100%`, xl: `25rem` },
                                height: `540px`,
                                borderRadius: `8px`,
                            }}
                            listItems={[
                                `Instantly accept payments`,
                                `Access to existing features + future releases each year`,
                                `When can I withdraw from my wallet`,
                                `When can I withdraw from my wallet`,
                                `When can I withdraw from my wallet`,
                            ]}
                            iconColor={'black'}
                            amount={5000}
                            textColor={'yellow.300'}
                            btnText={'Start Creating'}
                        />
                    </Flex>
                </Stack>
            </Hero>
            <SectionLayout height={'fit-content'} bgColor={'white'} bgImg={''}>
                <Container maxW={`70rem`} pt={{ base: `5rem`, xl: `15rem` }} pb={{ base: `5rem`, xl: `15rem` }} px={{ base: 4, xl: 0 }}>
                    <Flex gap={20} flexDir={{ base: `column`, xl: `row` }} alignItems={{ base: `center`, xl: `flex-start` }}>
                        <Box textAlign={{ base: `center`, xl: `initial` }} flex={1}>
                            <Text as={`h2`} lineHeight={`shorter`}>
                                Frequently asked questions
                            </Text>
                            <Text as={`h5`} fontWeight={100} my={`2rem`}>
                                Haven’t found what you’re looking for? Try the
                                <Text as={`span`} fontSize={`2xl`} color={`purple.200`} textDecoration={`underline`}>
                                    <CLink as={Link} to={''} w={`fit-content`}>
                                        Productize Help Center or Contact us
                                    </CLink>
                                </Text>
                            </Text>
                        </Box>
                        <Box flex={1}>
                            <AccordionComponent />
                        </Box>
                    </Flex>
                </Container>
            </SectionLayout>
            <SharedSection
                title={'Ready To Explore Our Marketplace?'}
                desc={`With Productize, turn your creativity into a lucrative business venture by showcasing and selling your work online.`}
                btnText={'Start Selling'}
            />
        </DefaultLayout>
    );
};

export default Pricing;
