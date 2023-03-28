<template>
  <input type="text" v-model="ChatImgData.inputValue" />
  {{ChatImgData.inputValue}}
  <button @click="sendChat">ask</button>
</template>

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
    });
    const sendChat = async () => {
      console.log("image");
      const request = <ChatImageItem> {
        prompt:ChatImgData.inputValue,
      };
      const BASE_URL = "https://api.openai.com/v1/images/generations";
      const response = await axios.post(BASE_URL, request, {
        headers: {
          Authorization: `Bearer ${ChatImgData.apikey}`,
          "Content-Type": "application/json",
        },
      });
      console.log("response", response);
    };
    return {
      ChatImgData,
      sendChat,
    };
  },
};
</script>