<template>
  <div class="edit">
    <h1 class="head">编辑页面</h1>
    <div class="enterPart">
      <section>
        文章类型：<select name="" id="" v-model="type">
        <option value="html">html</option>
        <option value="css">css</option>
        <option value="js">js</option>
        </select>
      </section>
      <section>
        文章标题：<input type="text" v-model="title" placeholder="输入十字以内标题">
      </section>
      <section>
        文章区域：<textarea name="" id="" cols="30" rows="5" v-model="content"></textarea>
      </section>
      <!-- 使用 value-format 控制Date的输出格式 注意大小写-->
      <section>
        选择日期：<el-date-picker
          value-format="yyyy-M-d" 
          v-model="date"
          type="date"
          :picker-options="pickerOptions"
          placeholder="选择日期">
        </el-date-picker>
      </section>
    </div>
    <button class="submit" @click="submit">提交</button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      type: '',
      title: '',
      content: '',
      date: null,
      pickerOptions: {
        //禁止选取提前日期
         disabledDate(time) {
            return time.getTime() >= Date.now();
        },
      }    
    }
  },
  methods:{
    submit() {
      if(this.type === "") {
        alert("文章类型不能为空")
      }else if(this.title === ""){
        alert("文章标题不能为空")
      }else if(this.title.length > 10) {
        alert("请输入十字以内标题")
      }else if(this.content === "") {
        alert("文章内容不能为空")
      }else if(this.date === null) {
        alert("请选择日期")
      }else
      {
        alert("提交成功，跳转到首页")
        this.$router.push("/home")
        let saveData = Object.assign({},{"type":this.type,"title":this.title,"content":{"title":this.title,"content":this.content},"date":this.date});
        //用一个特殊字符（例如#llz表示段落开始，将Content存为一个段落数组，然后再v-for创建p元素）
      }
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
  .edit {
    position: relative;
    width: 100%;
    height: 47.25rem;
    background-color: #eee;
    animation: fade .5s ease;
    &>.head {
      padding-top: 3rem;
      text-align: center;
      font-size: 2rem;
      margin-bottom: 3rem;
    }
    &>.enterPart {
      position: relative;
      display: flex;
      flex-direction: column;
      width: 60%;
      margin: auto;
      font-size: 1.5rem;
      &>section {
        margin: 2rem 0;
      }
      & select,& input {
        margin-left: 2rem;
        height: 3rem;
        width: 12rem;
        font-size: 1.5rem;
        padding: .5rem;
        border-radius: 5px;
      }
      & input { 
        border: 1px solid #eee;
        width: 18rem;
      }
      & textarea {
        border-radius: 5px;
        border: 1px solid #eee;
        vertical-align: top;
        margin-left: 2rem;
        font-size: 1.5rem;
      }
    }
    & button {
          position: absolute;
          bottom: 2rem;
          right: 8rem;
          width: 6rem;
          height: 2.5rem;
          background-color: #fff;
          border: 1px solid #aaa;
          box-shadow: 0 0 1px 1px #aaa;
          border-radius: 5px;
          transition: all .3s ease;
          cursor: pointer;
       }
       & button:hover {
          background-color: #aaa;
          color: #eee;
       }
  }
  @media screen and (max-width: 768px){
    .edit {
      height:50rem;
      & button {
        bottom: 4rem;
        right: 4rem;
      }
    }
  }
</style>