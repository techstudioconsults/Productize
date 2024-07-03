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
    // product_type: yup.string().required('Product type is required'),
    title: yup.string().required('Title is required'),
    category: yup.string().required('Category is required'),
    price: yup.string().required('Price is required'),
    description: yup.string().test('hasContent', 'Description is required', (value) => {
        const strippedValue = value.replace(/<\/?[^>]+(>|$)/g, ''); // Strip HTML tags
        return strippedValue.trim().length > 0;
    }),
    cover_photos: yup.array().min(1, 'Cover photo is required').required('Cover photo is required'),
    thumbnail: yup.mixed().required('Thumbnail is required'),
    highlights: yup.array().of(yup.string().required('Highlight is required')),
    tags: yup.array().min(1, 'At least one tags is required').required('tag is required'),
});

export const DPFormSchema = yup.object().shape({
    product_type: yup.string().required('Product type is required'),
    title: yup.string().required('Title is required'),
    category: yup.string().required('Category is required'),
    price: yup.string().required('Price is required'),
    discount_price: yup.string().required('Discount price is required'),
    description: yup.string().test('hasContent', 'Description is required', (value) => {
        const strippedValue = value.replace(/<\/?[^>]+(>|$)/g, ''); // Strip HTML tags
        return strippedValue.trim().length > 0;
    }),
    cover_photos: yup.array().min(1, 'Cover photo is required').required('Cover photo is required'),
    thumbnail: yup.mixed().required('Thumbnail is required'),
    highlights: yup.array().of(yup.string().required('Highlight is required')),
    tags: yup.array().min(1, 'At least one tags is required').required('tag is required'),
    data: yup.array().min(1, 'Data file is required').required('Data file is required'),
});

export const SSFormSchema = yup.object().shape({
    product_type: yup.string().required('Product type is required'),
    title: yup.string().required('Title is required'),
    category: yup.string().required('Category is required'),
    price: yup.string().required('Price is required'),
    discount_price: yup.string().required('Discount price is required'),
    description: yup.string().test('hasContent', 'Description is required', (value) => {
        const strippedValue = value.replace(/<\/?[^>]+(>|$)/g, ''); // Strip HTML tags
        return strippedValue.trim().length > 0;
    }),
    cover_photos: yup.array().min(1, 'Cover photo is required').required('Cover photo is required'),
    thumbnail: yup.mixed().required('Thumbnail is required'),
    highlights: yup.array().of(yup.string().required('Highlight is required')),
    tags: yup.array().min(1, 'At least one tags is required').required('tag is required'),
    level: yup.string().required('Your skill level is required'),
    availability: yup.string().required('Availability is required'),
    portfolio_link: yup.string().required('Your portfolio link is required'),
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
