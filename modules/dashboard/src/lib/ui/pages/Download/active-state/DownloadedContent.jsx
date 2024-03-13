import { Box, Center, Flex, Text } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { useLocation, useNavigate } from "react-router-dom";

export const DownloadedContent = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const url = state?.data?.[0];

    return (
        <Box my={10}>
            <Flex alignItems={`center`} gap={5} my={5}>
                <Icon onClick={() => navigate(-1)} fontSize={`2rem`} icon={`material-symbols:chevron-left`} />
                <Box>
                    <Text fontSize={`sm`} fontWeight={600}>
                        {state?.title}
                    </Text>
                    <Text fontSize={`xs`} color={`grey.400`}>
                        By {state?.publisher}
                    </Text>
                </Box>
            </Flex>
            {/* Use the iframe to display the content from the specified URL */}
            <Center as={`iframe`} bgColor={`grey.200`} title="Downloaded Content" src={url} width="100%" height="570px" frameBorder="0" allowFullScreen />
        </Box>
    );
};

export default DownloadedContent;
