/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @nx/enforce-module-boundaries */
import { Box, Flex, Text } from '@chakra-ui/react';
import { ModalComp, SharedButton } from '@productize/ui';
import PublishFeedback from './PublishedFeedback';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '@productize/redux';
import { useState } from 'react';

const PublishModal = ({ formData, close }) => {
  const [isOpen, setOpen] = useState(false);
  const token = useSelector(selectCurrentToken);

  const saveContent = async () => {
    console.log('Data to be saved:', formData);

    const formattedData = new FormData();
    formattedData.append('title', formData.data.title);
    formattedData.append('thumbnail', formData.data.logo); // Assuming logo is a File object
    formattedData.append('status', 'draft');
    formattedData.append('template', formData.templateData().content);

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/funnels`, formattedData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Save successful:', response.data);
    } catch (error) {
      console.error('Error saving content:', error);
    }
  };

  const publishContent = async () => {
    console.log('Data to be saved:', formData);

    const formattedData = new FormData();
    formattedData.append('title', formData.data.title);
    formattedData.append('thumbnail', formData.data.logo); // Assuming logo is a File object
    formattedData.append('status', 'published');
    formattedData.append('template', formData.templateData().content);

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/funnels`, formattedData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Save successful:', response.data);
    } catch (error) {
      console.error('Error saving content:', error);
    }
  };

  const toggleFormModal = (state) => {
    setOpen(state);
  };

  return (
    <>
      <SharedButton
        text={`Save & Continue`}
        btnExtras={{ onClick: () => toggleFormModal(true), type: `submit` }}
        width="100%"
        height="40px"
        bgColor="purple.200"
        textColor="white"
        borderRadius="4px"
        fontSize={{}}
      />
      <ModalComp modalSize="4xl" openModal={isOpen} closeModal={() => toggleFormModal(false)}>
        <Box textAlign={`center`}>
          <Text mb={10} as={`h5`} fontSize={{ base: `18px`, md: `24px` }}>
            Do you wish to publish this funnel?
          </Text>
        </Box>
        <Flex gap={10}>
          <PublishFeedback publishTemplate={publishContent} />
          <SharedButton
            text={`Save to Draft`}
            width="100%"
            height="40px"
            textColor="purple.200"
            bgColor="transparent"
            borderRadius="4px"
            btnExtras={{ border: `1px solid purple`, onClick: saveContent }}
            fontSize={{}}
          />
        </Flex>
      </ModalComp>
    </>
  );
};

export default PublishModal;
