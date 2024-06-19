import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { productFormSchema } from '@productize/dashboard';

export const useNewProductForm = () => {
    return useForm({
        criteriaMode: 'all',
        mode: 'onChange',
        resolver: yupResolver(productFormSchema),
    });
};
