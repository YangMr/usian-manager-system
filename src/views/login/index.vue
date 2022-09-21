<template>
  <div class="login-wrapper">
    <div class="login-form">
      <h2 class="login-title">积云会员管理系统</h2>
      <el-form :rules="rules" ref="form" :model="loginForm" label-width="60px">
        <el-form-item label="账号" prop="username">
          <el-input v-model.trim="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model.trim="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleLoginSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import {login} from "../../api/user"
export default {
  name: "index",
  data(){
    return {
      loginForm: {
        username: '',
        password: '',
      },
      rules : {
        username : [
          {required : true, message : "账号不能为空", trigger : 'blur'},
          {min : 3, max : 12, message: '请输入3～12个字符', trigger: 'blur'}
        ],
        password : [
          {required : true, message : "密码不能为空", trigger : 'blur'},
        ]
      }
    }
  },
  methods: {
    // 点击登录按钮进行表单校验
    handleLoginSubmit() {
      this.$refs['form'].validate(valid=>{
        if(!valid) return
        // 校验通过之后执行登录方法
        this.handleLogin()
      })
    },
    // 登录方法
    async handleLogin(){
      try{
        const response = await login(this.loginForm)
        console.log('response=>',response)
        console.log('token=>', response.token)
        // 将token存到vuex 以及 本地 
      }catch (e){
        console.log(e.message)
      }

    }
  }
};
</script>

<style scoped>
.login-wrapper{
  background: url('http://vue.mengxuegu.com/img/login.b665435f.jpg');
  height: 100%;
  width: 100%;
  overflow: hidden;
}
.login-form{
  width: 350px;
  background-color:rgba(255,255,255,0.8);
  margin: 160px auto;
  border-radius: 20px;
  padding:28px;
}
.login-title{
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  padding-top: 20px;
}
.el-form{
  margin-top: 20px;
}
</style>
