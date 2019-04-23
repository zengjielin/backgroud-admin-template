import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'
import Cookie from 'js-cookie'

Vue.use(Vuex)
let sidebarStatus = false
if (Cookie.get('sidebar-status')) {
  sidebarStatus = Number(Cookie.get('sidebar-status')) == 1 ? true : false
}
const store = new Vuex.Store({
  state: {
    //公共
    count: 0,
    sidebarStatus: sidebarStatus
  },
  actions: actions,
  mutations: mutations
})
export default store
