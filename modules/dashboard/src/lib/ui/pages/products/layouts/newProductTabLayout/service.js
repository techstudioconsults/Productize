/* eslint-disable @nx/enforce-module-boundaries */
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
        console.log(data);
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
            description: data.description,
            cover_photos: data.cover_photos,
            thumbnail: data.thumbnail[0],
            highlights: data.highlights,
            tags: data.tags,
            price: data.price,
            title: data.title,
            product_type: data.product_type,
        };

        if (data.product_type === `digital_product`) {
            try {
                const res = await query(`post`, `/products`, formData);
                console.log(res.data);
                if (res.status === 201) {
                    const DPRes = await query(`post`, `/digitalProducts`, {
                        category: `Product`,
                        resources: data.data,
                        product_id: res.data.data.id,
                    });
                    if (DPRes.status === 201) {
                        console.log(DPRes);
                        navigate(`/dashboard/products/new#preview`, {
                            state: { product: res.data },
                        });
                    }
                }
            } catch (err) {
                console.log(err);
            }
        } else {
            try {
                const res = await query(`post`, `/products`, formData);
                console.log(res.data);
                if (res.status === 201) {
                    const DPRes = await query(`post`, `/skillSellings`, {
                        category: 'Product',
                        product_id: res.data.data.id,
                        level: data.level,
                        availability: data.availability,
                        link: data.portfolio_link,
                    });
                    if (DPRes.status === 201) {
                        console.log(DPRes);
                        navigate(`/dashboard/products/new#preview`, {
                            state: { product: res.data },
                        });
                    }
                }
            } catch (err) {
                console.log(err);
            }
        }
    };

    return { updateProduct, createProduct, isLoading };
};
