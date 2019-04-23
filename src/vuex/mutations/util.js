import Cookie from 'js-cookie'
export default {
  addNum(state) {
    state.count++
    console.log(state.count)
  },
  setSidebar(state) {
    state.sidebarStatus ? state.sidebarStatus = false : state.sidebarStatus = true
    Cookie.set('sidebar-status', state.sidebarStatus ? 1 : 0)
  }
}
