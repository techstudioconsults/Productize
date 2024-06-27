import { Box, Container, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import React, { memo } from 'react';
import { Icon } from '@iconify/react';
import { Link as RouterLink } from 'react-router-dom';

interface FooterLinkProps {
    to: string;
    children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ to, children }) => (
    <Text  as={RouterLink} fontWeight={600} to={to}>
        {children}
    </Text>
);

const SocialIconLink: React.FC<FooterLinkProps> = ({ to, children }) => (
    <Text as={RouterLink} to={to}>
        {children}
    </Text>
);

export const Footer: React.FC = memo(() => {
    return (
        <Box background="purple.100" display="flex" flexDirection="column" paddingTop="1rem">
            <Container maxW="70rem">
                <SimpleGrid fontWeight="bold" spacing={10} columns={{ base: 1, lg: 4 }} marginTop="1rem">
                    <Flex as={RouterLink} to="/" alignItems="start" justifyContent={{ base: 'center', lg: 'initial' }}>
                        <img src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951023/productize/Frame_14220_ogchl8_chcxzu.png" alt="Logo" />
                    </Flex>
                    <Flex
                        flexDir="column"
                        fontSize="md"
                        fontWeight="medium"
                        lineHeight="base"
                        cursor="pointer"
                        gap={2}
                        alignItems={{ base: 'center', lg: 'flex-start' }}
                    >
                        <FooterLink to="/explore">Explore</FooterLink>
                        <FooterLink to="/pricing">Pricing</FooterLink>
                        <FooterLink to="/features">Features</FooterLink>
                        <FooterLink to="/auth">Become a creator</FooterLink>
                    </Flex>
                    <Flex
                        flexDir="column"
                        fontSize="md"
                        fontWeight="medium"
                        lineHeight="base"
                        cursor="pointer"
                        gap={2}
                        alignItems={{ base: 'center', lg: 'flex-start' }}
                    >
                        <FooterLink to="/blogs">Blog</FooterLink>
                        <FooterLink to="/help-and-support">Help and support</FooterLink>
                        <FooterLink to="/terms-and policy">Terms And Privacy Policy</FooterLink>
                    </Flex>
                    <Flex
                        flexDir="column"
                        fontSize="md"
                        fontWeight="medium"
                        lineHeight="base"
                        cursor="pointer"
                        gap={2}
                        alignItems={{ base: 'center', lg: 'flex-start' }}
                    >
                        <FooterLink to="/about">About us</FooterLink>
                        <FooterLink to="/contact">Contact us</FooterLink>
                    </Flex>
                </SimpleGrid>
                <Flex
                    flexDir={{ base: 'column-reverse', lg: 'row' }}
                    justify={{ base: 'center', lg: 'space-between' }}
                    align="center"
                    paddingBottom="2.5rem"
                    paddingTop=".6rem"
                    gap={5}
                    my={10}
                >
                    <Box>
                        <span>&copy; {new Date().getFullYear()}</span>
                    </Box>
                    <Flex fontSize="1.5rem" color="black" align="center" gap="1.4rem" cursor="pointer">
                        <SocialIconLink to="/contact">
                            <Icon icon="ic:baseline-facebook" />
                        </SocialIconLink>
                        <SocialIconLink to="/contact">
                            <Icon icon="formkit:twitter" />
                        </SocialIconLink>
                        <SocialIconLink to="/contact">
                            <Icon icon="ant-design:dribbble-circle-filled" />
                        </SocialIconLink>
                        <SocialIconLink to="/contact">
                            <Icon icon="mdi:pinterest" />
                        </SocialIconLink>
                    </Flex>
                </Flex>
            </Container>
        </Box>
    );
});

Footer.displayName = 'Footer';
export default Footer;
