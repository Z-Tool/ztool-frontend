import router from '../router'
import constant from '../constant.js'

export default {
  // User object will let us check authentication status
  user: {
    authenticated: false
  },
  // Send a request to the login URL and save the returned JWT
  login(context, creds, redirect) {
    context.$http.get(constant.APIServer + '/api/v1.0/token', creds).then(response => {
      localStorage.setItem('id_token', response.body.token, '3600s');
      this.user.authenticated = true;
      context.$notify({
        title: 'Jarrekk',
        message: 'Welcome back ' + response.body.email + '!',
        duration: 3000,
        type: 'success'
      });
      // console.log(redirect)
      if (redirect) {
        router.replace({name: redirect})
      }
    }, response => {
      console.log(0, response);
      if (response.status === 0) {
        context.$notify.error({
          title: 'Jarrekk',
          message: 'Login error! Please check your network.',
          duration: 3000
        })
      } else {
        context.$notify.error({
          title: 'Jarrekk',
          message: 'Username or password is wrong!',
          duration: 3000
        })
      }
    });
  },

  signup(context, creds, redirect) {
    context.$http.post(constant.APIServer + '/api/v1.0/user/new', creds, (data) => {
      localStorage.setItem('id_token', response.body.token);
      this.user.authenticated = true;
      if (redirect) {
        router.replace({name: redirect})
      }
    }).error((err) => {
      context.error = err
    })
  },
  // To log out, we just need to remove the token
  logout() {
    localStorage.removeItem('id_token');
    this.user.authenticated = false
  },
  checkAuth() {
    const jwt = localStorage.getItem('id_token');
    this.user.authenticated = !!jwt;
  },
  // The object to be passed as a header for authenticated requests
  getAuthHeader() {
    return {
      'Authorization': 'Basic ' + window.btoa(localStorage.getItem('id_token') + ':')
    }
  }
}
