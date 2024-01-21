import { Box, Center, Checkbox, Flex, Image, Text, useDisclosure } from "@chakra-ui/react";
import { BtnExtras, SharedButton, UpgradePlanModal } from "@productize-v1.0.0/modules/shared/ui";
import { useRef } from "react";
// import { useDispatch } from 'react-redux';

interface DashboardRadioProp {
    title: string;
    subTitle: string;
    image: string;
    isChecked?: boolean | false;
    btn: BtnExtras;
    btnText: string;
    isPremium?: boolean;
}

export const DashboardRadioBtnComp = ({ title, subTitle, image, btn, isChecked, btnText, isPremium }: DashboardRadioProp) => {
    const checkboxRef = useRef<HTMLInputElement | null>(null);
    const { isOpen, onOpen, onClose } = useDisclosure();
    // const dispatch = useDispatch();

    // useEffect(() => {
    //   if (checkboxRef.current?.checked) {
    //     dispatch({
    //       type: `User/setTaskCount`,
    //       payload: true,
    //     });
    //   }
    // }, [dispatch]);

    return (
        <Flex p={4} gap={4} alignItems={`flex-start`} border={`1px solid #F3F3F3`} borderRadius={`8px`}>
            <Center p={0} boxSize={6}>
                <Checkbox ref={checkboxRef} isChecked={isChecked} colorScheme="purple" checked size="lg" />
            </Center>
            <Box w={`100%`}>
                <Text className="small-text" fontWeight={600}>
                    {title}
                </Text>
                <Flex flexDir={{ base: `column`, md: `row` }} gap={4} hidden={isChecked} justifyContent={`space-between`}>
                    <Box>
                        <Text mb={5} className="small-text" fontWeight={100}>
                            {subTitle}
                        </Text>
                        <>
                            <SharedButton
                                btnExtras={{
                                    isLoading: btn.isLoading,
                                    loadingText: btn.loadingText,
                                    onClick: isPremium ? btn.onClick : onOpen,
                                    rightIcon: isPremium ? `` : `foundation:lock`,
                                }}
                                text={btnText}
                                width={""}
                                height={"36px"}
                                bgColor={"purple.200"}
                                textColor={"white"}
                                borderRadius={"4px"}
                                fontSize={{ base: `sm` }}
                            />
                            <UpgradePlanModal onClose={onClose} isOpen={isOpen} />
                        </>
                    </Box>
                    <Box w={`178px`} h={`82px`}>
                        <Image w={`100%`} h={`100%`} src={image} alt="img" />
                    </Box>
                </Flex>
            </Box>
        </Flex>
    );
};


export default DashboardRadioBtnComp;