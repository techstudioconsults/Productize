/* eslint-disable @nx/enforce-module-boundaries */
import { Box, Card, Flex, FormHelperText, Image, Input, SimpleGrid, Text } from "@chakra-ui/react";
import { UploadExternalFiles } from "../../../ui/UploadExternalFiles";
import { SharedButton } from "@productize-v1.0.0/modules/shared/ui";
import { useCallback, useEffect, useRef, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { useLocation } from "react-router-dom";

export const CoverPhotoUploadField = ({ showFiles }) => {
    const { state } = useLocation();
    const { control } = useFormContext();
    const [coverPhotos, setCoverPhotos] = useState([]);
    const [showPreview, setShowPreview] = useState(false);
    const fileInputRef = useRef(null);

    const handleFileChange = (files) => {
        if (files?.length) {
            const fileAsArray = Array.from(files);
            setCoverPhotos(fileAsArray);
            setShowPreview(true);
        } else {
            setShowPreview(false);
            setCoverPhotos(null);
            isModifiedData();
        }
    };

    const isModifiedData = useCallback(() => {
        if (state) {
            setCoverPhotos(showFiles);
            setShowPreview(true);
        } else {
            return;
        }
    }, [showFiles, state]);

    const handleInput = () => {
        fileInputRef.current.click();
    };

     useEffect(() => {
         isModifiedData();
     }, [isModifiedData, state]);

    return (
        <div>
            <Heading action={handleInput} />
            <Controller
                name="cover_photos"
                control={control}
                defaultValue={``}
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
                    fileType={`all`}
                    btnTitle={"Upload Photos"}
                    descText={"File can be an image, video, document in various formats (jpg, png, mp4, pdf etc). min: 100mb"}
                    showFiles={handleInput}
                />
            </Box>
            <SimpleGrid display={showPreview ? `grid` : `none`} my={4} columns={{ base: 1, md: 3 }} gap={4}>
                {coverPhotos?.map((photo, index) => {
                    return <CoverPhotoThumbnailActiveContent key={index} file={photo} />;
                })}
            </SimpleGrid>
        </div>
    );
};

const Heading = ({ action }) => {
    return (
        <Flex justifyContent={`space-between`} alignItems={`flex-end`}>
            <Box>
                <Text color={`purple.300`} fontWeight={600}>
                    Cover photo
                </Text>
                <FormHelperText fontSize={{ base: `xs`, md: `sm` }} color={`grey.400`}>
                    Upload the photos to promote your product, a maximum of 4 photos. Images should be horizontal, at least 1280x720px, and 72 DPI (dots per
                    inch)
                </FormHelperText>
            </Box>
            <Box>
                <SharedButton
                    btnExtras={{
                        leftIcon: `ri:file-upload-line`,
                        border: `1px solid #6D5DD3`,
                        onClick: action,
                    }}
                    text={`Upload File`}
                    width={"fit-content"}
                    height={"48px"}
                    bgColor={"transparent"}
                    textColor={"purple.200"}
                    borderRadius={"4px"}
                    fontSize={{ base: `sm`, md: `md` }}
                />
            </Box>
        </Flex>
    );
};

const CoverPhotoThumbnailActiveContent = ({ file }) => {
    return (
        <Card maxW={`368px`} w={`100%`} h={`200px`} borderRadius={`5px`} variant={`outline`} border={`5px solid #F3F2FB`} overflow={`hidden`}>
            <Image w={`100%`} h={`100%`} objectFit={`contain`} src={URL.createObjectURL(file)} alt={`img`} />
        </Card>
    );
};