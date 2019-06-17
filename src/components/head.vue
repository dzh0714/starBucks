<template>
  <div class="h-top">
    <span class="iconfont icon-arrow-left topicon" v-if="back" @click="$router.back()"></span>
    <span>{{titText}}</span>
    <span>
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    back: {
      default: true,
      type: Boolean
    },
    title: {
      default: "",
      type: String
    }
  },
  name: "",
  computed: {
    titText() {
      return this.title ? this.title : this.$route.meta.title;
    }
  }
};
</script>
<style lang='scss' scoped>
@import "@/static/scss/common.scss";
@import "@/static/scss/_minix.scss";

.h-top {
  width: 100%;
  height: pxTorem(44px);
  font-size: pxTorem(18px);
  @include box_flex;
  @include justify(space-between);
  padding: 0 pxTorem(10px);
  @include sizing;
  @include align;
}
.topicon {
  font-size: pxTorem(18px);
  padding: 0 pxTorem(3px);
}
.typeicon {
  font-size: pxTorem(25px);
}
.icon-arrow-left {
  padding: 0 pxTorem(10px);
}
</style>