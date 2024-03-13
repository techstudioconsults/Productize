import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useFetch(api: string, token: string) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null || '');

    useEffect(() => {
        if (!api) {
            setError('URL is not provided');
            setLoading(false);
            return;
        }
        const controller = new AbortController();
        const signal = controller.signal;
        const fetchdata = async () => {
            try {
                setLoading(true);
                const res = await axios.get(api, { headers: { Authorization: `Bearer ${token}` }, signal });
                setData(res.data);
            } catch (error) {
                console.error(error);
                setError(error as string);
            } finally {
                setLoading(false);
            }
        };
        fetchdata();
        return () => {
            controller.abort();
        };
    }, [api, token]);

    return { data, loading, error, setData };
}
