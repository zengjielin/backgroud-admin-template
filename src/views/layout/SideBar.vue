<template>
    <div class="side-bar-wrapper" :class="{hideSidebar: isCollapse}">
        <el-menu default-active="1-1" router unique-opened :collapse="isCollapse">
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">导航一</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    isCollapse() {
      return this.$store.state.sidebarStatus;
    }
  }
};
</script>

<style lang='scss'>
.side-bar-wrapper {
  position: fixed;
  top: 0px;
  left: 0;
  width: 220px;
  background-color: #1f1f30;
  color: #7d6b5c;
  height: 100%;
  box-shadow: 1px 1px 1px 1px #e3e7ea;
  transition: width 0.28s;
  overflow-x: hidden;
  .icon {
    margin-right: 15px;
  }
  .el-menu {
    width: 220px;
    border-right: none;
    background: #1f1f30 !important;
  }
  .el-submenu__title {
    background-color: #1f1f30 !important;
  }
  .el-submenu.is-active .el-submenu__title {
    background: #19192a !important;
    color: #ea8a27 !important;
  }
  .el-submenu.is-active .el-submenu__title:hover {
    // background: #ededed !important;
    // color: #ff5050 !important;
  }
  .el-menu-item-group__title {
    padding: 0;
    line-height: normal;
    font-size: 12px;
    color: #a3a3a7;
  }
  .el-menu--inline {
    .el-menu-item {
      background-color: #1f1f30 !important;
    }
  }
  .el-menu-item {
    width: 220px !important;
    min-width: 220px !important;
    background: #1f1f30 !important;
    color: #a3a3a7;
    &.is-active {
      color: #ea8a27 !important;
      background: #323441 !important;
      font-weight: 600;
    }
  }
  &.hideSidebar {
    width: 44px !important;
    transition: width 0.28s;
    .el-menu {
      width: 44px !important;
    }
    // .el-menu-item{
    //   .el-tooltip{
    //     padding-left: 10px !important;
    //   }
    // }
    .submenu-title-noDropdown {
      padding-left: 10px !important;
      position: relative;
      span {
        height: 0;
        width: 0;
        overflow: hidden;
        visibility: hidden;
        transition: opacity 0.3s cubic-bezier(0.55, 0, 0.1, 1);
        opacity: 0;
        display: inline-block;
      }
      &:hover {
        span {
          display: block;
          border-radius: 3px;
          z-index: 1002;
          width: 140px;
          height: 56px;
          visibility: visible;
          position: absolute;
          right: -145px;
          text-align: left;
          text-indent: 20px;
          top: 0px;
          opacity: 1;
        }
      }
    }
    .el-submenu {
      & > .el-submenu__title {
        padding-left: 10px !important;
        & > span {
          display: none;
        }
        .el-submenu__icon-arrow {
          display: none;
        }
      }
      .nest-menu {
        .el-submenu__icon-arrow {
          display: block !important;
        }
        span {
          display: inline-block !important;
        }
      }
    }
    .el-menu-item,
    .el-tooltip {
      padding-left: 10px !important;
      width: 44px !important;
    }
  }
}
.el-menu--vertical {
  .el-menu-item-group__title {
    padding: 0;
    line-height: normal;
    font-size: 12px;
    color: #a3a3a7;
  }
  .el-menu--inline {
    .el-menu-item {
      background-color: #1f1f30 !important;
    }
  }
  .el-menu-item {
    width: 220px !important;
    min-width: 220px !important;
    background: #1f1f30 !important;
    color: #a3a3a7;
    &.is-active {
      color: #ea8a27 !important;
      background: #323441 !important;
      font-weight: 600;
    }
  }
}
</style>
