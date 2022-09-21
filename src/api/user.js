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

