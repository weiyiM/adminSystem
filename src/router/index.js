import Vue from 'vue'
import Router from 'vue-router'
import layout from '../views/layout/index';

Vue.use(Router)


export const constantRouterMap = [
    { path: '/', component: layout, hidden: true },
  // { path: '/login', component: () => import('../views/login/index'), hidden: true },

]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
