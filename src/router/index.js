import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// 路由表
const routes = [
  {
    path: '/login',
    name: 'login',
    // 会自动找到views下面的login中的index，所以省略了
    component: () => import('@/views/login')
  }
]

const router = new VueRouter({
  routes
})

export default router
