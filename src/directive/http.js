import router from '../router'
import constant from '../constant.js'
import Auth from './auth'

export default {
  async get(context, url, creds, redirect) {
    var data = await context.$http.get(constant.APIServer + url, {
      headers: Auth.getAuthHeader(),
      creds
    })
    .then(response => {
      // console.log(1, response)
      return response
    }, response => {
      // console.log(0, response)
      if (response.status == 401) {
        localStorage.removeItem('id_token')
        router.push({name: 'login'})
      } else {
        return response
      }
    });
    return data
  },
  async post(context, url, creds, redirect) {
    var data = await context.$http.post(constant.APIServer + url, {
      headers: Auth.getAuthHeader(),
      creds
    }).then(response => {
      // console.log(1, response)
      return response
    }, response => {
      // console.log(0, response)
      if (response.status == 401) {
        localStorage.removeItem('id_token')
        router.push({name: 'login'})
      } else {
        return response
      }
    });
    return data
  },
}
