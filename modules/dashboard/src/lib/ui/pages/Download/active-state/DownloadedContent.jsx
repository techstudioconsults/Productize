/* eslint-disable @nx/enforce-module-boundaries */
import { Box, Center, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import { Icon } from '@iconify/react';

import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ReviewModal } from '../component/ReviewModal';
import { useSelector } from 'react-redux';
import { selectCurrentToken, useSingleDownloadedProductMutation } from '@productize/redux';
import axios from 'axios';
import { NotificationCard } from './NoticeForSkillSelling';
import { PreLoader } from '@productize/ui';

export const DownloadedContent = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const token = useSelector(selectCurrentToken);
  const { downloadedContentID } = useParams();
  const [content, setContent] = useState();
  const [skillSellingContent, setSkillSellingContent] = useState();
  const [singleDownloadedProduct] = useSingleDownloadedProductMutation();
  const [available, setAvailable] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const resource = content?.[0];

  // useEffect(() => {
  //     const getData = async () => {
  //         const res = await axios.get(`${baseUrl}/assets/products/${downloadedContentID}`, {
  //             headers: {
  //                 Authorization: `Bearer ${token}`,
  //             },
  //         });
  //         if (res.status === 200) {
  //             setContent(res.data.data);
  //         }
  //         const skillSellingRes = await singleDownloadedProduct({ productID: downloadedContentID }).unwrap();
  //         // console.log(skillSellingRes);
  //         if (skillSellingRes) {
  //             setSkillSellingContent(skillSellingRes.data.resource_link);
  //             setAvailable(true)
  //         }
  //     };
  //     getData();
  // }, [baseUrl, downloadedContentID, singleDownloadedProduct, token]);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true); // Set loading to true when starting to fetch data
      try {
        const res = await axios.get(`${baseUrl}/assets/products/${downloadedContentID}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (res.status === 200) {
          setContent(res.data.data);
        }
        const skillSellingRes = await singleDownloadedProduct({ productID: downloadedContentID }).unwrap();
        if (skillSellingRes) {
          setSkillSellingContent(skillSellingRes.data.resource_link);
          setAvailable(true);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false); // Set loading to false when done, regardless of success or failure
      }
    };
    getData();
  }, [baseUrl, downloadedContentID, singleDownloadedProduct, token]);

  console.log(skillSellingContent);
  // console.log(skillSellingContent);

  useEffect(() => {
    const isMobileView = window.innerWidth <= 768;
    if (isMobileView && resource?.url && resource?.url?.includes(`.pdf`)) {
      const pdfUrl = 'http://docs.google.com/gview?url=' + resource?.url + '&embedded=true';
      window.open(pdfUrl, '_blank');
    }
  }, [resource?.url]);

  if (isLoading) {
    return <PreLoader />; // Show loader while data is being fetched
  }

  if (content?.length === 0 && available === false) {
    return (
      <Flex h={`50vh`} direction="column" justify="center" align="center" p={4} border="1px solid" borderColor="gray.200" borderRadius="md">
        <Box color={`purple.200`} fontSize={`9xl`}>
          <Icon icon="raphael:package" />
        </Box>
        <Text mt={2} fontSize="lg" color="gray.600">
          No Content Available
        </Text>
      </Flex>
    );
  }

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

      {skillSellingContent ? (
        <SimpleGrid p={4} py={10} bg={`grey.200`} h={{ lg: `70vh` }} columns={{ base: 1, lg: 2, xl: 3 }} gap={10}>
          {skillSellingContent.map((link, index) => {
            return <NotificationCard title={`Module ${index + 1}`} description={link} link={link} icon={link} />;
          })}
        </SimpleGrid>
      ) : (
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
      )}
    </Box>
  );
};

export default DownloadedContent;
