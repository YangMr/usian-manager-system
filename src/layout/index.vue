<template>
  <el-container>
     <el-header>
       <app-header></app-header>
     </el-header>
    <el-container>
      <el-aside width="230px">
        <app-aside></app-aside>
      </el-aside>
      <el-main>
        <app-main></app-main>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import AppHeader from "./AppHeader"
import AppAside from "./AppAside"
import AppMain from "./AppMain"
export default {
  name: "Layout",
  components : {
    AppHeader,
    AppAside,
    AppMain
  }
};
</script>

<style scoped>
.el-container{
  height : 100%;
}
.el-header {
  height : 50px!important;
  line-height: 50px;
  background-color: #2d3a4b;
  padding:0;
}

.el-aside {
  background-color:#545c64;
  height : 100%;
}

.el-main {
  background-color: #fff;
  height : 100%;
}


</style>
