<template>
  <input type="text" v-model="ChatImgData.inputValue" />

  <button @click="sendChat">ask</button>
  <div>
    <div class="imgItem" v-for="(item,index) in ChatImgData.listImge" :key="index">
      <img
        :src="item.url"
      />
    </div>
  </div>
</template>
<style scoped>
.imgItem {
  margin-right: 5px;
  float: left;
}
.imgItem img {
  width: 300px;
}
</style>

<script lang="ts">
import { reactive } from "vue";
import axios from "axios";
import { ChatInputForm } from "../type/chatInput";
import { ChatImageItem } from "../type/ask";

export default {
  setup() {
    const ChatImgData = reactive<ChatInputForm>({
      inputValue: "",
      apikey: import.meta.env.VITE_API_URL_KEY,
      listImge: [],
    });
    const sendChat = async () => {
      console.log("生成图片中....");
      ChatImgData.listImge = [];
      const request = <ChatImageItem>{
        prompt: ChatImgData.inputValue,
        n:4
      };
      const BASE_URL = "https://api.openai.com/v1/images/generations";
      const response = await axios.post(BASE_URL, request, {
        headers: {
          Authorization: `Bearer ${ChatImgData.apikey}`,
          "Content-Type": "application/json",
        },
      });
      console.log("response", response);
      let resArray = response.data.data;

      ChatImgData.listImge = resArray;
    };
    return {
      ChatImgData,
      sendChat,
    };
  },
};
</script>