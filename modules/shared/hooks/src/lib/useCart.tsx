import { useSelector } from 'react-redux';
import { selectCart } from '@productize/redux';

export const useCart = () => {
    const cart = useSelector(selectCart);
    return cart;
};
