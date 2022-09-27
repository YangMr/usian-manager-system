/**
 * @author YangLing
 * @date 2022/9/20 10:20
 */

import request from "../utils/request"

/**
 * 获取员工分页查询列表
 */
const getStaffList = (currentPage,pageSize,data) => {
	return request({
		url : `/staff/list/search/${currentPage}/${pageSize}`,
		method : "POST",
		data
	})
}

/**
 * 新增员工接口
 */
const addStaff = (data) => {
	return request({
		url : '/staff',
		method : 'POST',
		data
	})
}

/**
 * 编辑员工接口
 */
const editStaff = (id,data) => {
	return request({
		url : `/staff/${id}`,
		method : 'PUT',
		data 
	})
}

/**
 * 查询单个员工接口
 */
const findStaff = (id) => {
	return request({
		url : `/staff/${id}`,
		method : "GET"
	})
}


/**
 * 删除单个员工接口
 */
const deleteStaff = (id) => {
	return request({
		url : `/staff/${id}`,
		method : "DELETE"
	})
}

/**
 * 导出封装api
 */
export default {
	getStaffList,
	addStaff,
	editStaff,
	findStaff,
	deleteStaff
}