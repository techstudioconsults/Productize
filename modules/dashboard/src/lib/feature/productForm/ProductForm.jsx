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
    const [highlight, setHighlights] = useState([]);
    const { state, hash } = useLocation();
    const {
        register,
        setValue,
        formState: { errors },
    } = useFormContext(); // retrieve all hook methods

    useEffect(() => {
        if (state && hash === "#product-details") {
            console.log(state);
            setValue("title", state?.product?.title);
            setValue("price", state?.product?.price);
            setValue("product_type", state?.product?.product_type);
            setValue("description", state?.product?.description);
            setValue("tags", state?.product?.tags);

            setHighlights(state?.product?.highlights);
            state?.product?.highlights?.forEach((highlight, index) => {
                setValue(`highlights[${index}]`, highlight);
            });

            // convertToFileObject(state?.product?.data || [], "product-data");
            // convertToFileObject(state?.product?.cover_photos || [], "cover-photos");
            // convertToFileObject(state?.product?.thumbnail ? [state?.product?.thumbnail] : [], "thumbnail");
        }
    }, [hash, setValue, state]);

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
                    <HighLightField showFiles={highlight} />
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
