<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <el-button icon="el-icon-search" circle></el-button>
      <el-button type="primary" icon="el-icon-edit" circle></el-button>
      <el-button type="success" icon="el-icon-check" circle></el-button>
      <el-button type="info" icon="el-icon-message" circle></el-button>
      <el-button type="warning" icon="el-icon-star-off" circle></el-button>
      <el-button type="danger" icon="el-icon-delete" circle></el-button>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import TestApi from "../api/test"
export default {
  name: "HomeView",
  data(){
    return {
      page : 1,
      size : 10,
      id : 100,
      test : {
        name : "jack"
      }
    }
  },
  components: {
    HelloWorld,
  },
  created(){
    // 会员管理
    TestApi.getMemberList(this.page,this.size,this.test).then(response=>{
      console.log('member=>',response)
    }).catch(error=>{
      console.log(error)
    })

    // 供应商管理
    TestApi.getSupplierList(this.page,this.size).then(response=>{
      console.log("supplier=>", response)
    }).catch(error=>{
      console.log(error)
    })

    // 查询会员
    TestApi.findMember(this.id).then(response=>{
      console.log("find=>", response)
    }).catch(error=>{
      console.log(error)
    })
  }
};
</script>
