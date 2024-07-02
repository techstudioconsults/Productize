/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { selectCurrentToken } from '../../../redux/src';

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const useAxiosInstance = ({ MIME_TYPE }) => {
    // const dispatch = useDispatch();
    const [isLoading, setLoading] = useState(false);
    const token = useSelector(selectCurrentToken);

    const headersCredentials = {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': MIME_TYPE,
        },
    };

    const query = async (method, endPoint, content) => {
        setLoading(true);
        try {
            const res = await axios[method](`${BASE_URL}${endPoint}`, content, headersCredentials);
            setLoading(false);
            return res;
        } catch (err) {
            // dispatch({ type: `App/setAppError`, payload: err.response.data });
            setLoading(false);
            console.error(err);
            throw err;
        }
    };

    return { query, isLoading };
};
