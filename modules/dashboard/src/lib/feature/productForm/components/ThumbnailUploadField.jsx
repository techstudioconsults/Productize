/* eslint-disable @nx/enforce-module-boundaries */
import { Box, Center, Flex, FormHelperText, Input, Text } from "@chakra-ui/react";
import { SharedButton } from "@productize-v1.0.0/modules/shared/ui";
import { useCallback, useEffect, useRef, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { useLocation } from "react-router-dom";

export const ThumbnailUploadField = ({ showFiles }) => {
    const { state } = useLocation();
    const { control } = useFormContext();
    const [thumbnail, setThumbnail] = useState([]);
    const fileInputRef = useRef(null);

    const handleInput = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (files) => {
        if (files?.length) {
            const fileAsArray = Array.from(files);
            setThumbnail(fileAsArray);
        } else {
            setThumbnail(null);
            isModifiedData();
        }
    };

    const isModifiedData = useCallback(() => {
        if (state) {
            setThumbnail(showFiles);
        } else {
            return;
        }
    }, [showFiles, state]);


    useEffect(() => {
        isModifiedData();
    }, [isModifiedData, state]);


    return (
        <div>
            <Heading />
            <Center
                mt={4}
                bgColor={`purple.100`}
                bgImg={thumbnail?.map((thumbnail) => URL.createObjectURL(thumbnail))}
                bgPosition={`center`}
                bgSize={`contain`}
                bgRepeat={`no-repeat`}
                boxSize={`200px`}
            >
                <Controller
                    name="thumbnail"
                    control={control}
                    defaultValue={``}
                    render={({ field: { onChange, ...field } }) => (
                        <Input
                            display={`none`}
                            type="file"
                            onChange={(e) => {
                                onChange(e.target.files);
                                handleFileChange(e.target.files);
                            }}
                            ref={fileInputRef}
                        />
                    )}
                />

                <SharedButton
                    btnExtras={{
                        leftIcon: `ri:file-upload-line`,
                        border: `1px solid #6D5DD3`,
                        onClick: handleInput,
                    }}
                    text={`Upload Photos`}
                    width={"fit-content"}
                    height={"48px"}
                    bgColor={"white"}
                    textColor={"purple.200"}
                    borderRadius={"4px"}
                    fontSize={{ base: `sm`, md: `md` }}
                />
            </Center>
        </div>
    );
};

const Heading = () => {
    return (
        <Flex justifyContent={`space-between`} alignItems={`flex-end`}>
            <Box>
                <Text color={`purple.300`} fontWeight={600}>
                    Thumbnail
                </Text>
                <FormHelperText color={`grey.400`} fontSize={{ base: `xs`, md: `sm` }}>
                    This image will appear in the explore page, upload a square size of 2mb.
                </FormHelperText>
            </Box>
        </Flex>
    );
};
