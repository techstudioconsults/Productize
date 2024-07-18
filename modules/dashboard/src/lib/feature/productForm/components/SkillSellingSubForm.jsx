import { Box, Flex, FormControl, FormHelperText, Input, Select, Stack, Text } from '@chakra-ui/react';
import { Field } from './FormFields';
import { useFormContext, useWatch } from 'react-hook-form';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Heading } from './Heading';

const globalFieldStyle = {
    bgColor: 'grey.200',
    _focus: {
        bgColor: 'grey.300',
        color: 'grey.800',
    },
    _placeholder: {
        color: 'grey.400',
    },
};

const SkillSellingSubForm = () => {
    const {
        register,
        control,
        resetField,
        formState: { errors },
    } = useFormContext();

    const productType = useWatch({ control, name: 'product_type' });

    useEffect(() => {
        if (productType !== 'skill_selling') {
            // resetField('level');
            // resetField('availability');
            resetField('portfolio_link');
        }
    }, [productType, resetField]);

    return (
        <FormControl>
            <Heading title={`Portfolio Link`} tip={`Show us something you have doe before`} />
            <Stack gap={10}>
                <Box>
                    <Input
                        bgColor="gray.200"
                        maxLength={30}
                        placeholder="portfolio link"
                        variant="filled"
                        sx={globalFieldStyle}
                        {...register('portfolio_link')}
                        type="text"
                        id="portfolio-link"
                    />
                    {errors.portfolio_link && (
                        <Text className="tiny-text" color="red.500">
                            {errors.portfolio_link.message}
                        </Text>
                    )}
                </Box>
            </Stack>
        </FormControl>
    );
};

export default SkillSellingSubForm;
