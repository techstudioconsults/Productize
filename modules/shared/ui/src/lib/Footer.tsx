import {Box, Container, Flex, SimpleGrid, Text} from "@chakra-ui/react";
import React from "react";
import {Icon} from "@iconify/react";
import {Link as RouterLink} from "react-router-dom";

export const Footer: React.FC = () => {
    return (
        <Box
            background={`purple.100`}
            display="flex"
            flexDirection="column"
            paddingTop="1rem"
            // w={'100%'}
        >
            {/* <Container maxW={`70rem`}>
        <Flex justifyContent={{ lg: 'space-between' }} alignItems="center">
          <Box>
            <Heading
              fontSize="2xl"
              fontWeight="medium"
              lineHeight="tall"
              textAlign={'start'}
            >
              Share knowledge online
            </Heading>
            <Text
              fontSize={{ lg: 'md' }}
              fontWeight={{ lg: 'medium' }}
              lineHeight={{ lg: 'base' }}
            >
              Create an online video course, reach your community, and earn
              money
            </Text>
          </Box>
          <Flex
            as="button"
            justify="center"
            align="center"
            fontSize="md"
            fontWeight={500}
            lineHeight="base"
            padding=".8rem 1.6rem"
            background="#6D5DD3"
            color="hsla(248, 53%, 97%, 1)"
            _hover={{ bgColor: '#6D5DD3', opacity: 0.9 }}
            borderRadius="4px"
          >
            Create Product
          </Flex>
        </Flex>
      </Container>
      <Box border={'1px solid #cfcfd0'}></Box> */}
            <Container maxW={`70rem`}>
                <SimpleGrid fontWeight={`bold`} spacing={10} columns={{base: 1, lg: 4}} marginTop="1rem">
                    <Flex alignItems={`start`} justifyContent={{base: `center`, lg: `initial`}}>
                        <img src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951023/productize/Frame_14220_ogchl8_chcxzu.png`}
                             alt="Logo"/>
                    </Flex>
                    <Flex
                        flexDir={`column`}
                        fontSize="md"
                        fontWeight="medium"
                        lineHeight="base"
                        cursor={"pointer"}
                        gap={2}
                        alignItems={{base: `center`, lg: `flex-start`}}
                    >
                        <Text as={RouterLink} fontWeight={600} to={`/explore`}>Explore</Text>
                        <Text as={RouterLink} fontWeight={600} to={`/pricing`}>Pricing</Text>
                        <Text as={RouterLink} fontWeight={600} to={`/features`}>Features</Text>
                        <Text as={RouterLink} fontWeight={600} to={`/`}>Become a creator</Text>
                    </Flex>
                    <Flex
                        flexDir={`column`}
                        fontSize="md"
                        fontWeight="medium"
                        lineHeight="base"
                        cursor={"pointer"}
                        gap={2}
                        alignItems={{base: `center`, lg: `flex-start`}}
                    >
                        <Text as={RouterLink} fontWeight={600} to={`/`}>Blog</Text>
                        <Text as={RouterLink} fontWeight={600} to={`/`}>Help and support</Text>
                        <Text as={RouterLink} fontWeight={600} to={`/`}>Terms</Text>
                    </Flex>
                    <Flex
                        flexDir={`column`}
                        fontSize="md"
                        fontWeight="medium"
                        lineHeight="base"
                        cursor={"pointer"}
                        gap={2}
                        alignItems={{base: `center`, lg: `flex-start`}}
                    >
                        <Text as={RouterLink} fontWeight={600} to={`/`}>About us</Text>
                        <Text as={RouterLink} fontWeight={600} to={`/`}>Contact us</Text>
                    </Flex>
                </SimpleGrid>
                <Flex
                    flexDir={{base: `column-reverse`, lg: `row`}}
                    justify={{base: `center`, lg: `space-between`}}
                    align="center"
                    paddingBottom="2.5rem"
                    paddingTop=".6rem"
                    gap={5}
                    my={10}
                >
                    <Box>
                        <span>&copy; {new Date().getFullYear()}</span>
                    </Box>
                    <Flex fontSize={`1.5rem`} color={`black`} align="center" gap="1.4rem" cursor={"pointer"}>
                        <Icon icon={`ic:baseline-facebook`}/>
                        <Icon icon={`formkit:twitter`}/>
                        <Icon icon={`ant-design:dribbble-circle-filled`}/>
                        <Icon icon={`mdi:pinterest`}/>
                    </Flex>
                </Flex>
            </Container>
        </Box>
    );
};
