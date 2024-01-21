/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { selectCurrentToken } from "../../../redux/src";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const useAxiosInstance = ({ MIME_TYPE }) => {
    const [isLoading, setLoading] = useState(false);
    const token = useSelector(selectCurrentToken);
    // console.log(token);

    const headersCredentials = {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": MIME_TYPE,
        },
    };

    const query = async (method, endPoint, content) => {
        // console.log(content);
        setLoading(true);
        try {
            const res = await axios[method](`${BASE_URL}${endPoint}`, content, headersCredentials);
            if (res.status === 200 || res.status === 201) {
                setLoading(false);
                return res;
            }
        } catch (err) {
            console.log(err);
            setLoading(false);
            // Handle the error or rethrow it
            throw err;
        }
    };

    return { query, isLoading };
};
