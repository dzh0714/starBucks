<template>
  <div class="wrap">
    <Top @change="changeMenu"></Top>
    <Tab :type="tableOption.type" @change="change"></Tab>
    <section>
      <Item :todolist="todolist"></Item>
    </section>
    <div class="add-task" @click="show=true" >+&nbsp;发起任务</div>
    <Mark :show="show" @close="show=false" v-show="show"></Mark>
  </div>
</template>

<script>
import Top from "./components/Top.vue";
import Tab from "./components/Tab.vue";
import Item from "./components/Item.vue";
import Mark from "@/components/Mark";
import api from "@/api";
import { mapActions } from "vuex";
export default {
  name:'home',
  components: {
    Top,
    Tab,
    Item,
    Mark
  },

  data() {
    return {
      tableOption: {
        status: 0,
        type: "overtime",
        create_at: 0,
        pageSize: 10,
        page: 1
      },
      todolist: [],
      show:false
    };
  },

  methods: {
    ...mapActions("user", ["getUserInfo"]),
    changeMenu(i) {
      this.tableOption.status = i;
      this.tableOption.type = "overtime";
      this.getTaskList();
    },
    getTaskList() {
      api.taskList( {
          ...this.tableOption
        })
        .then(res => {
          this.todolist = res.data;
          
        });
    },
    change(type) {
      this.tableOption.type = type;

      // console.log(this.tableOption);
      this.getTaskList();
    }
  },
  created() {
    this.getTaskList();
    this.getUserInfo();
  }
};
</script>
<style lang="scss" scoped>
@import "@/static/scss/common.scss";
@import "@/static/scss/_minix.scss";

html,
body,
#app,
.wrap {
  width: 100%;
  height: 100%;
}
.wrap {
  @include box_flex;
  @include direction(column);
  position: relative;
}

section {
  flex: 1;
  @include box_flex;
  @include direction(column);
  overflow: auto;
  //  background: red;
}

.gray {
  color: rgb(131, 131, 131);
}

.add-task {
  width: pxTorem(110px);
  height: pxTorem(40px);
  background: rgb(4, 95, 27);
  text-align: center;
  line-height: pxTorem(40px);
  font-size: pxTorem(14px);
  border-radius: pxTorem(20px);
  position: fixed;
  right: pxTorem(20px);
  bottom: pxTorem(25px);
  color: white;
}
</style>


