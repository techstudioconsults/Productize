import { Box, Center, Flex, Text } from '@chakra-ui/react';
import { Icon } from '@iconify/react';

import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ReviewModal } from '../component/ReviewModal';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '@productize/redux';
import axios from 'axios';

export const DownloadedContent = () => {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const token = useSelector(selectCurrentToken);
    const { downloadedContentID } = useParams();
    const [content, setContent] = useState();
    // const { state } = useLocation();
    const navigate = useNavigate();
    // const url = state?.data?.[0];
    const resource = content?.[0];

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get(`${baseUrl}/resources/products/${downloadedContentID}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(res);
            if (res.status === 200) {
                setContent(res.data.data);
            }
        };
        getData();
    }, [baseUrl, downloadedContentID, token]);

    useEffect(() => {
        const isMobileView = window.innerWidth <= 768;
        if (isMobileView && resource?.url && resource?.url?.includes(`.pdf`)) {
            const pdfUrl = 'http://docs.google.com/gview?url=' + resource?.url + '&embedded=true';
            window.open(pdfUrl, '_blank');
        }
    }, [resource?.url]);

    return (
        <Box my={10}>
            <Flex mb={{ sm: 5 }} flexDir={{ base: `column`, sm: `row` }} alignItems={{ base: `flex-end`, sm: `center` }} justifyContent={`space-between`}>
                <Flex alignItems={`center`} gap={5}>
                    <Icon onClick={() => navigate(-1)} fontSize={`2rem`} icon={`material-symbols:chevron-left`} />
                    <Box>
                        <Text fontSize={`sm`} fontWeight={600}>
                            {resource?.name}
                        </Text>
                        <Text fontSize={`xs`} color={`grey.400`}>
                            By {resource?.publisher}
                        </Text>
                    </Box>
                </Flex>
                <Box my={{ base: 4, sm: `initial` }}>
                    <ReviewModal />
                </Box>
            </Flex>
            {/* Use the iframe to display the content from the specified URL */}
            <Center
                id={`downloadIframe`}
                as={`iframe`}
                bgColor={`grey.200`}
                title="Downloaded Content"
                src={resource?.url}
                width="100%"
                height="570px"
                frameBorder="0"
                allowFullScreen
            />
        </Box>
    );
};

export default DownloadedContent;
