<template>
  <input type="text" v-model="ChatData.inputValue" />
  <p>{{ ChatData.inputValue }}</p>

  <ul>
    <li v-for="(item, index) in ChatData.list" :key="index">
      {{ item }}
    </li>
  </ul>
  <button @click="addItem">Add</button>
  <button @click="sendChat">ask</button>
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
      list: ["11", "222", "33"],
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
      const eventSource = new EventSource(BASE_URL);
      eventSource.onmessage = (event) =>{
        const json = JSON.parse(event.data);
          const text = json.choices[0].delta?.content;
        console.log("text>>",text);
      }
      console.log("response", response);
    };


    return {
      addItem,
      ChatData,
      sendChat,
    };
  },
};
</script>
  
  
  <style  scoped>
</style>