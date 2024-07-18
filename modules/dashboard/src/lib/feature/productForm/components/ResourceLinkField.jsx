/* eslint-disable @nx/enforce-module-boundaries */
import { useEffect, useState } from 'react';
import { Box, Flex, FormControl, FormHelperText, Input, InputGroup, InputRightElement, Stack, Text } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { SharedButton } from '@productize/ui';
import { Icon } from '@iconify/react';

export const ResourceLinkField = () => {
    const { state } = useLocation();
    const {
        register,
        setValue,
        formState: { errors },
    } = useFormContext();
    const [resourceLinks, setResourceLinks] = useState(['']);

    useEffect(() => {
        if (state?.product?.resourcelink) {
            const initialResourceLinks = state.product.resourcelink.map((link) => link || '');
            setResourceLinks(initialResourceLinks);
            setValue('resourcelink', initialResourceLinks);
        }
    }, [setValue, state]);

    const addResourceLink = () => {
        setResourceLinks([...resourceLinks, '']);
    };

    const removeResourceLink = (indexToRemove) => {
        const newResourceLinks = resourceLinks.filter((_, index) => index !== indexToRemove);
        setResourceLinks(newResourceLinks);
        setValue('resourcelink', newResourceLinks);
    };

    return (
        <FormControl>
            <Heading />
            <InputGroup>
                <Stack w="100%">
                    {resourceLinks.map((link, index) => (
                        <Box key={index}>
                            <InputGroup>
                                <Input
                                    pr="4.5rem"
                                    bgColor="gray.200"
                                    _focus={{ bgColor: 'gray.200', color: 'gray.800' }}
                                    _placeholder={{ color: 'gray.400' }}
                                    placeholder="Enter your preferred resource link"
                                    variant="filled"
                                    value={link}
                                    {...register(`resourcelink.${index}`, {
                                        onChange: (e) => {
                                            const newResourceLinks = [...resourceLinks];
                                            newResourceLinks[index] = e.target.value;
                                            setResourceLinks(newResourceLinks);
                                            setValue('resourcelink', newResourceLinks);
                                        },
                                    })}
                                />
                                {index !== 0 && (
                                    <InputRightElement _hover={{ cursor: 'pointer' }}>
                                        <Icon onClick={() => removeResourceLink(index)} fontSize="1.2rem" color="#6D5DD3" icon="ic:baseline-cancel" />
                                    </InputRightElement>
                                )}
                            </InputGroup>
                            {errors.resourcelink && errors.resourcelink[index] && (
                                <Text className="tiny-text" color="red.200">
                                    {errors.resourcelink[index].message}
                                </Text>
                            )}
                        </Box>
                    ))}
                </Stack>
            </InputGroup>
            <Box mt={5}>
                <SharedButton
                    text="Add more Resource Links"
                    type="button"
                    width="100%"
                    height="48px"
                    bgColor="transparent"
                    textColor="purple.200"
                    borderRadius="4px"
                    fontSize={{ base: 'sm', md: 'md' }}
                    btnExtras={{
                        border: '1px solid #6D5DD3',
                        onClick: addResourceLink,
                    }}
                />
            </Box>
            <input type="submit" style={{ display: 'none' }} />
        </FormControl>
    );
};

const Heading = () => {
    return (
        <Flex mb={4} justifyContent="space-between" alignItems="flex-end">
            <Box>
                <Text color="purple.300" fontWeight={600}>
                    Resource Links
                </Text>
                <FormHelperText color="gray.400" fontSize={{ base: 'xs', md: 'sm' }}>
                    Upload the links to your videos hosted on Youtube or Vimeo
                </FormHelperText>
            </Box>
        </Flex>
    );
};
