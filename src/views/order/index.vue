<template>
  <div>
    
    <el-DatePicker v-model="data"></el-DatePicker>
  </div>
</template>

<script>
import request from '@/utils/request'
import {mapState,mapActions} from 'vuex'
export default {
  name: "",
  data () {
    return {
      data:''
    }
  },
  components: {},
  computed:{
    ...mapState('user',['userinfo'])
  },
  created(){
    this.getUserInfo();
  },
  methods: {
    ...mapActions('user',['getUserInfo'])
  },
};
</script>
<style lang='scss' scoped>

</style>