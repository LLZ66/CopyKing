<template>
  <div id="emotion">
    <section class="happy" @click="choiceEmotion">
      <div class="content">
        <i class="happy">&#xe606;</i>
        <span class="happy">happy</span>
      </div>
    </section>
    <section class="not" @click="choiceEmotion">
      <div class="content">
        <i class="not">&#xe621;</i>
        <span class="not">not</span>
      </div>
    </section>
    <span class="introduce">happy or not?</span>
  </div>
</template>

<script>
export default {
  methods: {
    choiceEmotion(e) {
      this.$store.commit("changeEmotion",{
        type:e.target.className
      })
      this.$router.push("/music")
    }
  },
  mounted() {
    let nav = document.getElementById("nav-bar");
    nav.style.display = "none"
  },
  beforeDestroy () {
    let nav = document.getElementById("nav-bar");
    nav.style.display = "flex"
  }
}
</script>

<style lang="less">
  #emotion {
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
    font-family: iconfont;
    animation: fade 0.5s ease;
    &>section {
      flex: 1;
      position: relative;
      cursor: pointer;
      transition: all 0.5s ease;
      &>.content {
        user-select: none;
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        &>i {
          display: block;
          font-size: 10rem;
        } 
        &>span {
          display: block;
          font-size: 4rem;
          margin-top: 2rem;
        }
      }
    }
    &>section.happy {
      background-color: #FF9900;
      & i {
        color: #FF0033;
      }
      & span {
        color: #CCFFFF;
      }
    }
    &>section.happy:hover {
      background-color: #FF0033;
      flex: 1.5;
      & i {
        color: #FF9900;
      }
    }
    &>section.not {
      background-color: #009999;
      & i {
        color: #00CC99;
      }
      & span {
        color: #CCFFFF;
      }
    }
    &>section.not:hover {
      flex: 1.55;
      background-color: #00CC99;
      & i {
        color: #009999;
      }
    }
    &>.introduce {
      position: absolute;
      top: 3rem;
      left: 50%;
      transform: translate(-50%,0);
      font-size: 2rem;
      color: #CCFFFF;
      opacity: .6;
      user-select: none;
    }
  }
  
</style>