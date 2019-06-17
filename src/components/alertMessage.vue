<template>
  <div  class="alertbox" v-show="open">
    {{text}}
  </div>
</template>

<script>
export default {
  props:{
    text:String
  },
  data () {
    return {
      open:false
    }
  }
}

</script>
<style lang='scss' scoped>
@import "@/static/scss/common.scss";
@import "@/static/scss/_minix.scss";

.alertbox{
  position:absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  background:rgba($color: #000000, $alpha: 0.5);
  color: #fff;
  padding: pxTorem(14px);
  font-size: pxTorem(16px);
  z-index:100
}

</style>