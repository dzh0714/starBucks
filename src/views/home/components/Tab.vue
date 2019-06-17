<template>
  <div class="s-top">
    <span class="void"></span>
    <p class="choose">
      <span :class="{choosetype:item.type===type}" v-for="(item,i) in navdata" :key="i" @click="$emit('change',item.type)">{{item.tit}}</span>
    </p>
    <span class="s-top-r">
      <span class="iconfont icon-wodedingdan gray"></span>
      <span class="iconfont icon-paixu-sheng gray"></span>
    </span>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    type: String
  },
  data() {
    return {
      navdata: [
        {
          tit: "加班",
          type: "overtime"
        },
        {
          tit: "休假",
          type: "vacation"
        }
      ]
    };
  },
  methods: {
    
  },
  components: {}
};
</script>
<style lang='scss' scoped>
@import "@/static/scss/common.scss";
@import "@/static/scss/_minix.scss";
.s-top {
  margin-top: pxTorem(20px);
  width: 100%;
  height: pxTorem(44px);
  font-size: pxTorem(16px);
  @include box_flex;
  @include justify(space-around);
  @include align;
}
.void {
  width: pxTorem(30px);
}
.icon-wodedingdan,
.icon-zhuanhuan {
  font-size: pxTorem(14px);
  padding: pxTorem(5px);
}
.choose {
  @include box_flex;
  @include sizing;
  border: pxTorem(1px) solid rgb(4, 95, 27);
  border-radius: pxTorem(20px);
  overflow: hidden;
  @include align;
}
.choose span {
  padding: pxTorem(3px) pxTorem(38px);
  font-size: pxTorem(14px);
  color: rgb(4, 95, 27);
}
.choose .choosetype {
  background: rgb(4, 95, 27);
  color: white;
}
</style>