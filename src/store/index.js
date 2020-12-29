import Vuex from 'vuex'

export default Vuex.createStore({
  state: {
    user:{
      nickname: '',
      userID: ''
    }
  },
  mutations: {
    saveUserInfo(state,userInfo){
      state.user = userInfo
    }
  },
  actions: {
  },
  modules: {
  }
});
