import { FormControl, Grid, GridItem, Input, Select, Stack } from '@chakra-ui/react';
import { Field } from './FormFields';
import { useFormContext } from 'react-hook-form';

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

const SkillSellingSubForm = () => {
    const { register } = useFormContext();
    return (
        <Stack>
            <FormControl as={Grid} templateRows="repeat(1, 1fr)" templateColumns="repeat(12, 1fr)" gap={10} my={8}>
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
                            placeholder="portfolio link"
                            variant={`filled`}
                            size={`lg`}
                            sx={globalFieldStyle}
                            {...register(`portfolio_link`)}
                            type="text"
                            id="portfolio-link"
                        />
                    </Field>
                </GridItem>
            </FormControl>
        </Stack>
    );
};
export default SkillSellingSubForm;
