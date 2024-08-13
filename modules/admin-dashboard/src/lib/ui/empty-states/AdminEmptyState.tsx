import { Box, Container, Flex, Image, Text } from '@chakra-ui/react';

export interface bannerProps {
    content: {
        title: string;
        desc: string;
        img?: string;
    };
    textAlign: object;
    maxW?: string;
    showImage: boolean;
    children?: React.ReactNode;
    hasBorder?: boolean;
}

export const EmptyState = ({ content, textAlign, maxW, showImage, children, hasBorder }: bannerProps) => {
    return (
        <Box textAlign={textAlign} p={{ base: 4, md: 8 }} borderRadius={`10px`} border={hasBorder ? `1px solid #F3F2FB` : `none`}>
            <Flex p={0} alignItems={`center`} justifyContent={showImage ? `space-between` : `center`} maxW={maxW} m={`auto`}>
                <Box>
                    <Text as={`h5`} fontWeight={400} color={`purple.200`}>
                        {content.title}
                    </Text>
                    <Container p={0}>
                        <Text my={4} color={`grey.400`}>
                            {content.desc}
                        </Text>
                    </Container>
                    {children}
                </Box>
                <Box display={showImage ? { base: `none`, md: `initial` } : `none`}>
                    <Image src={content.img} alt="img" />
                </Box>
            </Flex>
        </Box>
    );
};
