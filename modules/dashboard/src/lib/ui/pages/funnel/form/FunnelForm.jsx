/* eslint-disable @nx/enforce-module-boundaries */
import { useRef, useState } from 'react';
import { Checkbox, FormControl, Stack, Text, Badge } from '@chakra-ui/react';
import { getCsrfToken, selectCurrentToken } from '@productize/redux';
import { Controller } from 'react-hook-form';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';
import fileUpload from './asset/fileUpload.svg';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  Box,
  SimpleGrid,
  FormLabel,
  Input,
  Center,
  Image,
  Flex,
  Card,
  ModalCloseButton,
  useToast,
  // useToast,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { SharedButton } from '@productize/ui';
import { useDispatch } from 'react-redux';
import { setProgressBar } from '@productize/redux';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import { useAxiosInstance } from '@productize/hooks';

const FunnelForm = ({ CTATitle = `Create New Funnel`, templateData }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isPublishOpen, setIsPublishOpen] = useState(false);
  const [formData, setFormData] = useState();
  const logoInput = useRef(null);
  const fileInput = useRef(null);
  const imgRef = useRef(null);
  const [products, setProducts] = useState([]);
  const token = useSelector(selectCurrentToken);
  const baseUrl = import.meta.env.VITE_BASE_URL;

  // Fetch products from the API
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(`${baseUrl}/products/users?status=published`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(res.data.data);
        setProducts(res.data.data);
      } catch (err) {
        console.error('Error fetching tags:', err);
      }
    };
    getProducts();
  }, [baseUrl, token]);

  // Format tags for the multi-select
  const productOption = products.map((product) => ({ label: product, value: product }));

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    criteriaMode: 'all',
    mode: 'onChange',
  });

  const previewImg = (files) => {
    if (files && imgRef.current) {
      imgRef.current.src =
        URL.createObjectURL(files?.[0]) || `https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951003/productize/Star_6_alusuk_sbe2un.png`;
    }
  };

  const saveContent = async (data) => {
    setFormData({ templateData, data });
    console.log(formData);
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
      <Modal closeOnOverlayClick={false} size={`3xl`} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent p={`3rem`}>
          <ModalCloseButton />
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
                  <Image ref={imgRef} objectFit="contain" src={``} alt="img" />
                  <Box pos="absolute">
                    <SharedButton
                      text="Upload Image"
                      btnExtras={{
                        leftIcon: 'solar:camera-bold',
                        onClick: () => logoInput.current?.click(),
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
                        ref={logoInput}
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
            <FormControl isInvalid={errors.tags}>
              <FormLabel color="purple.300" fontWeight={600}>
                Products
              </FormLabel>
              <Controller
                name="products"
                control={control}
                defaultValue={[]}
                rules={{ required: 'At least one product is required' }}
                render={({ field }) => (
                  <CustomMultiSelect options={productOption} selectedValues={field.value} onChange={field.onChange} placeholder="Select products..." />
                )}
              />
              <Text color="red.200" fontSize="sm">
                {errors.tags?.message}
              </Text>
            </FormControl>
            <FormControl isInvalid={errors.asset}>
              <FormLabel color="purple.300" fontWeight={600}>
                File Upload
                {/* <Text fontSize="14px" color="grey">
                  This is a composury but recommended if your funnel requires downloadable resources
                </Text> */}
              </FormLabel>
              <Box>
                <Center overflow="hidden" borderRadius="8px" bgColor="purple.100" h="100px" pos="relative" flexDirection="column">
                  {formData?.asset && (
                    <Flex align="center" mb={2}>
                      <Image src={fileUpload} alt="File Icon" boxSize="20px" mr={2} />
                      <Text fontSize="14px" color="grey.800">
                        {formData.asset.name}
                      </Text>
                    </Flex>
                  )}
                  <Box pos="absolute">
                    <SharedButton
                      text="Upload File"
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
                    name="asset"
                    control={control}
                    defaultValue={null}
                    rules={{ required: 'File is required' }}
                    render={({ field }) => (
                      <Input
                        hidden
                        ref={fileInput}
                        type="file"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            field.onChange(file);
                            setFormData((prev) => ({
                              ...prev,
                              asset: file,
                            }));
                          }
                        }}
                      />
                    )}
                  />
                </Center>
                <Text color="red.200" fontSize="sm">
                  {errors.asset?.message}
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
  const { query } = useAxiosInstance({ MIME_TYPE: 'multipart/form-data' });
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [content, setContent] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [isSavingToDraft] = useState(false);
  const token = useSelector(selectCurrentToken);
  const router = useNavigate();
  const dispatch = useDispatch();

  const simulateProgress = (start, end, duration) => {
    let current = start;
    const step = (end - start) / (duration / 100); // Slower step

    return new Promise((resolve) => {
      const interval = setInterval(() => {
        current += step;
        if (current >= end) {
          dispatch(setProgressBar(end));
          clearInterval(interval);
          resolve();
        } else {
          dispatch(setProgressBar(Math.min(Math.round(current), end)));
        }
      }, 100);
    });
  };

  const saveContent = async () => {
    const formattedData = new FormData();

    // Append other fields
    formattedData.append('title', formData.data.title);
    formattedData.append('thumbnail', formData.data.logo);
    formattedData.append('status', 'draft');
    formattedData.append('template', JSON.stringify(formData.templateData()));
    formattedData.append('asset', formData.data.asset);
    formData.data.products.forEach((productId, index) => {
      formattedData.append(`products[${index}]`, productId);
    });

    try {
      // const csrfToken = await getCsrfToken();
      // const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/funnels`, formattedData, {
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //     'Content-Type': 'multipart/form-data',
      //     'X-CSRF-Token': csrfToken,
      //   },
      //   withCredentials: true,
      //   withXSRFToken: true,
      // });
      const response = await query('post', `/funnels`, formattedData);

      if (response.status === 201) {
        router(`/dashboard/funnels#all-funnels`);
      }
    } catch (error) {
      console.error('Error saving content:', error);
    }
  };

  const publish = async () => {
    const formattedData = new FormData();
    formattedData.append('title', formData.data.title);
    formattedData.append('thumbnail', formData.data.logo);
    formattedData.append('status', 'published');
    formattedData.append('template', JSON.stringify(formData.templateData()));
    formattedData.append('asset', formData.data.asset);
    formData.data.products.forEach((productId, index) => {
      formattedData.append(`products[${index}]`, productId);
    });

    try {
      router(`/dashboard/funnels#all-funnels`);
      setIsPublishing(true);
      dispatch(setProgressBar(0));
      await simulateProgress(0, 60, 20000);
      // const csrfToken = await getCsrfToken();
      // const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/funnels`, formattedData, {
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //     'Content-Type': 'multipart/form-data',
      //     'X-CSRF-Token': csrfToken,
      //   },
      //   withCredentials: true,
      //   withXSRFToken: true,
      //   onUploadProgress: (progressEvent) => {
      //     // Handle real file upload progress in parallel
      //     const percentage = Math.round((progressEvent.loaded * 100) / progressEvent.total);
      //     dispatch(setProgressBar(Math.min(percentage + 60, 100)));
      //   },
      // });

      const response = await query('post', `/funnels`, formattedData);
      // Simulate post-upload processing (100% after upload)
      if (response.status === 201) {
        await simulateProgress(60, 100, 2000); // Simulate slow processing (60%-100% in 2 seconds)
        setContent(response.data.data);
        dispatch(setProgressBar(100));
        setIsSuccessOpen(true);
      }
    } catch (error) {
      console.error('Error saving content:', error);
    } finally {
      setIsPublishing(false);
      dispatch(setProgressBar(0));
    }
  };

  return (
    <Modal closeOnOverlayClick={false} size={`3xl`} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent p={`3rem`}>
        <ModalCloseButton />
        <Box textAlign={`center`}>
          <Text mb={10} as={`h5`} fontSize={{ base: `18px`, md: `24px` }}>
            Do you wish to publish this funnel?
          </Text>
        </Box>

        <Flex gap={10}>
          <SharedButton
            text="Publish"
            width="100%"
            height="40px"
            bgColor="purple.200"
            textColor="white"
            borderRadius="4px"
            btnExtras={{ onClick: publish }}
            isDisabled={isPublishing} // Disable button while publishing
          />
          <SharedButton
            text={`Save to Draft`}
            width="100%"
            height="40px"
            textColor="purple.200"
            bgColor="transparent"
            borderRadius="4px"
            btnExtras={{ border: `1px solid purple`, onClick: saveContent, isLoading: isSavingToDraft }}
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
  const toast = useToast(); // Optional for showing feedback

  const handleCopy = () => {
    if (publishContent?.url) {
      navigator.clipboard
        .writeText(publishContent.url)
        .then(() => {
          toast({
            title: 'Link copied!',
            description: 'The URL has been copied to your clipboard.',
            status: 'success',
            duration: 3000,
            isClosable: true,
          });
        })
        .catch((err) => {
          console.error('Failed to copy:', err);
          toast({
            title: 'Copy failed',
            description: 'Unable to copy the URL.',
            status: 'error',
            duration: 3000,
            isClosable: true,
          });
        });
    }
  };

  return (
    <Modal closeOnOverlayClick={false} size="3xl" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent p="3rem">
        <ModalCloseButton />
        <Card variant="unstyled" border="1px solid #CFCFD0" p={2}>
          <Box h="197px">
            <Image objectFit="cover" w="100%" h="100%" src={publishContent?.thumbnail} alt="img" />
          </Box>
          <Stack mt={4} alignItems="center">
            <Text fontWeight={600}>{publishContent?.title}</Text>
            <Text fontWeight={600}>₦3,000</Text>
          </Stack>
        </Card>
        <Stack alignItems="center" mt="4rem">
          <Text as="h5">Funnel Published Successfully!</Text>
          <Text color="grey.500" my={4}>
            Copy and send this link to someone and they’ll be able to get your Funnel
          </Text>
          <Flex w="100%" p="8px" borderRadius={5} bgColor="grey.200" gap={2} alignItems="center" justifyContent="space-around">
            <Text>{publishContent?.url}</Text>
            <Icon
              fontSize="24px"
              cursor="pointer"
              icon="ph:copy-simple-light"
              onClick={handleCopy} // Add the click handler here
            />
          </Flex>
        </Stack>
        <Box mt={10}>
          <SharedButton
            text="Go to All Funnels"
            width="100%"
            height="40px"
            textColor="purple.200"
            bgColor="transparent"
            borderRadius="4px"
            btnExtras={{
              border: '1px solid purple',
              onClick: () => router(`/dashboard/funnels/#all-funnels`),
            }}
          />
        </Box>
      </ModalContent>
    </Modal>
  );
};

export default FunnelForm;

const CustomMultiSelect = ({ options, selectedValues, onChange, placeholder = 'Select...' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredOptions = options.filter((option) => option.label.title.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleSelect = (value) => {
    const newSelectedValues = selectedValues.includes(value) ? selectedValues.filter((v) => v !== value) : [...selectedValues, value];
    onChange(newSelectedValues);
  };

  return (
    <Box position="relative" ref={dropdownRef}>
      <Input placeholder={placeholder} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} onFocus={() => setIsOpen(true)} readOnly={!isOpen} />

      {isOpen && (
        <Box
          position="absolute"
          top="100%"
          left={0}
          right={0}
          mt={2}
          bg="white"
          border="1px solid"
          borderColor="gray.200"
          borderRadius="md"
          boxShadow="md"
          zIndex={1000}
          maxH="300px"
          overflowY="auto"
        >
          <Stack spacing={2} p={2}>
            {filteredOptions.map((option) => (
              <Flex key={option.value.id} align="center" p={2} _hover={{ bg: 'gray.50' }} cursor="pointer" onClick={() => handleSelect(option.value.id)}>
                {/* Thumbnail */}
                <Image
                  src={option.value.thumbnail || '/fallback-image.png'}
                  alt={option.label.title}
                  boxSize="40px"
                  objectFit="cover"
                  borderRadius="md"
                  mr={3}
                />

                {/* Title */}
                <Text flex={1} fontSize="sm" fontWeight="medium">
                  {option.label.title}
                </Text>

                {/* Right-aligned Checkbox */}
                <Box ml="auto">
                  <Checkbox isChecked={selectedValues.includes(option.value.id)} onChange={() => handleSelect(option.value.id)} colorScheme="purple" />
                </Box>
              </Flex>
            ))}
          </Stack>
        </Box>
      )}

      {/* Selected Items Badges */}
      <Box mt={2}>
        {selectedValues.map((value) => {
          const selectedItem = options.find((option) => option.value.id === value);
          return (
            <Badge key={value} colorScheme="purple" mr={2} mb={2}>
              {selectedItem?.label.title}
            </Badge>
          );
        })}
      </Box>
    </Box>
  );
};
