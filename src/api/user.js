/**
 * @author YangLing
 * @date 2022/9/20 10:20
 */

import request from "../utils/request"

/**
 * 登录方法
 * @param data {username:'', password:''}
 * @returns {AxiosPromise}
 */
export const login = (data = {}) => {
  return request({
    url : '/admin/login',
    method : "POST",
    data
  })
}

/**
 * 获取用户信息接口
 * @returns {AxiosPromise}
 */
export const userInfo = () => {
  return request({
    url : '/admin/getUserInfo',
    method : "GET"
  })
}

/**
 * 退出登录接口
 * @returns {AxiosPromise}
 */
export const logout = () => {
  return request({
    url : "/admin/logout",
    method : "POST"
  })
}
