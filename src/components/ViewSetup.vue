<template>
  <h1>vue3页面语法糖</h1>
  {{ a }}
  <hello :message='msg'/>
  {{counter}}
  <button @click="adds">改变世界</button>
</template>

<script setup>
// 顶层的绑定会被暴露给模板
//  定义响应式变量，还是需要从vue中引入


import {ref} from 'vue'
// 引入组件，不主要注册
import hello from './Hello.vue'
// 定义变量在模板使用不需要暴露，模板直接使用
const a = 20;
const msg='我爱你，你爱我'


const counter = ref(0)
function adds(){
    counter.value++
}
</script>
