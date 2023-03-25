<template>
  <h1>我是一个uuser</h1>
  {{ uid }}
  {{store.state.msg}}
  <button @click="updaeMsg">changmsg</button>
</template>

<script>
export default {
  props:['id'],
  inject:['store'],
  mounted() {
    // $router 表示当前活跃的路由对象
    console.log(this.$route);
    console.log(this.id);
  },
  setup() {},
  methods:{
    updaeMsg:function(){
      this.store.changeMsg()
    }
  }
};

</script>



// <script setup>
// import { useRoute } from "vue-router";
// console.log(useRoute());
// console.log(useRoute().params.id);
// const uid = useRoute().params.id;
// const props = defineProps({ id: String });
// console.log("--------------------");
// console.log(props.id);
// </script>

