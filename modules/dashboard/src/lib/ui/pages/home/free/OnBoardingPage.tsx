import {
    Box,
    Container,
    Flex,
    ModalCloseButton,
    Stack,
    Text,
    useDisclosure,
    useToast,
    // useDisclosure,
} from "@chakra-ui/react";
// eslint-disable-next-line @nx/enforce-module-boundaries
import { useVerifyEmailMutation, selectCurrentUser, useGetUserMutation } from "@productize-v1.0.0/modules/shared/redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSetPaymentPlan } from "@productize-v1.0.0/modules/shared/hooks";
import { Divider } from "rsuite";
import { ModalComp, ToastFeedback } from "@productize-v1.0.0/modules/shared/ui";
import { DashboardBanner } from "../../../DashboardBanner";
import { ProgressBar } from "../../../ProgressBar";
import { DashboardRadioBtnComp } from "../../../DashboardRadioBtnComp";
import { SetupPaymentForm } from "@productize-v1.0.0/dashboard";

const OnBoardingPage = () => {
    const [verifyEmail, verifyEmailStatus] = useVerifyEmailMutation();
    const [getUser] = useGetUserMutation();
    const { onOpen, onClose, isOpen } = useDisclosure();
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
                await getUser(null).unwrap();
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
                        isChecked={user?.profile_completed}
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
                        isChecked={user?.payout_setup}
                        title={"Set up your payout account"}
                        subTitle={"Complete your profile to start getting your products published."}
                        image={"https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951033/productize/Illustration_1_wdmvgf_jpnhgm.png"}
                        btn={{
                            onClick: onOpen,
                        }}
                        btnText={"Make Money"}
                    />
                    <ModalComp modalSize={`lg`} openModal={isOpen} closeModal={onClose}>
                        <Box>
                            <Flex>
                                <Text as={`h5`} fontSize={`xl`}>
                                    Add Bank Account
                                </Text>
                                <ModalCloseButton />
                            </Flex>
                            <Divider />
                        </Box>
                        <SetupPaymentForm />
                    </ModalComp>
                </Box>
                <Box>
                    <DashboardRadioBtnComp
                        isPremium={isPremium}
                        isChecked={user?.first_product_created}
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
                        isChecked={user?.first_sale}
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
