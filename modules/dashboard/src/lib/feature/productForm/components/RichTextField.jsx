import { Controller, useFormContext } from "react-hook-form";
import ReactQuill from "react-quill";
import { quillModulesSchema } from "../../formValidationSchema/form-schemas";

const RichTextField = () => {
    const { control } = useFormContext(); // retrieve all hook methods

    return (
        <Controller
            name="description"
            control={control}
            defaultValue={``}
            render={({ field: { ref, ...field } }) => (
                <ReactQuill modules={quillModulesSchema} placeholder="Enter description of your product" style={{ height: `100%` }} theme="snow" {...field} />
            )}
        />
    );
};

export default RichTextField;
