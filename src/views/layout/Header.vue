<template>
    <div class="header-view-wrapper">
        <svg-icon class="header-icon"  name="switch"  :class="{collapse: collapse}" @click.native="changeTab">
        </svg-icon>
        <el-dropdown trigger="click" size="small" class="user-info" @command="handleCommand">
            <span class="el-dropdown-link">
                <svg-icon name="boy" class="avatar"></svg-icon>
                <span>zengjielin</span>
                <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="loginout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    changeTab() {
      this.$store.commit("setSidebar");
    },
    handleCommand(item) {
      switch (item) {
        case "loginout":
          break;
        default:
      }
    }
  },
  computed: {
    collapse() {
      return this.$store.state.sidebarStatus;
    }
  }
};
</script>

<style lang='scss'>
.header-view-wrapper {
  height: 50px;
  line-height: 50px;
  padding: 0 15px;
  background-color: #fff;
  border-bottom: 1px solid #eee;
  position: relative;
  .user-info {
    position: absolute;
    top: 0px;
    right: 15px;
    z-index: 888;
  }
  .el-dropdown-link {
    cursor: pointer;
  }
  .avatar {
    width: 2em;
    height: 2em;
  }
  .header-icon {
    font-size: 1.5em;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s;
    line-height: 58px;
    color: rgba(0, 0, 0, 0.55);
    &.collapse {
      transform: rotate(90deg);
    }
  }
}
</style>
