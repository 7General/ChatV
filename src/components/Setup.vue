<template>
  {{ messages }}
  <button @click="changeMsg">改变msg</button>
  <p>通过ref 定义响应式变量</p>
  <h1>模板会自动解析value值</h1>
  <h2>{{ counter }}</h2>
  <button @click="changcounter">改变counter</button>

  <h1>name:{{ obj.name }}</h1>
  <!-- 使用了torefs -->
  <h1>name:{{ child.name }}</h1>
  <h1>name:{{ name }}</h1>
  <button @click="changename">改变name</button>

  <h1>在setup中使用watch监听</h1>
  {{ watcher }}
  <button @click="changewatcher">改变watcher</button>
  {{ user.name }}
  <button @click="changewatchername">改变watchername</button>

  <h1>在setup中使用computed</h1>
  {{ msgcomputed }}
  <button @click="changewatcher">改变watcher</button>
</template>

<script>
import {
  ref,
  reactive,
  toRefs,
  watch,
  watchEffect,
  computed,
  onBeforeMount,
} from "vue";

export default {
  data() {
    return {
      messages: "我是一个setup",
    };
  },
  setup() {
    console.log("setup----setup");
    let msg = "setup----hello";
    console.log(msg);
    function changeMsg() {
      msg = "nihao";
      console.log(msg);
    }

    // 通过ref 定义响应式变量
    const counter = ref(0); //ref()返回带有value属性
    function changcounter() {
      counter.value++;
    }

    // 通过reactive定义响应式应用类型的数据
    const obj = reactive({
      name: "zhangsan",
      age: 18,
      child: {
        name: "liisi",
      },
    });

    function changename() {
      obj.name = "XXxxxxx";
    }
    // watch 使用方法
    const test = ref("wang");
    const watcher = ref(0);
    const user = reactive({
      name: "张三",
      age: "19",
      reverMsg: computed(() => {
        return test.value.split("").reverse().join("");
      }),
    });
    console.log("user.reverMsg>>>>>>" + user.reverMsg);

    function changewatcher() {
      watcher.value++;
    }
    function changewatchername() {
      user.name = "wo ai ni ";
    }
    //watch(监听响应式应用,回调函数)
    watch(watcher, (newValue, oldvale) => {
      console.log("new:" + newValue);
      console.log("old:" + oldvale);
    });
    watch(user, (newValue, oldvale) => {
      console.log("user:new:" + newValue);
      console.log("user:old:" + oldvale);
    });

    // watchEffect (回调函数)!!!注意不需要指定监听属性，组件初始话的时候，会u执行一次，自动收集依赖
    watchEffect(() => {
      console.log(user.name);
    });

    /**
     * watch和watchEffect
     * 1：watchEffect不需要指定监听属性，自动收集依赖，只要在回调用引用到了响应属性，只要发生了变更,回调就会执行
     * 2：watch 只能监听指定的属性，做出回调函数的执行，可以监听多个，vue3开始后
     * 3：watch可以获取到新值和旧值，watchEffect拿不到
     * 4：watchEffect在组件初始化的时候就会自动执行一次，用来收集依赖，watch不需要，一开始就指定了
     *
     */

    // computed
    const msgcomputed = ref("hello word--computed");
    const reversdMsg = computed(() => {
      // 返回一个带有value属性的对象
      return msgcomputed.value.split("").reverse().join("");
    });
    console.log("[]" + reversdMsg.value);

    // 生命周期函数有一个参数，回调函数
    onBeforeMount(() => {
      console.log("=====onBeforeMount");
    });

    // torefs() 使结构后的数据重新获得响应式
    // 通过es6扩展运算符进行结构使得对象中的属性不是响应式的
    return {
      msg,
      changeMsg,
      counter,
      changcounter,
      obj,
      changename,
      ...toRefs(obj),
      watcher,
      user,
      changewatcher,
      changewatchername,
      msgcomputed,
    };
  },
};
</script>
