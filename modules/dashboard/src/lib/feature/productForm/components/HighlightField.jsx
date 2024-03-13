import { useEffect, useState } from 'react';
import { Box, Flex, FormHelperText, Input, InputGroup, InputRightElement, Stack, Text } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form'; // Import useForm
import { useLocation } from 'react-router-dom';
import { SharedButton } from '@productize/ui';
import { Icon } from '@iconify/react';

export const HighLightField = () => {
    const { state } = useLocation();
    const {
        register,
        setValue,
        formState: { errors },
    } = useFormContext(); // Use useForm
    const [highlights, setHighlights] = useState(['']);

    useEffect(() => {
        if (state) {
            setValue('highlights', state?.product?.highlights);
            setHighlights(state.product.highlights?.map((highlight) => highlight.text || '')); // Set empty string if highlight text is falsy
        }
    }, [setValue, state]);

    const addHighlight = () => {
        setHighlights([...highlights, '']);
    };

    const removeHighlight = (indexToRemove) => {
        const newHighlights = [...highlights];
        newHighlights.splice(indexToRemove, 1);
        setHighlights(newHighlights);
        setValue('highlights', newHighlights.filter(Boolean)); // Update form value with non-empty highlights
    };

    return (
        <>
            <Heading />
            <InputGroup size="lg">
                <Stack w={`100%`} mt={4} gap={4}>
                    {highlights?.map((highlight, index) => (
                        <Box key={index}>
                            <InputGroup>
                                <Input
                                    pr="4.5rem"
                                    bgColor={`grey.200`}
                                    _focus={{ bgColor: `grey.200`, color: `grey.800` }}
                                    _placeholder={{ color: `grey.400` }}
                                    placeholder="Enter Information"
                                    variant={`filled`}
                                    defaultValue={highlight} // Set default value from state
                                    {...register(`highlights.${index}`)} // Use dot notation for array fields
                                />
                                <InputRightElement _hover={{ cursor: `pointer` }}>
                                    <Icon onClick={() => removeHighlight(index)} fontSize={`1.2rem`} color={`#6D5DD3`} icon={`ic:baseline-cancel`} />
                                </InputRightElement>
                            </InputGroup>
                            {errors.highlights && errors.highlights[index] && (
                                <Text className={`tiny-text`} color={`red.200`}>
                                    {errors.highlights[index].message}
                                </Text>
                            )}
                        </Box>
                    ))}
                </Stack>
            </InputGroup>
            <Box mt={5}>
                <SharedButton
                    text={'Add more highlight '}
                    type="button" // Set type to "button"
                    width={'100%'}
                    height={'48px'}
                    bgColor={'transparent'}
                    textColor={'purple.200'}
                    borderRadius={'4px'}
                    fontSize={{ base: `sm`, md: `md` }}
                    btnExtras={{
                        border: `1px solid #6D5DD3`,
                        onClick: addHighlight,
                    }}
                />
            </Box>
            <input type="submit" style={{ display: 'none' }} /> {/* Hidden submit button */}
        </>
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
