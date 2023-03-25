<template>
  <!-- 组件是带有名称的可复用的实例，单独功能模块的封装 -->
  <p>--------------------------------</p>
  <hellow :message="msg" :list="list"></hellow>
  <p>--------------------------------</p>
  <h2>我是content组件内容</h2>
  <!-- <hellow :message="msg"></hellow> -->
  <button @click="changevalue">改变数据</button>

  <button @click="sendparent">发送数据给父组件</button>

  <br />
  <br />
  <p>--------------------------------</p>
  <h1>父组件访问子组件</h1>
  <hellow :message="msg" :list="list" ref="hello"></hellow>
  <p ref="p">ref-text</p>
  <p>--------------------------------</p>
</template>

<script>
import hellow from "./Hello.vue";
export default {
  data() {
    return {
      msg: "父给子界面传值message",
      list: [1, 2, 3, 4, 5],
      aaaa:2000
    };
  },
  mounted() {
    console.log(this.$refs.p.textContent);
  },
  methods: {
    changevalue() {
      this.msg = "改变嗯";
    },
    // 在子组件中，通过$emit来触发事件
    sendparent() {
      // this.$emit('事件的名称','发送的事件参数')
      this.$emit("injectMsg", this.msg);
      console.log("sendparentsendparent");
    },
  },
  components: {
    hellow,
  },
};
</script>