<script setup lang="ts">
import useCounter from "@/store/demoStore";
const counterStore = useCounter();
</script>

<template>
  {{ counterStore.count }}
  <router-view></router-view>
</template>

<style scoped lang="scss">
.demo{
  @include flex();
  background-color: $primaryColor;
}
</style>
