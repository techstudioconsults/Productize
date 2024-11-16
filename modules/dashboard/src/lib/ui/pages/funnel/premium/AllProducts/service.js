import { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '@productize/redux';

export const useUpdateFunnel = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = useSelector(selectCurrentToken);

  const updateFunnel = async () => {
    const formattedData = new FormData();
    formattedData.append('status', 'draft');
    try {
      setIsLoading(true);
      const response = await axios.patch('https://api-dev.trybytealley.com/api/funnels/?_method=PATCH', formattedData, {
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

  return { data, isLoading, error, updateFunnel };
};
