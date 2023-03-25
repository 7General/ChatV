<template>
    我是新闻=={{uid}}
</template>

<script setup>
import { useRoute } from "vue-router";
console.log(useRoute());
console.log(useRoute().params.id);
const uid = useRoute().params.id;
</script>