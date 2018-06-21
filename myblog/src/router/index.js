import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../components/login.vue'
import Main from '../components/main.vue'

Vue.use(VueRouter)

const routes = [
  {  path: '/',redirect: '/login'}, 
  {  path: '/login', component: login},
  {  path: '/index',component: Main}
]

const router = new VueRouter({
  routes
})

export default router//将路由器导出