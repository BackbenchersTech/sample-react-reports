import store from './store'

export function login(creds) {
    console.log(creds);
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
            console.log("error")
            resolve(false)
        }
    })
}