/**
 * @author YangLing
 * @date 2022/9/20 10:20
 */

import request from "../utils/request"

/**
 * 获取供应商列表
 */
const getSupplierList = (currentPage,pageSize,data) => {
	return request({
		url : `/supplier/list/search/${currentPage}/${pageSize}`,
		method : "POST",
		data
	})
}

/**
 * 新增供应商列表
 */
const addSupplier = (data) => {
	return request({
		url : '/supplier',
		method : 'POST',
		data
	})
}

/**
 * 编辑供应商列表
 */
const editSupplier = (id,data) => {
	return request({
		url : `/supplier/${id}`,
		method : 'PUT',
		data 
	})
}

/**
 * 查询单个供应商
 */
const findSupplier = (id) => {
	return request({
		url : `/supplier/${id}`,
		method : "GET"
	})
}


/**
 * 删除单个供应商
 */
const deleteSupplier = (id) => {
	return request({
		url : `/supplier/${id}`,
		method : "DELETE"
	})
}

/**
 * 导出封装api
 */
export default {
	getSupplierList,
	addSupplier,
	editSupplier,
	findSupplier,
	deleteSupplier
}