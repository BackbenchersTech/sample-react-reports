const initialState = {
    pending: true,
    logged: false,
    token: ""
}

const loginReducer = (state = initialState, action) => {
    if(action.type === 'GET_LOGGED_USER') {
        return Object.assign({}, state, {
            pending: false,
            logged: action.logged
        })
    }

    if(action.type === 'SET_LOGGED_USER') {
        return Object.assign({}, state, {
            pending: false,
            logged: action.logged,
            token: action.token
        })
    }
    
    return state
}

export default loginReducer;
