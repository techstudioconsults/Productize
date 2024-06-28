import * as yup from 'yup';

export const profileFormSchema = yup.object().shape({
    full_name: yup.string().required('Fullname is required'),
    username: yup.string().required('Username is required'),
    phone_number: yup
        .string()
        .required('Phone number is required')
        .matches(/^\+234\d{10}$/, 'format should be +234xxxxxxxxxx'),
    bio: yup.string().required('Tell us something about you'),
});

export const productFormSchema = yup.object().shape({
    product_type: yup.string().required("Product type is required"),
    title: yup.string().required("Title is required"),
    category: yup.string().required("Category is required"),
    price: yup.string().required("Price is required"),
    description: yup.string().required("Description is required"),
    cover_photos: yup.mixed().required("Cover photo is required"),
    thumbnail: yup.mixed().required("Thumbnail is required"),
    highlights: yup.array().of(yup.string().required("Highlight is required")),
    tags: yup.array().min(1, "At least one tags is required").required("tag is required"),
    // data: yup.mixed().required("File is required"),
});

export const quillModulesSchema = {
    toolbar: [
        ['bold', 'italic', 'underline', 'strike'], // toggled buttons
        ['blockquote', 'code-block'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['link', 'image'],
        [{ align: [] }],
        ['clean'], // remove formatting button
    ],
};
