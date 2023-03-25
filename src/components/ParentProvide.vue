<template>
  <div>
    <childinject></childinject>
    <h1>parent-- title:{{message}}</h1>
    <h1>我是父元素的空间provide</h1>
    <button @click="obj.message='我爱北京天安门'">改变message</button>
    parent--{{obj.message}}
  </div>
</template>

<script>
import childinject from "./ChildInject.vue"
export default {
  data() {
    return {
      message: "provide",
      obj:{
        message:"hello word-------obj"
      }
    };
  },
  components: {
    childinject,
  },
  // provide :{
  //   name:"东小口篮球比赛视频",
  // }
  // 如果想访问组件实例的属性
  // provide/inject 并不是响应式的
  provide(){
    return {
      // name:this.message
      
      obj:this.obj, // 通过响应式对象的方式
      // message:()=>this.message, //通过函数返回响应式数据
    }
  }
};
</script>
