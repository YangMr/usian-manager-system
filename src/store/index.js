import Vue from "vue";
import Vuex from "vuex";
import {login, userInfo, logout} from "../api/user"
import {setToken, getToken, setUserInfo, getUserInfo, removeTokenAndUserInfo} from "../utils/auth"
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
      console.log("---",JSON.stringify(state.userInfo))
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
    /**
     * 登录
     * @param commit
     * @param loginForm
     * @returns {Promise<(function(*): *)|CancelToken|*>}
     */
    async login({commit}, loginForm){
      try{
        const response = await login(loginForm)
        commit("SET_TOKEN",response.token)
        return response.token
      }catch (e){
        console.log(e.message)
      }
    },
    /**
     * 获取用户信息
     * @param commit
     * @returns {AxiosPromise<any>}
     */
    async handleUserInfo({commit}){
      try{
        const userinfo = await userInfo()
        commit("SET_USER_INFO",userinfo)
        return userinfo
      }catch (e){
        console.log(e.message)
      }
    },
    /**
     * 退出登录
     * @param commit
     */
    async handleLogout({commit}){
      const response = await logout()
      commit("SET_TOKEN","")
      commit("SET_USER_INFO","")
      return response
    }
  },
  modules: {},
});
