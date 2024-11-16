/* eslint-disable @nx/enforce-module-boundaries */
import { useRef, useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  Box,
  SimpleGrid,
  Text,
  FormControl,
  FormLabel,
  Input,
  Center,
  Image,
  Flex,
  Stack,
  Card,
  Progress,
} from '@chakra-ui/react';
import { Controller, useForm } from 'react-hook-form';
import { SharedButton } from '@productize/ui';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '@productize/redux';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

const FunnelForm = ({ CTATitle = `Create New Funnel`, templateData, title, thumbnail }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isPublishOpen, setIsPublishOpen] = useState(false);
  const [formData, setFormData] = useState();
  const fileInput = useRef(null);
  const imgRef = useRef(null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    criteriaMode: 'all',
    mode: 'onChange',
    defaultValues: {
      title: title || '', // Initial value for title
      logo: thumbnail || null, // Initial value for logo
    },
  });

  const previewImg = (files) => {
    if (files && imgRef.current) {
      imgRef.current.src =
        URL.createObjectURL(files?.[0]) || `https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951003/productize/Star_6_alusuk_sbe2un.png`;
    }
  };

  const saveContent = async (data) => {
    console.log(data);
    setFormData({ templateData, data });
  };

  const handleOpenPublish = () => {
    setIsPublishOpen(true);
    onClose();
  };

  return (
    <>
      <div>
        <SharedButton
          text="Save & Continue"
          width="fit-content"
          height="40px"
          bgColor="purple.200"
          textColor="white"
          borderRadius="4px"
          btnExtras={{ onClick: onOpen }}
        />
      </div>
      <Modal size={`3xl`} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent p={`3rem`}>
          <Box textAlign="center">
            <Text mb={10} as="h5" fontSize={{ base: `18px`, md: `24px` }}>
              Final Steps Before Publishing...
            </Text>
            <p>Fill the form below to complete your funnel creation</p>
          </Box>
          <SimpleGrid as="form" onSubmit={handleSubmit(saveContent)} columns={1} gap={10} mt="24px">
            <FormControl isInvalid={errors.title}>
              <FormLabel color="purple.300" fontWeight={600}>
                Title
              </FormLabel>
              <Input
                {...register('title', { required: 'Title is required' })}
                bgColor="grey.200"
                _focus={{ bgColor: `grey.300`, color: `grey.800` }}
                _placeholder={{ color: `grey.400` }}
                placeholder="Funnel Name"
                variant="filled"
                size="lg"
              />
              <Text color="red.200" fontSize="sm">
                {errors.title?.message}
              </Text>
            </FormControl>

            <FormControl isInvalid={errors.logo}>
              <FormLabel color="purple.300" fontWeight={600}>
                Thumbnail
                <Text fontSize="14px" color="grey">
                  This image will appear in the explore page, upload a square size of 2mb.
                </Text>
              </FormLabel>
              <Box>
                <Center overflow="hidden" borderRadius="8px" bgColor="purple.100" h="200px" pos="relative">
                  <Image ref={imgRef} objectFit="contain" src={thumbnail} alt="img" />
                  <Box pos="absolute">
                    <SharedButton
                      text="Upload Image"
                      btnExtras={{
                        leftIcon: 'solar:camera-bold',
                        onClick: () => fileInput.current?.click(),
                      }}
                      width="fit-content"
                      height="40px"
                      bgColor="purple.200"
                      textColor="white"
                      borderRadius="4px"
                    />
                  </Box>
                  <Controller
                    name="logo"
                    control={control}
                    defaultValue={null}
                    rules={{ required: 'Logo is required' }}
                    render={({ field }) => (
                      <Input
                        hidden
                        ref={fileInput}
                        type="file"
                        onChange={(e) => {
                          field.onChange(e.target.files?.[0]);
                          previewImg(e.target.files);
                        }}
                      />
                    )}
                  />
                </Center>
                <Text color="red.200" fontSize="sm">
                  {errors.logo?.message}
                </Text>
              </Box>
            </FormControl>

            <Flex gap={10}>
              <SharedButton
                text="Cancel"
                width="100%"
                height="40px"
                bgColor="transparent"
                textColor="red.200"
                borderRadius="4px"
                btnExtras={{ border: '1px solid red', onClick: onClose }}
              />
              <SharedButton
                text="Save & Continue"
                width="100%"
                height="40px"
                bgColor="purple.200"
                textColor="white"
                borderRadius="4px"
                btnExtras={{ onClick: handleOpenPublish, type: `submit` }}
              />
            </Flex>
          </SimpleGrid>
        </ModalContent>
      </Modal>
      {isPublishOpen && <PublishModal formData={formData} isOpen={isPublishOpen} onClose={() => setIsPublishOpen(false)} />}
    </>
  );
};

const PublishModal = ({ isOpen, onClose, formData }) => {
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [content, setContent] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isPublishing, setIsPublishing] = useState(false);
  const token = useSelector(selectCurrentToken);
  const router = useNavigate();

  const saveContent = async () => {
    console.log('Data to be saved:', formData);

    const formattedData = new FormData();
    formattedData.append('title', formData.data.title);
    formattedData.append('thumbnail', formData.data.logo); // Assuming logo is a File object
    formattedData.append('status', 'draft');
    formattedData.append('template', formData.templateData().content);

    console.log('Formatted Data:', formattedData);

    try {
      const response = await axios.post('https://api-dev.trybytealley.com/api/funnels', formattedData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 201) {
        router(`/dashboard/funnels#all-funnels`);
      }
    } catch (error) {
      console.error('Error saving content:', error);
    }
  };

  const simulateProgress = (start, end, duration) => {
    let current = start;
    const step = (end - start) / (duration / 100); // Slower step

    return new Promise((resolve) => {
      const interval = setInterval(() => {
        current += step;
        if (current >= end) {
          setProgress(end);
          clearInterval(interval);
          resolve(); // Resolve the promise once the progress reaches the end
        } else {
          setProgress(Math.min(Math.round(current), end)); // Ensure it doesn't exceed the end value
        }
      }, 100); // Slow down by adjusting the interval
    });
  };

  const PublishContent = async () => {
    console.log('Data to be saved:', formData);

    const formattedData = new FormData();
    formattedData.append('title', formData.data.title);
    formattedData.append('thumbnail', formData.data.logo); // Assuming logo is a File object
    formattedData.append('status', 'published');
    formattedData.append('template', formData.templateData().content);

    try {
      setIsPublishing(true);
      setProgress(0); // Start with 0% progress
      // Simulate the upload progress gradually
      await simulateProgress(0, 60, 20000); // Simulate slower upload (0-60% in 3 seconds)

      const response = await axios.post('https://api-dev.trybytealley.com/api/funnels', formattedData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          // Handle real file upload progress in parallel
          const percentage = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setProgress(Math.min(percentage + 60, 100)); // Gradually increase progress
        },
      });

      // Simulate post-upload processing (100% after upload)
      if (response.status === 201) {
        await simulateProgress(60, 100, 2000); // Simulate slow processing (60%-100% in 2 seconds)
        setContent(response.data.data);
        setIsSuccessOpen(true);
      }
    } catch (error) {
      console.error('Error saving content:', error);
    } finally {
      setIsPublishing(false);
      setProgress(0); // Reset progress after completion
    }
  };

  return (
    <Modal size={`3xl`} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent p={`3rem`}>
        <Box textAlign={`center`}>
          <Text mb={10} as={`h5`} fontSize={{ base: `18px`, md: `24px` }}>
            Do you wish to publish this funnel?
          </Text>
        </Box>

        {isPublishing && (
          <Box mb={6}>
            <Text mb={2} textAlign="center">
              {progress < 100 ? `Uploading... ${progress}%` : 'Processing...'}
            </Text>
            <Progress borderRadius={`10px`} value={progress} colorScheme="purple" />
          </Box>
        )}

        <Flex gap={10}>
          <SharedButton
            text="Publish"
            width="100%"
            height="40px"
            bgColor="purple.200"
            textColor="white"
            borderRadius="4px"
            btnExtras={{ onClick: PublishContent }}
            isDisabled={isPublishing} // Disable button while publishing
          />
          <SharedButton
            text={`Save to Draft`}
            width="100%"
            height="40px"
            textColor="purple.200"
            bgColor="transparent"
            borderRadius="4px"
            btnExtras={{ border: `1px solid purple`, onClick: saveContent }}
            isDisabled={isPublishing} // Disable button while publishing
          />
        </Flex>
      </ModalContent>
      {isSuccessOpen && <SuccessModal publishContent={content} isOpen={isSuccessOpen} onClose={() => setIsSuccessOpen(false)} />}
    </Modal>
  );
};

const SuccessModal = ({ isOpen, onClose, publishContent }) => {
  const router = useNavigate();
  return (
    <Modal size={`3xl`} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent p={`3rem`}>
        <Card variant={`unstyled`} border={`1px solid #CFCFD0`} p={2}>
          <Box h={`197px`}>
            <Image objectFit={`cover`} w={`100%`} h={`100%`} src={publishContent?.thumbnail} alt="img" />
          </Box>
          <Stack mt={4} alignItems={`center`}>
            <Text fontWeight={600}>{publishContent?.title}</Text>
            <Text fontWeight={600}>₦3,000</Text>
          </Stack>
        </Card>
        <Stack alignItems={`center`} mt={`4rem`}>
          <Text as={`h5`}>Funnel Published Successfully!</Text>
          <Text color={`grey.500`} my={4}>
            Copy and send this link to someone and they’ll be able to get your Funnel
          </Text>
          <Flex w={`100%`} p={`8px`} borderRadius={5} bgColor={`grey.200`} gap={2} alignItems={`center`} justifyContent={`space-around`}>
            <Text>{publishContent?.url}</Text>

            <Icon fontSize={`24px`} cursor={`pointer`} icon={`ph:copy-simple-light`} />
          </Flex>
        </Stack>
        <Box mt={10}>
          <SharedButton
            text={`Go to All Funnels`}
            width="100%"
            height="40px"
            textColor="purple.200"
            bgColor="transparent"
            borderRadius="4px"
            btnExtras={{ border: `1px solid purple`, onClick: () => router(`/dashboard/funnels/#all-funnels`) }}
          />
        </Box>
      </ModalContent>
    </Modal>
  );
};

export default FunnelForm;
