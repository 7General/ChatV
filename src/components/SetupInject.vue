<template>
  <div>SetupInject</div>
  <p>===</p>
  {{name}}
  <p>===</p>
</template>

<script>

import {inject} from 'vue'
export default {
  data() {
    return {
      message: "SetupProvide",
    };
  },
  setup() {
    const name = inject('name')
    return {name}
  },
};
</script>
