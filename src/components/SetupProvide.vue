<template>
  <div>SetupProvide</div>
  <setupinject />
  <button @click="changename">改变name </button>
</template>

<script>
import { ref, provide } from "vue";
import setupinject  from "./SetupInject.vue";
export default {
  data() {
    return {
      message: "SetupProvide",
    };
  },
  setup() {
    const name = ref('张三2')
    provide('name',name) 
    // provide('name','张三') 

    function changename(){
        name.value='wanglaoer';
    }
    return {changename}
  },
  components: {
    setupinject,
  },
};
</script>