/**
 * @author YangLing
 * @date 2022/9/21 15:04
 */

const TOKEN_KEY = "token"
const USER_INFO_KEY = "userInfo"

/**
 * 设置token
 * @param token
 */
export const setToken = (token) => {
  localStorage.setItem(TOKEN_KEY,token)
}
/**
 * 获取token
 * @returns {string}
 */
export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY)
}
/**
 * 设置用户信息
 * @param userInfo
 */
export const setUserInfo = (userInfo) => {
  localStorage.setItem(USER_INFO_KEY,JSON.stringify(userInfo))
}
/**
 * 获取用户新信息
 * @returns {any}
 */
export const getUserInfo = () => {
  return JSON.parse(localStorage.getItem(USER_INFO_KEY) || "{}")
}
/**
 * 删除token以及用户信息
 */
export const removeTokenAndUserInfo = () => {
  localStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem(USER_INFO_KEY)
}
