import { Box, FormControl, Input, Select, Stack, Text } from '@chakra-ui/react';
import { Field } from './FormFields';
import { useFormContext, useWatch } from 'react-hook-form';
import { useEffect } from 'react';

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
            resetField('level');
            resetField('availability');
            resetField('portfolio_link');
        }
    }, [productType, resetField]);

    return (
        <FormControl>
            <Stack gap={10}>
                <Box>
                    <Field label="Skill Level">
                        <Select {...register('level')} sx={globalFieldStyle} variant="filled" size="lg" placeholder="Select option">
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </Select>
                    </Field>
                    {errors.level && (
                        <Text className="tiny-text" color="red.500">
                            {errors.level.message}
                        </Text>
                    )}
                </Box>

                <Box>
                    <Field label="Availability">
                        <Select {...register('availability')} sx={globalFieldStyle} variant="filled" size="lg" placeholder="Select option">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </Select>
                    </Field>
                    {errors.availability && (
                        <Text className="tiny-text" color="red.500">
                            {errors.availability.message}
                        </Text>
                    )}
                </Box>
                <Box>
                    <Field label="Portfolio Link">
                        <Input
                            maxLength={30}
                            placeholder="portfolio link"
                            variant="filled"
                            size="lg"
                            sx={globalFieldStyle}
                            {...register('portfolio_link')}
                            type="text"
                            id="portfolio-link"
                        />
                    </Field>
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
