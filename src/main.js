import Vue from 'vue'
import app from './app'
import router from './router'
import  axios from 'axios'
import VueLazyload from 'vue-lazyload'
import store from './store'
import 'lib-flexible/flexible'
import './Validate'
require('./mockData/mockServer')
Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(VueLazyload)

new Vue({
  el: '#app',
  render: h => h(app),
  router,
  store,//配置vuex 所有组件对象都有一个属性$store
})
/*
*store对象的语法
* 1.读取数据
*   state
*   getters
* 2.跟新数据
*   dispatch()触发actions调用
*   commit()触发mutation调用
* */
