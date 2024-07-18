/* eslint-disable @nx/enforce-module-boundaries */
import { Box, Card, Flex, FormControl, FormHelperText, Image, Input, SimpleGrid, Text } from '@chakra-ui/react';
import { UploadExternalFiles } from '../../../ui/UploadExternalFiles';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { SharedButton } from '@productize/ui';
import { Field } from './FormFields';
import { Heading } from './Heading';

export const CoverPhotoUploadField = () => {
    const { state } = useLocation();
    const {
        control,
        formState: { errors },
    } = useFormContext();
    const [coverPhotos, setCoverPhotos] = useState([]);
    const [showPreview, setShowPreview] = useState(false);
    const fileInputRef = useRef(null);

    const handleInput = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (files) => {
        if (files?.length) {
            const fileAsArray = Array.from(files);
            setCoverPhotos(fileAsArray);
            setShowPreview(true);
        } else {
            setShowPreview(false);
            setCoverPhotos([]);
            isModifiedData();
        }
    };

    const isModifiedData = useCallback(() => {
        if (state) {
            setCoverPhotos(state?.product?.cover_photos || []);
            setShowPreview(true);
        }
    }, [state]);

    useEffect(() => {
        isModifiedData();
    }, [isModifiedData, state]);

    return (
        <FormControl isInvalid={!!errors.cover_photos}>
            <HeadingGroup action={handleInput} errors={errors} showPreview={showPreview} />
            {errors.cover_photos && (
                <Text className="tiny-text" color="red.500">
                    {errors.cover_photos.message}
                </Text>
            )}
            <Controller
                name="cover_photos"
                control={control}
                defaultValue={[]}
                render={({ field: { onChange, ...field } }) => (
                    <Input
                        display="none"
                        multiple
                        type="file"
                        onChange={(e) => {
                            const files = e.target.files;
                            onChange(files ? Array.from(files) : []);
                            handleFileChange(files);
                        }}
                        ref={fileInputRef}
                    />
                )}
            />
            <Box display={showPreview ? 'none' : 'block'}>
                <UploadExternalFiles
                    icon="ri:file-upload-line"
                    fileType="all"
                    btnTitle="Add Photos"
                    descText="File can be an image, video, document in various formats (jpg, png, mp4, pdf etc). min: 100mb"
                    showFiles={handleInput}
                />
            </Box>
            <SimpleGrid display={showPreview ? 'grid' : 'none'} my={4} columns={{ base: 1, md: 3 }} gap={4}>
                {coverPhotos.map((photo, index) => (
                    <CoverPhotoThumbnailActiveContent key={index} file={photo} />
                ))}
            </SimpleGrid>
        </FormControl>
    );
};

const HeadingGroup = ({ action, errors, showPreview }) => {
    return (
        <Flex mb={4} flexDir={{ base: `column`, sm: `row` }} justifyContent="space-between" alignItems="flex-end">
            <Box>
                <Heading title={`Cover Photos`} tip={`Upload the actual product you want to sell. Upload the product file`} />
            </Box>
            <Box display={showPreview ? 'block' : 'none'}>
                <SharedButton
                    btnExtras={{
                        leftIcon: 'ri:file-upload-line',
                        border: '1px solid #6D5DD3',
                        onClick: action,
                    }}
                    text="Upload File"
                    width="fit-content"
                    height="48px"
                    bgColor="transparent"
                    textColor="purple.200"
                    borderRadius="4px"
                    fontSize={{ base: 'sm', md: 'md' }}
                />
            </Box>
        </Flex>
    );
};

const CoverPhotoThumbnailActiveContent = ({ file }) => {
    const { state, hash } = useLocation();
    const [imgPreview, setImgPreview] = useState('');

    const getImagePreview = useCallback(() => {
        if (state && hash) {
            if (typeof file === 'string') {
                setImgPreview(file);
            } else {
                setImgPreview(URL.createObjectURL(file));
            }
        } else {
            setImgPreview(URL.createObjectURL(file));
        }
    }, [file, hash, state]);

    useEffect(() => {
        getImagePreview();
    }, [getImagePreview]);

    return (
        <Card maxW="368px" w="100%" h="200px" borderRadius="5px" variant="outline" border="5px solid #F3F2FB" overflow="hidden">
            <Image w="100%" h="100%" objectFit="contain" src={imgPreview} alt="img" />
        </Card>
    );
};
