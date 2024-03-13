/* eslint-disable @nx/enforce-module-boundaries */
import React from 'react';
import { Box, Container, Flex, Stack, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { DashboardBanner } from '../../../DashboardBanner';
import { Suspense } from 'react';
import errorImg from '@icons/error.svg';
import { useSetPaymentPlan } from '@productize/hooks';
import { useVerifyEmailMutation, useGetUserMutation, selectCurrentUser } from '@productize/redux';
import { useToastAction, ToastFeedback, OnBoardingLoader } from '@productize/ui';
const DashboardRadioBtnComp = React.lazy(() => import('../../../DashboardRadioBtnComp'));
const ProgressBar = React.lazy(() => import('../../../ProgressBar'));

const OnBoardingPage = () => {
    const [verifyEmail, verifyEmailStatus] = useVerifyEmailMutation();
    const [getUser] = useGetUserMutation();
    const user = useSelector(selectCurrentUser);
    const navigate = useNavigate();
    const { toast, toastIdRef, close } = useToastAction();
    const isPremium = useSetPaymentPlan();

    const verifyEmailAddress = async () => {
        try {
            const res = await verifyEmail(null).unwrap();
            if (res) {
                toastIdRef.current = toast({
                    position: 'top',
                    render: () => (
                        <ToastFeedback
                            btnColor={`purple.200`}
                            message={`Check your email for our verification link`}
                            title="Email sent successfully"
                            icon={undefined}
                            bgColor={undefined}
                            color={undefined}
                            handleClose={close}
                        />
                    ),
                });
                // write a dispatch hook here to update the user profie details for verified user email
                await getUser(null).unwrap();
            }
        } catch (err: any) {
            toastIdRef.current = toast({
                position: 'top',
                render: () => (
                    <ToastFeedback
                        message={`Something went wrong, please try again later.`}
                        title="Email not sent!"
                        icon={errorImg}
                        color={`red.600`}
                        btnColor={`red.600`}
                        bgColor={undefined}
                        handleClose={close}
                    />
                ),
            });
        }
    };

    return (
        <Container p={0} my={8} maxW={`47rem`}>
            <DashboardBanner
                img={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951034/productize/Illustration_2_fslyo9_vfqfto.png `}
                bgImg={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951013/productize/Lines_t1t27k_gg0jau.png`}
                title={'Welcome to productize.'}
                desc={'Complete your profile to start getting your products published.'}
                py={8}
                px={8}
            />
            <Flex flexDir={{ base: `column`, md: `row` }} my={8} justifyContent={`space-between`} alignItems={{ base: `flex-start`, md: `center` }}>
                <Box>
                    <Text as={`h6`} fontWeight={`bold`}>
                        Get Started Guide
                    </Text>
                    <Text color={`grey.400`}>Use this personalized guide to get your store up and running.</Text>
                </Box>
                <Box my={{ base: 4, lg: `initial` }}>
                    <ProgressBar />
                </Box>
            </Flex>
            <Stack>
                <Suspense fallback={<OnBoardingLoader />}>
                    <Box>
                        <DashboardRadioBtnComp
                            isPremium={true}
                            isChecked={user?.email_verified}
                            title={'Verify your email'}
                            subTitle={'Complete your profile to start getting your products published.'}
                            image={'https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951005/productize/Illustration_oblvox_athyeh.png'}
                            btn={{
                                isLoading: verifyEmailStatus.isLoading,
                                loadingText: `Processing..`,
                                onClick: verifyEmailAddress,
                            }}
                            btnText={'Verify Email'}
                        />
                        {/* <ModalComp modalSize="lg" openModal={isOpen} closeModal={onClose}>
            <VerifyEmailTemplate text="Email verification link resent successfully" />
          </ModalComp> */}
                    </Box>
                    <Box>
                        <DashboardRadioBtnComp
                            isPremium={isPremium}
                            isChecked={user?.profile_completed}
                            title={'Customize your profile'}
                            subTitle={'Complete your profile to start getting your products published.'}
                            image={'https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951003/productize/Star_6_alusuk_sbe2un.png'}
                            btn={{
                                onClick: () => navigate(`/dashboard/profile/${user?.id}`),
                            }}
                            btnText={'Customize Profile'}
                        />
                    </Box>
                    <Box>
                        <DashboardRadioBtnComp
                            isPremium={isPremium}
                            isChecked={user?.payout_setup}
                            title={'Set up your payout account'}
                            subTitle={'Complete your profile to start getting your products published.'}
                            image={'https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951033/productize/Illustration_1_wdmvgf_jpnhgm.png'}
                            btn={{
                                onClick: () => navigate(`/dashboard/settings/payment`),
                            }}
                            btnText={'Make Money'}
                        />
                    </Box>
                    <Box>
                        <DashboardRadioBtnComp
                            isPremium={isPremium}
                            isChecked={user?.first_product_created}
                            title={'Create your first product'}
                            subTitle={'Complete your profile to start getting your products published.'}
                            image={'https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951002/productize/Illustration_2_zibmgb_aun5ux.png'}
                            btn={{
                                onClick: () => navigate(`/dashboard/products/new#product-details`),
                            }}
                            btnText={'Create Product'}
                        />
                    </Box>
                    <Box>
                        <DashboardRadioBtnComp
                            isPremium={isPremium}
                            isChecked={user?.first_sale}
                            title={'make your first sale'}
                            subTitle={'Complete your profile to start getting your products published.'}
                            image={'https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951025/productize/Frame_40446_y425kr_pcfgv4.png'}
                            btn={{}}
                            btnText={'Make Sale'}
                        />
                    </Box>
                </Suspense>
            </Stack>
        </Container>
    );
};

export default OnBoardingPage;
