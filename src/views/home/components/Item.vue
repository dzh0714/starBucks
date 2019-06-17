<template>
  <div class="s-con">
    <div
      class="con-item"
      v-for="item in todolist"
      :key="item.applicationNumber"
      @click="$router.push({name:'detail',params:{type:item.list_type,id:item.applicationNumber}})"
    >
      <div class="con-item-top">
        <span class="con-id">{{item.applicationNumber}}</span>
        <span class="status">待审批</span>
      </div>
      <div class="con-context">
        <div class="context-top">
          <span class="gray">申请人</span>
          <span>{{item.nickname}}</span>
          <span class="gray">加班类型</span>
          <span>{{showType(item.type,item.list_type)}}</span>
        </div>
        <div class="context-bottom">
          <span class="gray">加班日期</span>
          <span>{{new Date(item.startTime).toLocaleDateString()}}</span>
          <span class="gray">加班时数</span>
          <span>{{reducetime(item.startTime,item.endTime)}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { showType,reducetime } from "@/utils/computedTime";
export default {
  props: {
    todolist: Array
  },
  methods: {
    showType(type, tit) {
      return showType(type, tit);
    },
    reducetime(start, end) {
      return reducetime(start, end)
      // let start_num = new Date(new Date(start).toGMTString()) * 1;
      // let end_num = new Date(new Date(end).toGMTString()) * 1;
      // let num = (end_num - start_num) / 1000;
      // let day = (num / 60 / 60 / 24).toFixed(1);
      // return day;
    }
  }
};
</script>
<style lang='scss' scoped>
@import "@/static/scss/common.scss";
@import "@/static/scss/_minix.scss";
.s-con {
  flex: 1;
  background: rgb(247, 248, 248);
}
.con-item {
  width: 100%;
  height: pxTorem(120px);
  background: white;
  margin-bottom: pxTorem(10px);
}
.con-item-top {
  @include box_flex;
  @include justify(space-between);
  padding: pxTorem(10px) pxTorem(15px);
  font-size: pxTorem(12px);
  color: rgb(165, 165, 165);
}
.con-context {
  padding: 0 pxTorem(15px);
  @include sizing;
}
.gray {
  color: rgb(131, 131, 131);
}
.context-top,
.context-bottom {
  padding: pxTorem(8px) 0;
  @include box_flex;
  @include align;
}
.context-top span,
.context-bottom span {
  width: 25%;
  @include flex_shrink(0);
  font-size: pxTorem(12px);
}
</style>