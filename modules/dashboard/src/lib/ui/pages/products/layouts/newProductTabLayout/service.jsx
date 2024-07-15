/* eslint-disable @nx/enforce-module-boundaries */
// import { ToastFeedback, useToastAction } from '@productize/ui';
import { useAxiosInstance } from '@productize/hooks';
import { selectCurrentToken } from '@productize/redux';
import { ToastFeedback, useToastAction } from '@productize/ui';
import axios from 'axios';
import errorImg from '@icons/error.svg';
import { useSelector } from 'react-redux';
// import errorImg from '@icons/error.svg';
import { useLocation, useNavigate } from 'react-router-dom';

const extractFormData = (data) => ({
    title: data.title,
    price: data.price,
    description: data.description,
    cover_photos: data.cover_photos,
    thumbnail: data.thumbnail,
    highlights: data.highlights,
    tags: data.tags,
});

export const useProductActions = () => {
    const { toast, toastIdRef, close } = useToastAction();
    const token = useSelector(selectCurrentToken);
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const { state } = useLocation();
    const { query, isLoading } = useAxiosInstance({ MIME_TYPE: 'multipart/form-data' });
    const navigate = useNavigate();
    // const [schema, setSchema] = useState(productFormSchema);

    const updateProduct = async (data) => {
        console.log(data);
        // const formData = extractFormData(data);
        // formData.resources = data.data;

        // // const productCreationEndpoint = data.product_type === 'digital_product' ? '/digitalProducts' : '/skillSellings';
        // //  const additionalData =
        // //      data.product_type === 'digital_product'
        // //          ? { category: data.category, resources: data.data }
        // //          : { category: data.category, level: data.level, availability: data.availability, link: data.portfolio_link };

        // try {
        //     const res = await query('post', `/products/${state?.product?.id}?_method=PUT`, formData);
        //     if (res.status === 200) {
        //         // const additionalRes = await query('post', productCreationEndpoint, { ...additionalData, product_id: res.data.data.id });
        //         // if (additionalRes.status === 201) {
        //         navigate(`/dashboard/products/new#preview`, { state: { product: res.data } });
        //         // }
        //     }
        // } catch (err) {
        //     console.error('Error updating product:', err);
        // }
    };

    const createProduct = async (data) => {
        // console.log(data);
        const formData = extractFormData(data);
        formData.product_type = data.product_type;
        formData.discount_price = parseInt(data.discount_price || 0);

        const productCreationEndpoint = data.product_type === 'digital_product' ? '/digitalProducts' : '/skillSellings';
        const additionalData =
            data.product_type === 'digital_product'
                ? { category: data.category, assets: data.data }
                : // : { category: data.category, resources: data.data, level: data.level, link: data.portfolio_link };
                  { category: data.category, assets: data.data, level: data.level, availability: data.availability, link: data.portfolio_link };

        try {
            const res = await query('post', '/products', formData);
            if (res.status === 201) {
                const additionalRes = await query('post', productCreationEndpoint, { ...additionalData, product_id: res.data.data.id });
                if (additionalRes.status === 201) {
                    // console.log(additionalRes);
                    navigate(`/dashboard/products/new#preview`, { state: { product: res.data } });
                }
            }
        } catch (err) {
            console.error('Error creating product:', err);
            toastIdRef.current = toast({
                position: 'top',
                render: () => (
                    <ToastFeedback
                        message={`Product Saved To Draft`}
                        title={err.response.data.message}
                        icon={errorImg}
                        color={null}
                        btnColor={null}
                        bgColor={undefined}
                        handleClose={close}
                    />
                ),
            });
        }
    };

    const getSkillSellingData = async (productID) => {
        try {
            const res = await axios.get(`${baseUrl}/skillSellings/${productID}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            // console.log(res);
        } catch (err) {
            console.error('Error creating product:', err);
        }
    };

    return { updateProduct, createProduct, getSkillSellingData, isLoading };
};
