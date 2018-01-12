import store from './store'

export const login = (creds) => {
    return new Promise((resolve, reject) => {
        if(  creds.email === "admin" && creds.pwd === "admin" ) {
            setTimeout(() => {
                store.dispatch({
                    type: 'SET_LOGGED_USER',
                    logged: true
                })
                resolve(true)
            }, 500)
        }
        else
        {
            resolve(false)
        }
    })
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