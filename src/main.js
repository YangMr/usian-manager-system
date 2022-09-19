import Vue from "vue";
// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from "./App.vue";
import router from "./router";
import store from "./store";

// 注册element-ui
Vue.use(ElementUI);

Vue.config.productionTip = false;

console.log("--",process.env.VUE_APP_BASE_API)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
