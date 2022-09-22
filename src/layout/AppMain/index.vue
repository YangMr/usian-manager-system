<template>
  <div>
    <app-link v-if="controllLink"></app-link>
    <router-view></router-view>
  </div>
</template>

<script>
import AppLink from "./Link"
export default {
  name: "index",
  components : {
    AppLink
  },
  computed : {
    controllLink(){
      return !(this.$route.path === "/index")
    }
  }
};
</script>

<style scoped>

</style>
