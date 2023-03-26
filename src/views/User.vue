<template>
  <h1>我是一个uuser-{{ baseurl }}</h1>
  --{{ baseurlupdload }}--
  {{ uid }}
  {{ store.state.msg }}

  <button @click="updaeMsg">changmsg</button>
  <button @click="sendChat">send</button>
  <div v-for="(item, index) in chatSay" :key="index">
    {{ item }}
  </div>
  123
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      baseurl: "https",
      baseurlupdload: import.meta.env.VITE_API_URL_KEY,
      chatSay: [],
    };
  },
  props: ["id"],
  inject: ["store"],
  mounted() {
    // $router 表示当前活跃的路由对象
    console.log(this.$route);
    console.log(this.id);
  },
  setup() {},
  methods: {
    updaeMsg: function () {
      this.store.changeMsg();
    },
    sendChat: async function () {
      console.log("sendChatsendChatsendChat")
      const requestPayload = {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: "please say Hello!" }],
        temperature: 0.6,
        stream: true,
      };
      const BASE_URL = "https://api.openai.com/v1/chat/completions";
      console.log('-----',`Bearer ${this.baseurlupdload}`)
      const response = await axios.post(BASE_URL, requestPayload, {
        headers: {
          Authorization: `Bearer ${this.baseurlupdload}`,
          "Content-Type": "application/json",
        },
      });
      let res = response.data.choices[0].text.trim();
      console.log("response", res);
      this.chatSay.push(res);
      console.log("response", this.chatSay);
    },
  },
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

import { processExpression } from "@vue/compiler-core";

//
</script>

