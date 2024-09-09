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
import { termsandconditions } from '../../content/termsandconditions';
export const TermsAndConditions = () => {
    return (
        <DefaultLayout>
            <Hero height={{  sm: `21rem`, lg: `23rem`, xl: `25rem` }} bgImg={''} bgColor={'#F6C21C'}>
            
                    <Container zIndex={3} color={`yellow.300`} mt={{ base: `6.5rem`, sm: `8rem`, xl: `10rem` }} textAlign={`center`} maxW={`70rem`}>
                        <Box>
                            <Text lineHeight={`shorter`} color={`black`} as={`h1`}>
                                Terms And Conditions
                            </Text>
                        </Box>
                        <Text as={`h5`} color={`black`} fontWeight={300} maxW={{base:`55rem`, xl:`70rem`}} margin={`auto`} mt={3}>
                        These Terms and Conditions govern your access and use of our website and digital products. By accessing or using Bytealley, you agree to comply with these terms.
                        </Text>
                    </Container>
                
            </Hero>

            <SectionLayout height={''} bgColor={'white'} bgImg={''}>
                <Container  maxW={`70rem`}   mx={`auto`} textAlign={`left`} py={{ base: 10, sm: 20, lg: 20 }}>
                    <OrderedList m={0}  spacing={6}>
                        {termsandconditions.map((term, index) => (
                            <ListItem key={index} mb={6}>
                                <Text fontWeight={`bold`} fontSize={`1.5rem`}>
                                    {term.title}
                                </Text>
                                <Text mt={2}>{term.text}</Text>
                                {term.points.length > 0 && (
                                    <UnorderedList mt={2} spacing={2} styleType="circle" stylePosition="outside" >
                                        {term.points.map((point, pointIndex) => (
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

export default TermsAndConditions;
