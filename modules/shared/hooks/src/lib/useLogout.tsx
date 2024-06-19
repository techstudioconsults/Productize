import { useLogoutMutation } from '@productize/redux';
import { useNavigate } from 'react-router-dom';

export const useLogout = () => {
    const [logout] = useLogoutMutation();
    const navigate = useNavigate();

    const logOut = async () => {
        try {
            const res = await logout(null).unwrap();
            if (res.message) {
                navigate(`/auth/login`);
            }
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    return { logOut };
};
