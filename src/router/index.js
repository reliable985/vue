import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

Vue.use(VueRouter);

export default new VueRouter({
  mode:'history',//去掉了路由路径中的#号
  routes
})

