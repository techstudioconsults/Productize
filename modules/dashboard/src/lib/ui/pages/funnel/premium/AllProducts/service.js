import { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '@productize/redux';
import { useFunnelData } from '../../services/useFunnelData';

export const useUpdateFunnel = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const token = useSelector(selectCurrentToken);
  const { fetchData } = useFunnelData(); // Use the hook

  const updateFunnel = async (template, title, status, thumbnail, funnelID) => {
    setIsLoading(true);
    const formattedData = new FormData();
    if (template) {
      formattedData.append('template', template);
    }
    formattedData.append('title', title);
    if (thumbnail && thumbnail instanceof File) {
      formattedData.append('thumbnail', thumbnail);
    }
    formattedData.append('status', status);
    formattedData.append('_method', `PATCH`);

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/funnels/${funnelID}`, formattedData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      console.log(response);
      setData(response.data.data);
      fetchData();
    } catch (err) {
      setIsLoading(false);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, error, updateFunnel };
};
