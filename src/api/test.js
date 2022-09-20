/**
 * @author YangLing
 * @date 2022/9/20 09:37
 */

// 会员管理接口    http://vue.mengxuegu.com/pro-api/member/list/search/1/20
// 供应商管理接口  http://vue.mengxuegu.com/pro-api/supplier/list/search/1/10
// 查询单个会员接口  http://vue.mengxuegu.com/pro-api/member/10

// 引入request
import request from "../utils/request"

/**
 * 获取会员列表接口
 * @param page
 * @param size
 * @param data
 */
const getMemberList = (page = 1 ,size= 10,data={}) => {
  return request({
    url : `/member/list/search/${page}/${size}`,
    method : 'post',
    data
  })
}

/**
 * 获取供应商列表接口
 * @param page
 * @param size
 * @param data
 */
const getSupplierList = (page = 1,size = 10,data={}) => {
  return request({
    url : `/supplier/list/search/${page}/${size}`,
    method : 'POST',
    data
  })
}

/**
 * 查询单个会员接口
 * @param id
 * @returns {*}
 */
const findMember = (id) => {
  return request({
    url : `/member/${id}`,
    method : 'GET',
    data : {
      age : 10000
    }
  })
}

export default {
  getMemberList,
  getSupplierList,
  findMember
}
