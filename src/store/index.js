import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedHeroes: [],
    preload: false
  },
  mutations: {
    setPreload(state){
      state.preload = true;
    },
    setHeroes(state, hero){
      if(state.selectedHeroes.length < 2){
        state.selectedHeroes.push(hero);
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
