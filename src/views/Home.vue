<template>
  welcome home
  <button @click="dddd">ggo</button>
</template>

<script>
import { getCurrentInstance,reactive} from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter()
    const dddd = () => {
      console.log("dddddddddddddddd");
      router.push({
        path: "/about",
      });
    };
    return {
      dddd,
    };
  },
};
</script>
