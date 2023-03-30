<template>
  <div class="cons">
    <input class="inp" type="text" v-model="ChatData.inputValue" />
    <button class="btn" @click="sendChat">提问</button>
    <button class="btn" @click="trans">提问2</button>
  </div>
  
  <ul>
    <li v-for="(item, index) in ChatData.list" :key="index">
      {{ item }}
    </li>
  </ul>
</template>
  
  <script lang="ts">
import { reactive } from "vue";
import axios from "axios";
import { ChatInputForm } from "../type/chatInput";
import { ChatAskItem, ChatAskMessage } from "../type/ask";

import  parse  from 'eventsource-parser';
export default {
  data(){
    return {
      eventSource: null
    }
  },
  setup() {
    const ChatData = reactive<ChatInputForm>({
      inputValue: "",
      list: [],
      apikey: import.meta.env.VITE_API_URL_KEY,
    });
    const addItem = () => {
      ChatData.list!.push(ChatData.inputValue);
      ChatData.inputValue = "";
    };
    const sendChat = async () => {
      const msg = <ChatAskMessage>{
        role: "user",
        content: ChatData.inputValue,
      };
      const requestPayload = <ChatAskItem>{
        model: "gpt-3.5-turbo",
        temperature: 0.6,
        messages: [msg],
        stream: true,
      };
      const BASE_URL = "https://api.openai.com/v1/chat/completions";
      const response = await axios.post(BASE_URL, requestPayload, {
        headers: {
          Authorization: `Bearer ${ChatData.apikey}`,
          "Content-Type": "application/json",
        },
      });
      console.log("response", response);
      console.log("response-data", response.data);
      console.log("response-data-splict", response.data.split("\n\n"));

      
    };

    const send=()=>{

    }


    return {
      addItem,
      ChatData,
      sendChat,
    };
  },
};
</script>
  
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