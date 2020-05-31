<template>
  <section id="time">
    <h1>{{Hour}}:{{minute}}:{{second}}</h1>
  </section>
</template>

<script>
export default {
  data() {
    return {
      backgroundList: [],//背景图列表
      timeList: {},//时间列表
      timer: null,//定时器
      Hour: null,//小时
      minute: null,//分钟
      second: null,//秒

      //七点起床 八点之前吃完早餐做完任务，八点到十点 学习Node 十点到十点半休息
      //十点半到十二点 刷LEETCODE 十二点到下午两点半 休息 两点半到下午五点半 学习小程序；
      //五点半到七点 刷面试题 八点到九点 看直播 九点到十点半（十一点）学习前端
      //半个小时为一点 积累50点有奖励 （以后的成就系统）（根据时间不同改变不同的背景）
    }
  },
  created() {
    let date = new Date();
    
  },
  mounted() {
    let nav = document.getElementById("nav-bar");
    nav.childNodes[0].style.visibility = "hidden"
    nav.style.paddingLeft = "0";
  },
  beforeDestroy () {
    let nav = document.getElementById("nav-bar");
    nav.childNodes[0].style.visibility = "visible";
    clearInterval(this.timer)
  }
}
</script>

<style>
  #time {
    padding-top: 4.5rem;
    background-color: #f00;
  }
</style>