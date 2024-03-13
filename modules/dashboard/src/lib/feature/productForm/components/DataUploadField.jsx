/* eslint-disable @nx/enforce-module-boundaries */
import { Box, Card, Flex, FormHelperText, Image, Input, SimpleGrid, Text } from '@chakra-ui/react';
import { UploadExternalFiles } from '../../../ui/UploadExternalFiles';
import { Controller, useFormContext } from 'react-hook-form';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { SharedButton } from '@productize/ui';

export const DataUploadField = () => {
    const { state, hash } = useLocation();
    const [documents, setDocuments] = useState([]);
    const [showPreview, setShowPreview] = useState(false);
    const fileInputRef = useRef(null);
    const {
        control,
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

    const isModifiedData = useCallback(async () => {
        if (state && hash === `#product-details`) {
            setDocuments(state?.product?.data);
            setShowPreview(true);
        }
    }, [hash, state]);

    useEffect(() => {
        isModifiedData();
    }, [isModifiedData, state]);

    return (
        <div>
            <Heading action={handleInput} errors={errors} showPreview={showPreview} />
            <Controller
                name="data"
                control={control}
                render={({ field: { onChange, ...field } }) => (
                    <Input
                        display={`none`}
                        multiple
                        type="file"
                        onChange={(e) => {
                            onChange(e.target.files);
                            handleFileChange(e.target.files);
                        }}
                        ref={fileInputRef}
                    />
                )}
            />
            <Box display={showPreview ? `none` : `block`}>
                <UploadExternalFiles
                    icon="ri:file-upload-line"
                    fileType="all"
                    btnTitle="Upload File"
                    descText="File can be an image, video, document in various formats (jpg, png, mp4, pdf etc). min: 100mb"
                    showFiles={handleInput}
                />
            </Box>
            <SimpleGrid display={showPreview ? `grid` : `none`} my={4} columns={{ base: 1, md: 2 }} gap={4}>
                {documents?.map((file, index) => {
                    return <ProductContentDisplay key={index} file={file} />;
                })}
            </SimpleGrid>
        </div>
    );
};

const Heading = ({ action, errors, showPreview }) => (
    <>
        <Flex justifyContent="space-between" alignItems="flex-end">
            <Box>
                <Text color="purple.300" fontWeight={600}>
                    Product
                </Text>
                <FormHelperText fontSize={{ base: 'xs', md: 'sm' }} color="grey.400">
                    Upload the actual product you want to sell. Upload the product file
                </FormHelperText>
            </Box>
            <Box display={showPreview ? `block` : `none`}>
                <SharedButton
                    btnExtras={{
                        leftIcon: 'ri:file-upload-line',
                        border: '1px solid #6D5DD3',
                        onClick: action, // Handle file input click
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
        <Text className={`tiny-text`} color={`red.200`}>
            {errors?.data?.message}
        </Text>
    </>
);

const ProductContentDisplay = ({ file }) => {
    const { state } = useLocation();
    const [fileObject, setFileObject] = useState({});
    // const convertToFile = useUrlToBlobConverter();

    // useEffect(() => {
    //     const getData = async () => {
    //         if (state && file) {
    //             if (typeof file === "string") {
    //                 const file_MOD = await convertToFile(file);
    //                 setFileObject(file_MOD[0]);
    //             } else {
    //                 setFileObject({ name: file.name, type: file.type, size: file.size });
    //             }
    //         }
    //     };
    //     getData();
    // }, [convertToFile, file, state]);

    useEffect(() => {
        if (state && file) {
            if (typeof file === 'string') {
                const filename = file.substring(file.lastIndexOf('/') + 1);
                const filetype = file.substring(file.lastIndexOf('.') + 1);
                setFileObject({ name: filename, type: `document/${filetype}`, size: file?.size });
            } else {
                setFileObject({ name: file.name, type: file.type, size: file.size });
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
                        <Text className="small-text">{`${fileObject?.type}`}</Text>
                    </Box>
                ) : (
                    <Box>
                        <Text fontWeight={600}>{file?.name}</Text>
                        <Text className="small-text">{`${file?.type}.${Math.floor(file?.size / 1000)}`}kb</Text>
                    </Box>
                )}
            </Flex>
        </Card>
    );
};
