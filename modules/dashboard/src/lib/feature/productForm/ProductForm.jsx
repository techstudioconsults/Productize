/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @nx/enforce-module-boundaries */
import { FormControl, Input, SimpleGrid } from '@chakra-ui/react';
import { Field } from './components/FormFields';
import { useFormContext } from 'react-hook-form';
import RadioCards from './components/RadioCards';

import { DataUploadField } from './components/DataUploadField';
import { CoverPhotoUploadField } from './components/CoverPhotoUploadField';
import RichTextField from './components/RichTextField';
import { ThumbnailUploadField } from './components/ThumbnailUploadField';
import { HighLightField } from './components/HighlightField';
import TagsField from './components/TagsField';

const globalFieldStyle = {
    bgColor: `grey.200`,
    _focus: {
        bgColor: `grey.300`,
        color: `grey.800`,
    },
    _placeholder: {
        color: `grey.400`,
    },
};

export const ProductForm = () => {
    const { register } = useFormContext(); // retrieve all hook methods

    return (
        <FormControl>
            {/* GRID ONE*/}
            <FormControl as={SimpleGrid} my={8} gap={4} columns={{ base: 1, sm: 2 }}>
                {/* product title */}
                <Field label="Product Title">
                    <Input placeholder="Name of product" variant={`filled`} size={`lg`} sx={globalFieldStyle} {...register(`title`)} type="text" id="title" />
                </Field>
                {/* product price */}
                <Field label="Price">
                    <Input placeholder="0" variant={`filled`} size={`lg`} sx={globalFieldStyle} {...register(`price`)} type="number" id="price" />
                </Field>
            </FormControl>

            {/* GRID TWO */}
            <FormControl>
                <RadioCards />
            </FormControl>

            {/* GRID THREE */}
            <FormControl h={`21rem`} overflow={`hidden`}>
                <RichTextField />
            </FormControl>

            {/* GRID FOUR */}
            <FormControl my={8} gap={4}>
                <DataUploadField />
            </FormControl>

            {/* GRID FIVE */}
            <FormControl my={8} gap={4}>
                <Field>
                    <CoverPhotoUploadField />
                </Field>
            </FormControl>

            {/* GRID SIX */}
            <FormControl my={8} gap={4}>
                <Field>
                    <ThumbnailUploadField />
                </Field>
            </FormControl>

            {/* GRID SEVEN */}
            <FormControl as={SimpleGrid} my={8} gap={4} columns={{ base: 1, sm: 2 }}>
                <Field>
                    <HighLightField />
                </Field>
            </FormControl>

            {/* GRID EIGHT */}
            <FormControl as={SimpleGrid} my={8} gap={4} columns={{ base: 1, sm: 2 }}>
                <Field>
                    <TagsField />
                </Field>
            </FormControl>
        </FormControl>
    );
};
