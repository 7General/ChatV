<template>
  <input type="text" v-model="ChatImgData.inputValue" />

  <button @click="sendChat">ask</button>
  <div>
    <div class="imgItem" v-for="(item,index) in ChatImgData.listImge" :key="index">
      <img
        :src="item.url"
      />
    </div>
    <!-- <div class="imgItem">
      <img
        src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-IDkBTIigZSgVus211GzoqSI0/user-DAkv6di4FmGJfYQZpjOtmuB8/img-l3bCmqMFmMdJCNZ5FqJ3MD2q.png?st=2023-03-30T02%3A20%3A17Z&se=2023-03-30T04%3A20%3A17Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-03-29T16%3A28%3A11Z&ske=2023-03-30T16%3A28%3A11Z&sks=b&skv=2021-08-06&sig=QJH/Wmvcmu13zXtrkJt0mra%2BGBGwCGSsPPCoS9taVBE%3D"
        alt=""
      />
    </div> -->
  </div>
</template>
<style scoped>
.imgItem {
  margin-right: 10px;
  float: left;
}
.imgItem img {
  width: 200px;
  height: 200px;
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
      console.log("image");
      const request = <ChatImageItem>{
        prompt: ChatImgData.inputValue,
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