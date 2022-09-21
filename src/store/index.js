import Vue from "vue";
import Vuex from "vuex";
import {setToken, getToken, setUserInfo, getUserInfo} from "../utils/auth"
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token : getToken() || "",
    userInfo : getUserInfo() || ""
  },
  getters: {
    token(state){
      return state.token
    },
    userInfo(state){
      return state.userInfo
    }
  },
  mutations: {
    SET_TOKEN(state,token){
      state.token = token
      setToken(token)
    },
    SET_USER_INFO(state,userInfo){
      state.userInfo = userInfo
      setUserInfo(userInfo)
    }
  },
  actions: {
    DIS_SET_TOKEN({commit},token){
      commit("SET_TOKEN",token)
    },
    DIS_SET_USER_INFO({commit},userInfo){
      commit("SET_USER_INFO", userInfo)
    }
  },
  modules: {},
});
