/* eslint-disable @nx/enforce-module-boundaries */
import { useState } from 'react';
import axios from 'axios';
import { useToast } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '@productize/redux';
import { ToastFeedback } from '@productize/ui';
import { useNavigate } from 'react-router-dom';

export const useDeleteFunnel = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const token = useSelector(selectCurrentToken);
  const toast = useToast();

  const deleteFunnel = async (funnelId) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.delete(`https://api-dev.trybytealley.com/api/funnels/${funnelId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        toast({
          position: 'top',
          render: () => (
            <ToastFeedback
              btnColor={`purple.200`}
              message={`Check the deleted tab to recover product`}
              title="Funnel Deleted Successfully"
              icon={undefined}
              bgColor={undefined}
              color={undefined}
            />
          ),
        });
        navigate(`/dashboard/funnels/#deleted`);
      }
      return response.data;
    } catch (err) {
      setError(err);
      toast({
        title: 'Error deleting funnel.',
        description: err.response?.data?.message || 'An unexpected error occurred.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return { deleteFunnel, isLoading, error };
};
