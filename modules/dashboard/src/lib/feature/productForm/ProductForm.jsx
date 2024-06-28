import { Box, FormControl, SimpleGrid, Stack } from '@chakra-ui/react';
import RadioCards from './components/RadioCards';
import { useEffect, useState } from 'react';
import { Field } from './components/FormFields';
import RichTextField from './components/RichTextField';
import { CoverPhotoUploadField } from './components/CoverPhotoUploadField';
import { ThumbnailUploadField } from './components/ThumbnailUploadField';
import { HighLightField } from './components/HighlightField';
import TagsField from './components/TagsField';
import { DataUploadField } from './components/DataUploadField';
import MajorInputFields from './components/MajorInputFields';
import SkillSellingSubForm from './components/SkillSellingSubForm';
import { useLocation } from 'react-router-dom';

export const ProductForm = () => {
    const { state, hash } = useLocation();
    const [isProgressCompleted, setProgressCompleted] = useState(false);
    const [selectedProductType, setSelectedProductType] = useState('digital_product');

    const listen = (value) => {
        setSelectedProductType(value);
        setProgressCompleted(false);
    };

    // const handleNext = (e) => {
    //     if (e.target.innerText === `Next`) {
    //         setProgressCompleted(true);
    //     } else {
    //         setProgressCompleted(false);
    //     }
    // };

    useEffect(() => {
        if (state && hash === '#product-details') {
            setSelectedProductType(state?.product?.product_type);
        }
    }, [hash, state]);

    return (
        <div>
            {/* GRID ONE*/}
            <FormControl>
                <RadioCards listenForChange={listen} />
            </FormControl>
            {/* <Box>
                <Text fontSize={`sm`} fontWeight={`semibold`}>
                    Step {isProgressCompleted ? 2 : 1} of 2
                </Text>
                <Progress size={`xs`} borderRadius={5} value={isProgressCompleted ? 100 : 50} colorScheme={`purple`} />
            </Box> */}
            <Stack hidden={isProgressCompleted}>
                <Box>
                    <MajorInputFields />
                </Box>
                {/* GRID THREE */}
                <Box h={`21rem`} overflow={`hidden`}>
                    <RichTextField />
                </Box>
                {/* GRID FIVE */}
                <Box my={8} gap={4}>
                    <CoverPhotoUploadField />
                </Box>
                {/* GRID SIX */}
                <Box>
                    <ThumbnailUploadField />
                </Box>
                {/* GRID SEVEN */}
                <Box as={SimpleGrid} my={8} gap={4} columns={{ base: 1, sm: 2 }}>
                    <HighLightField />
                </Box>
                {/* GRID EIGHT */}
                <Box as={SimpleGrid} my={8} gap={4} columns={{ base: 1, sm: 2 }}>
                    <TagsField />
                </Box>
            </Stack>
            {/* switch */}
            {/* <Stack hidden={!isProgressCompleted}> */}
            {/* GRID FOUR */}
            <Box hidden={selectedProductType === `digital_product` ? false : true}>
                <DataUploadField />
            </Box>

            <Box hidden={selectedProductType === `digital_product` ? true : false}>
                <SkillSellingSubForm />
            </Box>
        </div>
    );
};
