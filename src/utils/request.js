/**
 * @author YangLing
 * @date 2022/9/20 09:09
 */
// 引入axios
import axios from 'axios'

// 自定义错误信息提示内容
const exceptionMessage = {
	1000: '用户名或者密码发生错误',
	3000: ''
}

import {removeTokenAndUserInfo} from "./auth"

import {
	Loading
} from 'element-ui'

import {
	Message
} from "element-ui"


import store from "../store"

// 封装全局loading加载  --- 单例模式

const loading = {
	loadingInstance : null,
	open(){
		if(!this.loadingInstance){
			this.loadingInstance = Loading.service({
				target: '.el-main',
				text: '拼命加载中...',
				background: "rgba(0,0,0,0.4)"
			})
		}
	},
	close(){
		if(this.loadingInstance !== null){
			this.loadingInstance.close()
			this.loadingInstance = null
		}
	}
}



//创建axios实例配置, 返回实例对象
const service = axios.create({
	// baseURL : process.env.VUE_APP_BASE_API,
	timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(function(config) {


	// 获取vuex的token
	const token = store.getters.token
	// 当token存在的时候，则将token通过请求头发送给后台
	if (token) config.headers.authorization = "Bearer " + token

	// 开启loading
	loading.open()


	return config;
}, function(error) {
	// 关闭loading
	loading.close()
	return Promise.reject(error);
})

// 响应拦截器
service.interceptors.response.use(function(response) {
	

	// 关闭loading
	loading.close()

	if (response.status < 400) {
		if(response.data.data){
			return response.data.data
		}else{
			return response.data.msg
		}
	}

	if (response.status === 401) {
		// TODO token的过期处理
		// 清空本地的token和vuex以及用户信息
		store.commit("SET_TOKEN","")
		store.commit("SET_USER_INFO","")
		removeTokenAndUserInfo()
		// 跳转到登录页
		router.replace("/login")
		return
	}


	_showError(response.data.code, response.data.message)

	return response;
}, function(error) {
	// 关闭loading
	loading.close()
	return Promise.reject(error);
})

/**
 * 错误提示
 * @param errorCode
 * @param message
 * @private
 */
const _showError = (errorCode, message) => {
	let title
	title = exceptionMessage[errorCode] || message || '发生未知错误'
	Message.error(title)
}

/**
 * 解决不同请求方式时统一使用data来进行传参
 * @param options
 */
const request = (options) => {

	options.method = options.method || 'get'
	if (options.method.toLowerCase() === "get") {
		options.params = options.data || options.params
		delete options.data
	}

	// 解决多个代理请求的问题
	service.defaults.baseURL = options.proxy || process.env.VUE_APP_BASE_API

	return service(options)
}


// 导出实例对象
export default request
