export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const login = (user: object, rememberMe: boolean) => {
    return {
        type: LOGIN,
        payload: {
            user,
            rememberMe,
        },
    };
}

export const logout = () => {
    return {
        type: LOGOUT,
    };
}