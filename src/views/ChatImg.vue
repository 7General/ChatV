<template>
  <div class="cons">
    <input class="inp" type="text" v-model="ChatImgData.inputValue" />
    <button class="btn" @click="sendChat">生成图片</button>
  </div>

  <div>
    <div
      class="imgItem"
      v-for="(item, index) in ChatImgData.listImge"
      :key="index"
    >
      <img :src="item.url" />
    </div>
  </div>
</template>
<style scoped>
.cons {
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;

}
.imgItem {
  margin-right: 5px;
  float: left;
}
.imgItem img {
  width: 300px;
}
.inp {
  border: 0px;
  height: 48px;
  width: 200px;
  padding:0 auto;
  margin-right: 20px;
}
.btn {
  border: 0px solid transparent;
  width: 120px;
  height: 50px;
  color: #fff;

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
        n: 4,
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