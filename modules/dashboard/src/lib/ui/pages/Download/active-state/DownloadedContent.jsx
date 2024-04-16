import { Box, Center, Flex, Text } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const DownloadedContent = () => {
    const [modUrl, setModUrl] = useState();
    const { state } = useLocation();
    const navigate = useNavigate();
    const url = state?.data?.[0];

    useState(() => {
        if (url.includes(`.pdf`)) {
            console.log(`this is a pdf file`);
            const pdfUrl = 'http://docs.google.com/gview?url=' + url + '&embedded=true';
            setModUrl(pdfUrl);
            console.log(`this is a pdf file`, pdfUrl);
        }
        setModUrl(url);
    }, []);

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
            <Center
                id={`downloadIframe`}
                as={`iframe`}
                bgColor={`grey.200`}
                title="Downloaded Content"
                src={modUrl}
                width="100%"
                height="570px"
                frameBorder="0"
                allowFullScreen
            />
        </Box>
    );
};

export default DownloadedContent;
