import store from '../store';
import usersApi from '../api/usersApi';

export const login = (creds) => {
    return function(dispatch) {
        return usersApi.login(creds).then(response => {
            if(response.status === 200)
            {
                dispatch(loginSuccess(response.data.token));
            }
        },
        error => {
            dispatch(loginFail())
            console.log(error);
            // to get error response codes
            // console.log(error.response)
        });
    }
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

export const getLoggedUser = (token) => {
    return function(dispatch) {
        return usersApi.checkLogin(token).then(response => {
            if(response.status === 200)
            {
                dispatch(checkSuccess());
            }
        },
        error => {
            dispatch(checkFail());
            console.log(error);
            // to get error response codes
            // console.log(error.response)
        });
    }
}

export function checkSuccess() {
    console.log("success")
    return {
        type: 'GET_LOGGED_USER',
        logged: true
    }
}

export function checkFail() {
    console.log("fail")
    return {
        type: 'GET_LOGGED_USER',
        logged: false
    }
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