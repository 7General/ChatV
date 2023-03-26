<template>
  <h2>404找不到界面了</h2>
  <button @click="appkeyclick">appkey</button>
</template>


<script>
export default {
  data() {},
  methods: {
    // getChildMsg(value) {
    //   const app_key =
    //     import.meta.env.VUE_APP_API_URL || process.env.VUE_APP_API_URL || "";
    //   console.log("getChildMsggetChildMsg-", app_key);
    //   this.chils = value;
    // },
    appkeyclick() {
      const app_key =
        import.meta.env.VUE_APP_API_URL || process.env.VUE_APP_API_URL || "";
      console.log("appkeyclick-1", process.env);
    },
  },
};
</script>