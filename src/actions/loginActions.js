import store from '../store';
import usersApi from '../api/usersApi';

export const login = (creds) => {
    return function(dispatch) {
        return usersApi.login(creds).then(response => {
            if(response.status === 200)
            {
                dispatch(loginSuccess(response.data.token));
            }
        })
        .catch(error => {
            dispatch(loginFail())
            throw(error);
        });
    };
}

export function loginSuccess(token) {
    return {
        type: 'SET_LOGGED_USER',
        logged: true,
        token: token
    }
}

export function loginFail() {
    return {
        type: 'SET_LOGGED_USER',
        pending: false,
        logged: false,
        token: ""
    }
}

export const getLoggedUser = () => {
    setTimeout(() => {
        store.dispatch({
            type: 'GET_LOGGED_USER'
        })
    }, 500)
}

export const logout = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            store.dispatch({
            type: 'SET_LOGGED_USER',
            logged: false
            })
            resolve()
        }, 500)
    })
}