import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { bannerProps } from "./EmptyState";
import { Link } from "react-router-dom";
import { SharedButton } from "@productize/ui";

export const DashboardEmptyState = ({ maxW, content, showImage, textAlign }: bannerProps) => {
    return (
        <Box p={{ base: 4, md: 8 }} borderRadius={`10px`} bgColor={`grey.200`}>
            <Stack p={0} alignItems={`center`} justifyContent={`center`} maxW={maxW} m={`0 auto`}>
                <Box display={showImage ? { base: `none`, md: `initial` } : `none`}>
                    <Image src={content.img} alt="img" />
                </Box>
                <Box textAlign={textAlign}>
                    <Text fontWeight={400} color={`purple.200`}>
                        {content.title}
                    </Text>
                    <Text as={`h6`} my={4} color={`purple.300`}>
                        {content.desc}
                    </Text>
                </Box>
                <Link to={`/dashboard/products/new#product-details`}>
                    <SharedButton
                        text={"Create your first product"}
                        width={"fit-content"}
                        height={"48px"}
                        bgColor={"purple.200"}
                        textColor={"purple.100"}
                        borderRadius={"4px"}
                        fontSize={{ base: `sm`, md: `md` }}
                    />
                </Link>
            </Stack>
        </Box>
    );
};

