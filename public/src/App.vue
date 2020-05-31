<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>
<script>
  import NavBar from "components/navbar/NavBar"

  export default {
    data() {
      return {

      }
    },
    components: {
      NavBar
    },
  }
</script>
<style lang="less">
@import url("assets/css/reset.css");
@import url("assets/css/common.css");
#app {
  height: 100%;
  width: 100%;
}
</style>
