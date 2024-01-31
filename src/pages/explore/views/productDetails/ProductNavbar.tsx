import { Box, Center, Container, Flex, Image, Link } from "@chakra-ui/react";
import { SearchComp, AvatarComp, SharedButton, Sidenav, Cart } from "@productize-v1.0.0/modules/shared/ui";
import { Link as RouterLink } from "react-router-dom";
import Links from "../../components/navbar/NavigationLinks";

const ProductNavbar = ({ isAuth }: any) => {
    return (
        <Box bg={`grey.100`} py={5} borderBottom={`1px solid grey.300`}>
            <Container maxW={`70rem`}>
                <Box as="nav" display="flex" justifyContent="space-between" alignItems="center">
                    <Center gap={4}>
                        <Box>
                            <Sidenav links={<Links isMobile={true} />} />
                        </Box>
                        <Link as={RouterLink} to={`/`}>
                            <Image
                                alt="logo"
                                src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951023/productize/Frame_14220_ogchl8_chcxzu.png`}
                            />
                        </Link>
                    </Center>

                    <Flex justify={{ lg: "center" }} alignItems={"center"} gap="1.5rem">
                        <Box display={{ base: `none`, md: `block` }}>
                            <SearchComp size="lg" width={`25rem`} color={`grey.200`} />
                        </Box>
                        <Box>
                            <Cart />
                        </Box>
                        <Box display={{ base: `none`, lg: `initial` }}>
                            {isAuth ? (
                                <AvatarComp />
                            ) : (
                                <Link as={RouterLink} to={`/auth`}>
                                    <SharedButton
                                        text={"Create Account"}
                                        width={"190px"}
                                        height={"48px"}
                                        bgColor={"yellow.200"}
                                        textColor={"white"}
                                        borderRadius={"4px"}
                                        fontSize={{ base: `sm`, xl: `md` }}
                                    />
                                </Link>
                            )}
                        </Box>
                        <Box display={{ lg: `none` }}>
                            <AvatarComp />
                        </Box>
                    </Flex>
                </Box>
            </Container>
        </Box>
    );
};

export default ProductNavbar;
