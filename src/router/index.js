import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Auth/Login'
import Register from '@/pages/Auth/Register'
import Dashboard from '@/pages/Dashboard/Dashboard.vue'
// import Editor from '@/pages/Editor/Editor.vue'

Vue.use(Router)
const authRoutes = [
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register }
]

const privateRoutes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  }
]
const routes = authRoutes.concat(privateRoutes)
export default new Router({
  routes
})
