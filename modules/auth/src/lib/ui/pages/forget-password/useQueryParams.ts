// src/hooks/useQueryParams.ts
import { useState, useEffect } from 'react';

const useQueryParams = () => {
    const [params, setParams] = useState<{ [key: string]: string | null }>({});

    useEffect(() => {
        const url = window.location.href;
        const queryParams = new URLSearchParams(new URL(url).search);
        const token = queryParams.get('token');
        const email = queryParams.get('email');
        setParams({ token, email });
    }, []);

    return params;
};

export default useQueryParams;
