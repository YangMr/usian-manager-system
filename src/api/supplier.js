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
 * 导出封装api
 */
export default {
	getSupplierList
}