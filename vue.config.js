const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // 项目打包之后白屏问题
  publicPath : "./",
  devServer: {
    // 端口号
    port: 8888,
    // 主机名
    host: "localhost",
    // 启动项目时是否自动打开浏览器
    open: true,
    // 是否开启https
    https: false,
    // 配置跨域
    proxy : {
      // 代理1
      [process.env.VUE_APP_BASE_API]: {
        target: process.env.VUE_APP_SERVICE_URL,
        changeOrigin: true,
        pathRewrite: {
          ["^" + process.env.VUE_APP_BASE_API] : ""
        }
      },
      // 代理2
      [process.env.VUE_APP_BASE_V1]: {
        target : process.env.VUE_APP_SERVICE_URL_V1,
        changeOrigin : true,
        pathRewrite : {
          ["^" + process.env.VVUE_APP_BASE_V1] : ""
        }
      },
      // 代理3
      [process.env.VUE_APP_BASE_V2]: {
        target : process.env.VUE_APP_SERVICE_URL_V2,
        changeOrigin : true,
        pathRewrite : {
          ["^" + process.env.VUE_APP_BASE_V2] : ""
        }
      }
      // /dev-api 代理名称 process.env.VUE_APP_BASE_API === "/dev-api"
     // [process.env.VUE_APP_BASE_API] : {
     //    target : process.env.VUE_APP_SERVICE_URL,
     //    changeOrigin : true,
     //    pathRewrite : {
     //      ["^" + process.env.VUE_APP_BASE_API] : ''
     //    }
     //  }
      // "/dev1-api" : {
      //   // 跨域的地址
      //   target : "http://localhost:3000",
      //   // 开启跨域
      //   changeOrigin : true,
      //   // 路径重写
      //   pathRewrite : {
      //     "^/dev1-api" : ''
      //   }
      // }
    }
  },
  // 关闭eslint
  lintOnSave : false
});
