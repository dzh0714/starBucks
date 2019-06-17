// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store'
import './utils/flexble'
import './static/scss/common.scss'
import '@/fonts/iconfont.css'
import '@/assets/font/iconfont.css'
// import ElementUI from 'element-ui'
import { DatePicker, TimePicker } from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import elui from '@/plugins/elui'

Vue.use(elui)
// Vue.use(ElementUI)
Vue.use(DatePicker)
Vue.use(TimePicker)
// import axios from 'axios'
Vue.config.productionTip = false
// Vue.prototype.axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
