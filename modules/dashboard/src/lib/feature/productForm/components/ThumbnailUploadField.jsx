/* eslint-disable @nx/enforce-module-boundaries */
import { Box, Center, Flex, FormControl, FormHelperText, Input, Stack, Text } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { Field } from './FormFields';

export const ThumbnailUploadField = () => {
    const { state, hash } = useLocation();
    const {
        control,
        formState: { errors },
    } = useFormContext();
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
            setThumbnail(state?.product?.thumbnail || '');
        }
    }, [hash, state]);

    useEffect(() => {
        isModifiedData();
    }, [isModifiedData, state]);

    return (
        <FormControl isInvalid={!!errors.thumbnail}>
            <Heading errors={errors} />
            {errors.thumbnail && (
                <Text className="tiny-text" color="red.500">
                    {errors.thumbnail.message}
                </Text>
            )}
            <Center
                bgColor={`purple.100`}
                bgImg={thumbnail}
                bgPosition={`center`}
                bgSize={`cover`}
                bgRepeat={`no-repeat`}
                boxSize={`200px`}
                position="relative"
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
                                onChange(e.target.files[0]);
                                handleFileChange(e.target.files[0]);
                            }}
                            ref={fileInputRef}
                        />
                    )}
                />

                <Center color={`purple.200`} onClick={handleInput} fontSize={`2xl`} bgColor={`#00000020`} borderRadius={`100%`} boxSize={`3rem`}>
                    <Icon cursor="pointer" position="absolute" icon="solar:camera-bold" />
                </Center>
            </Center>
            {/* <Center mt={4} display={thumbnail ? 'block' : 'none'}>
                <SharedButton
                    btnExtras={{
                        leftIcon: `ri:file-upload-line`,
                        border: `1px solid #6D5DD3`,
                        onClick: handleInput,
                    }}
                    text={`Upload Photos`}
                    width={'fit-content'}
                    height={'48px'}
                    bgColor={'white'}
                    textColor={'purple.200'}
                    borderRadius={'4px'}
                    fontSize={{ base: `sm`, md: `md` }}
                />
            </Center> */}
        </FormControl>
    );
};

const Heading = ({ errors }) => {
    return (
        <Field label={`Thumbnail`}>
            <Stack mb={4}>
                <FormHelperText color={`grey.400`} m={0} fontSize={{ base: `xs`, md: `sm` }}>
                    This image will appear in the explore page, upload a square size of 2mb.
                </FormHelperText>
            </Stack>
        </Field>
    );
};
