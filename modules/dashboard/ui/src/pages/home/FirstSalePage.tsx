import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import { DashboardBanner } from '../../lib/DashboardBanner';
import { DashboardRadioBtnComp } from '../../lib/DashboardRadioBtnComp';
import { ProgressBar } from '../../lib/ProgressBar';
import { DashboardEmptyState } from '../../lib/empty-states/DashboardEmptyState';

const FirstSalePage = () => {
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
          <Box>
              <Text as={`h6`}>Activity</Text>
              <DashboardEmptyState
                  maxW="50rem"
                  content={{
                      title: "",
                      desc: "You do not have any sales activities yet.",
                      img: `https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951005/productize/Illustration_oblvox_athyeh.png`,
                  }}
                  textAlign={{ base: `center` }}
                  showImage
              />
          </Box>
      </>
  );
};

export default FirstSalePage;
