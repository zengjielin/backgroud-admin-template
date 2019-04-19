<template>
    <div class="app-main" :class="{hideSidebar: isCollapse}">
        <header-bar></header-bar>
        <tag-view></tag-view>
        <div class="componts-view-wrapper">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import HeaderBar from "@/views/layout/Header";
import TagView from "@/views/layout/TagView";
export default {
  data() {
    return {
    };
  },
  components: {
    HeaderBar,
    TagView
  },
  computed: {
    isCollapse() {
      return this.$store.state.sidebarStatus;
    }
  }
};
</script>

<style lang='scss'>
.app-main {
  min-height: 100%;
  margin-left: 220px;
  transition: margin-left 0.28s;
  .componts-view-wrapper {
    padding: 20px;
  }
  &.hideSidebar {
    margin-left: 44px;
  }
}
</style>
