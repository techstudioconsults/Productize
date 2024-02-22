/* eslint-disable @nx/enforce-module-boundaries */
import { useCallback, useEffect, useState } from "react";
import { Box, Flex, FormHelperText, Input, InputGroup, Stack, Text } from "@chakra-ui/react";
import { SharedButton } from "@productize-v1.0.0/modules/shared/ui";
import { useFormContext } from "react-hook-form";
import { useLocation } from "react-router-dom";

export const HighLightField = ({ showFiles }) => {
    const { state } = useLocation();
    const {
        register,
        formState: { errors },
    } = useFormContext();
    const [highlights, setHighlights] = useState([]); // State to store highlights

    const addHighlight = () => {
        setHighlights([...highlights, ""]); // Add an empty highlight input field
    };

    const isModifiedData = useCallback(() => {
        if (state) {
            setHighlights(showFiles);
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
            <InputGroup size="lg">
                <Stack w={`100%`} mt={4} gap={4}>
                    {highlights.map((highlight, index) => (
                        <Box key={index}>
                            <Input
                                pr="4.5rem"
                                bgColor={`grey.200`}
                                _focus={{ bgColor: `grey.200`, color: `grey.800` }}
                                _placeholder={{ color: `grey.400` }}
                                placeholder="Enter Information"
                                variant={`filled`}
                                {...register(`highlights[${index}]`)} // Register each input field
                            />
                            {errors.highlights && errors.highlights?.[index] && (
                                <Text className={`tiny-text`} color={`red.200`}>
                                    {errors.highlights?.[index].message}
                                </Text>
                            )}
                        </Box>
                    ))}
                </Stack>
            </InputGroup>
            <Box mt={5}>
                <SharedButton
                    text={"Add more highlight "}
                    width={"100%"}
                    height={"48px"}
                    bgColor={"transparent"}
                    textColor={"purple.200"}
                    borderRadius={"4px"}
                    fontSize={{ base: `sm`, md: `md` }}
                    btnExtras={{
                        border: `1px solid #6D5DD3`,
                        onClick: addHighlight, // Call addHighlight function on button click
                    }}
                />
            </Box>
        </div>
    );
};

const Heading = () => {
    return (
        <Flex mb={4} justifyContent={`space-between`} alignItems={`flex-end`}>
            <Box>
                <Text color={`purple.300`} fontWeight={600}>
                    Highlights
                </Text>
                <FormHelperText color={`grey.400`} fontSize={{ base: `xs`, md: `sm` }}>
                    Write key features that highlight your product.
                </FormHelperText>
            </Box>
        </Flex>
    );
};
