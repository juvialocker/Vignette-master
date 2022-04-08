import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';

import 'reflect-metadata';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import '@/assets/iconfont/iconfont.css';
import '@/theme/index.less';
import '@/assets/main.scss';
import ImageViewer from 'vue2-viewer';
import 'amfe-flexible/index'
import rewirteLog from "@/rewirteLog"
Vue.use(rewirteLog);

Vue.use(ImageViewer);
Vue.use(iView);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
