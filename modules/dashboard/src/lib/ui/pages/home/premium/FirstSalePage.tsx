import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "@productize-v1.0.0/modules/shared/redux";
import { DashboardBanner } from "../../../DashboardBanner";
import { DashboardRadioBtnComp } from "../../../DashboardRadioBtnComp";

import ProgressBar from "../../../ProgressBar";
import { DashboardTable } from "../../../tables/DashboardTable";

const FirstSalePage = () => {
    const user = useSelector(selectCurrentUser);
    return (
        <>
            <SimpleGrid columns={{ base: 1, xl: 2 }} gap={8} p={0} my={8}>
                <Box>
                    <DashboardBanner
                        alignContent="center"
                        height={`100%`}
                        img={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951034/productize/Illustration_2_fslyo9_vfqfto.png`}
                        bgImg={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951013/productize/Lines_t1t27k_gg0jau.png`}
                        title={"Welcome to productize."}
                        desc={"Complete your profile to start getting your products published."}
                        py={8}
                        px={8}
                    />
                </Box>
                <Box>
                    <Flex
                        flexDir={{ base: `column`, md: `row` }}
                        my={8}
                        justifyContent={`space-between`}
                        alignItems={{ base: `flex-start`, md: `center` }}
                        gap={8}
                    >
                        <Box>
                            <Text as={`h6`} fontWeight={`bold`}>
                                Get Started Guide
                            </Text>
                            <Text color={`grey.400`}>Use this personalized guide to get your store up and running.</Text>
                        </Box>
                        <Box>
                            <ProgressBar />
                        </Box>
                    </Flex>
                    <Box>
                        <DashboardRadioBtnComp
                            title={"make your first sale"}
                            subTitle={"Complete your profile to start getting your products published."}
                            image={"https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951025/productize/Frame_40446_y425kr_pcfgv4.png"}
                            btn={{}}
                            btnText={"Make Sale"}
                        />
                    </Box>
                </Box>
            </SimpleGrid>
            {/* empty state */}
            {user?.first_product_created ? null : (
                <Box>
                    <Text as={`h6`}>Activity</Text>

                    <Box mt={4}>
                        <DashboardTable />
                    </Box>
                </Box>
            )}
        </>
    );
};

export default FirstSalePage;
