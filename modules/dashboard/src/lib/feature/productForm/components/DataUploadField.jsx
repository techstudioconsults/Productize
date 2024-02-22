/* eslint-disable @nx/enforce-module-boundaries */
import { Box, Card, Flex, FormHelperText, Image, Input, SimpleGrid, Text } from "@chakra-ui/react";
import { UploadExternalFiles } from "../../../ui/UploadExternalFiles";
import { SharedButton } from "@productize-v1.0.0/modules/shared/ui";
import { Controller, useFormContext } from "react-hook-form";
import { useCallback, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

export const DataUploadField = ({ showFiles }) => {
    const { state, hash } = useLocation();
    const {
        control,
        formState: { errors },
    } = useFormContext();
    const [documents, setDocuments] = useState([]);
    const [showPreview, setShowPreview] = useState(false);
    const fileInputRef = useRef(null);

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
        }
    };

    async function urlToBlob(url) {
        const response = await axios.get(url);
        const blob = await response.data;
        return blob;
    }

    // function arrayToFileList(files) {
    //     const dataTransfer = new DataTransfer();
    //     files.forEach((file) => {
    //         dataTransfer.items.add(file);
    //     });
    //     return dataTransfer.files;
    // }

    const convertToFileObject = useCallback(async (files) => {
        const blobPromises = files?.map(async (url) => {
            const blob = await urlToBlob(url);
            return new File([blob], url.substring(url.lastIndexOf("/") + 1), { type: blob.type });
        });

        const blobFiles = await Promise.all(blobPromises);
        return blobFiles;
    }, []);

    useEffect(() => {
        if (state && hash === "#product-details") {
            const fetchData = async () => {
                const fileObject = await convertToFileObject(state?.product?.data);
                console.log(fileObject);
                setDocuments(fileObject);
                setShowPreview(true);
            };

            fetchData();
        }
    }, [convertToFileObject, hash, state]);

    const documentList = documents?.map((file, index) => {
        return <ProductContentDisplay key={index} file={file} />;
    });

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
                {documentList}
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
                <FormHelperText fontSize={{ base: "xs", md: "sm" }} color="grey.400">
                    Upload the actual product you want to sell. Upload the product file
                </FormHelperText>
            </Box>
            <Box display={showPreview ? `block` : `none`}>
                <SharedButton
                    btnExtras={{
                        leftIcon: "ri:file-upload-line",
                        border: "1px solid #6D5DD3",
                        onClick: action, // Handle file input click
                    }}
                    text="Upload File"
                    width="fit-content"
                    height="48px"
                    bgColor="transparent"
                    textColor="purple.200"
                    borderRadius="4px"
                    fontSize={{ base: "sm", md: "md" }}
                />
            </Box>
        </Flex>
        <Text className={`tiny-text`} color={`red.200`}>
            {errors?.data?.message}
        </Text>
    </>
);

const ProductContentDisplay = ({ file }) => {
    console.log("file:", file); // Add this line
    return (
        <Card p={8} borderRadius="5px" bgColor="purple.100" variant="filled">
            <Flex gap={4} alignItems="center">
                <Box boxSize="72px">
                    <Image src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951012/productize/Layer_1_m6pvyg_yz7oz1.png" />
                </Box>
                <Box>
                    <Text fontWeight={600}>{file?.name}</Text>
                    <Text className="small-text">{`${file?.type}.${Math.floor(file?.size / 1000)}`}kb</Text>
                </Box>
            </Flex>
        </Card>
    );
};
