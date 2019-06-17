import api from '@/api'

export default {
  namespaced: true,
  state: {
    userinfo: {

    }
  },
  mutations: {
    setuserinfo (state, data) {
      state.userinfo = data
    }
  },
  actions: {
    getUserInfo (context) {

      api.islogin().then((res) => {
        context.commit('setuserinfo', res.data)
      })
    }
  }
}
