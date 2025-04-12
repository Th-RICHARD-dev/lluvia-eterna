import { createStore } from 'vuex'

export default createStore({
  state: {
    perfumes: []
  },
  mutations: {
    setPerfumes(state, perfumes) {
      state.perfumes = perfumes
    }
  },
  actions: {
    // Les actions pour fetch les data des parfum seront sored ici
  }
})