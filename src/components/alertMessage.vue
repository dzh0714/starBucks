<template>
  <div class="alertbox" v-show="open">{{txt}}</div>
</template>

<script>
export default {
 
  data() {
    return {
      open: false,
      txt: "",
      timer: null
    }
  },
  methods: {
        alertOpen(text){
            this.txt=text;
            this.open=true;
            this.timer=setTimeout(()=>{
                this.open=false
            },2000)
        }
    },
    destroyed() {
        clearTimeout(this.timer)
    }
};
</script>
<style lang='scss' scoped>
@import "@/static/scss/common.scss";
@import "@/static/scss/_minix.scss";

.alertbox {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba($color: #000000, $alpha: 0.5);
  color: #fff;
  padding: pxTorem(14px);
  font-size: pxTorem(16px);
  z-index: 100;
}
</style>