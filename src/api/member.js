/**
 * @author YangLing
 * @date 2022/9/20 10:20
 */

import request from "../utils/request"

// 获取会员列表与查询分页接口
const getMemberList = (page,size,data) => {
  return request({
    url : `/member/list/search/${page}/${size}`,
    method : "POST",
    data
  })
}


// 删除会员接口
const deleteMemberList = (id) => {
  return request({
    url : `/member/${id}`,
    method : 'DELETE'
  })
}

// 添加会员接口
const addMember = () => {

}

// 编辑会员接口
const editMember = () => {

}

// 查询单个会员接口
const findMember = () => {

}


export default {
  getMemberList,
  deleteMemberList,
  addMember,
  editMember,
  findMember
}
