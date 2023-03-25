<template>
  <div>
    <lastInject></lastInject>
    <h1>child--- title:{{message}}</h1>
    <h1>我是子元素的空间inject</h1>
    
  </div>
</template>

<script>
import lastInject from "./LastInject.vue"
export default {
  data() {
    return {
      message: "inject",
    };
  },
  components: {
    lastInject,
  },
};
</script>
