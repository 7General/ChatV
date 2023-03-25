<template>
  <h1>page页面</h1>
  <button @click="gopage">跳转页面</button>
</template>

<script>
export default {
  setup() {},
  methods: {
    gopage() {
        // this.$router.push('/');
        // 通过传入对象，可以带参数
        // this.$router.push({
        //     path:'/'
        // });
        // this.$router.push({
        //     path:'/user/123' 
        // });

        // this.$router.push({
        //      name:'news',
        //      params:{id:12366666666}
        // })
        // 地址栏显示传值、
        this.$router.push({
            path:'/about',
            query:{
                id:123,
                go:'我唉北京天安门'
            }
        })
        // 可以添加条件判断
    },
  },
};
</script>
