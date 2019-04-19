<template>
  <svg class="icon" :class="iconClass" :style="{width:size+'px',height:size+'px'}">
    <use :xlink:href="'#'+Icons[name].default.id"></use>
  </svg>
</template>

<script>
import Icons from "@/assets/icons";
export default {
  props: {
    name: {
      type: String,
      required: true,
      default: ""
    },
    size: {
        type: Number,
        default: 16
    }
  },
  data() {
    return {
      Icons: Icons,
      iconClass: "icon-" + this.name
    };
  }
};
</script>
<style media="screen">
.icon {
  width: 16px;
  height: 16px;
  vertical-align: sub;
  fill: currentColor;
  overflow: hidden;
}
</style>