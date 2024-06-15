import { selectCurrentToken } from '@productize/redux';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export function useTokenExists() {
    const token = useSelector(selectCurrentToken);
    const [tokenExists, setTokenExists] = useState(false);

    useEffect(() => {
        setTokenExists(!!token);
    }, [token]);

    return tokenExists;
}
