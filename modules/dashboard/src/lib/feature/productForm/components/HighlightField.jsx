/* eslint-disable @nx/enforce-module-boundaries */
import { useEffect, useState } from 'react';
import { Box, Flex, FormControl, FormHelperText, Input, InputGroup, InputRightElement, Stack, Text } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { SharedButton } from '@productize/ui';
import { Icon } from '@iconify/react';
import { Heading } from './Heading';

export const HighLightField = () => {
    const { state } = useLocation();
    const {
        register,
        setValue,
        formState: { errors },
    } = useFormContext();
    const [highlights, setHighlights] = useState(['']);

    useEffect(() => {
        if (state?.product?.highlights) {
            const initialHighlights = state.product.highlights.map((highlight) => highlight || '');
            setHighlights(initialHighlights);
            setValue('highlights', initialHighlights);
        }
    }, [setValue, state]);

    const addHighlight = () => {
        setHighlights([...highlights, '']);
    };

    const removeHighlight = (indexToRemove) => {
        const newHighlights = highlights.filter((_, index) => index !== indexToRemove);
        setHighlights(newHighlights);
        setValue('highlights', newHighlights);
    };

    return (
        <FormControl>
            <Heading title={`Highlights`} tip={`Write key features that highlight your product.`} />
            <InputGroup size="lg">
                <Stack w="100%">
                    {highlights.map((highlight, index) => (
                        <Box key={index}>
                            <InputGroup>
                                <Input
                                    pr="4.5rem"
                                    bgColor="gray.200"
                                    _focus={{ bgColor: 'gray.200', color: 'gray.800' }}
                                    _placeholder={{ color: 'gray.400' }}
                                    placeholder="What do you want to hightlight in your product?"
                                    variant="filled"
                                    value={highlight}
                                    {...register(`highlights.${index}`, {
                                        onChange: (e) => {
                                            const newHighlights = [...highlights];
                                            newHighlights[index] = e.target.value;
                                            setHighlights(newHighlights);
                                        },
                                    })}
                                />
                                {index !== 0 && (
                                    <InputRightElement _hover={{ cursor: 'pointer' }}>
                                        <Icon onClick={() => removeHighlight(index)} fontSize="1.2rem" color="#6D5DD3" icon="ic:baseline-cancel" />
                                    </InputRightElement>
                                )}
                            </InputGroup>
                            {errors.highlights && errors.highlights[index] && (
                                <Text className="tiny-text" color="red.200">
                                    {errors.highlights[index].message}
                                </Text>
                            )}
                        </Box>
                    ))}
                </Stack>
            </InputGroup>
            <Box mt={5}>
                <SharedButton
                    text="Add more highlight"
                    type="button"
                    width="100%"
                    height="48px"
                    bgColor="transparent"
                    textColor="purple.200"
                    borderRadius="4px"
                    fontSize={{ base: 'sm', md: 'md' }}
                    btnExtras={{
                        border: '1px solid #6D5DD3',
                        onClick: addHighlight,
                    }}
                />
            </Box>
            <input type="submit" style={{ display: 'none' }} />
        </FormControl>
    );
};
