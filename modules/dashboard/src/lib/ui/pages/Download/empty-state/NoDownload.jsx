import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { DashboardBanner } from "../../../DashboardBanner";
import { SharedButton } from "@productize/ui";

const NoDownload = () => {
    return (
        <>
            <DashboardBanner
                padding={{ base: 4, md: 8 }}
                img={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1702729173/Layer_1_2_pnft88.png`}
                bgImg={``}
                title={"Rub minds with other creators"}
                desc={"All your downloads will show up here so you can download, watch, read or listen to all your purchases."}
                px={8}
            />
            <Box maxW="full" mt={8}>
                <Flex justify="center" align="center" bg="grey.200" rounded="md" p={10}>
                    <Flex gap={4} direction="column" alignItems={`center`} justify="center">
                        <Image
                            src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1702729646/Illustration_5_vyrsy5.png"
                            alt="Empty order"
                            mx="auto"
                        />
                        <Text color="purple.300" fontSize="lg" align="center">
                            You do not have any downloads yet.
                        </Text>
                        <Link to={`/explore`}>
                            <SharedButton
                                text={"Explore Products"}
                                width={"fit-content"}
                                height={"40px"}
                                bgColor={"purple.200"}
                                textColor={"white"}
                                borderRadius={"4px"}
                                fontSize={{ base: `sm`, md: `sm` }}
                            />
                        </Link>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
};

export default NoDownload;
