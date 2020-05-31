<template>
  <div class="wallPaper noselect">
    <img src="/image/home.jpg" alt="">
    <span class="iconfont">&#xe62d;
      <span>blog</span>
    </span>
    <h1 v-show="isFind">lllllllllllllz</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  computed: {
    isFind() {
      return this.$store.state.isFind
    }
  },
  methods: {
    
  },
  watch:{
    
  }

}
</script>

<style lang="less">
.wallPaper {
    font-family: iconfont;
    width: 100%;
    position: relative;
    & .iconfont {
      position: absolute;
      bottom: 2rem;
      color: #eee;
      left: 50%;
      &>span {
        margin-top: 1rem;
        position: relative;
        right: .5rem;
        display: block;
      }
    }
    & img {
      width: 100%;
      vertical-align: middle;
    }
    & h1 {
      opacity: 1;
      position: absolute;
      top: 10rem;
      z-index: 3;
      left: 50%;
      transform: translate(-50%,0);
      font-size: 3rem;
      letter-spacing: 5px;
      color:rgb(123,129,141);
      clip-path: ellipse(40px 40px at 0% 50%);
      animation: midportLight 8s infinite;
    }
    @media screen and (max-width: 768px){
      & h1 {
        top: 7rem;
        clip-path: ellipse(20px 20px at 0% 50%);
        animation: minportLight 8s infinite;
      }
    }
  }
</style>