<template>
  <div class="wrap">
    <div class="top">
      <Head :title="titText"></Head>
      <div class="topCon">
        <div class="imgwrap">
          <img :src="this.list.avatar" class="person-img">
        </div>
        <div class="topCon-l">
          <p>申请人姓名</p>
          <p>直接主管</p>
        </div>
        <div>
          <p>{{this.list.nickname}}</p>
          <p>秦毅超</p>
        </div>
        <div>&gt;</div>
      </div>
    </div>
    <section>
      <div class="s-info">
        <h2>申请信息</h2>
        <ul class="infoCon">
          <li>
            <span class="gray">{{title}}日期</span>
            <span>{{new Date(this.list.startTime).toLocaleDateString()}}</span>
          </li>
          <li>
            <span class="gray">{{title}}类型</span>
            <span>{{showType}}</span>
          </li>
          <li>
            <span class="gray">{{title}}起始时间</span>
            <span>{{startTime}}</span>
          </li>
          <li>
            <span class="gray">{{title}}截止时间</span>
            <span>{{endTime}}</span>
          </li>
          <li>
            <span class="gray">共计时数</span>
            <span>{{reducetime}}</span>
          </li>
        </ul>
      </div>
      <div class="s-middle">
        <h2>{{title}}事由</h2>
        <p class="s-middle-con">上月7.7月份有余部门人员编织布达到位，人员紧张，多数员工休假日的情况时有发生</p>
      </div>
      <div class="s-bottom">
        <h2 class="s-bottom-h2">
          附件
        </h2>
        <ul>
          <li v-for="(val,i) in list.annex" :key="i">
            <img :src="'http://localhost:3000'+val" alt>
          </li>
        </ul>
      </div>
    </section>
    <!-- <div class="bottom">
      <span class="cancel">取消</span>
      <span class="submit">提交</span>
    </div> -->
  </div>
</template>
<script>
import api from "@/api";
import { showType, showTime,reducetime } from "@/utils/computedTime";
export default {
  props: {
    type: String,
    id: String
  },
  computed: {
    titText() {
      return this.type === "overtime" ? "办公室加班申请表" : "办公室调休申请表";
    },
    showType() {
      return showType(this.list.type, this.list.list_title);
    },
    startTime() {
      return showTime(this.list.startTime);
    },
    endTime() {
      return showTime(this.list.endTime);
    },
    reducetime(){
      return reducetime(this.list.startTime,this.list.endTime)
    },
    title(){
      return this.type==='overtime'?'加班':'休假'
    }
  },
  data() {
    return {
      list: {}
    };
  },
  created() {
    api[this.type + "Detail"]({
      applicationNumber: this.id
    }).then(res => {
      this.list = res.data
    })

    
  },
  methods: {}
};
</script>
<style lang='scss' scoped>
@import "@/static/scss/common.scss";
@import "@/static/scss/_minix.scss";
* {
  box-sizing: border-box;
  flex-shrink: 0;
}
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: rgb(241, 241, 241);
  // background: url('@/images/apply/person-bg.png')
}
.top {
  width: 100%;
  height: pxTorem(160px);
  background: rgb(0, 99, 65);
  border-bottom-left-radius: pxTorem(50px);
  border-bottom-right-radius: pxTorem(50px);
}
.h-top {
  color: white;
}
.topCon {
  display: flex;
  width: 100%;
  height: pxTorem(70px);
  // background: red;
  margin-top: pxTorem(5px);
  justify-content: space-between;
  padding: 0 pxTorem(20px);
  color: white;
  font-size: pxTorem(15px);
  align-items: center;
  box-sizing: border-box;
}
.imgwrap {
  width: pxTorem(60px);
  height: pxTorem(60px);
  border-radius: 50%;
  overflow: hidden;
}
.person-img {
  width: 100%;
  height: 100%;
}
.topCon-l {
  color: rgb(226, 226, 226);
  font-size: pxTorem(14px);
}
section {
  transform: translateY(pxTorem(-30px));
  padding: 0 pxTorem(20px);
  box-sizing: border-box;
  overflow: auto;
  flex: 1;
}
.s-info {
  width: 100%;
  height: pxTorem(280px);
  background: white;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border-radius: pxTorem(10px);
}
h2 {
  width: 100%;
  padding: pxTorem(15px) pxTorem(25px);
  font-size: pxTorem(18px);
  font-weight: 800;
  border-bottom: pxTorem(1px) solid #eee;
}
.infoCon {
  flex: 1;
  // background: red;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 pxTorem(20px);
  font-size: pxTorem(15px);
}
ul {
  border-bottom: pxTorem(1px) solid rgb(243, 243, 243);
  display: flex;
  flex-wrap: wrap;
  margin-top: pxTorem(10px);
}
li {
  display: flex;
  justify-content: space-between;
  margin-left: pxTorem(15px);
  margin-top: pxTorem(10px);
  img {
    width: pxTorem(60px);
    height: pxTorem(60px);
  }
}
.gray {
  color: rgb(151, 151, 151);
  font-size: pxTorem(14px);
}
.s-middle,
.s-bottom {
  width: 100%;
  margin-top: pxTorem(15px);
  background: white;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border-radius: pxTorem(10px);
}
.s-middle-con {
  padding: pxTorem(10px) pxTorem(20px);
  letter-spacing: pxTorem(2px);
  padding-bottom: pxTorem(20px);
}
.bottom {
  display: flex;
  width: 100%;
  height: pxTorem(44px);
  color: white;
  font-size: pxTorem(15px);
  line-height: pxTorem(44px);
}
.s-bottom-h2 {
  display: flex;
}
.addfile {
  width: pxTorem(28px);
  height: pxTorem(28px);
  background: rgb(255, 214, 5);
  color: white;
  font-size: pxTorem(24px);
  text-align: center;
  line-height: pxTorem(26px);
  border-radius: 50%;
  margin-right: pxTorem(5px);
}
.cancel {
  width: 30%;
  height: 100%;
  background: white;
  color: rgb(0, 99, 65);
  // line-height: pxTorem(44px);
  text-align: center;
}
.submit {
  flex: 1;
  background: rgb(0, 99, 65);
  color: white;
  text-align: center;
}
</style>