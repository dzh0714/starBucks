<template>
  <div id="app">
    <keep-alive include="home">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import request from "@/utils/request";

export default {
  created() {}
};
</script>

<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
}
</style>

