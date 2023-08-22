import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "../../../assets/icons/logo.svg";
import facebook from "../../../assets/icons/facebook.svg";
import pinterest from "../../../assets/icons/pinterest.svg";
import twitter from "../../../assets/icons/twitter.svg";
import dribble from "../../../assets/icons/dribble.svg";
import Container from "../../shared-ui/Container";

const Footer: React.FC = () => {
  return (
    <Box
      background="#F3F2FB"
      display="flex"
      flexDirection="column"
      marginTop="9.625rem"
      paddingTop="1rem"
      // w={'100%'}
    >
      <Container>
        <Flex
          justifyContent={{ lg: "space-between" }}
          alignItems="center"
        >
          <Box>
            <Heading
              fontSize="2xl"
              fontWeight="medium"
              lineHeight="tall"
              textAlign={"start"}
            >
              Share knowledge online
            </Heading>
            <Text
              fontSize={{ lg: "md" }}
              fontWeight={{ lg: "medium" }}
              lineHeight={{ lg: "base" }}
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
            _hover={{ bgColor: "#6D5DD3", opacity: 0.9 }}
            borderRadius="4px"
          >
            Create Product
          </Flex>
        </Flex>
      </Container>
      <Box border={"1px solid #cfcfd0"}></Box>

      <Container>
        <Flex gap="4.125rem" marginTop="1rem">
          <Box>
            <img src={Logo} alt="Logo" />
          </Box>

          <Box
            fontSize="md"
            fontWeight="medium"
            lineHeight="base"
            cursor={"pointer"}
            textAlign={"start"}
          >
            <p>Privacy Policy</p>
            <p>Cookie settings</p>
            <p>Sitemap</p>
            <p>Become a creator</p>
          </Box>

          <Box
            fontSize="md"
            fontWeight="medium"
            lineHeight="base"
            cursor={"pointer"}
            textAlign={"start"}
          >
            <p>Blog</p>
            <p>Help and support</p>
            <p>Terms</p>
          </Box>

          <Box
            fontSize="md"
            fontWeight="medium"
            lineHeight="base"
            cursor={"pointer"}
            textAlign={"start"}
          >
            <p>About us</p>
            <p>Contact us</p>
          </Box>
        </Flex>

        <Flex
          justify="space-between"
          align="center"
          paddingBottom="2.5rem"
          paddingTop=".6rem"
        >
          <Box>
            <span>2023</span>
          </Box>

          <Flex align="center" gap="1.4rem" cursor={"pointer"}>
            <img src={facebook} alt="Facebook" />
            <img src={pinterest} alt="Pinterest" />
            <img src={twitter} alt="Twitter" />
            <img src={dribble} alt="Dribble" />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
