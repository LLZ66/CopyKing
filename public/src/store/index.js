import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isFind: false,
    emotion: null,
  },
  mutations: {
    find(state) {
      state.isFind = !state.isFind
    },
    changeEmotion(state,payload) {
      state.emotion = payload.type
    }
  },
  actions: {
  },
  modules: {
  }
})
