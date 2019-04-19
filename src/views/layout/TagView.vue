<template>
    <div class="tag-view-wrapper">
      <div class="arrow-icon-wrapper">
        <el-button icon="el-icon-caret-left" size="mini" circle @click="slideTagView('left')"></el-button>
      </div>
      <div class="tag-wrapper" ref="tagwrapper">
        <div class="scroll-tag-view" ref="tagScrollWrapper">
            <el-tag size="medium" color='#FFFFFF' closable v-for="(i,index) in 10" :key="index">超小标签{{index+1}}</el-tag>
            <el-tag size="medium" color='#FFFFFF' class="current-tag" closable>超小标签</el-tag>
        </div>
      </div>
      <div class="arrow-icon-wrapper">
        <el-button icon="el-icon-caret-right" size="mini" circle  @click="slideTagView('right')"></el-button>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      tagWrapperWidth: 0,
      tagScrollWidth: 0,
      currentLeft: 0
    };
  },
  methods: {
    slideTagView(arrow) {
      let tagScrollView = document.querySelector(".scroll-tag-view");
      if (arrow == "right") {
        if (this.currentLeft >= this.tagScrollWidth - this.tagWrapperWidth) {
          return;
        }
        this.currentLeft += 240;
        tagScrollView.style.left = `-${this.currentLeft}px`;
      } else {
        if (this.currentLeft <= 0) {
          this.currentLeft = 0;
          return;
        }
        this.currentLeft -= 240;
        tagScrollView.style.left = `-${this.currentLeft}px`;
      }
    },
    monitorWinResize() {
      this.tagWrapperWidth = this.$refs.tagwrapper.clientWidth;
      this.tagScrollWidth = this.$refs.tagScrollWrapper.clientWidth;
      window.onresize = () => {
        return (() => {
          this.tagWrapperWidth = this.$refs.tagwrapper.clientWidth;
        })();
      };
    }
  },
  mounted() {
    this.monitorWinResize();
  }
};
</script>

<style lang='scss'>
.tag-view-wrapper {
  height: 35px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 1px 1px 1px #e7e7e7;
  .arrow-icon-wrapper {
    width: 29px;
    padding: 0 5px;
  }
  .tag-wrapper {
    flex: 1;
    height: 35px;
    line-height: 35px;
    padding: 0 5px;
    box-sizing: border-box;
    background: #f0f0f0;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
    .scroll-tag-view {
      height: 30px;
      display: inline-block;
      position: absolute;
      top: 0px;
      left: 0px;
      overflow: visible;
      white-space: nowrap;
      -webkit-transition: left 0.3s ease;
      transition: left 0.3s ease;
      .el-tag--medium {
        margin: 0 5px;
      }
      .current-tag {
        position: relative;
        padding-left: 20px;
        background: #409eff !important;
        color: #ffffff !important;
        .el-icon-close {
          border-radius: 50%;
          text-align: center;
          position: relative;
          cursor: pointer;
          font-size: 12px;
          height: 16px;
          width: 16px;
          line-height: 17px;
          top: -1px;
          right: -5px;
          color: #ffffff;
        }
        .el-icon-close:hover {
          background-color: #fff;
          color: #409eff;
        }
      }
      .current-tag:after {
        display: block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #fff;
        content: "";
        position: absolute;
        top: 9px;
        left: 8px;
      }
    }
  }
}
</style>
