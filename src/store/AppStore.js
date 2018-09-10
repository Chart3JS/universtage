import userAPI from '@/services/InitService'
// import Constants from '@/store/Constants'
import PersistenceFactory from './persistence/PersistenceFactory.js'
// import respMock from '@/../mocks/app_mock'
const StorageManager = PersistenceFactory.StorageManager
const state = {
  appData: null,
  currentLanguage: 'en',
  showSettings: false,
  currentUser: null,
  // todo support persistence
  registerStatus: {
    step: 0,
    valid: false
  }
}
// let socket = null
// getters
const getters = {
  userInfo: (state, getters, rootState) => {
    return state.currentUser
  },
  isSettingsShown: () => {
    return state.showSettings
  },
  getRegisterStatus: () => {
    return state.registerStatus
  },
  getPhoneCodes: () => {
    console.log('getter works')
    console.dir(state.appData)
    return state.appData ? state.appData.phone_codes : []
  }
}
// actions
const actions = {
  init ({ commit }) {
    return userAPI.init()
  },
  register ({ commit }, options) {
    let { userData, state } = options
    console.log(userData)
    console.log(state)
    return userAPI.register(state, userData).then((result) => {
      if (result.status === 200) {
        commit('setRegistrationStep', result.data)
      } else {
        commit('setUser', null)
      }
    }).catch(() => {
      commit('setUser', null)
    })
  },
  login ({ commit }, userLogin) {
    return userAPI.login(userLogin).then((result) => {
      if (result.status === 200) {
        commit('setUser', result.data.user)
      } else {
        commit('setUser', null)
      }
    }).catch(() => {
      commit('setUser', null)
    })
  },
  logout ({ commit }) {
    commit('setUser', null)
  },
  setLanguage ({ commit }, lang) {
    commit('setCurrentLanguage', lang)
  },
  setShowSettings ({ commit }, isShown) {
    commit('setShowSettings', isShown)
  }
}
// mutations
const mutations = {
  setupAppData (state, appData) {
    state.appData = appData
  },
  setRegistrationStep (state, data) {
    // state.registerStatus.valid = true
  },
  setUser (state, user) {
    state.currentUser = user
    StorageManager.setItem('currentUser', state.currentUser)
  },
  setCurrentLanguage (state, lang) {
    state.currentLanguage = lang
  },
  setShowSettings (state, isShown) {
    state.showSettings = isShown
  },
  setAppInitData (state, appData) {
    // state.appData
  },
  UniverstageUIInit (state, appData) {
    console.info('UniverstageUIInit')
    state.appData = appData
    console.dir(state)
  }
}
// main store constructor
const setup = (socket) => {
  console.log('App Store socket setupt')
  // If msg changes - msg is updated when a standard msg is received from Node-RED over Socket.IO
  // Note that you can also listen for 'msgsReceived' as they are updated at the same time
  // but newVal relates to the attribute being listened to.
  socket.onChange('msg', (message) => {
    console.info('property msg changed! ' + message.topic)
    // console.dir(state)
    if (typeof (mutations[message.topic]) === 'function') {
      mutations[message.topic](state, message.payload)
    } else {
      console.error('Invalid action call')
    }
    // console.dir(newVal)
  })

  // You can get attributes manually. Non-existent attributes return 'undefined'
  // console.dir(uibuilder.get('msg'))

  // You can also set things manually. See the list of attributes top of page.
  // You can add arbitrary attributes to the object, you cannot overwrite internal attributes

  // Remember that onChange functions don't trigger if you haven't set them
  // up BEFORE an attribute change.
  socket.onChange('msgCopy', (newVal) => {
    console.info('msgCopy changed. New value: ', newVal)
  })
  // As noted, we could get the msg here too
  socket.onChange('msgsReceived', (newVal) => {
    console.info('New msg sent to us from Node-RED over Socket.IO. Total Count: ', newVal)
    // uibuilder.msg is a shortcut for uibuilder.get('msg')
  })

  // If Socket.IO connects/disconnects
  socket.onChange('ioConnected', (newVal) => {
    console.info('Socket.IO Connection Status Changed: ', newVal)
  })

  // If a message is sent back to Node-RED
  socket.onChange('msgsSent', (newVal) => {
    console.info('New msg sent to Node-RED over Socket.IO. Total Count: ', newVal)
  })

  // If we receive a control message from Node-RED
  socket.onChange('msgsCtrl', (newVal) => {
    console.info('New control msg sent to us from Node-RED over Socket.IO. Total Count: ', newVal)
  })
  // socket based mutations
  let allMutations = Object.assign(mutations, {
    sendMessage: (topic, message) => {
      socket.send({ 'topic': topic, 'payload': message })
    }
  })
  return {
    namespaced: true,
    state,
    getters,
    actions,
    mutations: allMutations
  }
}
export default setup
