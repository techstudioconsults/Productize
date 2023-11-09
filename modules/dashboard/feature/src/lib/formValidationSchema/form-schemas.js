import * as yup from "yup";

export const profileFormSchema = yup.object().shape({
    full_name: yup.string().required("Fullname is required"),
    username: yup.string().required("Username is required"),
    // email: yup.string().required("Email is required"),
    phone_number: yup.string().required("Phone number is required"),
    bio: yup.string().required("Tell us something about you"),
    // logo: yup.string().required("Profile picture is required"),
    twitter_account: yup.string().required("your twitter account is required"),
    facebook_account: yup.string().required("your facebook account is required"),
    youtube_account: yup.string().required("your youtube account is required"),
});

export const productFormSchema = yup.object().shape({
    title: yup.string().required("Title is required"),
    price: yup.string().required("Price is required"),
    productType: yup.string().required("Product type is required"),
    description: yup.string().required("Description is required"),
    data: yup.mixed().required("Data is required"),
    cover_photos: yup.mixed().required("Cover photo is required"),
    thumbnail: yup.string().required("Thumbnail is required"),
    // highlights: yup.array().min(1, "At least one highlight is required").required("at least one highlight is required"),
    tags: yup.array().min(1, "At least one tags is required").required("at least one tag is required"),
});
