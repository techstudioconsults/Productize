/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @nx/enforce-module-boundaries */
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Grid,
    GridItem,
    Input,
    InputGroup,
    InputLeftElement,
    Progress,
    Select,
    SimpleGrid,
    Stack,
    Tab,
    TabList,
    Tabs,
    Text,
} from '@chakra-ui/react';
import { Field } from './components/FormFields';
import { useFormContext } from 'react-hook-form';
import RadioCards from './components/RadioCards';

import { DataUploadField } from './components/DataUploadField';
import { CoverPhotoUploadField } from './components/CoverPhotoUploadField';
import RichTextField from './components/RichTextField';
import { ThumbnailUploadField } from './components/ThumbnailUploadField';
import { HighLightField } from './components/HighlightField';
import TagsField from './components/TagsField';
import { Icon } from '@iconify/react';
import { useState } from 'react';

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
    const [isProgressCompleted, setProgressCompleted] = useState(false);
    const { register } = useFormContext();
    const [selectedProductType, setSelectedProductType] = useState('digital_product');

    const listen = (value) => {
        setSelectedProductType(value);
        setProgressCompleted(false);
    };

    const handleNext = (e) => {
        if (e.target.innerText === `Next`) {
            setProgressCompleted(true);
        } else {
            setProgressCompleted(false);
        }
    };

    return (
        <FormControl>
            {/* GRID ONE*/}
            <FormControl>
                <RadioCards listenForChange={listen} />
            </FormControl>

            {/* GRID TWO */}
            {/* Digital Products sub form */}
            <Box display={selectedProductType === `digital_product` ? `block` : `none`}>
                <Field label="Category">
                    <Tabs borderRadius={`5px`} p={3} variant={`solid-rounded`} colorScheme="purple" bg={`purple.100`}>
                        <TabList>
                            <Tab w={`15rem`} borderRadius={5}>
                                Learning
                            </Tab>
                            <Tab w={`15rem`} borderRadius={5}>
                                Entertainment
                            </Tab>
                            <Tab w={`15rem`} borderRadius={5}>
                                Art
                            </Tab>
                        </TabList>
                    </Tabs>
                </Field>
                <FormControl as={Grid} templateRows="repeat(1, 1fr)" templateColumns="repeat(12, 1fr)" gap={4} my={8}>
                    <GridItem colSpan={{ base: 12, md: 6 }}>
                        {/* product title */}
                        <Field label="Product Title">
                            <Input
                                maxLength={30}
                                placeholder="Name of product"
                                variant={`filled`}
                                size={`lg`}
                                sx={globalFieldStyle}
                                {...register(`title`)}
                                type="text"
                                id="title"
                            />
                        </Field>
                    </GridItem>
                    <GridItem colSpan={{ base: 12, md: 3 }}>
                        {/* product price */}
                        <Field label="Price">
                            <InputGroup>
                                <InputLeftElement mt={1} pointerEvents="none">
                                    <Icon fontSize={`1.2rem`} icon="mdi:naira" />
                                </InputLeftElement>
                                <Input placeholder="0" variant={`filled`} size={`lg`} sx={globalFieldStyle} {...register(`price`)} type="number" id="price" />
                            </InputGroup>
                        </Field>
                    </GridItem>
                    <GridItem colSpan={{ base: 12, md: 3 }}>
                        {/* discount price */}
                        <Field label="Discounted Price (optional)">
                            <InputGroup>
                                <InputLeftElement mt={1} pointerEvents="none">
                                    <Icon fontSize={`1.2rem`} icon="mdi:naira" />
                                </InputLeftElement>
                                <Input
                                    placeholder="0"
                                    variant={`filled`}
                                    size={`lg`}
                                    sx={globalFieldStyle}
                                    {...register(`price`)}
                                    type="number"
                                    id="discount_price"
                                />
                            </InputGroup>
                        </Field>
                    </GridItem>
                </FormControl>
                <Stack>
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
                </Stack>
            </Box>

            {/* skill selling sub form */}
            <Box display={selectedProductType === `skill_selling` ? `block` : `none`}>
                <Box>
                    <Text fontSize={`sm`} fontWeight={`semibold`}>
                        Step {isProgressCompleted ? 2 : 1} of 2
                    </Text>
                    <Progress size={`xs`} borderRadius={5} value={isProgressCompleted ? 100 : 50} colorScheme={`purple`} />
                </Box>
                <Stack display={isProgressCompleted ? `none` : `block`}>
                    <FormControl as={Grid} templateRows="repeat(1, 1fr)" templateColumns="repeat(12, 1fr)" gap={10} my={8}>
                        <GridItem colSpan={{ base: 12, md: 6 }}>
                            {/* product title */}
                            <Field label="Title">
                                <Input
                                    maxLength={30}
                                    placeholder="Name of product"
                                    variant={`filled`}
                                    size={`lg`}
                                    sx={globalFieldStyle}
                                    {...register(`title`)}
                                    type="text"
                                    id="title"
                                />
                            </Field>
                        </GridItem>
                        <GridItem colSpan={{ base: 12, md: 6 }}>
                            {/* product price */}
                            <Field label="Skill">
                                <Select sx={globalFieldStyle} variant={`filled`} size={`lg`} placeholder="Select option">
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </Select>
                            </Field>
                        </GridItem>
                        <GridItem colSpan={{ base: 12, md: 6 }}>
                            {/* discount price */}
                            <Field label="Skill Level">
                                <Select sx={globalFieldStyle} variant={`filled`} size={`lg`} placeholder="Select option">
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </Select>
                            </Field>
                        </GridItem>
                        <GridItem colSpan={{ base: 12, md: 6 }}>
                            {/* discount price */}
                            <Field label="Rates">
                                <Select sx={globalFieldStyle} variant={`filled`} size={`lg`} placeholder="Select option">
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </Select>
                            </Field>
                        </GridItem>
                        <GridItem colSpan={{ base: 12, md: 6 }}>
                            {/* discount price */}
                            <Field label="Availability">
                                <Select sx={globalFieldStyle} variant={`filled`} size={`lg`} placeholder="Select option">
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </Select>
                            </Field>
                        </GridItem>
                        <GridItem colSpan={{ base: 12, md: 6 }}>
                            {/* discount price */}
                            <Field label="Portfolio Link">
                                <Input
                                    maxLength={30}
                                    placeholder="Name of product"
                                    variant={`filled`}
                                    size={`lg`}
                                    sx={globalFieldStyle}
                                    {...register(`title`)}
                                    type="text"
                                    id="title"
                                />
                            </Field>
                        </GridItem>
                    </FormControl>

                    {/* GRID THREE */}
                    <FormControl h={`21rem`} overflow={`hidden`}>
                        <RichTextField />
                    </FormControl>
                </Stack>

                <Stack display={isProgressCompleted ? `block` : `none`}>
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
                </Stack>
                <Flex gap={4} justifyContent={`flex-end`} mt={2}>
                    <Button variant={`text`} onClick={handleNext}>
                        Next
                    </Button>
                    <Button variant={`text`} onClick={handleNext}>
                        Back
                    </Button>
                </Flex>
            </Box>

            {/* template hub sub form */}
            <Box display={selectedProductType === `template_hub` ? `block` : `none`}>
                <Box>
                    <Text fontSize={`sm`} fontWeight={`semibold`}>
                        Step {isProgressCompleted ? 2 : 1} of 2
                    </Text>
                    <Progress size={`xs`} borderRadius={5} value={isProgressCompleted ? 100 : 50} colorScheme={`purple`} />
                </Box>
                <Box>
                    {/* sub form 1 */}
                    <FormControl display={isProgressCompleted ? `none` : `block`} mt={8}>
                        <Grid as={Grid} gap={4} templateRows="repeat(1, 1fr)" templateColumns="repeat(12, 1fr)">
                            <GridItem colSpan={{ base: 12, md: 6 }}>
                                {/* product title */}
                                <Field label="Product Title">
                                    <Input
                                        maxLength={30}
                                        placeholder="Name of product"
                                        variant={`filled`}
                                        size={`lg`}
                                        sx={globalFieldStyle}
                                        {...register(`title`)}
                                        type="text"
                                        id="title"
                                    />
                                </Field>
                            </GridItem>
                            <GridItem colSpan={{ base: 12, md: 3 }}>
                                {/* product price */}
                                <Field label="Price">
                                    <InputGroup>
                                        <InputLeftElement mt={1} pointerEvents="none">
                                            <Icon fontSize={`1.2rem`} icon="mdi:naira" />
                                        </InputLeftElement>
                                        <Input
                                            placeholder="0"
                                            variant={`filled`}
                                            size={`lg`}
                                            sx={globalFieldStyle}
                                            {...register(`price`)}
                                            type="number"
                                            id="price"
                                        />
                                    </InputGroup>
                                </Field>
                            </GridItem>
                            <GridItem colSpan={{ base: 12, md: 3 }}>
                                {/* discount price */}
                                <Field label="Discounted Price">
                                    <InputGroup>
                                        <InputLeftElement mt={1} pointerEvents="none">
                                            <Icon fontSize={`1.2rem`} icon="mdi:naira" />
                                        </InputLeftElement>
                                        <Input
                                            placeholder="0"
                                            variant={`filled`}
                                            size={`lg`}
                                            sx={globalFieldStyle}
                                            {...register(`price`)}
                                            type="number"
                                            id="discount_price"
                                        />
                                    </InputGroup>
                                </Field>
                            </GridItem>
                        </Grid>
                        <Stack mt={8}>
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
                        </Stack>
                    </FormControl>
                    {/* sub form 2 */}
                    <Grid display={isProgressCompleted ? `grid` : `none`} my={10} templateColumns="repeat(12, 1fr)" gap={6}>
                        <GridItem colSpan={{ base: 12, md: 6 }}>
                            <FormControl my={5}>
                                <FormLabel color={`purple.300`} fontWeight={600}>
                                    Category
                                </FormLabel>
                                <Text fontSize={`sm`} color={`grey.400`} mb={2}>
                                    Select category you want your product to be categorised under.{' '}
                                </Text>
                                <Select
                                    bgColor={`grey.200`}
                                    _focus={{ bgColor: `grey.300`, color: `grey.800` }}
                                    _placeholder={{ color: `grey.400` }}
                                    variant={`filled`}
                                    size={`lg`}
                                    placeholder="Select Category"
                                >
                                    <option value="option1">Word Press</option>
                                    <option value="option2">CMS Theme</option>
                                    <option value="option2">eCommerce</option>
                                    <option value="option2">Blogging</option>
                                    <option value="option2">Marketing</option>
                                    <option value="option2">Muse Template</option>
                                    <option value="option2">Forum</option>
                                    <option value="option2">Jamstack</option>
                                </Select>
                            </FormControl>
                            <FormControl my={5}>
                                <FormLabel color={`purple.300`} fontWeight={600}>
                                    URL
                                </FormLabel>
                                <Flex color={`grey.400`} alignItems={`center`} gap={2} mb={2}>
                                    <Icon icon={`fluent:info-16-filled`} />
                                    <Text fontSize={`sm`}>Enter the URL to the template</Text>
                                </Flex>
                                <Input
                                    bgColor={`grey.200`}
                                    _focus={{ bgColor: `grey.300`, color: `grey.800` }}
                                    _placeholder={{ color: `grey.400` }}
                                    variant={`filled`}
                                    size={`lg`}
                                    placeholder="Select option"
                                />
                            </FormControl>
                        </GridItem>
                    </Grid>
                    <Flex gap={4} justifyContent={`flex-end`} mt={2}>
                        <Button variant={`text`} onClick={handleNext}>
                            Next
                        </Button>
                        <Button variant={`text`} onClick={handleNext}>
                            Back
                        </Button>
                    </Flex>
                </Box>
            </Box>
        </FormControl>
    );
};
