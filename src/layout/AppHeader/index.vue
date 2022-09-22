<template>
  <div>
    <router-link class="link" to="/">
      <img class="logo" src="http://vue.mengxuegu.com/img/logo.7156be27.png" alt="logo" width="25px">
      <span class="company">积云会员管理系统</span>
    </router-link>
    <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          {{$store.getters.userInfo.name || ""}}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-edit" command="changePass">修改密码</el-dropdown-item>
        <el-dropdown-item icon="el-icon-s-fold" command="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  methods : {
    handleCommand(command){
      switch (command){
        case "changePass" :
          this.handleChangePass()
          break
        case "logout" :
          this.handleLogout()
          break
      }
    },
    handleChangePass(){
      alert("修改密码")
    },
    async handleLogout(){
      try{
        const response = await this.$store.dispatch("handleLogout")
        setTimeout(()=>{
          this.$router.push("/login")
        },100)
        this.$message.success("退出成功")
      }catch (e) {
        console.log(e.message)
      }

    }
  }
};
</script>

<style scoped>
.link{
  text-decoration: none;
  color : #fff;
  margin-left: 30px;
}

.logo{
  vertical-align: middle;
}
.company{
  margin-left: 5px;
  vertical-align: middle;
}

.el-dropdown{
  float : right;
  margin-right:30px;
  color : #fff;
}
</style>
