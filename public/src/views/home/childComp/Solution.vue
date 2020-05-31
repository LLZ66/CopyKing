<template>
  <div class="solution">
    <section class="head">
      <p v-for="item in textTypes" :class="item" @click="typeClick(item)">{{item}}</p>
    </section>
    <section class="title" v-if="!isText">
      <div class="row" v-for="text in textContent" :key="text.number"> 
        <p class="col-xs-11 col-sm-11" @click="showText(text.content)">
          {{text.title}}
        </p>
        <span class="col-xs-1 col-sm-1">{{text.data}}</span>
      </div>
    </section>
    <section class="textarea" v-else>
      <h1>{{textarea.title}}</h1>
      <p>{{textarea.content}}</p>   
    </section>
    <button class="newJournal" @click="edit" v-show="!isText">新建日志</button>
  </div>
</template>

<script>
import {getTextData} from 'network/home';
export default {
  data() {
    return {
      texts: {},//所有文章
      textContent: [],//文章区内容
      textTypes: ["js","css","html"],
      textType: "js",
      textarea: null,
      isText: false
    }
  },
  computed: {

  },
  methods: {
    typeClick(item) {
      this.isText = false
      this.textType = item;
      this.textContent = this.texts[item]
    },
    showText(content) {
      this.isText = true
      this.textarea = content
      console.log(this.textarea);
    },
    edit() {
      this.$router.push("/edit")
    }
  },
  created() {
    getTextData({
      methods: "get",
    }).then(res => {
      this.texts = res.data,
      this.textContent = this.texts[this.textType];
      // console.log(this.textContent);
    })
  }
}
</script>

<style lang="less">
  .solution {
    position: relative;
    & .head {
      background-color: #eee;
      display: flex;
      justify-content: space-between;
      height: 4rem;
      line-height: 4rem;
      &>p {
        position: relative;
        cursor: pointer;
        flex: 1;
        text-align: center;
        font-size: 1.5rem;
        font-weight: 500;
        transition: all 0.3s ease;
      }
      &>p:hover {
        background-color: rgb(17, 17, 18);
        color: #eee;
      }
      &>p::after {
        //要将：：after的基本设置设置在::after中，不能设置在：hover：：after中
        content: "";
        width: 100%;
        height: .3rem;
        bottom: -.3rem;
        left: 0;
        position: absolute;
        background-color: rgb(49,41,34);
        transform-origin: center;
        opacity: 0;
        transform: scale(0,1);
        transition: all .3s linear;
      }
      &>p:hover::after {
        opacity: 1;
        transform: scale(1,1);
        transform-origin: center;
      }
    }
    & .title {
      margin-top: 2rem;
      width: 80%;
      margin: 2rem auto;
      min-height: 26.875rem;
      &>.row {
        margin: 4rem 0;
      }
      & p {
        animation: fade .3s ease;
        position: relative;
        display: inline-block;
        font-size: 1.3rem;
        font-weight: bold;
        cursor: pointer;
      }
      & p:hover {
        color: rgb(104, 118, 133);
      } 
    }
    &>.textarea {
        min-height: 30.875rem;
        animation: fade .5s ease;
        & h1 {
          margin-top: 2rem;
          font-size: 2rem;
          font-weight: bold;
          text-align: center;
        }
        & p {
          display: block;
          width: 80%;
          margin: 0 auto;
          margin-top: 2rem;
          text-indent: 2em;
          font-size: 1.5rem;
        }
      }
      & .newJournal {
        font-size: 1.4rem;
        position: absolute;
        right: 4.7rem;
        bottom: -1rem;
        background-color: #fff;
        padding: 5px 5px;
        border: 1px solid #eee;
        border-radius: 4px;
        box-shadow: 0 0 1px 1px rgb(66,84,108);
        cursor: pointer;
        transition: all 0.2s ease;
        box-sizing: border-box;
      }
      & .newJournal:hover {
        background-color: rgb(66,84,108);
        border: 1px solid rgb(66,84,108);
        color: #fff;
      }
      @media screen and (min-width: 768px){
         & .newJournal {
           right: 8.5rem;
         }
      }
      @media screen and (max-width: 768px){
        @keyframes fade {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      }
  }
</style>

