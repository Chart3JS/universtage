import Api from '@/services/Api'

export default {
  init (options = {}) {
    return Api().post('/app/init', options)
  },
  register (state, userData) {
    return Api().post('/auth/register-' + state.step, userData)
  },
  login (userLogin) {
    return Api().post('/auth/login', userLogin)
  }
}
