<template>
  <div class="cons">
    <input class="inp" type="text" v-model="ChatData.inputValue" />
    <button class="btn" @click="sendChat">提问</button>
    <!-- <button class="btn" @click="send">提问2</button> -->
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
import { askResponse } from "../type/askResp";

export default {
  data() {
    return {
      eventSource: null,
    };
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
      ChatData.list!.push(ChatData.inputValue);
      // ChatData.inputValue = "";
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
      // console.log("response", response);
      // console.log("response-data", response.data);
      console.log("========================");
      console.log("response-data-splict", response.data.split("\n\n"));

      let array = <askResponse>{
        list: response.data.split(/\n+/g),
      };

      const list = array.list!.filter((v) => v !== "data: [DONE]" && v);
      const resfilter = list.map((v) => {
        const str = v.replace(/^data:/, "").trim();
        return JSON.parse(str).choices[0].delta?.content;
      });
      const lastes = resfilter.filter((item) => item !== undefined);
      ChatData.list!.push(lastes.join(""));
    };

    const send = () => {
      let usrs =
        'data: {"id":"chatcmpl-6zhh8V8DFQmgDYa9fz52WjnVicFw8","object":"chat.completion.chunk","created":1680163990,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"role":"assistant"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-6zhh8V8DFQmgDYa9fz52WjnVicFw8","object":"chat.completion.chunk","created":1680163990,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":"Sorry"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-6zhh8V8DFQmgDYa9fz52WjnVicFw8","object":"chat.completion.chunk","created":1680163990,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":","},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-6zhh8V8DFQmgDYa9fz52WjnVicFw8","object":"chat.completion.chunk","created":1680163990,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" I"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-6zhh8V8DFQmgDYa9fz52WjnVicFw8","object":"chat.completion.chunk","created":1680163990,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" am"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-6zhh8V8DFQmgDYa9fz52WjnVicFw8","object":"chat.completion.chunk","created":1680163990,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" an"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-6zhh8V8DFQmgDYa9fz52WjnVicFw8","object":"chat.completion.chunk","created":1680163990,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" AI"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-6zhh8V8DFQmgDYa9fz52WjnVicFw8","object":"chat.completion.chunk","created":1680163990,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" language"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-6zhh8V8DFQmgDYa9fz52WjnVicFw8","object":"chat.completion.chunk","created":1680163990,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" model"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-6zhh8V8DFQmgDYa9fz52WjnVicFw8","object":"chat.completion.chunk","created":1680163990,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" and"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-6zhh8V8DFQmgDYa9fz52WjnVicFw8","object":"chat.completion.chunk","created":1680163990,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" I"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-6zhh8V8DFQmgDYa9fz52WjnVicFw8","object":"chat.completion.chunk","created":1680163990,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" do"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-6zhh8V8DFQmgDYa9fz52WjnVicFw8","object":"chat.completion.chunk","created":1680163990,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" not"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-6zhh8V8DFQmgDYa9fz52WjnVicFw8","object":"chat.completion.chunk","created":1680163990,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" understand"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-6zhh8V8DFQmgDYa9fz52WjnVicFw8","object":"chat.completion.chunk","created":1680163990,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" the"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-6zhh8V8DFQmgDYa9fz52WjnVicFw8","object":"chat.completion.chunk","created":1680163990,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" context"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-6zhh8V8DFQmgDYa9fz52WjnVicFw8","object":"chat.completion.chunk","created":1680163990,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" of"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-6zhh8V8DFQmgDYa9fz52WjnVicFw8","object":"chat.completion.chunk","created":1680163990,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" your"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-6zhh8V8DFQmgDYa9fz52WjnVicFw8","object":"chat.completion.chunk","created":1680163990,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" question"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-6zhh8V8DFQmgDYa9fz52WjnVicFw8","object":"chat.completion.chunk","created":1680163990,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":"."},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-6zhh8V8DFQmgDYa9fz52WjnVicFw8","object":"chat.completion.chunk","created":1680163990,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" Can"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-6zhh8V8DFQmgDYa9fz52WjnVicFw8","object":"chat.completion.chunk","created":1680163990,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" you"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-6zhh8V8DFQmgDYa9fz52WjnVicFw8","object":"chat.completion.chunk","created":1680163990,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" please"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-6zhh8V8DFQmgDYa9fz52WjnVicFw8","object":"chat.completion.chunk","created":1680163990,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" provide"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-6zhh8V8DFQmgDYa9fz52WjnVicFw8","object":"chat.completion.chunk","created":1680163990,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" more"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-6zhh8V8DFQmgDYa9fz52WjnVicFw8","object":"chat.completion.chunk","created":1680163990,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" information"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-6zhh8V8DFQmgDYa9fz52WjnVicFw8","object":"chat.completion.chunk","created":1680163990,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" or"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-6zhh8V8DFQmgDYa9fz52WjnVicFw8","object":"chat.completion.chunk","created":1680163990,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" clarify"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-6zhh8V8DFQmgDYa9fz52WjnVicFw8","object":"chat.completion.chunk","created":1680163990,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" your"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-6zhh8V8DFQmgDYa9fz52WjnVicFw8","object":"chat.completion.chunk","created":1680163990,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" question"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-6zhh8V8DFQmgDYa9fz52WjnVicFw8","object":"chat.completion.chunk","created":1680163990,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":"?"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-6zhh8V8DFQmgDYa9fz52WjnVicFw8","object":"chat.completion.chunk","created":1680163990,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{},"index":0,"finish_reason":"stop"}]}\n\n';

      let array = <askResponse>{
        list: usrs.split("\n\n"),
      };

      const list = array.list!.filter((v) => v !== "data: [DONE]" && v);
      const res = list.map((v) => {
        const str = v.replace(/^data:/, "").trim();
        return JSON.parse(str).choices[0].delta?.content;
      });
      const lastes = res.filter((item) => item !== undefined);
      console.log("===================,", lastes);
      console.log("===================,", lastes.join(","));
    };

    return {
      addItem,
      ChatData,
      sendChat,
      send,
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
  padding: 0 auto;
  margin-right: 20px;
}
.btn {
  border: 0px solid transparent;
  width: 120px;
  height: 50px;
  color: #fff;
}
</style>