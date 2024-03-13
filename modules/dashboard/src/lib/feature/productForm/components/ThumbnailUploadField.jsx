/* eslint-disable @nx/enforce-module-boundaries */
import { Box, Center, Flex, FormHelperText, Input, Text } from "@chakra-ui/react";
import { SharedButton } from "@productize/ui";
import { useCallback, useEffect, useRef, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { useLocation } from "react-router-dom";

export const ThumbnailUploadField = () => {
    const { state, hash } = useLocation();
    const { control } = useFormContext();
    const [thumbnail, setThumbnail] = useState(``);
    const fileInputRef = useRef(null);

    const handleInput = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (file) => {
        if (file) {
            setThumbnail(URL.createObjectURL(file));
        } else {
            setThumbnail(``);
            isModifiedData();
        }
    };

    const isModifiedData = useCallback(() => {
        if (state && hash) {
            setThumbnail(state?.product?.thumbnail);
        }
    }, [hash, state]);

    useEffect(() => {
        isModifiedData();
    }, [isModifiedData, state]);

    return (
        <div>
            <Heading />
            <Center mt={4} bgColor={`purple.100`} bgImg={thumbnail} bgPosition={`center`} bgSize={`contain`} bgRepeat={`no-repeat`} boxSize={`200px`}>
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
                                handleFileChange(e.target.files[0]);
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
