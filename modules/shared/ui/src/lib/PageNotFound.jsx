import { Box, Container, Flex, Image, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import bg404 from "@/assets/404-bg.svg";
import img404 from "@/assets/404.svg";
import { SharedButton } from "./SharedButton";

export const PageNotFound = () => {
    const navigate = useNavigate();
    return (
        <Box bgColor={`grey.200`} h={`100vh`} bgImage={bg404}>
            <Flex p={5}>
                <Link as={RouterLink} to={`/`}>
                    <Image alt="logo" src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951023/productize/Frame_14220_ogchl8_chcxzu.png`} />
                </Link>
            </Flex>
            <Flex
                flexDir={{ base: `column-reverse`, lg: `initial` }}
                gap={10}
                as={Container}
                maxW={`1220px`}
                p={5}
                my={`10rem`}
                justifyContent={`space-around`}
                alignItems={`center`}
            >
                <Box>
                    <Text fontWeight={700} as={`h2`}>
                        Ooops...
                    </Text>
                    <Text as={`h4`} fontWeight={100}>
                        Page not found
                    </Text>
                    <Box mt={10} w={`fit-content`} cursor={`pointer`} onClick={() => navigate(-1)} as={RouterLink}>
                        <SharedButton
                            btnExtras={{
                                leftIcon: `material-symbols:chevron-left`,
                                border: `1px solid #6D5DD3`,
                            }}
                            text={`Go Back`}
                            width={"fit-content"}
                            height={"48px"}
                            bgColor={"transparent"}
                            textColor={"purple.200"}
                            borderRadius={"4px"}
                            fontSize={{ base: `sm`, md: `md` }}
                        />
                    </Box>
                </Box>
                <Image alt="404" src={img404} />
            </Flex>
        </Box>
    );
};
