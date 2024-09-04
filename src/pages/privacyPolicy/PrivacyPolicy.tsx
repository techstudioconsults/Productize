import {
    Box,
    Container,
    Stack,
    Text,
    UnorderedList,
    OrderedList,
    ListItem,
} from '@chakra-ui/react';
import { Hero } from '../../components/Hero';
import DefaultLayout from '../../layouts/Layout';
import { SharedSection } from '../../components/section-layout/SharedSection';
import { SectionLayout } from '../../components/section-layout/SectionLayout';
import { policies } from '../../content/privacypolicies';
export const PrivacyPolicy = () => {
    return (
        <DefaultLayout>
            <Hero height={{ base: `21.5rem`, xl: `22rem` }} bgImg={''} bgColor={'purple.200'}>
                <Stack gap={10}>
                    <Container zIndex={3} color={`yellow.300`} mt={`10rem`} textAlign={`center`} maxW={`70rem`}>
                        <Box>
                            <Text lineHeight={`shorter`} color={`white`} as={`h1`}>
                                Privacy Policy
                            </Text>
                        </Box>
                        <Text as={`h5`} color={`white`} fontWeight={300} maxW={`70rem`} margin={`auto`} mt={3}>
                            Effective Date: [Insert Date]
                        </Text>
                    </Container>
                </Stack>
            </Hero>

            <SectionLayout height={''} bgColor={'white'} bgImg={''}>
                <Container  maxW={`70rem`}  mx={`auto`} textAlign={`left`} py={{ base: 10, sm: 20, lg: 20 }}>
                    <OrderedList m={0}  spacing={6}>
                        {policies.map((policy, index) => (
                            <ListItem key={index} mb={6}>
                                <Text fontWeight={`bold`} fontSize={`1.5rem`}>
                                    {policy.title}
                                </Text>
                                <Text mt={2}>{policy.text}</Text>
                                {policy.points.length > 0 && (
                                    <UnorderedList mt={2} spacing={2} styleType="circle" stylePosition="outside" >
                                        {policy.points.map((point, pointIndex) => (
                                            <ListItem key={pointIndex}>{point}</ListItem>
                                        ))}
                                    </UnorderedList>
                                )}
                            </ListItem>
                        ))}
                    </OrderedList>
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

export default PrivacyPolicy;
