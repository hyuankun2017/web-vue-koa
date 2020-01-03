import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import '@babel/polyfill';

// 引入组件，避免重复引入
import "@Com/ant-ui";
import "@A/css/common.scss";
import "@A/css/ant-cover.scss";
import { Form } from 'ant-design-vue';

Vue.use(Form)

Vue.config.productionTip = false;

// Vue.prototype.$form = Form;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
