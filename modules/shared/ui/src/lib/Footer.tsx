import { Box, Container, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { Icon } from "@iconify/react";

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
                <SimpleGrid fontWeight={`bold`} spacing={10} columns={{ base: 1, lg: 4 }} marginTop="1rem">
                    <Flex alignItems={`start`} justifyContent={{ base: `center`, lg: `initial` }}>
                        <img src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951023/productize/Frame_14220_ogchl8_chcxzu.png`} alt="Logo" />
                    </Flex>

                    <Flex
                        flexDir={`column`}
                        fontSize="md"
                        fontWeight="medium"
                        lineHeight="base"
                        cursor={"pointer"}
                        gap={2}
                        my={{ base: 8, lg: 0 }}
                        textAlign={{ base: `center`, lg: `initial` }}
                    >
                        <Text>Privacy Policy</Text>
                        <Text>Cookie settings</Text>
                        <Text>Sitemap</Text>
                        <Text>Become a creator</Text>
                    </Flex>

                    <Box fontSize="md" fontWeight="medium" lineHeight="base" cursor={"pointer"} textAlign={"start"} display={{ base: `none`, lg: `block` }}>
                        <p>Blog</p>
                        <p>Help and support</p>
                        <p>Terms</p>
                    </Box>

                    <Box fontSize="md" fontWeight="medium" lineHeight="base" cursor={"pointer"} textAlign={"start"} display={{ base: `none`, lg: `block` }}>
                        <p>About us</p>
                        <p>Contact us</p>
                    </Box>
                </SimpleGrid>

                <Flex
                    flexDir={{ base: `column-reverse`, lg: `row` }}
                    justify={{ base: `center`, lg: `space-between` }}
                    align="center"
                    paddingBottom="2.5rem"
                    paddingTop=".6rem"
                    gap={5}
                >
                    <Box>
                        <span>2023</span>
                    </Box>

                    <Flex fontSize={`1.5rem`} color={`black`} align="center" gap="1.4rem" cursor={"pointer"}>
                        <Icon icon={`ic:baseline-facebook`} />
                        <Icon icon={`formkit:twitter`} />
                        <Icon icon={`ant-design:dribbble-circle-filled`} />
                        <Icon icon={`mdi:pinterest`} />
                    </Flex>
                </Flex>
            </Container>
        </Box>
    );
};
