/* eslint-disable @nx/enforce-module-boundaries */
import { Box, Card, Flex, FormControl, FormHelperText, Image, Input, SimpleGrid, Text } from '@chakra-ui/react';
import { UploadExternalFiles } from '../../../ui/UploadExternalFiles';
import { Controller, useFormContext, useWatch } from 'react-hook-form';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { SharedButton } from '@productize/ui';
import { Field } from './FormFields';
import { Heading } from './Heading';

export const DataUploadField = () => {
    const { state, hash } = useLocation();
    const [documents, setDocuments] = useState([]);
    const [showPreview, setShowPreview] = useState(false);
    const fileInputRef = useRef(null);
    const {
        control,
        resetField,
        formState: { errors },
    } = useFormContext();

    const handleInput = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (files) => {
        if (files?.length) {
            const fileAsArray = Array.from(files);
            setDocuments(fileAsArray);
            setShowPreview(true);
        } else {
            setShowPreview(false);
            setDocuments([]);
            isModifiedData();
        }
    };

    const isModifiedData = useCallback(() => {
        if (state && hash === '#product-details') {
            setDocuments(state?.product?.resources || []);
            setShowPreview(true);
        }
    }, [hash, state]);

    useEffect(() => {
        isModifiedData();
    }, [isModifiedData, state]);

    const productType = useWatch({ control, name: 'product_type' });

    useEffect(() => {
        if (productType !== 'digital_product' && !state?.product) {
            resetField('data');
            setDocuments([]);
            setShowPreview(false);
        }
    }, [productType, resetField, state?.product]);

    return (
        <FormControl isInvalid={!!errors.data}>
            <HeadingGroup action={handleInput} errors={errors} showPreview={showPreview} />
            {errors.data && (
                <Text className="tiny-text" color="red.500">
                    {errors.data.message}
                </Text>
            )}
            <Controller
                name="data"
                control={control}
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
                    btnTitle="Upload File"
                    descText="File can be an image, video, document in various formats (jpg, png, mp4, pdf etc). min: 100mb"
                    showFiles={handleInput}
                />
            </Box>
            <SimpleGrid display={showPreview ? 'grid' : 'none'} my={4} columns={{ base: 1, md: 2 }} gap={4}>
                {documents.map((file, index) => (
                    <ProductContentDisplay key={index} file={file} />
                ))}
            </SimpleGrid>
        </FormControl>
    );
};

const HeadingGroup = ({ action, errors, showPreview }) => {
    return (
        <Flex mb={4} flexDir={{ base: `column`, sm: `row` }} justifyContent="space-between" alignItems="flex-end">
            <Box>
                <Heading title={`Digital Products`} tip={`Upload the actual product you want to sell. Upload the product file`} />
            </Box>
            <Box display={showPreview ? 'block' : 'none'}>
                <SharedButton
                    btnExtras={{
                        leftIcon: 'ri:file-upload-line',
                        border: '1px solid #6D5DD3',
                        onClick: action,
                        // disabled: state?.product,
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

const ProductContentDisplay = ({ file }) => {
    const { state } = useLocation();
    const [fileObject, setFileObject] = useState({});

    useEffect(() => {
        if (state && file) {
            if (typeof file === 'object') {
                setFileObject({ name: file?.name, type: file?.mime_type || file?.type, size: file?.size });
            }
        }
    }, [file, state]);

    return (
        <Card p={8} borderRadius="5px" bgColor="purple.100" variant="filled">
            <Flex gap={4} alignItems="center">
                <Box boxSize="72px">
                    <Image src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951012/productize/Layer_1_m6pvyg_yz7oz1.png" />
                </Box>
                {state ? (
                    <Box>
                        <Text fontWeight={600}>{fileObject?.name}</Text>
                        <Text className="small-text">{`${fileObject?.type} ${fileObject.size}`}</Text>
                    </Box>
                ) : (
                    <Box>
                        <Text fontWeight={600}>{file?.name}</Text>
                        <Text className="small-text">{`${file?.type}.${Math.floor(file?.size / 1000)}kb`}</Text>
                    </Box>
                )}
            </Flex>
        </Card>
    );
};
