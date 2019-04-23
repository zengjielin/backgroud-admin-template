import Vue from 'vue'
import Router from 'vue-router'
import userRoutes from './userRoutes'
Vue.use(Router)
console.log(userRoutes)
export default new Router({
  routes: [
    ...userRoutes
  ]
})
