import { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentToken, setFunnelData } from '@productize/redux';

export const useFunnelData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = useSelector(selectCurrentToken);
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get('https://api-dev.trybytealley.com/api/funnels/me', {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      dispatch(setFunnelData(response.data.data));
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, fetchData };
};
