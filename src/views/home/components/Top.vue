<template>
<header>
  <Head>
    <span class="iconfont icon-riqixuanze topicon"></span>
    <span class="iconfont icon-fangdajing topicon"></span>
  </Head>
  <div class="h-bottom">
    <div
      :class="{active:item.index===index}"
      v-for="(item,i) in menudata"
      :key="i"
      @click="change(i)"
    >
      <span :class="'iconfont typeicon '+item.icon"></span>
      <p>{{item.tit}}</p>
    </div>
  </div>
</header>
</template>

<script>
// import Head from "@/components/head.vue";
export default {
  components: {
    // Head
  },
  data() {
    return {
      index: 0,
      menudata: [
        {
          tit: "待处理",
          icon: "icon-shijian",
          index: 0
        },
        {
          tit: "已发起",
          icon: "icon-zhifeiji",
          index: 1
        },
        {
          tit: "已处理",
          icon: "icon-wancheng",
          index: 2
        }
      ]
    };
  },
  methods: {
    change(i) {
      this.index = i;
      this.$emit("change", this.index);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/static/scss/common.scss";
@import "@/static/scss/_minix.scss";

header {
  width: 100%;
  height: pxTorem(150px);
  box-shadow: 0 pxTorem(10px) pxTorem(10px) rgb(233, 233, 233);
  @include box_flex;
  @include direction(column);
}
// .h-top {
//   width: 100%;
//   height: pxTorem(44px);
//   font-size: pxTorem(18px);
//   @include box_flex;
//   @include justify(space-between);
//   padding: 0 pxTorem(10px);
//   @include sizing;
//   @include align;
// }
// .topicon {
//   font-size: pxTorem(18px);
//   padding: 0 pxTorem(3px);
// }
.typeicon {
  font-size: pxTorem(25px);
}
// .icon-arrow-left {
//   padding: 0 pxTorem(10px);
// }
.h-bottom {
  flex: 1;
  @include box_flex;
  @include justify(space-around);
  @include align;
}
.h-bottom div {
  text-align: center;
}
.h-bottom div p {
  padding: pxTorem(5px);
  font-size: pxTorem(15px);
}
.active {
  color: rgb(4, 99, 66);
}
</style>
