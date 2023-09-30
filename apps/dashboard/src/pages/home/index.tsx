import { Box, Container, Flex, Stack, Text } from '@chakra-ui/react';
import {
  DashboardBanner,
  DashboardRadioBtnComp,
  ProgressBar,
} from '@productize/dashboard-lib/ui';
import {
  selectCurrentUser,
  useVerifyEmailMutation,
} from '@productize/shared/redux';
import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  const [verifyEmail] = useVerifyEmailMutation();
  const user = useSelector(selectCurrentUser);
  const verifyEmailAddress = async () => {
    try {
      await verifyEmail(null).unwrap();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container p={0} my={8} maxW={`47rem`}>
      <DashboardBanner
        img={`https://res.cloudinary.com/dkszgtapy/image/upload/v1695996352/productize/Illustration_2_fslyo9.png `}
        bgImg={`https://res.cloudinary.com/dkszgtapy/image/upload/v1695997135/productize/Lines_t1t27k.png`}
        title={'Welcome to productize.'}
        desc={'Complete your profile to start getting your products published.'}
        py={8}
        px={8}
      />
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
            isChecked={user?.email_verified}
            title={'Verify your email'}
            subTitle={
              'Complete your profile to start getting your products published.'
            }
            image={
              'https://res.cloudinary.com/dkszgtapy/image/upload/v1695984929/productize/Illustration_oblvox.png'
            }
            btnTitle={'Verify Email'}
            onClick={verifyEmailAddress}
          />
        </Box>
        <Box>
          <DashboardRadioBtnComp
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

export default Home;
