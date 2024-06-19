// import { ToastFeedback, useToastAction } from '@productize/ui';
import { useAxiosInstance } from '@productize/hooks';
// import errorImg from '@icons/error.svg';
import { useLocation, useNavigate } from 'react-router-dom';

export const useProductActions = () => {
    const { state } = useLocation();
    const { query, isLoading } = useAxiosInstance({ MIME_TYPE: 'multipart/form-data' });
    // const { toast, toastIdRef, close } = useToastAction();
    const navigate = useNavigate();

    const updateProduct = async (data) => {
        const formData = {
            title: data.title,
            price: data.price,
            description: data.description,
            data: data.data,
            cover_photos: data.cover_photos,
            thumbnail: data.thumbnail[0],
            highlights: data.highlights,
            tags: data.tags,
        };

        try {
            const res = await query(`post`, `/products/${state?.product?.id}?_method=PUT`, formData);
            if (res.status === 200) {
                navigate(`/dashboard/products/new#preview`, {
                    state: { product: res.data },
                });
            }
        } catch (err) {
            console.log(err);
        }
    };

    const createProduct = async (data) => {
        const formData = {
            ...data,
            thumbnail: data.thumbnail[0],
        };

        try {
            const res = await query(`post`, `/products`, formData);
            if (res.status === 201) {
                navigate(`/dashboard/products/new#preview`, {
                    state: { product: res.data },
                });
            }
        } catch (err) {
            console.log(err);
        }
    };

    return { updateProduct, createProduct, isLoading };
};
