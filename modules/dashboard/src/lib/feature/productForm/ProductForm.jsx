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
import { useCallback, useEffect, useState } from "react";
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
    const [ProductDecompressedFiles, setProductDecompressedFiles] = useState([]);
    const [CoverPhotosDecompressedFiles, setCoverPhotosDecompressedFiles] = useState([]);
    const [thumbnailDecompressedFile, setThumbnailDecompressedFile] = useState([]);
    const { state, hash } = useLocation();
    const {
        register,
        setValue,
        formState: { errors },
    } = useFormContext(); // retrieve all hook methods

    // Function to convert a remote URL to a File input object
    async function urlToFileInputObject(url) {
        try {
            const response = await fetch(url);
            const blob = await response.blob();
            const filename = url.substring(url.lastIndexOf("/") + 1);
            const file = new File([blob], filename, { type: blob.type });
            return file;
        } catch (error) {
            console.error("Error:", error);
            return null;
        }
    }

    const setAndGetFilesInLocalStorage = useCallback(
        async (file, filename) => {
            let urlBlobList;
            switch (filename) {
                case `product-data`:
                    urlBlobList = await Promise.all(
                        file?.map(async (url) => {
                            const res = await urlToFileInputObject(url);
                            return res;
                        })
                    );
                    setProductDecompressedFiles(urlBlobList);
                    break;
                case `cover-photos`:
                    urlBlobList = await Promise.all(
                        file?.map(async (url) => {
                            const res = await urlToFileInputObject(url);
                            return res;
                        })
                    );
                    setCoverPhotosDecompressedFiles(urlBlobList);
                    break;
                case `thumbnail`:
                    urlBlobList = await urlToFileInputObject(file);
                    setThumbnailDecompressedFile([urlBlobList]);
                    break;

                default:
                    return;
            }
        },
        [hash, state]
    );

    useEffect(() => {
        // console.log(state, hash);
        if (state && hash === `#product-details`) {
            setValue(`title`, state?.product?.title);
            setValue(`price`, state?.product?.price);
            setValue(`product_type`, state?.product?.product_type);
            setValue(`description`, state?.product?.description);
            setValue(`tags`, state?.product?.tags);
            // setAndGetFilesInLocalStorage(state?.product?.data, `product-data`);
            // setAndGetFilesInLocalStorage(state?.product?.cover_photos, `cover-photos`);
            // setAndGetFilesInLocalStorage(state?.product?.thumbnail, `thumbnail`);
        }
    }, [setAndGetFilesInLocalStorage, hash, setValue, state]);

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
                <DataUploadField showFiles={ProductDecompressedFiles} />
            </FormControl>

            {/* GRID FIVE */}
            <FormControl my={8} gap={4}>
                <Field error={errors.cover_photos}>
                    <CoverPhotoUploadField showFiles={CoverPhotosDecompressedFiles} />
                </Field>
            </FormControl>

            {/* GRID SIX */}
            <FormControl my={8} gap={4}>
                <Field error={errors.thumbnail}>
                    <ThumbnailUploadField showFiles={thumbnailDecompressedFile} />
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
                <Field error={errors.tags}>
                    <TagsField />
                </Field>
            </FormControl>
        </FormControl>
    );
};
