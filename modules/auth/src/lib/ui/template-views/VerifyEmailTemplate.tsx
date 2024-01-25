import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { selectEmailConfirmation } from "@productize-v1.0.0/modules/shared/redux";
import { SharedButton } from "@productize-v1.0.0/modules/shared/ui";

interface emailProps {
    text?: string;
}

export function VerifyEmailTemplate({ text }: emailProps) {
    const emailConfirmation = useSelector(selectEmailConfirmation);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const checkMail = () => {
        window.location.href = emailConfirmation.email;
    };

    const handleNavigation = () => {
        navigate(`/auth/login`);
        dispatch({
            type: "Auth/setFPEmailConfirmation",
            payload: {
                emailSent: false,
                email: null,
            },
        });
    };

    return (
        <Box>
            <Text textAlign={`center`} className="small-text" color={`green.200`} mb={2}>
                {text}
            </Text>
            {/* <SharedButton
                btnExtras={{
                    onClick: checkMail,
                    disabled: true,
                }}
                text={"Open email"}
                width={"100%"}
                height={"48px"}
                bgColor={"purple.200"}
                textColor={"white"}
                borderRadius={"4px"}
                fontSize={{ base: `sm`, md: `md` }}
            /> */}
            {/* <Flex my={4} justifyContent={`space-between`}>
                <Link color={`purple.200`} as={RouterLink} fontSize={`sm`}>
                    Try another email address
                </Link>
                <Link color={`purple.200`} as={`p`} onClick={handleNavigation} fontSize={`sm`}>
                    Skip, i'll confirm later
                </Link>
            </Flex> */}
        </Box>
    );
}
