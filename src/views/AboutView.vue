<template>
  <h1>This is an about page 我爱你 你爱我，我也不知道是星期几</h1>
  
  <p>{{ message }}</p>
</template>


<script>
export default {
  data() {
    return {
      message: "",
    };
  },
  mounted() {
    console.log(this.$route.query.go);
    this.message = this.$route.query.go;
  },
};
</script>

<style>
</style>
