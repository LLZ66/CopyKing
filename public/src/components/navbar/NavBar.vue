<template>
  <div id="nav-bar">
    <div class="logo">
      <span class="iconfont" @click="find">&#xe68c;</span>
    </div>
    <div class="links">
      <ul>
        <li><router-link to="/home">首页</router-link></li>
        <li><router-link :to="musicTo">音乐</router-link></li>
        <li><router-link to="/photo">照片</router-link></li>
        <li><router-link to="/time">时间</router-link></li>
      </ul>
    </div> 
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  computed: {
    musicTo() {
      return this.$store.state.emotion? "/music":"/emotion"
    }
  },
  methods: { 
    find() {
      this.$store.commit('find')
    }
  }
}
</script>

<style lang="less">
  #nav-bar {
    font-family: iconfont;
    background-color: transparent;
    display: flex;
    position: absolute;
    z-index: 2;
    justify-content: space-between;
    height: 4.5rem;
    width: 100%;
    line-height: 4.5rem;
    padding-left: 2rem;
    color: #fff;
    .logo {
      visibility: visible;
      padding-left: 2rem;
      &>.iconfont {
        position: relative;
        font-size: 1.5rem;
        cursor: pointer;
      }
      &>.iconfont::after {
        content: "something in the sky?";
        position: absolute;
        top: 0;
        width: 12rem;
        right: -10rem;
        opacity: 0;
        font-size: .5rem;
        transition: all 1s ease;
      }
      &>.iconfont:hover::after {
        opacity: 1;
      }
    }
    .links {
      & ul {
        display: flex;
        margin-right: 5rem;
        & li {
          font-size: 1.2rem;
          margin: 0 2rem;
          font-weight: 600;
          &>a {
            color: #fff;
            text-decoration: none
          }
          &>a:hover {
            opacity: 0.8;
          }
        }
      };
    }
  }
</style>>

