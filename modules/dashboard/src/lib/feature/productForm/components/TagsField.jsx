import { FormControl, FormHelperText, Stack, Text } from '@chakra-ui/react';
import { selectCurrentToken, selectTags } from '@productize/redux';
import { Controller, useFormContext } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { TagPicker } from 'rsuite';
import { Field } from './FormFields';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Heading } from './Heading';

const TagsField = () => {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const token = useSelector(selectCurrentToken);
    // const tags = useSelector(selectTags);
    const [tags, setTags] = useState([]);
    const {
        control,
        formState: { errors },
    } = useFormContext(); // retrieve all hook methods
    const tagData = tags.map((item) => ({ label: item, value: item }));

    useEffect(() => {
        const getTags = async () => {
            try {
                const res = await axios.get(`${baseUrl}/products/tags`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setTags(res.data.data);
            } catch (err) {
                console.error('Error creating product:', err);
            }
        };

        getTags();
    }, [baseUrl, token]);

    return (
        <FormControl isInvalid={errors.tags}>
            <HeadingGroup errors={errors} />
            <Controller
                name="tags"
                control={control}
                render={({ field }) => (
                    <TagPicker
                        placement={`auto`}
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

const HeadingGroup = ({ errors }) => {
    return (
        <Stack>
            <Heading title={`Tags`} tip={`Select tags you want your product to be categorized under.`} />
            {errors.tags && (
                <Text className="tiny-text" color="red.200">
                    {errors.tags.message}
                </Text>
            )}
        </Stack>
    );
};




