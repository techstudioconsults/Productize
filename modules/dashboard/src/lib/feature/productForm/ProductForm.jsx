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

export const ProductForm = ({ listenForSchemaChange }) => {
    const { state, hash } = useLocation();
    // const [selectedProductType, setSelectedProductType] = useState();
    const [selectedProductType, setSelectedProductType] = useState('digital_product');

    const listen = (value) => {
        setSelectedProductType(value);
        listenForSchemaChange(value);
    };

    useEffect(() => {
        if (state && hash === '#product-details') {
            setSelectedProductType(state?.product?.product_type);
        }
    }, [hash, state]);

    return (
        <Stack>
            {/* GRID ONE*/}
            <Box my={8}>
                <RadioCards listenForChange={listen} />
            </Box>
            {/* GRID TWO*/}
            <Box my={8}>
                <MajorInputFields />
            </Box>
            {/* GRID THREE */}
            <Box my={8} h={`21rem`} overflow={`hidden`}>
                <RichTextField />
            </Box>
            {/* GRID FOUR */}
            <Box my={8} hidden={selectedProductType === `digital_product` ? false : true}>
                <DataUploadField />
            </Box>
            {/* GRID FIVE */}
            <Box my={8} gap={4}>
                <CoverPhotoUploadField />
            </Box>
            {/* GRID SIX */}
            <Box my={8} as={SimpleGrid} gap={8} columns={{ base: 1, sm: 2 }}>
                <HighLightField />
                <ThumbnailUploadField />
            </Box>
            {/* GRID EIGHT */}
            <Box my={8} as={SimpleGrid} gap={8} columns={{ base: 1, sm: 2 }}>
                <Box hidden={selectedProductType === `skill_selling` ? false : true}>
                    <SkillSellingSubForm />
                </Box>
                <TagsField />
            </Box>
        </Stack>
    );
};
