<template>
  <div>
    <h1>last-- title:{{ message }}</h1>
    <h1>百日依山尽，黄河入海流</h1>
   <!-- last-- {{ name }} -->
   last-- {{ obj.message }}
   
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "inject",
    };
  },
//   inject: ["name"],
  inject: ["obj"],
//   inject: ['message'],
};
</script>
