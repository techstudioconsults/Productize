import { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '@productize/redux';

export const useGetDeletedFunnels = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = useSelector(selectCurrentToken);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get('https://api-dev.trybytealley.com/api/funnels/me?status=deleted', {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      setData(response.data.data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, error, fetchData };
};
