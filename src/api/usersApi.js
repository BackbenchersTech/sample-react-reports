import axios from 'axios';

class UsersApi {
    static login(creds) {
        let body = {
            email: creds.email,
            passwd: creds.pwd
        }
        return axios.post('http://localhost:9000/api/login', body)
    }

    static checkLogin(token) {
        let headers = {
            "access-token": token
        }
        return axios.get('http://localhost:9000/api/tokenCheck', {'headers': headers});
    }
}

export default UsersApi;
