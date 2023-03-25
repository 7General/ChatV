
<template>
  <p>--------------setuphellow-------</p>
  <h2>我是SetupHello组件内容</h2>
  <h2>[]{{ content }}[]</h2>
  <h2>setup-child{{ message }}</h2>
  <p>--------------setuphellow-------</p>

  <button @click="senparent">发送数据</button>
</template>

<script>
import { onUpdated, toRefs,ref } from "vue";

export default {
  data() {
    return {
      content: "我是SetupHello组件内容",
    };
  },
  setup(props, context) {
    console.log("=================");
    console.log(props);
    console.log(props.message);
    const { message } = toRefs(props);
    console.log(message.value);
    console.log("=================>>>>>>>>>>>>");

    onUpdated(() => {
      console.log("onUpdatedonUpdatedonUpdated=================>>>>>>>>>>>>");
      console.log(message.value);
    });

    console.log("contextcontextcontext");
    console.log(context);
    // 子传父
    const counter = ref(20);

    function senparent() {
      context.emit("injectCounter", counter.value);
    }


    context.expose({
        senparent
    })

    return {senparent};
  },
  props: {
    //对象
    message: {
      type: String,
      default: "你好 ",
    },
  },
};
</script>