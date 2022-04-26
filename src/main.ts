/*
 * @Author: juvia
 * @Date: 2022-04-07 10:47:04
 * @LastEditors: juvia
 * @LastEditTime: 2022-04-26 15:38:27
 * @FilePath: \Vignette-master\src\main.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by juvia, All Rights Reserved. 
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import axios from "axios";
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);

import "reflect-metadata";
import iView from "view-design";
import "view-design/dist/styles/iview.css";
import "@/assets/iconfont/iconfont.css";
import "@/theme/index.less";
import "@/assets/main.scss";
import ImageViewer from "vue2-viewer";
import "amfe-flexible/index";
import rewirteLog from "@/rewirteLog";
Vue.use(rewirteLog);

Vue.use(ImageViewer);
Vue.use(iView);

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
