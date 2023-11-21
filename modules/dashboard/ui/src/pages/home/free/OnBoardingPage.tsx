import {
    Box,
    Container,
    Flex,
    Stack,
    Text,
    useToast,
    // useDisclosure,
} from "@chakra-ui/react";
// eslint-disable-next-line @nx/enforce-module-boundaries
import { checkUserProfileValidity } from "@productize-v1.0.0/modules/dashboard/feature";
import { useVerifyEmailMutation, selectCurrentUser } from "@productize-v1.0.0/modules/shared/redux";
// import { ModalComp } from '@productize/shared/ui';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DashboardBanner } from "../../../lib/DashboardBanner";
import { DashboardRadioBtnComp } from "../../../lib/DashboardRadioBtnComp";
import { ProgressBar } from "../../../lib/ProgressBar";
import { ToastFeedback } from "@productize-v1.0.0/modules/shared/ui";
import { useSetPaymentPlan } from "@productize-v1.0.0/modules/shared/hooks";

const OnBoardingPage = () => {
    const [verifyEmail, verifyEmailStatus] = useVerifyEmailMutation();
    // const { onOpen, onClose, isOpen } = useDisclosure();
    const user = useSelector(selectCurrentUser);
    const navigate = useNavigate();
    const toast = useToast();
    const isPremium = useSetPaymentPlan();

    const verifyEmailAddress = async () => {
        try {
            const res = await verifyEmail(null).unwrap();
            if (res) {
                toast({
                    position: "top",
                    render: () => <ToastFeedback message={`Check your email for our verification link`} title="Email sent successfully" />,
                });
                // write a dispatch hook here to update the user profie details for verified user email
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Container p={0} my={8} maxW={`47rem`}>
            <DashboardBanner
                img={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951034/productize/Illustration_2_fslyo9_vfqfto.png `}
                bgImg={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951013/productize/Lines_t1t27k_gg0jau.png`}
                title={"Welcome to productize."}
                desc={"Complete your profile to start getting your products published."}
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
                <Box>
                    <ProgressBar />
                </Box>
            </Flex>
            <Stack>
                <Box>
                    <DashboardRadioBtnComp
                        isPremium={true}
                        isChecked={user?.email_verified}
                        title={"Verify your email"}
                        subTitle={"Complete your profile to start getting your products published."}
                        image={"https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951005/productize/Illustration_oblvox_athyeh.png"}
                        btn={{
                            isLoading: verifyEmailStatus.isLoading,
                            loadingText: `Processing..`,
                            onClick: verifyEmailAddress,
                        }}
                        btnText={"Verify Email"}
                    />
                    {/* <ModalComp modalSize="lg" openModal={isOpen} closeModal={onClose}>
            <VerifyEmailTemplate text="Email verification link resent successfully" />
          </ModalComp> */}
                </Box>
                <Box>
                    <DashboardRadioBtnComp
                        isPremium={isPremium}
                        isChecked={checkUserProfileValidity(user)}
                        title={"Customize your profile"}
                        subTitle={"Complete your profile to start getting your products published."}
                        image={"https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951003/productize/Star_6_alusuk_sbe2un.png"}
                        btn={{
                            onClick: () => navigate(`/dashboard/profile/${user?.id}`),
                        }}
                        btnText={"Customize Profile"}
                    />
                </Box>
                <Box>
                    <DashboardRadioBtnComp
                        isPremium={isPremium}
                        title={"Create your first product"}
                        subTitle={"Complete your profile to start getting your products published."}
                        image={"https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951002/productize/Illustration_2_zibmgb_aun5ux.png"}
                        btn={{
                            onClick: () => navigate(`/dashboard/products/new#product-details`),
                        }}
                        btnText={"Create Product"}
                    />
                </Box>
                <Box>
                    <DashboardRadioBtnComp
                        isPremium={isPremium}
                        title={"Set up your payout"}
                        subTitle={"Complete your profile to start getting your products published."}
                        image={"https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951033/productize/Illustration_1_wdmvgf_jpnhgm.png"}
                        btn={{}}
                        btnText={"Make Money"}
                    />
                </Box>
                <Box>
                    <DashboardRadioBtnComp
                        isPremium={isPremium}
                        title={"make your first sale"}
                        subTitle={"Complete your profile to start getting your products published."}
                        image={"https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951025/productize/Frame_40446_y425kr_pcfgv4.png"}
                        btn={{}}
                        btnText={"Make Sale"}
                    />
                </Box>
            </Stack>
        </Container>
    );
};

export default OnBoardingPage;
