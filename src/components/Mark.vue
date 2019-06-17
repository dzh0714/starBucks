<template>
  <div class="mark" v-show="show" @click.self="$emit('close')">
    <div class="mark-con" >
      <div class="overtime" @click="$router.push('/commit/overtime')">
        <img src="@/images/icons/todo-overtime.png" alt>
        <p>加班</p>
      </div>
      <div class="vacation" @click="$router.push('/commit/vacation')">
        <img src="@/images/icons/todo-vacation.png" alt>
        <p>调休</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show:Boolean
  },
  components: {}
};
</script>
<style lang='scss' scoped>
@import "@/static/scss/common.scss";
@import "@/static/scss/_minix.scss";

.mark {
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba($color: #000000, $alpha: 0.4);
}

.mark-con {
  width: 100%;
  height: pxTorem(150px);
  position: fixed;
  bottom: 0;
  left: 0;
  background: white;
  @include box_flex;
  @include align;
  @include justify(space-around);
}
.overtime,
.vacation {
  text-align: center;
}
.overtime p,
.vacation p {
  margin-top: pxTorem(5px);
  font-size: pxTorem(15px);
  color: rgb(83, 83, 83);
}
</style>