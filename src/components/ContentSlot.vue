<template>
  <div>
    <h2>我是ContentSlot</h2>
    <div>
      <!-- 会在没有提供内容的时候被渲染 -->
      <slot name="button"><button>默认按钮</button></slot>
      <slot name="input"></slot>
      <slot name="h2"></slot>
    </div>
    <p>-------</p>
    <slot :list="list" :message="message"></slot>
  </div>
</template>


<script>
export default {
  data() {
    return {
      message: "msg",
      list: [1, 2, 3, 4, 5, 6, 7],
    };
  },
};
</script>
