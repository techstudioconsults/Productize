import { Box, Flex, FormControl, FormHelperText, Stack, Text } from '@chakra-ui/react';
import { selectTags } from '@productize/redux';
import { Controller, useFormContext } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { TagPicker } from 'rsuite';
import { Field } from './FormFields';

const TagsField = () => {
    const tags = useSelector(selectTags);
    const {
        control,
        formState: { errors },
    } = useFormContext(); // retrieve all hook methods
    const tagData = tags.map((item) => ({ label: item, value: item }));

    return (
        <FormControl isInvalid={errors.tags}>
            <Heading errors={errors} />
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
                        onChange={(value) => field.onChange(value)}
                    />
                )}
            />
        </FormControl>
    );
};

export default TagsField;

const Heading = ({ errors }) => {
    return (
        <Field label={`Tags`}>
            <Stack>
                <FormHelperText my={0} color={`grey.400`} fontSize={{ base: `xs`, md: `sm` }}>
                    Select tags you want your product to be categorized under.
                </FormHelperText>
                {errors.tags && (
                    <Text className="tiny-text" color="red.200">
                        {errors.tags.message}
                    </Text>
                )}
            </Stack>
        </Field>
    );
};
