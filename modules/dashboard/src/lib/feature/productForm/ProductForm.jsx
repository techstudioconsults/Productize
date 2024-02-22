/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @nx/enforce-module-boundaries */
import { FormControl, Input, SimpleGrid } from "@chakra-ui/react";
import { Field } from "./components/FormFields";
import { useFormContext } from "react-hook-form";
import RadioCards from "./components/RadioCards";

import { DataUploadField } from "./components/DataUploadField";
import { CoverPhotoUploadField } from "./components/CoverPhotoUploadField";
import RichTextField from "./components/RichTextField";
import { ThumbnailUploadField } from "./components/ThumbnailUploadField";
import { HighLightField } from "./components/HighlightField";
import TagsField from "./components/TagsField";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useUrlToBlobConverter } from "@productize-v1.0.0/modules/shared/hooks";

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
    const {
        register,
        formState: { errors },
    } = useFormContext(); // retrieve all hook methods

    return (
        <FormControl>
            {/* GRID ONE*/}
            <FormControl as={SimpleGrid} my={8} gap={4} columns={{ base: 1, sm: 2 }}>
                {/* product title */}
                <Field label="Product Title" error={errors.title}>
                    <Input placeholder="Name of product" variant={`filled`} size={`lg`} sx={globalFieldStyle} {...register(`title`)} type="text" id="title" />
                </Field>
                {/* product price */}
                <Field label="Price" error={errors.price}>
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
                <Field error={errors.cover_photos}>
                    <CoverPhotoUploadField />
                </Field>
            </FormControl>

            {/* GRID SIX */}
            <FormControl my={8} gap={4}>
                <Field error={errors.thumbnail}>
                    <ThumbnailUploadField />
                </Field>
            </FormControl>

            {/* GRID SEVEN */}
            <FormControl as={SimpleGrid} my={8} gap={4} columns={{ base: 1, sm: 2 }}>
                <Field>
                    <HighLightField showFiles={[]} />
                </Field>
            </FormControl>

            {/* GRID EIGHT */}
            <FormControl as={SimpleGrid} my={8} gap={4} columns={{ base: 1, sm: 2 }}>
                <Field error={errors.tags}>
                    <TagsField />
                </Field>
            </FormControl>
        </FormControl>
    );
};
