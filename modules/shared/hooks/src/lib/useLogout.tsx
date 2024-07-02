import { useLogoutMutation } from '@productize/redux';

export const useLogout = () => {
    const [logout] = useLogoutMutation();

    const logOut = () => {
        logout(null).unwrap();
    };

    return { logOut };
};
