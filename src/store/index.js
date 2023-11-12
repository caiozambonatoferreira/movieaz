import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    favorites: []
  },
  mutations: {
    FAVORITE_MOVIE(state, payload) {
      if (state.favorites.some(movie => movie.Title === payload.Title)) {
        return
      }

      state.favorites.push({ ...payload, rate: 0 })
    }
  },
  actions: {
    favoriteMovie(context, payload) {
      context.commit('FAVORITE_MOVIE', payload)
    }
  }
})
