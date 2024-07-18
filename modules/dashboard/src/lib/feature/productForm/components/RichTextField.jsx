import { Controller, useFormContext } from 'react-hook-form';
import { FormControl, FormLabel, Stack, Text } from '@chakra-ui/react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Field } from './FormFields';
import { Heading } from './Heading';

const quillModules = {
    toolbar: [
        [{ header: '1' }, { header: '2' }, { font: [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
        ['link', 'image', 'video'],
        ['clean'],
    ],
};

const RichTextField = () => {
    const {
        control,
        formState: { errors },
    } = useFormContext(); // retrieve all hook methods

    return (
        <FormControl>
            <Stack>
                <Heading title={`Description`} tip={`Enter the Description for your Products`} />
                {errors.description && (
                    <Text className="tiny-text" color="red.200">
                        {errors.description.message}
                    </Text>
                )}
                <Controller
                    name="description"
                    s
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Description is required' }}
                    render={({ field: { ref, ...field } }) => (
                        <ReactQuill
                            modules={quillModules}
                            placeholder="Enter description of your product"
                            style={{ height: '15rem' }}
                            theme="snow"
                            {...field}
                        />
                    )}
                />
            </Stack>
        </FormControl>
    );
};

export default RichTextField;
