<template>
  <input type="text" v-model="ChatImgData.inputValue" />
  <button @click="sendChat">ask</button>
</template>

<script lang="ts">
import { reactive } from "vue";
import axios from "axios";
import { ChatInputForm } from "../type/chatInput";

export default {
  setup() {
    const ChatImgData = reactive<ChatInputForm>({
      inputValue: "",
      apikey: import.meta.env.VITE_API_URL_KEY,
    });
    const sendChat = async () => {
      console.log("image");
    };
    return {
      ChatImgData,
      sendChat,
    };
  },
};
</script>