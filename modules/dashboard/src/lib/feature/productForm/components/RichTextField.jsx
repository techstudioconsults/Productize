import { Controller, useFormContext } from "react-hook-form";
import ReactQuill from "react-quill";
import { quillModulesSchema } from "../../formValidationSchema/form-schemas";
import { Box, FormLabel, Text } from "@chakra-ui/react";

const RichTextField = () => {
    const {
        control,
        formState: { errors },
    } = useFormContext(); // retrieve all hook methods

    return (
        <Box>
            <>
                <FormLabel color={`purple.300`} fontWeight={600}>
                    Description
                </FormLabel>
                <Text className={`tiny-text`} color={`red.200`}>
                    {errors?.description?.message}
                </Text>
            </>
            <Controller
                name="description"
                control={control}
                defaultValue={``}
                render={({ field: { ref, ...field } }) => (
                    <ReactQuill
                        modules={quillModulesSchema}
                        placeholder="Enter description of your product"
                        style={{ height: `15rem` }}
                        theme="snow"
                        {...field}
                    />
                )}
            />
        </Box>
    );
};

export default RichTextField;
