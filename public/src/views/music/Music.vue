<template>
  <div id="music">
    <h1>music</h1>
  </div>
</template>

<script>
export default {
  
  mounted() {
    let nav = document.getElementById("nav-bar");
    nav.childNodes[0].style.visibility = "hidden"
    nav.style.paddingLeft = "0";

  },
  beforeDestroy () {
    let nav = document.getElementById("nav-bar");
    nav.childNodes[0].style.visibility = "visible"
  }
}
</script>

<style lang="less" scoped>
  #music {
    height: 100%;
    width: 100%;
    padding-top: 4.5rem;
    animation: fade .5s ease;
    background-image: url("/image/mount1.jpg");
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center center;
    filter: drop-shadow(16px 16px 20px red) invert(85%);;
  }
</style>