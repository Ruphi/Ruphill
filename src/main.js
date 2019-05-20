// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from './axios/axios'
import rpserver from './axios/rpserverr'
import Vuetify from 'vuetify'
import Vuelidate from 'vuelidate'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont'

import store from './store'

Vue.use(Vuetify, {iconfont: 'md'});
Vue.use(Vuelidate);
Vue.prototype.$axios = axios;
Vue.prototype.$rpserver = rpserver;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
});
