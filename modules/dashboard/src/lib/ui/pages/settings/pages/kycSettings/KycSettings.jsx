/* eslint-disable @nx/enforce-module-boundaries */
import { Box, Flex, FormControl, FormLabel, Grid, GridItem, Select, Text, Input, Image } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { SharedButton } from '@productize/ui';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { DashboardEmptyState } from '../../../../empty-states/DashboardEmptyState';
import { useForm } from 'react-hook-form';
import { useAxiosInstance } from '@productize/hooks';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '@productize/redux';

export const KycSettings = () => {
    const user = useSelector(selectCurrentUser);
    const [countries, setCountries] = useState([]);
    const [isFormCompleted, setFormCompleted] = useState(false);
    const [selectedFileName, setSelectedFileName] = useState('');
    const [preview, setPreview] = useState(null);
    const { query, isLoading } = useAxiosInstance({ MIME_TYPE: 'multipart/form-data' });

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
    } = useForm();

    const getCountry = async () => {
        const res = await axios.get('https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code');
        setCountries(res.data.countries);
    };

    useEffect(() => {
        getCountry();
        if (user.kyc_complete) {
            setFormCompleted(true);
        }
    }, [user.kyc_complete]);

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append('country', data.country);
        formData.append('document_type', data.document_type);
        formData.append('document_image', data.document_image[0]);

        try {
            const res = await query('post', `/users/kyc`, formData);
            if (res.status === 200) {
                setFormCompleted(true);
            }
        } catch (error) {
            console.error('Error submitting KYC form', error);
        }
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFileName(file.name);
            setValue('document_image', [file]);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    if (isFormCompleted) {
        return (
            <DashboardEmptyState
                hideCta
                showImage
                content={{
                    img: `https://res.cloudinary.com/kingsleysolomon/image/upload/v1716015379/productize/Frame_1171276417_lwjiib.png`,
                    desc: `You have completed your KYC verification successfully!`,
                }}
            />
        );
    }

    return (
        <Grid my={10} templateColumns="repeat(12, 1fr)" gap={6}>
            <GridItem colSpan={{ base: 12, md: 5 }}>
                <Text textAlign={{ base: `center`, md: `initial` }} color={`purple.300`} as={`h5`}>
                    Upload a proof of your Identity
                </Text>
                <Text textAlign={{ base: `center`, md: `initial` }} color={`grey.400`} fontSize={`sm`} mt={3}>
                    Productize requires a government valid ID
                </Text>
            </GridItem>
            <GridItem colSpan={{ base: 12, md: 7 }}>
                <FormControl as={`form`} maxW={500} mt={4} onSubmit={handleSubmit(onSubmit)}>
                    <Box>
                        <FormControl isInvalid={errors.country}>
                            <FormLabel color={`purple.300`} fontWeight={600}>
                                Country
                            </FormLabel>
                            <Select
                                bgColor={`grey.200`}
                                _focus={{ bgColor: `grey.300`, color: `grey.800` }}
                                _placeholder={{ color: `grey.400` }}
                                variant={`filled`}
                                size={`lg`}
                                placeholder="Select option"
                                {...register('country', { required: 'Country is required' })}
                            >
                                {countries?.map((country) => (
                                    <option key={country?.value} value={country?.value}>
                                        {country?.label}
                                    </option>
                                ))}
                            </Select>
                            {errors.country && (
                                <Text color="red.500" fontSize="xs">
                                    {errors.country.message}
                                </Text>
                            )}
                        </FormControl>

                        <FormControl my={5} isInvalid={errors.document_type}>
                            <FormLabel color={`purple.300`} fontWeight={600}>
                                Document Type
                            </FormLabel>
                            <Select
                                bgColor={`grey.200`}
                                _focus={{ bgColor: `grey.300`, color: `grey.800` }}
                                _placeholder={{ color: `grey.400` }}
                                variant={`filled`}
                                size={`lg`}
                                placeholder="Select document type"
                                {...register('document_type', { required: 'Document type is required' })}
                            >
                                {/* <option value="license">Driver’s License</option> */}
                                <option value="National Id card">National Id Card</option>
                                <option value="National Passport">National Passport</option>
                            </Select>
                            {errors.document_type && (
                                <Text color="red.500" fontSize="xs">
                                    {errors.document_type.message}
                                </Text>
                            )}
                        </FormControl>

                        <FormControl isInvalid={errors.document_image}>
                            <FormLabel color={`purple.300`} fontWeight={600}>
                                Document Image
                            </FormLabel>
                            <Flex
                                bgColor={`grey.200`}
                                _focus={{ bgColor: `grey.300`, color: `grey.800` }}
                                border={`1px dashed #6D5DD3`}
                                _placeholder={{ color: `grey.400` }}
                                alignItems={`center`}
                                gap={2}
                                p={3}
                                borderRadius={5}
                                color={`purple.200`}
                                onClick={() => document.getElementById('document-image-input').click()}
                                cursor="pointer"
                            >
                                <Icon icon="akar-icons:cloud-upload" />
                                <Text fontSize={`xs`}>{selectedFileName || 'Drag and drop here or browse files here'}</Text>
                                <Input
                                    id="document-image-input"
                                    display="none"
                                    type="file"
                                    accept="image/*"
                                    {...register('document_image')}
                                    onChange={handleFileChange}
                                />
                            </Flex>
                            {errors.document_image && (
                                <Text color="red.500" fontSize="xs">
                                    {errors.document_image.message}
                                </Text>
                            )}
                        </FormControl>

                        {preview && (
                            <Box my={4}>
                                <Image src={preview} alt="Document Preview" maxW="200px" />
                            </Box>
                        )}

                        <Flex my={5} gap={2}>
                            <SharedButton
                                btnExtras={{
                                    border: '1px solid #6D5DD3',
                                }}
                                text={'Cancel'}
                                width={'fit-content'}
                                height={'40px'}
                                bgColor={'transparent'}
                                textColor={'purple.200'}
                                borderRadius={'4px'}
                                fontSize={{ base: `sm`, md: `md` }}
                                onClick={() => reset()}
                            />
                            <SharedButton
                                btnExtras={{
                                    onClick: handleSubmit(onSubmit),
                                    isLoading: isLoading,
                                    loadingText: `processing...`,
                                }}
                                text={'Submit'}
                                width={'fit-content'}
                                height={'40px'}
                                bgColor={'purple.200'}
                                textColor={'grey.200'}
                                borderRadius={'4px'}
                                fontSize={{ base: `sm`, md: `md` }}
                                type="submit"
                            />
                        </Flex>
                    </Box>
                </FormControl>
            </GridItem>
        </Grid>
    );
};
