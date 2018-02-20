import axios from 'axios';

class UsersApi {
    static login(creds) {
        let body = {
            email: creds.email,
            passwd: creds.pwd
        }
        return axios.post('http://localhost:9000/api/login', body)
    }
}

export default UsersApi;
