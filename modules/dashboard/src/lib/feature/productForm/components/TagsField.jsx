import { Box, Flex, FormHelperText, Text } from '@chakra-ui/react';
import { selectTags } from '@productize/redux';
import { Controller, useFormContext } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { TagPicker } from 'rsuite';

const TagsField = () => {
    const tags = useSelector(selectTags);
    const { control } = useFormContext(); // retrieve all hook methods
    const tagData = tags.map((item) => ({ label: item, value: item }));

    return (
        <div>
            <Heading />
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
        </div>
    );
};

export default TagsField;

const Heading = () => {
    return (
        <Flex mb={4} justifyContent={`space-between`} alignItems={`flex-end`}>
            <Box>
                <Text color={`purple.300`} fontWeight={600}>
                    Tags
                </Text>
                <FormHelperText color={`grey.400`} fontSize={{ base: `xs`, md: `sm` }}>
                    Select tags you want your product to be categorised under.
                </FormHelperText>
            </Box>
        </Flex>
    );
};
