/* eslint-disable @nx/enforce-module-boundaries */
// import { ToastFeedback, useToastAction } from '@productize/ui';
import { useAxiosInstance } from '@productize/hooks';
import { selectCurrentToken } from '@productize/redux';
import axios from 'axios';
import { useCallback, useState } from 'react';
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
    const token = useSelector(selectCurrentToken);
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const { state } = useLocation();
    const { query, isLoading } = useAxiosInstance({ MIME_TYPE: 'multipart/form-data' });
    const navigate = useNavigate();
    // const [ssData, setSSData] = useState(null);
    // const [dpData, setDPData] = useState(null);
    // const [schema, setSchema] = useState(productFormSchema);

    const updateProduct = async (data) => {
        const formData = extractFormData(data);
        formData.resources = data.data;
        console.log(data, formData, state?.product);

        // const productCreationEndpoint = data.product_type === 'digital_product' ? `/digitalProducts/${dpData?.id}` : `/skillSellings/${ssData?.id}`;
        // const additionalData =
        //     data.product_type === 'digital_product'
        //         ? { category: data.category, resources: data.resources }
        //         : { category: data.category, level: data.level, availability: data.availability, link: data.portfolio_link };
        // console.log(additionalData);

        try {
            // const res = await query('put', `/products/${state?.product?.id}?_method=PUT`, formData);
            const res = await axios.post(`${baseUrl}/products/${state?.product?.id}?_method=PUT`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
            });
            if (res.status === 200) {
                // const additionalRes = await query('put', productCreationEndpoint, { ...additionalData });
                // console.log(additionalRes);
                // if (additionalRes.status === 201) {
                navigate(`/dashboard/products/new#preview`, { state: { product: res.data } });
                // }
            }
        } catch (err) {
            console.error('Error updating product:', err);
        }
    };

    const createProduct = async (data) => {
        console.log(data);
        const formData = extractFormData(data);
        formData.product_type = data.product_type;

        const productCreationEndpoint = data.product_type === 'digital_product' ? '/digitalProducts' : '/skillSellings';
        const additionalData =
            data.product_type === 'digital_product'
                ? { category: data.category, resources: data.data }
                : { category: data.category, level: data.level, availability: data.availability, link: data.portfolio_link };

        try {
            const res = await query('post', '/products', formData);
            if (res.status === 201) {
                const additionalRes = await query('post', productCreationEndpoint, { ...additionalData, product_id: res.data.data.id });
                if (additionalRes.status === 201) {
                    console.log(additionalRes);
                    navigate(`/dashboard/products/new#preview`, { state: { product: res.data } });
                }
            }
        } catch (err) {
            console.error('Error creating product:', err);
        }
    };

    const getSkillSellingData = useCallback(
        async (productID) => {
            try {
                const res = await axios.get(`${baseUrl}/skillSellings/products/${productID}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                console.log(res.data.data);
                if (res.status === 200) {
                    // setSSData(res.data.data);
                }
            } catch (err) {
                console.error('Error creating product:', err);
            }
        },
        [baseUrl, token]
    );

    const getDigitalProductData = useCallback(
        async (productID) => {
            try {
                const res = await axios.get(`${baseUrl}/digitalProducts/products/${productID}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                console.log(res.data.data);
                if (res.status === 200) {
                    // setDPData(res.data.data);
                }
            } catch (err) {
                console.error('Error creating product:', err);
            }
        },
        [baseUrl, token]
    );

    return { updateProduct, createProduct, getSkillSellingData, getDigitalProductData, isLoading };
};
