export default {
  addNum(state) {
    state.count++
    console.log(state.count)
  },
  setSidebar(state) {
    state.sidebarStatus ? state.sidebarStatus = false : state.sidebarStatus = true
  }
}
