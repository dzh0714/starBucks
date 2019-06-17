<template>
  <div class="wrap">
    <div class="top">
      <Head :title="titText"></Head>
      <div class="topCon">
        <div class="imgwrap">
          <img src="@/images/loading.gif" class="person-img">
        </div>
        <div class="topCon-l">
          <p>申请人姓名</p>
          <p>直接主管</p>
        </div>
        <div>
          <p>王双全</p>
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
            <span class="gray">加班日期</span>
            <span>
              <el-DatePicker v-model="data"></el-DatePicker>
            </span>
          </li>
          <li>
            <span class="gray">加班类型</span>
            <span>
              <select>
                <option value="-1">默认</option>
                <option v-for="val  in this[type+'Type']" :value="val.id" :key="val.id"></option>
              </select>
            </span>
          </li>
          <li>
            <span class="gray">加班起始时间</span>
            <span><el-time-picker v-model="starttime"></el-time-picker></span>
          </li>
          <li>
            <span class="gray">加班截止时间</span>
            <span><el-time-picker  v-model="endtime" @change="endtimeSelected"></el-time-picker></span>
          </li>
          <li>
            <span class="gray">共计时数</span>
            <span>2.5</span>
          </li>
        </ul>
      </div>
      <div class="s-middle">
        <h2>加班事由</h2>
        <p class="s-middle-con">
          <textarea name id cols="30" rows="10"></textarea>
        </p>
      </div>
      <div class="s-bottom">
        <h2 class="s-bottom-h2">
          <span class="addfile">+</span><input type="file">
        </h2>
        <ul>
          <li>
            <img src="@/images/loading.gif" alt>
          </li>
        </ul>
      </div>
    </section>
    <div class="bottom">
      <span class="cancel" @click="$router.back()">取消</span>
      <span class="submit">提交</span>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  props: {
    type: String,
    titText: String
  },
  data() {
    return {
      data: "",
      starttime:'',
      endtime:'',
      num:'',
      overtimeType: [
        {
          id: 1,
          title: "双休日"
        },
        {
          id: 2,
          title: "节假日"
        },
        {
          id: 3,
          title: "工作日"
        }
      ],
      vacationtype: [
        {
          id: 1,
          title: "年假"
        },
        {
          id: 2,
          title: "调休"
        }
      ]
    };
  },
  computed: {
    ...mapState("user", ["userinfo"]),
    titletext() {
      return this.type === "overtime" ? "加班" : "调休";
    }
  },
  created() {
    // this.$store.dispatch("user/getUserInfo");
    this.getUserInfo();
  },
  methods: {
    ...mapActions("user", ["getUserInfo"]),
    endtimeSelected(){
      let starttime=new Date(this.starttime)*1
      let endtime=new Date(this.endtime)*1
      let num=endtime-starttime;
      if(num<0){

      }else{
        this.num=num
      }
    }
  }
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