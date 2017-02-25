// @flow
export const signOut = () => delete localStorage.authToken;

export const getToken = () => localStorage.authToken;

export const saveToken = (token: String) => { localStorage.authToken = token; };

export const loggedIn = () => !!localStorage.authToken;

export const requireAuth = (nextState: Object, replace: Function) => {
    if (!loggedIn()) {
        replace({
            pathname: '/login',
            state: { nextPathname: nextState.location.pathname }
        });
    }
};
