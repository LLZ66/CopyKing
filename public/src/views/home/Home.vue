<template>
  <div id="home">
    <wall-paper></wall-paper>
    <solution>
      <router-view slot="article"></router-view>
    </solution>
    <i class="iconfont" v-if="!isTop" @click="totop(1)">&#xe631;</i>
  </div>
</template>

<script>
import WallPaper from "./childComp/WallPaper"
import Solution from "./childComp/Solution"
export default {
  data() {
    return{
      isTop : true,
      text: {},
    }
  },
  methods: {
    totop(time) {
      let top = document.documentElement.scrollTop;//计算距离顶部的距离
      let sum = time*200/10;
      let length = top/sum;
      let interval = setInterval(function() {
        window.scrollBy(0,-length)
        sum--;
        if(!sum) {
        clearInterval(interval)
        }
      },10);
    }
  },
  components: {
    WallPaper,
    Solution
  },
  created() {
    let This = this;
    window.addEventListener("scroll", function() {//window监听屏幕滚动
      This.isTop = document.documentElement.scrollTop == 0? true : false;
    });
  },
}
</script>

<style lang="less">
  #home {
    animation: fade 1s ease;
    font-family: iconfont;
    width: 100%;
    height: 100%;
    &>.iconfont {
      color: aliceblue;
      position: fixed;
      top: 0;
      right: 5px;
      font-size: 3rem;
      cursor: pointer;
    }
  }
</style>