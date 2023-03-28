<template>
  <div class="chatitem" @click="chatClick">聊天模式</div>
  <div class="chatitem" @click="chatimageClick">图片模式</div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const chatClick = () => {
      router.push({
        path: "/chatt",
      });
    };
    const chatimageClick = () => {
      router.push({
        path: "/chati",
      });
    };
    return {
      chatClick,
      chatimageClick
    };
  },
};
</script>

<style scoped>
.chatitem {
  font-size: 2em;
  border: 1px solid grey;
  padding: 1em;
  margin-bottom: 20px;
}
</style>
