import { SectionLayout } from './SectionLayout';
import { Container, Link, Text } from '@chakra-ui/react';
import { SharedButton } from '@productize/ui';
import { Link as RouterLink } from 'react-router-dom';

interface prop {
    title: string;
    desc: string;
    btnText: string;
}

export const SharedSection = ({ title, desc, btnText }: prop) => {
    return (
        <SectionLayout height={''} bgColor={'purple.200'} bgImg={''}>
            <Container maxW={`70rem`} textAlign={`center`} py={20} color={`purple.100`}>
                <Text as={`h3`}>{title}</Text>
                <Text as={`h5`} fontWeight={100} maxW={`35rem`} m={`auto`} my={5}>
                    {desc}
                </Text>
                <Link as={RouterLink} to={`/auth`} w={`fit-content`} m={`auto`}>
                    <SharedButton
                        text={btnText}
                        width={{ base: `100%`, xl: `fit-content` }}
                        height={'56px'}
                        bgColor={'yellow.200'}
                        textColor={'white'}
                        borderRadius={'4px'}
                        fontSize={{ base: `sm`, xl: `2xl` }}
                    />
                </Link>
            </Container>
        </SectionLayout>
    );
};
