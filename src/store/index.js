import Vue from 'vue'
import Vuex from 'vuex'
import SocketMessaging from './SocketMessaging'
import AppStore from './AppStore'
const appStore = AppStore(SocketMessaging)
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    AppStore: appStore
  },
  strict: true,
  plugins: []
})
