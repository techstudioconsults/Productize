/* eslint-disable no-restricted-globals */
import {
    Box,
    Card,
    Center,
    Flex,
    FormControl,
    FormHelperText,
    FormLabel,
    Image,
    Input,
    InputGroup,
    InputRightElement,
    SimpleGrid,
    Stack,
    Text,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { Controller, useFormContext } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { TagPicker } from "rsuite";
import RadioCards from "./components/RadioCards";
import { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { SharedButton } from "@productize-v1.0.0/modules/shared/ui";
// eslint-disable-next-line @nx/enforce-module-boundaries
import { ErrorMessage } from "@hookform/error-message";
import { UploadExternalFiles } from "../../ui/UploadExternalFiles";
import { useSelector } from "react-redux";
import { selectTags } from "@productize-v1.0.0/modules/shared/redux";

const quillModules = {
    toolbar: [
        ["bold", "italic", "underline", "strike"], // toggled buttons
        ["blockquote", "code-block"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image"],
        [{ align: [] }],
        ["clean"], // remove formatting button
    ],
};

export const SetNewProductForm = () => {
    const { state, hash } = useLocation();
    const tags = useSelector(selectTags);
    const location = useLocation();
    const [dataPreview, setDataPreview] = useState([]);
    const [coverPhotoPreview, setCoverPhotoPreview] = useState([]);
    const [thumbnailPreview, setThumbnailPreview] = useState(new Blob());
    const {
        register,
        control,
        setValue,
        formState: { errors },
    } = useFormContext(); // retrieve all hook methods

    const tagData = tags.map((item) => ({ label: item, value: item }));

    const showFiles = (inputId) => {
        document.getElementById(inputId)?.click();
    };

    const handleChange = (e) => {
        switch (e.target?.id) {
            case `dataFileInput`:
                setDataPreview(Array.from(e.target?.files));
                console.log(e.target.files);
                break;
            case `coverPhotosInput`:
                setCoverPhotoPreview(Array.from(e.target?.files));
                break;
            case `thumbnailInput`:
                setThumbnailPreview(e.target?.files?.[0]);
                break;
            default:
                break;
        }
    };

    // Function to convert URL to File object
    const urlToFile = async (url) => {
        const response = await fetch(url);
        const blob = await response.blob();
        return new File([blob], "", { type: blob.type });
    };

    // Function to convert an array of URLs to File objects and create a FileList object
    const createFileList = useCallback(async (urls) => {
        if (!urls || !Array.isArray(urls)) {
            // console.error("Invalid or undefined URLs array");
            return [];
        }

        try {
            const files = await Promise?.all(urls.map((url) => urlToFile(url)));
            return files;
        } catch (error) {
            console.error(error);
            return [];
        }
    }, []);

    useEffect(() => {
        createFileList(state?.product?.data).then((files) => {
            setDataPreview(files);
        });
        createFileList(state?.product?.cover_photos).then((files) => {
            setCoverPhotoPreview(files);
        });
        urlToFile(state?.product?.thumbnail).then((file) => {
            setThumbnailPreview(file);
        });
    }, [createFileList, state?.product?.cover_photos, state?.product?.data, state?.product?.thumbnail]);

    useEffect(() => {
        if (state && hash === `#product-details`) {
            setValue(`title`, state?.product?.title);
            setValue(`price`, state?.product?.price);
            setValue(`product_type`, state?.product?.product_type);
            setValue(`description`, state?.product?.description);
            setValue(`data`, dataPreview);
            setValue(`cover_photos`, coverPhotoPreview);
            setValue(`thumbnail`, thumbnailPreview);
            setValue(`highlight_1`, state?.product?.highlights[0]);
            setValue(`highlight_2`, state?.product?.highlights[1]);
            setValue(`highlight_3`, state?.product?.highlights[2]);
            setValue(`tags`, state?.product?.tags);
        }
    }, [setValue, state, location, dataPreview, coverPhotoPreview, hash, thumbnailPreview]);

    return (
        <FormControl>
            {/* grid 1 */}
            <SimpleGrid my={8} gap={4} columns={2}>
                <FormControl>
                    <FormLabel color={`purple.300`} fontWeight={600}>
                        Product Title
                    </FormLabel>
                    <Input
                        // required
                        bgColor={`grey.200`}
                        _focus={{ bgColor: `grey.300`, color: `grey.800` }}
                        _placeholder={{ color: `grey.400` }}
                        placeholder="Name of product"
                        variant={`filled`}
                        size={`lg`}
                        {...register(`title`)}
                    />
                    <Text className={`tiny-text`} color={`red.200`}>
                        {errors?.title?.message}
                    </Text>
                </FormControl>
                <FormControl>
                    <FormLabel color={`purple.300`} fontWeight={600}>
                        Price
                    </FormLabel>
                    <Input
                        // required
                        bgColor={`grey.200`}
                        _focus={{ bgColor: `grey.300`, color: `grey.800` }}
                        _placeholder={{ color: `grey.400` }}
                        placeholder="0"
                        variant={`filled`}
                        size={`lg`}
                        {...register(`price`)}
                    />
                    <Text className={`tiny-text`} color={`red.200`}>
                        {errors?.price?.message}
                    </Text>
                </FormControl>
            </SimpleGrid>
            {/* grid 2 */}
            <RadioCards />
            {/* grid 3 */}
            <SimpleGrid my={8}>
                <FormControl mb={8} h={`20rem`}>
                    <>
                        <FormLabel color={`purple.300`} fontWeight={600}>
                            Description
                        </FormLabel>
                        <Text className={`tiny-text`} color={`red.200`}>
                            {errors?.description?.message}
                        </Text>
                    </>
                    <Controller
                        name="description"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <ReactQuill
                                modules={quillModules}
                                placeholder="Enter description of your product"
                                style={{ height: `100%` }}
                                theme="snow"
                                {...field}
                            />
                        )}
                    />
                </FormControl>
                {/* row 2 */}
                <Box mt={`5rem`} mb={8}>
                    <Flex alignItems={`center`} justifyContent={`space-between`}>
                        <Box>
                            <Text color={`purple.300`} fontWeight={600}>
                                Product
                            </Text>
                            <FormHelperText color={`grey.400`}>Upload the actual product you want to sell. Upload the product file</FormHelperText>
                            <ErrorMessage
                                errors={errors}
                                name="data"
                                render={({ messages }) => {
                                    return messages
                                        ? Object.entries(messages).map(([type, message], index) => (
                                              <Text className={`tiny-text`} color={`red.200`} key={index}>
                                                  {message}
                                              </Text>
                                          ))
                                        : null;
                                }}
                            />
                        </Box>
                        <Box>
                            <Controller
                                name="data"
                                control={control}
                                render={({ field }) => (
                                    <Input
                                        id={`dataFileInput`}
                                        hidden
                                        type={`file`}
                                        multiple
                                        onChange={(e) => {
                                            field.onChange(e.target.files); // this is important to update form state
                                            handleChange(e); // handle custom logic
                                        }}
                                    />
                                )}
                            />
                            <SharedButton
                                btnExtras={{
                                    leftIcon: `ri:file-upload-line`,
                                    border: `1px solid #6D5DD3`,
                                    onClick: () => showFiles(`dataFileInput`),
                                }}
                                text={`Upload File`}
                                width={"fit-content"}
                                height={"48px"}
                                bgColor={"transparent"}
                                textColor={"purple.200"}
                                borderRadius={"4px"}
                                fontSize={{ base: `sm`, md: `md` }}
                            />
                        </Box>
                    </Flex>
                    <Box>
                        <Box display={dataPreview?.length ? `none` : `block`}>
                            <UploadExternalFiles
                                icon="ri:file-upload-line"
                                fileType={`all`}
                                btnTitle={"Upload File"}
                                descText={"File can be an image, video, document in various formats (jpg, png, mp4, pdf etc). min: 100mb"}
                                showFiles={() => showFiles(`dataFileInput`)}
                            />
                        </Box>
                        <SimpleGrid display={dataPreview?.length ? `grid` : `none`} my={4} columns={{ base: 1, md: 2 }} gap={4}>
                            {dataPreview?.map((file, index) => {
                                return <ProductContentDisplay key={index} file={file} />;
                            })}
                        </SimpleGrid>
                    </Box>
                </Box>
                {/* row 3 */}
                <Box my={8}>
                    <Flex alignItems={`center`} justifyContent={`space-between`}>
                        <Box>
                            <Text color={`purple.300`} fontWeight={600}>
                                Cover photo
                            </Text>
                            <FormHelperText color={`grey.400`}>
                                Upload the photos to promote your product, a maximum of 4 photos. Images should be horizontal, at least 1280x720px, and 72 DPI
                                (dots per inch)
                            </FormHelperText>
                            <Text className={`tiny-text`} color={`red.200`}>
                                {errors?.cover_photos?.message}
                            </Text>
                        </Box>
                        <Box>
                            <Controller
                                name="cover_photos"
                                control={control}
                                render={({ field }) => (
                                    <Input
                                        id={`coverPhotosInput`}
                                        hidden
                                        type={`file`}
                                        multiple
                                        onChange={(e) => {
                                            field.onChange(e.target.files); // this is important to update form state
                                            handleChange(e); // handle custom logic
                                        }}
                                    />
                                )}
                            />

                            <SharedButton
                                btnExtras={{
                                    leftIcon: `ri:file-upload-line`,
                                    border: `1px solid #6D5DD3`,
                                    onClick: () => showFiles(`coverPhotosInput`),
                                }}
                                text={`Upload Photos`}
                                width={"fit-content"}
                                height={"48px"}
                                bgColor={"transparent"}
                                textColor={"purple.200"}
                                borderRadius={"4px"}
                                fontSize={{ base: `sm`, md: `md` }}
                            />
                        </Box>
                    </Flex>
                    <Box display={coverPhotoPreview?.length ? `none` : `block`}>
                        <UploadExternalFiles
                            icon="ri:file-upload-line"
                            fileType={`all`}
                            btnTitle={"Upload Photos"}
                            descText={"File can be an image, video, document in various formats (jpg, png, mp4, pdf etc). min: 100mb"}
                            showFiles={() => showFiles(`coverPhotosInput`)}
                        />
                    </Box>
                    <SimpleGrid display={coverPhotoPreview?.length ? `grid` : `none`} my={4} columns={{ base: 1, md: 3 }} gap={4}>
                        {coverPhotoPreview?.map((file, index) => {
                            return <CoverPhotoThumbnailActiveContent key={index} file={file} />;
                        })}
                    </SimpleGrid>
                </Box>
                {/* row 4 */}
                <Box my={8}>
                    <>
                        <Text color={`purple.300`} fontWeight={600}>
                            Thumbnail
                        </Text>
                        <FormHelperText color={`grey.400`}>This image will appear in the explore page, upload a square size of 2mb.</FormHelperText>
                        <Text className={`tiny-text`} color={`red.200`}>
                            {errors?.thumbnail?.message}
                        </Text>
                    </>
                    <Center
                        mt={4}
                        bgColor={`purple.100`}
                        bgImg={URL?.createObjectURL(thumbnailPreview || new Blob())}
                        bgPosition={`center`}
                        bgSize={`contain`}
                        bgRepeat={`no-repeat`}
                        boxSize={`200px`}
                    >
                        <Controller
                            name="thumbnail"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    id={`thumbnailInput`}
                                    hidden
                                    type={`file`}
                                    onChange={(e) => {
                                        field.onChange(e.target.files?.[0]); // this is important to update form state
                                        handleChange(e); // handle custom logic
                                    }}
                                />
                            )}
                        />
                        <SharedButton
                            btnExtras={{
                                leftIcon: `ri:file-upload-line`,
                                border: `1px solid #6D5DD3`,
                                onClick: () => showFiles(`thumbnailInput`),
                            }}
                            text={`Upload Photos`}
                            width={"fit-content"}
                            height={"48px"}
                            bgColor={"white"}
                            textColor={"purple.200"}
                            borderRadius={"4px"}
                            fontSize={{ base: `sm`, md: `md` }}
                        />
                    </Center>
                </Box>
            </SimpleGrid>
            {/* grid 4 */}
            <SimpleGrid my={8} columns={{ base: 1, md: 2 }}>
                <Box>
                    <>
                        <Text color={`purple.300`} fontWeight={600}>
                            Highlights
                        </Text>
                        <FormHelperText color={`grey.400`}>Write key features that highlight your product.</FormHelperText>
                    </>
                    <Stack mt={4} gap={4}>
                        <HighLightField name={`highlight_1`} />
                        <HighLightField name={`highlight_2`} />
                        <HighLightField name={`highlight_3`} />
                    </Stack>
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
                                disabled: true,
                            }}
                        />
                    </Box>
                </Box>
            </SimpleGrid>
            {/* grid 5 */}
            <SimpleGrid my={8} columns={{ base: 1, md: 2 }}>
                <Box>
                    <Text color={`purple.300`} fontWeight={600}>
                        Tags
                    </Text>
                    <FormHelperText mb={2} color={`grey.400`}>
                        Select tags you want your product to be categorised under.
                    </FormHelperText>
                    <FormControl>
                        <Controller
                            name="tags"
                            control={control}
                            render={({ field }) => (
                                <TagPicker
                                    size="lg"
                                    data={tagData}
                                    style={{
                                        width: `100%`,
                                        fontSize: `14px`,
                                    }}
                                    {...field}
                                />
                            )}
                        />
                        <Text className={`tiny-text`} color={`red.200`}>
                            {errors?.tags?.message}
                        </Text>
                    </FormControl>
                </Box>
            </SimpleGrid>
            {/* grid 6 */}
            {/* <SimpleGrid my={8} columns={{ base: 1, md: 2 }}>
                <Box>
                    <Text color={`purple.300`} fontWeight={600}>
                        Settings
                    </Text>
                    <FormControl color={`grey.400`} mt={4}>
                        <FormControl color={`grey.400`} mt={4}>
                            <Flex justifyContent={`space-between`} alignItems={`center`}>
                                <FormLabel className="small-text">Show Stock Count</FormLabel>
                                <Switch {...register(`stock_count`)} size="lg" colorScheme="green" />
                            </Flex>
                        </FormControl>
                        <Divider my={4} />
                        <FormControl color={`grey.400`} mt={4}>
                            <Flex justifyContent={`space-between`} alignItems={`center`}>
                                <FormLabel className="small-text">Allow customers choose quantity</FormLabel>
                                <Switch {...register(`choose_quantity`)} size="lg" colorScheme="green" />
                            </Flex>
                        </FormControl>
                        <Divider my={4} />
                        <FormControl color={`grey.400`} mt={4}>
                            <Flex justifyContent={`space-between`} alignItems={`center`}>
                                <FormLabel className="small-text">Show number of sales of product on page</FormLabel>
                                <Switch {...register(`show_sales_count`)} size="lg" colorScheme="green" />
                            </Flex>
                        </FormControl>
                    </FormControl>
                </Box>
            </SimpleGrid> */}
        </FormControl>
    );
};

// SUB-COMPONENTS 1 ========================================================================

const ProductContentDisplay = ({ file }) => {
    return (
        <Card p={8} borderRadius={`5px`} bgColor={`purple.100`} variant={`filled`}>
            <Flex gap={4} alignItems={`center`}>
                <Box boxSize={`72px`}>
                    {/* <Icon icon={`mdi:file`} /> */}
                    <Image
                        w={`100%`}
                        h={`100%`}
                        src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951012/productize/Layer_1_m6pvyg_yz7oz1.png`}
                    />
                </Box>
                <Box>
                    <Text fontWeight={600}>{file.name}</Text>
                    <Text className="small-text">{`${file.type}.${Math.floor(file.size / 1000)}`}kb</Text>
                </Box>
            </Flex>
        </Card>
    );
};
const CoverPhotoThumbnailActiveContent = ({ file }) => {
    return (
        <Card w={`368px`} h={`200px`} borderRadius={`5px`} variant={`outline`} border={`5px solid #F3F2FB`} overflow={`hidden`}>
            <Image w={`100%`} h={`100%`} objectFit={`contain`} src={URL.createObjectURL(file)} alt={`img`} />
        </Card>
    );
};

const HighLightField = ({ name }) => {
    const {
        register,
        formState: { errors },
    } = useFormContext();
    return (
        <FormControl>
            <InputGroup size="lg">
                <Input
                    pr="4.5rem"
                    bgColor={`grey.200`}
                    _focus={{ bgColor: `grey.200`, color: `grey.800` }}
                    _placeholder={{ color: `grey.400` }}
                    placeholder="Enter Information"
                    variant={`filled`}
                    {...register(name)}
                />
                {/* <InputRightElement>
                    <Center cursor={`pointer`} bgColor={`purple.200`} borderRadius={`100%`} boxSize={`1rem`} color={`grey.100`}>
                        <Icon icon={`system-uicons:close`} />
                    </Center>
                </InputRightElement> */}
            </InputGroup>
            <Text className={`tiny-text`} color={`red.200`}>
                {errors?.highlight_1?.message}
            </Text>
        </FormControl>
    );
};
