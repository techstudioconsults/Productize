/* eslint-disable @nx/enforce-module-boundaries */
import React, { useRef } from 'react';
import { Box, Center, Flex, FormControl, FormLabel, Image, Input, SimpleGrid, Text } from '@chakra-ui/react';
import { SharedButton, ToastFeedback, useToastAction } from '@productize/ui';
import { Controller, useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { useUpdateFunnel } from '../premium/AllProducts/service';

export const FunnelSettings = () => {
  const logoInputRef = useRef(null);
  const imgRef = useRef(null);
  const { state } = useLocation();
  const { isLoading, updateFunnel } = useUpdateFunnel();
  const { toast, toastIdRef, close } = useToastAction();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    criteriaMode: 'all',
    mode: 'onChange',
    defaultValues: {
      title: state?.template?.title || '',
      logo: state?.template?.thumbnail || null,
    },
  });

  const handleImagePreview = (files) => {
    if (files && imgRef.current) {
      const file = files[0];
      if (file) {
        imgRef.current.src = URL.createObjectURL(file);
      }
    }
  };

  const handleSave = async (data) => {
    try {
      await updateFunnel(undefined, data.title, 'draft', data.logo, state?.template?.id);

      toastIdRef.current = toast({
        position: 'top',
        render: () => <ToastFeedback btnColor="purple.200" message="Funnel edited successfully" title="Funnel Update" handleClose={close} />,
      });

      navigate('/dashboard/funnels#all-funnels');
    } catch (err) {
      console.error('Error updating funnel:', err);
    }
  };

  return (
    <Box textAlign="center">
      <Text mb={4} as="h5" fontSize={{ base: '18px', md: '24px' }} fontWeight="bold">
        Edit {state?.template?.title} Funnel
      </Text>
      <Text mb={6} fontSize="16px" color="gray.600">
        Modify the {state?.template?.title} template form below to complete your funnel edit.
      </Text>

      <SimpleGrid as="form" onSubmit={handleSubmit(handleSave)} columns={1} gap={6} mt={8}>
        {/* Title Input */}
        <FormControl isInvalid={!!errors.title}>
          <FormLabel color="purple.300" fontWeight="600">
            Title
          </FormLabel>
          <Input
            {...register('title', { required: 'Title is required' })}
            bg="gray.100"
            _focus={{ bg: 'gray.200', borderColor: 'purple.300' }}
            _placeholder={{ color: 'gray.400' }}
            placeholder="Funnel Name"
            size="lg"
            aria-invalid={!!errors.title}
          />
          <Text color="red.500" fontSize="sm">
            {errors.title?.message}
          </Text>
        </FormControl>

        {/* Thumbnail Input */}
        <FormControl isInvalid={!!errors.logo}>
          <FormLabel color="purple.300" fontWeight="600">
            Thumbnail
            <Text fontSize="14px" color="gray.500">
              Upload a square image (max size: 2MB). This image will appear on the explore page.
            </Text>
          </FormLabel>
          <Box>
            <Center
              borderRadius="8px"
              bg="purple.50"
              h="200px"
              overflow="hidden"
              position="relative"
              border="1px solid"
              borderColor={errors.logo ? 'red.300' : 'gray.300'}
            >
              <Image ref={imgRef} objectFit="contain" src={state?.template?.thumbnail || ''} alt="Thumbnail Preview" />
              <Box position="absolute">
                <SharedButton
                  text="Upload Image"
                  btnExtras={{
                    leftIcon: 'solar:camera-bold',
                    onClick: () => logoInputRef.current?.click(),
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
                rules={{ required: 'Thumbnail is required' }}
                render={({ field }) => (
                  <Input
                    hidden
                    ref={logoInputRef}
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const files = e.target.files;
                      field.onChange(files?.[0]);
                      handleImagePreview(files);
                    }}
                  />
                )}
              />
            </Center>
            <Text color="red.500" fontSize="sm">
              {errors.logo?.message}
            </Text>
          </Box>
        </FormControl>

        {/* Action Buttons */}
        <Flex gap={4}>
          <SharedButton
            text="Cancel"
            width="100%"
            height="40px"
            bgColor="transparent"
            textColor="red.500"
            borderRadius="4px"
            btnExtras={{
              border: '1px solid red',
              onClick: () => navigate('/dashboard/funnels#all-funnels'),
            }}
          />
          <SharedButton
            text="Save Edit & Continue"
            width="100%"
            height="40px"
            bgColor="purple.200"
            textColor="white"
            borderRadius="4px"
            btnExtras={{ type: 'submit', isLoading }}
          />
        </Flex>
      </SimpleGrid>
    </Box>
  );
};
