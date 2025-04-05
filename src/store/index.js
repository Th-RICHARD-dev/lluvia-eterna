import { createStore } from 'vuex'

export default createStore({
  state: {
    perfumes: []  // This will store your perfume data
  },
  mutations: {
    setPerfumes(state, perfumes) {
      state.perfumes = perfumes
    }
  },
  actions: {
    // You can add actions here to fetch perfume data
  }
})