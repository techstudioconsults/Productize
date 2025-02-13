import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { selectCurrentToken } from '../../../redux/src';
import { getCsrfToken } from '../../../../shared/redux/src/lib/apiSlice';

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const useAxiosInstance = ({ MIME_TYPE }) => {
  const [isLoading, setLoading] = useState(false);
  const [csrfToken, setCsrfToken] = useState(null);
  const token = useSelector(selectCurrentToken);

  useEffect(() => {
    const setupCsrfToken = async () => {
      try {
        const token = await getCsrfToken();
        setCsrfToken(token);
      } catch (error) {
        console.error('CSRF token setup failed:', error);
      }
    };
    setupCsrfToken();
  }, []);

  const headersCredentials = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': MIME_TYPE,
      'X-XSRF-TOKEN': csrfToken || '', // Include the CSRF token
    },
    withCredentials: true, // Ensure cookies are included
    withXSRFToken: true, // Include the CSRF token in the headers
  };

  const query = async (method, endPoint, content) => {
    setLoading(true);
    try {
      const res = await axios[method](`${BASE_URL}${endPoint}`, content, headersCredentials);
      setLoading(false);
      return res;
    } catch (err) {
      console.error(err);
      setLoading(false);
      throw err;
    }
  };

  return { query, isLoading };
};
