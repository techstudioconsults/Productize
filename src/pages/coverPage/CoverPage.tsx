import { AbsoluteCenter, Box, Center, Container, Divider, Flex, Image, Link, Stack, Text } from '@chakra-ui/react';
import CoverPageCard from './CoverPageCard';
import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { PaymentStatusTag } from '@productize/ui';

export const CoverPage = () => {
    const [isMobileView, setMobileView] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            // Check if the viewport width is less than a certain threshold (e.g., 768px) to determine if it's a mobile view
            const isMobile = window.innerWidth < 768;
            setMobileView(isMobile);
        };

        // Call handleResize initially to set the initial state based on the viewport width
        handleResize();

        // Add event listener to listen for window resize events
        window.addEventListener('resize', handleResize);

        // Remove event listener when the component unmounts to avoid memory leaks
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        // <DefaultLayout removeFooter>
        <>
            {/* <Center> */}
            <Center mt={10}>
                {/* <Sidenav links={<Links linkColor={linkColor} isMobile={true} />} /> */}
                <Link as={RouterLink} to={`/seller`} role={'link'}>
                    <Image
                        // width={`18rem`}
                        // width={`10rem`}
                        alt="logo"
                        src={`https://res.cloudinary.com/doejcrfso/image/upload/v1725356813/productize/ByteAAlley-Logo_ue2hqr.svg`}
                    />
                </Link>
                <PaymentStatusTag />
            </Center>
            {/* </Center> */}
            <Stack gap={10}>
                <Container pos={`relative`} color={`grey.800`} mt={`2rem`} textAlign={`center`} maxW={`898px`}>
                    <Image pos={`absolute`} top={`12rem`} left={`-8rem`} src={``} />
                    <Text lineHeight={`shorter`} as={`h1`}>
                        Welcome to ByteAlley!
                    </Text>
                    <Text fontWeight={400} as={`h5`} color={`grey.800`} mt={3}>
                        From Ebooks, video content, digital art/graphics, online courses or stock photos, you are spoilt for choice whether as a creator or as a
                        consumer.
                    </Text>
                </Container>
            </Stack>
            <Box my={10}>
                <Flex px={{ lg: 0 }} flexDir={{ base: `column`, lg: `row` }} gap={10} as={Container} maxW={`70rem`}>
                    <CoverPageCard
                        img={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1711120709/productize/Frame_1171275922_dnfgdc.png`}
                        desc={`Are you a digital artist, designer, writer, or developer looking to share your creations with the world and earn from your passion ?`}
                        buttonText={`Explore as Seller`}
                        title={`Seller`}
                    />
                    <Box position="relative" padding="10">
                        <Divider h={isMobileView ? `.1rem` : `100%`} width={isMobileView ? `100%` : `.1rem`} bgColor={`purple.200`} />
                        <AbsoluteCenter bg={`white`}>
                            <Center
                                boxShadow={`0px 3.0280373096466064px 7.570093154907227px 2.2710280418395996px #6D5DD31A`}
                                h={`4rem`}
                                w={`4rem`}
                                borderRadius={`100%`}
                                p={4}
                            >
                                <Text as={`h3`} fontSize={`2xl`} fontWeight={`bolder`}>
                                    Or
                                </Text>
                            </Center>
                        </AbsoluteCenter>
                    </Box>
                    <CoverPageCard
                        img={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1711120709/productize/Frame_1171275923_2_tq3d1u.png`}
                        desc={`Are you in search of unique digital creations from talented artists, designers, writers, or developers? Your quest ends here!`}
                        buttonText={`Explore as Buyer`}
                        title={`Buyer`}
                    />
                </Flex>
            </Box>
        </>
        // </DefaultLayout>
    );
};
