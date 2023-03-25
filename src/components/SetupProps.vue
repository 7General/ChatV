<template>
  <div>
    
    <hellow :message='message' class="box" @injectCounter='injectCounter' ref='content'/>
    <p>--------------setupprops-------</p>
    <h1>setup参数</h1>
    {{ message }}
    <button @click="message='中国中国我最强'">改变message</button>
    <p>--------------setupprops-------</p>
  </div>
</template>

<script>
import hellow from "./SetupHello.vue";
export default {
  data() {
    return {
      message: "setupprops参数",
    };
  },
  setup() {},
  components: {
    hellow,
  },
  mounted(){
    console.log('mountedmountedmountedmountedmounted');
    console.log(this.$refs.content)
    this.$refs.content.senparent();
  },
  methods :{
    injectCounter(value){
        console.log('[][][][][][][][][]');
        console.log(value);
    }
  }
};
</script>
