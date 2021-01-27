import http from "../http-common"

class AuthService {
    login(user) {
        console.log(user)
        return http
            .get( '/users/login', {
                params: {
                    username: user.username,
                    password: user.password
                }
            })
            .then(response => {
                console.log(response.data)
                localStorage.setItem('user', JSON.stringify(user));
                return response.data;
            })
    }

    logout() {
        localStorage.removeItem('user');
    }

    register(user) {
        return http.post('/users/signup',  user);
    }
}

export default new AuthService();