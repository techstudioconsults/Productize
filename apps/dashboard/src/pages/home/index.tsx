import { Box, Container, Flex, Stack, Text } from '@chakra-ui/react';
import {
  DashboardBanner,
  DashboardRadioBtnComp,
  ProgressBar,
} from '@productize/dashboard-lib/ui';
import React from 'react';

const index = () => {
  return (
    <Container p={0} my={8} maxW={`47rem`}>
      <DashboardBanner />
      <Flex
        flexDir={{ base: `column`, md: `row` }}
        my={8}
        justifyContent={`space-between`}
        alignItems={{ base: `flex-start`, md: `center` }}
      >
        <Box>
          <Text as={`h6`} fontWeight={`bold`}>
            Get Started Guide
          </Text>
          <Text color={`grey.400`}>
            Use this personalized guide to get your store up and running.
          </Text>
        </Box>
        <Box>
          <ProgressBar />
        </Box>
      </Flex>
      <Stack>
        <Box>
          <DashboardRadioBtnComp
            title={'Verify your email'}
            subTitle={
              'Complete your profile to start getting your products published.'
            }
            image={
              'https://res.cloudinary.com/dkszgtapy/image/upload/v1695984929/productize/Illustration_oblvox.png'
            }
            btnTitle={'Verify Email'}
          />
        </Box>
        <Box>
          <DashboardRadioBtnComp
            isChecked
            title={'Customize your email'}
            subTitle={
              'Complete your profile to start getting your products published.'
            }
            image={
              'https://res.cloudinary.com/dkszgtapy/image/upload/v1695984929/productize/Illustration_oblvox.png'
            }
            btnTitle={'Customize Email'}
          />
        </Box>
        <Box>
          <DashboardRadioBtnComp
            title={'Create your first product'}
            subTitle={
              'Complete your profile to start getting your products published.'
            }
            image={
              'https://res.cloudinary.com/dkszgtapy/image/upload/v1693141295/productize/Illustration_2_zibmgb.png'
            }
            btnTitle={'Create Product'}
          />
        </Box>
        <Box>
          <DashboardRadioBtnComp
            title={'Set up your payout'}
            subTitle={
              'Complete your profile to start getting your products published.'
            }
            image={
              'https://res.cloudinary.com/dkszgtapy/image/upload/v1693141295/productize/Illustration_1_wdmvgf.png'
            }
            btnTitle={'Make Money'}
          />
        </Box>
        <Box>
          <DashboardRadioBtnComp
            title={'make your first sale'}
            subTitle={
              'Complete your profile to start getting your products published.'
            }
            image={
              'https://res.cloudinary.com/dkszgtapy/image/upload/v1693141295/productize/Frame_40446_y425kr.png'
            }
            btnTitle={'Make Sale'}
          />
        </Box>
      </Stack>
    </Container>
  );
};

export default index;
