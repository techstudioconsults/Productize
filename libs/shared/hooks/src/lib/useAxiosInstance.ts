import { selectCurrentToken } from '@productize/shared/redux';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

const BASE_URL = process.env['NX_BASE_URL'];

export const useAxiosInstance = () => {
  const [isLoading, setLoading] = useState(false);
  const token = useSelector(selectCurrentToken);
  const headersCredentials = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  };

  const query = async (
    method: `get` | `post`,
    endPoint: string,
    content?: object
  ) => {
    // console.log(content);
    setLoading(true);
    try {
      const res = await axios[method](
        `${BASE_URL}${endPoint}`,
        content,
        headersCredentials
      );
      if (res.status === 200 || res.status === 201) {
        setLoading(false);
        return res;
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return { query, isLoading };
};
