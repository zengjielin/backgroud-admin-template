<template>
    <div class="views-main">
        <side-bar></side-bar>
        <app-main></app-main>
    </div>
</template>

<script>
import AppMain from "@/views/layout/AppMain.vue";
import SideBar from "@/views/layout/SideBar.vue";
export default {
  components: {
    AppMain,
    SideBar
  }
};
</script>

<style lang='scss'>
.views-main {
  height: 100%;
}
</style>
